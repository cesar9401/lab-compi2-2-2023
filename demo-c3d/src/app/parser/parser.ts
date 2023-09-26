import { Assignment } from "src/app/model/instruction/assignment";
import { BinaryOperation } from "src/app/model/instruction/binary-operation";
import { Declaration } from "src/app/model/instruction/declaration";
import { Instruction } from "src/app/model/instruction/instruction";
import { OperationType } from "src/app/model/instruction/operation-type";
import { Print } from "src/app/model/instruction/print";
import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Value, ValueType } from "src/app/model/instruction/value";
import { Variable, VariableType } from "src/app/model/instruction/variable";
import { While } from "src/app/model/instruction/while";
import { Runner } from "src/app/model/visitor/runner";
import { Runner2 } from "src/app/model/visitor/runner2";

declare var parser: any;

export class Parser {
  private instructions: Instruction[] = [];
  private source: string;

  constructor(source: string) {
    this.source = source;
    parser.yy.While = While;
    parser.yy.Print = Print;
    parser.yy.Assignment = Assignment;
    parser.yy.Declaration = Declaration;
    parser.yy.BinaryOperation = BinaryOperation;
    parser.yy.Variable = Variable;
    parser.yy.SymbolTable = SymbolTable;
    parser.yy.VariableType = VariableType;
    parser.yy.OperationType = OperationType;
    parser.yy.Value = Value;
    parser.yy.ValueType = ValueType;
  }

  parse() {
    try {
      this.instructions = parser.parse(this.source);
      const table = new SymbolTable();

      const runner = new Runner();
      const runner2 = new Runner2();
      runner.symbolTable = table;

      this.instructions.forEach(i => {
        // i.run(table);
        i.accept(runner);
      });
    } catch(error) {
      console.error(error);
    }
  }
}
