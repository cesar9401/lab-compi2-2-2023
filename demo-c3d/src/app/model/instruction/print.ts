import { Instruction } from "src/app/model/instruction/instruction";
import { Visitor } from "src/app/model/visitor/visitor";

export class Print extends Instruction {
  instruction: Instruction;

  constructor(
    line: number,
    column: number,
    instruction: Instruction
  ) {
    super(line, column);
    this.instruction = instruction;
  }

  accept(v: Visitor): any {
    return v.visitPrint(this);
  }
}
