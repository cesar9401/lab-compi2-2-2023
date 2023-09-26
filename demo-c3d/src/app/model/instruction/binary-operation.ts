import { Instruction } from "src/app/model/instruction/instruction";
import { OperationType } from "src/app/model/instruction/operation-type";
import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Variable, VariableType } from "src/app/model/instruction/variable";
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

  run(table: SymbolTable): Variable | undefined {
    const left: Variable | undefined = this.leftOperator.run(table);
    const right: Variable | undefined = this.rightOperator.run(table);

    // TODO: definir el tipo de la variable a devolver

    let variable = new Variable();
    if (left && right) {

      const type = left.type === VariableType.DOUBLE || right.type === VariableType.DOUBLE
        ? VariableType.DOUBLE
        : VariableType.INTEGER;

      variable.type = type;
      switch (this.type) {
        case OperationType.PLUS:
          variable.value = Number(left.value) + Number(right.value);
          return variable;
        case OperationType.MINUS:
          variable.value = Number(left.value) - Number(right.value);
          return variable;
        case OperationType.DIVIDE:
          variable.value = Number(left.value) / Number(right.value);
          variable.type = VariableType.DOUBLE;
          return variable;
        case OperationType.TIMES:
          variable.value = Number(left.value) * Number(right.value);
          return variable;
        case OperationType.EQEQ:
          variable.value = Number(left.value) == Number(right.value);
          variable.type = VariableType.BOOLEAN;
          return variable;
        case OperationType.NEQ:
          variable.value = Number(left.value) != Number(right.value);
          variable.type = VariableType.BOOLEAN;
          return variable;
        case OperationType.GREATER:
          variable.value = Number(left.value) > Number(right.value);
          variable.type = VariableType.BOOLEAN;
          return variable;
        case OperationType.LESS:
          variable.value = Number(left.value) < Number(right.value);
          variable.type = VariableType.BOOLEAN;
          return variable;
        case OperationType.AND:
          // TODO: comprobar que right y left sean de tipo boolean
          variable.value = Boolean(left.value) && Boolean(right.value);
          variable.type = VariableType.BOOLEAN;
          return variable;
        case OperationType.OR:
          // TODO: comprobar que right y left sean de tipo boolean
          variable.value = Boolean(left.value) || Boolean(right.value);
          variable.type = VariableType.BOOLEAN;
          return variable;
      }
    }
    throw new Error("Error en alguna operación");
  }

  accept(v: Visitor): any {
    return v.visitBinaryOperation(this);
  }
}
