import { Assignment } from 'src/app/model/instruction/assignment';
import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Declaration } from 'src/app/model/instruction/declaration';
import { IfInstruction, TypeIf } from 'src/app/model/instruction/if';
import { OperationType } from 'src/app/model/instruction/operation-type';
import { Print } from 'src/app/model/instruction/print';
import { Program } from 'src/app/model/instruction/program';
import { Value, ValueType } from 'src/app/model/instruction/value';
import { VoidMain } from 'src/app/model/instruction/void-main';
import { While } from 'src/app/model/instruction/while';
import { QuadHandler } from 'src/app/model/QuadHandler';
import { QuadOperation, Quadruple } from 'src/app/model/quadruple';
import { Visitor } from 'src/app/model/visitor/visitor';

export class QuadGeneratorVisitor extends Visitor {

  private qh: QuadHandler;
  private readonly POINTER: string = 'ptr';

  public constructor(qh: QuadHandler) {
    super();
    this.qh = qh;
  }

  visitAssignment(i: Assignment): any {
    const result: Quadruple | undefined = i.operation.accept(this);
    if (result) {
      // TODO: check type of operation in case of any logic operation
      if (i.operation instanceof BinaryOperation) {
        switch (i.operation.type) {
          case OperationType.GREATER_EQ:
          case OperationType.GREATER:
          case OperationType.LESS_EQ:
          case OperationType.LESS:
          case OperationType.EQEQ:
          case OperationType.NEQ:
          case OperationType.AND:
          case OperationType.OR:

            const labelTrue = this.qh.labelTrue ? this.qh.labelTrue : this.qh.label;
            const labelFalse = this.qh.labelFalse ? this.qh.labelFalse : this.qh.label;
            const labelFinal = this.qh.label;

            this.qh.labelTrue = undefined;
            this.qh.labelFalse = undefined;

            this.qh.toTrue(labelTrue);
            this.qh.toFalse(labelFalse);

            const variable = this.qh.peek().getById(i.id);
            if (variable) {
              // true
              this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelTrue, '', ''));
              const tmpTrue = this.qh.tmpVar;
              this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmpTrue));
              this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, '1', '', `stack[${tmpTrue}]`));// asignar 1 - true
              this.qh.quads.push(new Quadruple(QuadOperation.GOTO, '', '', labelFinal));

              // false
              this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelFalse, '', ''));
              const tmpFalse = this.qh.tmpVar;
              this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmpFalse));
              this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, '0', '', `stack[${tmpFalse}]`));// asignar 0 - false

              // label final
              this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelFinal, '', ''));
            }
            return;
          default:
          // do nothing
        }
      }

      /* value or binary operation */
      const variable = this.qh.peek().getById(i.id);
      if (variable) {
        const tmp0 = this.qh.tmpVar;
        this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmp0));
        this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, result.result, '', `stack[${tmp0}]`));
      }
    }
  }

  visitBinaryOperation(i: BinaryOperation): Quadruple | undefined {
    if (i.leftOperator && i.rightOperator) {
      const left: Quadruple | undefined = i.leftOperator.accept(this);
      const right: Quadruple | undefined = i.rightOperator.accept(this);
      const tmp = this.qh.tmpVar;
      let type!: QuadOperation | undefined;

      if (left && right) {
        switch (i.type) {
          case OperationType.PLUS:
            type = QuadOperation.PLUS;
            break;
          case OperationType.MINUS:
            type = QuadOperation.MINUS;
            break;
          case OperationType.TIMES:
            type = QuadOperation.TIMES;
            break;
          case OperationType.DIVIDE:
            type = QuadOperation.DIVIDE;
            break;

          // implement relational operations
          case OperationType.GREATER:
            return this.logicQuad(QuadOperation.IF_GREATER, left, right);
          case OperationType.GREATER_EQ:
            return this.logicQuad(QuadOperation.IF_GREATER_EQ, left, right);
          case OperationType.LESS:
            return this.logicQuad(QuadOperation.IF_LESS, left, right);
          case OperationType.LESS_EQ:
            return this.logicQuad(QuadOperation.IF_LESS_EQ, left, right);
          case OperationType.EQEQ:
            return this.logicQuad(QuadOperation.EQEQ, left, right);
          case OperationType.NEQ:
            return this.logicQuad(QuadOperation.NEQ, left, right);

          // TODO: implement logic operations
          case OperationType.AND:
            /* left */
            // TODO: check the type of operation of left
            const lefAndTrue = new Quadruple(QuadOperation.IF_GREATER, left.result, '0', '');
            const leftAndGotoFalse = new Quadruple(QuadOperation.GOTO, '', '', '');
            this.qh.addTrue(lefAndTrue); /* in case of true */
            this.qh.addFalse(leftAndGotoFalse);/* in case of false */

            // add quadruples
            this.qh.quads.push(lefAndTrue);
            this.qh.quads.push(leftAndGotoFalse);

            // in case of true
            const labelAndTrue = this.qh.labelTrue ? this.qh.labelTrue : this.qh.label;
            this.qh.toTrue(labelAndTrue);
            this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelAndTrue, '', ''));
            this.qh.labelTrue = undefined;

            // in case of false
            this.qh.labelFalse = this.qh.labelFalse ? this.qh.labelFalse : this.qh.label;
            this.qh.toFalse(this.qh.labelFalse);

            /* right */
            // TODO: check the type of operation of right
            const rightAndTrue = new Quadruple(QuadOperation.IF_GREATER, right.result, '0', '');
            const rightAndGotoFalse = new Quadruple(QuadOperation.GOTO, '', '', '');

            this.qh.addTrue(rightAndTrue);
            this.qh.addFalse(rightAndGotoFalse);

            // add quadruples
            this.qh.quads.push(rightAndTrue);
            this.qh.quads.push(rightAndGotoFalse);
            return;
          case OperationType.OR:
            /* left */
            // TODO: check the type of operation of left
            const leftOrTrue = new Quadruple(QuadOperation.IF_GREATER, left.result, '0', '');
            const leftOrGotoFalse = new Quadruple(QuadOperation.GOTO, '', '', '');

            this.qh.addTrue(leftOrTrue);
            this.qh.addFalse(leftOrGotoFalse);

            // add quadruples
            this.qh.quads.push(leftOrTrue);
            this.qh.quads.push(leftOrGotoFalse);

            // in case of false
            const labelOrFalse = this.qh.labelFalse ? this.qh.labelFalse : this.qh.label;
            this.qh.toFalse(labelOrFalse);
            this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelOrFalse, '', ''));
            this.qh.labelFalse = undefined;

            // in case of true
            const labelOrTrue = this.qh.labelTrue ? this.qh.labelTrue : this.qh.label;
            this.qh.toTrue(labelOrTrue);

            /* right */
            // TODO: check the type of operation of right
            const rightOrTrue = new Quadruple(QuadOperation.IF_GREATER, right.result, '0', '');
            const rightOrGotoFalse = new Quadruple(QuadOperation.GOTO, '', '', '');

            this.qh.addTrue(rightOrTrue);
            this.qh.addFalse(rightOrGotoFalse);

            // add quadruples
            this.qh.quads.push(rightOrTrue);
            this.qh.quads.push(rightOrGotoFalse);
            return;
        }

        if (type != undefined) {
          const quad = new Quadruple(type, left.result, right.result, tmp);
          this.qh.quads.push(quad);
          return quad;
        }
      }
    }

    return undefined;
  }

  private logicQuad(type: QuadOperation, left: Quadruple, right: Quadruple): Quadruple {
    const quadTrue = new Quadruple(type, left.result, right.result, '');
    const goToFalse = new Quadruple(QuadOperation.GOTO, '', '', '');

    this.qh.addTrue(quadTrue);
    this.qh.addFalse(goToFalse);

    this.qh.quads.push(quadTrue);
    this.qh.quads.push(goToFalse);

    return quadTrue;
  }

  visitDeclaration(i: Declaration): any {
    const result: Quadruple | undefined = i.operation.accept(this);
    if (result) {
      // TODO: check type of operation in case of any logic operation
      if (i.operation instanceof BinaryOperation) {
        switch (i.operation.type) {
          case OperationType.GREATER_EQ:
          case OperationType.GREATER:
          case OperationType.LESS_EQ:
          case OperationType.LESS:
          case OperationType.EQEQ:
          case OperationType.NEQ:
          case OperationType.AND:
          case OperationType.OR:

            const labelTrue = this.qh.labelTrue ? this.qh.labelTrue : this.qh.label;
            const labelFalse = this.qh.labelFalse ? this.qh.labelFalse : this.qh.label;
            const labelFinal = this.qh.label;

            this.qh.labelTrue = undefined;
            this.qh.labelFalse = undefined;

            this.qh.toTrue(labelTrue);
            this.qh.toFalse(labelFalse);

            const variable = this.qh.peek().getById(i.id);
            if (variable) {
              // true
              this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelTrue, '', ''));
              const tmpTrue = this.qh.tmpVar;
              this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmpTrue));
              this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, '1', '', `stack[${tmpTrue}]`));// asignar 1 - true
              this.qh.quads.push(new Quadruple(QuadOperation.GOTO, '', '', labelFinal));

              // false
              this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelFalse, '', ''));
              const tmpFalse = this.qh.tmpVar;
              this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmpFalse));
              this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, '0', '', `stack[${tmpFalse}]`));// asignar 0 - false

              // label final
              this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelFinal, '', ''));
            }
            return;
          default:
          // do nothing
        }
      }

      /* value or binary operation */
      const variable = this.qh.peek().getById(i.id);
      if (variable) {
        const tmp0 = this.qh.tmpVar;
        this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmp0));
        this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, result.result, '', `stack[${tmp0}]`));
      }
    }
  }

  visitPrint(i: Print): any {
    const quad: Quadruple | undefined = i.instruction.accept(this);
    if (quad) {
      this.qh.quads.push(new Quadruple(QuadOperation.PRINTLN, quad.result, '', ''));
    }
  }

  visitProgram(i: Program): any {
    this.qh.push();
    i.declarations.forEach(declaration => declaration.accept(this));
    i.voidMain.accept(this);
    this.qh.pop();
  }

  visitValue(i: Value): Quadruple | undefined {
    if (i.type == ValueType.INTEGER)
      return new Quadruple(QuadOperation.INTEGER, '', '', `${Number(i.value)}`);
    if (i.type == ValueType.ID) {
      const value = this.qh.peek().getById(`${i.value}`);
      if (!value) return;

      const tmp = this.qh.tmpVar;
      const tmp2 = this.qh.tmpVar;

      this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${value.pos}`, tmp));
      const dest = new Quadruple(QuadOperation.TMP_ASSIGMENT, `stack[${tmp}]`, '', tmp2);
      this.qh.quads.push(dest);

      return dest;
    }

    return undefined;
  }

  visitVoidMain(i: VoidMain): any {
    this.qh.push();
    i.instructions.forEach(instruction => instruction.accept(this));
    this.qh.pop();
  }

  visitWhile(i: While): any {
    // TODO: implement
  }

  visitIfInstruction(i: IfInstruction): any {
    const finalLabel = this.qh.label;
    const ifInstructions = [i._if, ...i._elseIfList];
    if (i._else) ifInstructions.push(i._else);

    for (const ifInstruction of ifInstructions) {
      this.qh.push();

      let labelTrue: string | undefined = undefined;
      let labelFalse: string | undefined = undefined;

      const condition = ifInstruction.condition;
      if (condition && condition instanceof  BinaryOperation) {
        const quad: Quadruple | undefined = condition.accept(this);
        // if (!quad) return;

        labelTrue = this.qh.labelTrue ? this.qh.labelTrue : this.qh.label;
        labelFalse = this.qh.labelFalse ? this.qh.labelFalse : this.qh.label;

        this.qh.labelTrue = undefined;
        this.qh.labelFalse = undefined;
        switch (condition.type) {
          case OperationType.GREATER_EQ:
          case OperationType.GREATER:
          case OperationType.LESS_EQ:
          case OperationType.LESS:
          case OperationType.EQEQ:
          case OperationType.NEQ:
          case OperationType.AND:
          case OperationType.OR:
            this.qh.toTrue(labelTrue);
            this.qh.toFalse(labelFalse);
            this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelTrue, '', ''));
            break;
        }

        for (const instructions of ifInstruction.instructions) {
          instructions.accept(this);
        }
        // to final label
        this.qh.quads.push(new Quadruple(QuadOperation.GOTO, '', '', finalLabel));

        // label false
        if (labelFalse) {
          // TODO: check, if the condition.type is OperationType.NOT
          this.qh.quads.push(new Quadruple(QuadOperation.LABEL, labelFalse, '', ''));
        }
      }

      this.qh.pop();
    }

    this.qh.quads.push(new Quadruple(QuadOperation.LABEL, finalLabel, '', ''));
  }
}
