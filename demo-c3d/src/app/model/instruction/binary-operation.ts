import { Instruction } from "src/app/model/instruction/instruction";
import { OperationType } from "src/app/model/instruction/operation-type";
import { Visitor } from "src/app/model/visitor/visitor";

export class BinaryOperation extends Instruction {
  type: OperationType;
  leftOperator: Instruction;
  rightOperator: Instruction;

  constructor(
    line: number,
    column: number,
    type: OperationType,
    leftOperator: Instruction,
    rightOperator: Instruction
  ) {
    super(line, column);
    this.type = type;
    this.leftOperator = leftOperator;
    this.rightOperator = rightOperator;
  }

  accept(v: Visitor): any {
    return v.visitBinaryOperation(this);
  }
}
