import { Instruction } from "src/app/model/instruction/instruction";
import { Visitor } from "src/app/model/visitor/visitor";

export class While extends Instruction {
  operation: Instruction;
  instructions: Instruction[]

  constructor(
    line: number,
    column: number,
    operation: Instruction,
    instructions: Instruction[]
  ) {
    super(line, column);
    this.operation = operation;
    this.instructions = instructions;
  }

  accept(v: Visitor): any {
    return v.visitWhile(this);
  }
}
