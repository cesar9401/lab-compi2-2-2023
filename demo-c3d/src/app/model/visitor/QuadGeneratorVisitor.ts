import { Assignment } from 'src/app/model/instruction/assignment';
import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Declaration } from 'src/app/model/instruction/declaration';
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
      const variable = this.qh.peek().getById(i.id);
      if (variable) {
        const tmp0 = this.qh.tmpVar;
        this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${variable.pos}`, tmp0))
        this.qh.quads.push(new Quadruple(QuadOperation.ASSIGMENT, result.result, '', `stack[${tmp0}]`));
      }
    }

    return undefined;
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

          // TODO: implement logic operations
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

  visitDeclaration(i: Declaration): any {
    const result: Quadruple | undefined = i.operation.accept(this);
    if (result) {
      // TODO: check type of operation in case of any logic operation
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
}
