import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Instruction } from "src/app/model/instruction/instruction";
import { Value } from 'src/app/model/instruction/value';
import { Visitor } from "src/app/model/visitor/visitor";

export class Assignment extends Instruction {
  id: string;
  operation: BinaryOperation | Value;

  constructor(
    line: number,
    column: number,
    id: string,
    operation: BinaryOperation | Value
  ) {
    super(line, column);
    this.id = id;
    this.operation = operation;
  }

  accept(v: Visitor): any {
    return v.visitAssignment(this);
  }
}
