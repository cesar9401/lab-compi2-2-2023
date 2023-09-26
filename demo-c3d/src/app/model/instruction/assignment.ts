import { Instruction } from "src/app/model/instruction/instruction";
import { Visitor } from "src/app/model/visitor/visitor";

export class Assignment extends Instruction {
  id: string;
  operation: Instruction;

  constructor(
    line: number,
    column: number,
    id: string,
    operation: Instruction
  ) {
    super(line, column);
    this.id = id;
    this.operation = operation;
  }

  accept(v: Visitor): any {
    return v.visitAssignment(this);
  }
}
