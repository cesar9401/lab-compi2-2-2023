import { Instruction } from "src/app/model/instruction/instruction";
import { Visitor } from "src/app/model/visitor/visitor";

export class Value extends Instruction {
  value: any;
  type: ValueType

  constructor(
    line: number,
    column: number,
    value: any,
    type: ValueType
  ) {
    super(line, column);
    this.value = value;
    this.type = type;
  }

  accept(v: Visitor): any {
    return v.visitValue(this);
  }
}

export enum ValueType {
  INTEGER,
  DECIMAL,
  ID
}
