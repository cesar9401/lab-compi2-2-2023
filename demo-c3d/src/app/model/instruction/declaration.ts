import { Instruction } from "src/app/model/instruction/instruction";
import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Variable, VariableType } from "src/app/model/instruction/variable";
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

  run(table: SymbolTable) {
    const variable = table.contains(this.id);
    if (variable) {
      throw new Error("la variable a declarar ya existe");
    }

    const operation: Variable | undefined = this.operation.run(table);
    if (!operation || operation.value == undefined) {
      throw new Error("error, la operacion no tiene valor");
    }

    // TODO: que el tipo de la variable declarada coincida con el tipo de la operacion
    let val1 = new Variable();
    Object.assign(val1, operation);
    val1.id = this.id;
    table.add(val1);
  }

  accept(v: Visitor): any {
    return v.visitDeclaration(this);
  }
}
