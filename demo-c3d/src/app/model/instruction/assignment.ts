import { Instruction } from "src/app/model/instruction/instruction";
import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Variable, VariableType } from "src/app/model/instruction/variable";
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

  run(table: SymbolTable) {
    const variable1 = table.getById(this.id);
    if (!variable1) {
      throw new Error("variable no definida");
    }

    const variable: Variable | undefined = this.operation.run(table);
    if (!variable) {
      throw new Error("Algo salio mal en la operacion");
    }

    // TODO: verificar tipos

    if (variable1.type == VariableType.DOUBLE) {
      variable1.value = variable.value;
    } else {
      variable1.value = Math.floor(variable.value)
    }
  }

  accept(v: Visitor): any {
    return v.visitAssignment(this);
  }
}
