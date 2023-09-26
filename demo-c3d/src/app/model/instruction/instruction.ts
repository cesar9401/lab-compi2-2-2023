import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Visitor } from "src/app/model/visitor/visitor";

export abstract class Instruction {
  line: number;
  column: number;

  constructor(line: number, column: number) {
    this.line = line;
    this.column = column;
  }

  abstract run(table: SymbolTable): any;

  abstract accept(v: Visitor): any;
}
