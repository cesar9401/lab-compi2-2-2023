import { Assignment } from 'src/app/model/instruction/assignment';
import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Declaration } from 'src/app/model/instruction/declaration';
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
  }

  visitBinaryOperation(i: BinaryOperation): any {
  }

  visitDeclaration(i: Declaration): any {
  }

  visitPrint(i: Print): any {
  }

  visitProgram(i: Program): any {
  }

  visitValue(i: Value): any {
    if (i.type == ValueType.INTEGER)
      return new Quadruple(QuadOperation.ID, '', '', `${Number(i.value)}`);
    if (i.type == ValueType.ID) {
      const value = this.qh.peek().getById(`${i.value}`);
      if (!value || value.pos) return;

      const tmp = this.qh.tmpVar;
      const tmp2 = this.qh.tmpVar;

      this.qh.quads.push(new Quadruple(QuadOperation.PLUS, this.POINTER, `${value.pos}`, tmp));
      const dest = new Quadruple(QuadOperation.ASSIGMENT, `stack[${tmp}]`, '', tmp2);
      this.qh.quads.push(dest);

      return dest;
    }

    return;
  }

  visitVoidMain(i: VoidMain): any {
  }

  visitWhile(i: While): any {
  }
}
