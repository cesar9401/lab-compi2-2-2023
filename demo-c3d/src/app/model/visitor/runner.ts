import { Assignment } from "src/app/model/instruction/assignment";
import { BinaryOperation } from "src/app/model/instruction/binary-operation";
import { Declaration } from "src/app/model/instruction/declaration";
import { Print } from "src/app/model/instruction/print";
import { Program } from 'src/app/model/instruction/program';
import { SymbolTable } from "src/app/model/instruction/symbol-table";
import { Value } from "src/app/model/instruction/value";
import { Variable } from "src/app/model/instruction/variable";
import { VoidMain } from 'src/app/model/instruction/void-main';
import { While } from "src/app/model/instruction/while";
import { Visitor } from "src/app/model/visitor/visitor";

export class Runner extends Visitor {

  table!: SymbolTable;
  set symbolTable(table: SymbolTable) {
    this.table = table;
  }

  visitAssignment(i: Assignment): any {
    console.log(i.constructor.name, 'Runner');
  }

  visitBinaryOperation(i: BinaryOperation): any {
    console.log(i.constructor.name, 'Runner');
  }

  visitDeclaration(i: Declaration): any {
    console.log(i.constructor.name, 'Runner');
  }

  visitPrint(i: Print): any {
    console.log(i.constructor.name, 'Runner');
  }

  visitValue(i: Value): any {
    console.log(i.constructor.name, 'Runner');
  }

  visitWhile(i: While): any {
    console.log(i.constructor.name, 'Runner');
  }

  visitProgram(i: Program): any {
  }

  visitVoidMain(i: VoidMain): any {
  }
}
