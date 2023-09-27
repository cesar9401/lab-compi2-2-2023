import { Assignment } from 'src/app/model/instruction/assignment';
import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Declaration } from 'src/app/model/instruction/declaration';
import { Print } from 'src/app/model/instruction/print';
import { Program } from 'src/app/model/instruction/program';
import { SymbolTable } from 'src/app/model/instruction/symbol-table';
import { Value } from 'src/app/model/instruction/value';
import { Variable, VariableType } from 'src/app/model/instruction/variable';
import { VoidMain } from 'src/app/model/instruction/void-main';
import { While } from 'src/app/model/instruction/while';
import { Visitor } from 'src/app/model/visitor/visitor';

export class SymbolTableVisitor extends Visitor {

  private _tables: SymbolTable[] = [];
  private curTable!: SymbolTable;

  visitAssignment(i: Assignment): any {
    // TODO: implement
  }

  visitBinaryOperation(i: BinaryOperation): any {
    // TODO: implement
  }

  visitDeclaration(i: Declaration): any {
    // TODO: check if the variable or id already exists
    const variable = new Variable();
    variable.id = i.id;
    variable.type = VariableType.INTEGER;
    this.curTable.add(variable);
  }

  visitPrint(i: Print): any {
    // TODO: implement
  }

  visitProgram(i: Program): any {
    const global = new SymbolTable('global');
    this.curTable = global;

    this._tables.push(global);
    i.declarations.forEach(instruction => instruction.accept(this));
    i.voidMain.accept(this);
  }

  visitValue(i: Value): any {
    // TODO: implement
  }

  visitVoidMain(i: VoidMain): any {
    // create new table
    const cur = this.curTable;
    const mainTable = new SymbolTable('void-main', cur);
    this.curTable = mainTable;

    this._tables.push(mainTable);
    i.instructions.forEach(instruction => instruction.accept(this));

    this.curTable = cur;
  }

  visitWhile(i: While): any {
    // TODO: implement
  }

  get tables(): SymbolTable[] {
    return this._tables;
  }
}
