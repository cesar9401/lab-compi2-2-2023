import { Instruction } from "src/app/model/instruction/instruction";
import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Variable } from "src/app/model/instruction/variable";
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

  run(table: SymbolTable) {
    const variable: Variable | undefined = this.instruction.run(table);
    if (!variable || variable.value == undefined) {
      throw new Error("la variable no tiene valor");
    }

    console.log(variable.value);
  }

  accept(v: Visitor): any {
    return v.visitPrint(this);
  }
}
