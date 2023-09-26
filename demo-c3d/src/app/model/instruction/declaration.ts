import { Instruction } from "src/app/model/instruction/instruction";
import { VariableType } from "src/app/model/instruction/variable";
import { Visitor } from "src/app/model/visitor/visitor";

export class Declaration extends Instruction {
  type: VariableType;
  id: string;
  operation: Instruction;

  constructor(
    line: number,
    column: number,
    type: VariableType,
    id: string,
    operation: Instruction
  ) {
    super(line, column);
    this.type = type;
    this.id = id;
    this.operation = operation;
  }

  accept(v: Visitor): any {
    return v.visitDeclaration(this);
  }
}
