import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Instruction } from "src/app/model/instruction/instruction";
import { Value } from 'src/app/model/instruction/value';
import { Visitor } from "src/app/model/visitor/visitor";

export class Print extends Instruction {
  instruction: BinaryOperation | Value;

  constructor(
    line: number,
    column: number,
    instruction: BinaryOperation | Value
  ) {
    super(line, column);
    this.instruction = instruction;
  }

  accept(v: Visitor): any {
    return v.visitPrint(this);
  }
}
