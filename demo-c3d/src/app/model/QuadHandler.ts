import { SymbolTable } from 'src/app/model/instruction/symbol-table';
import { Quadruple } from 'src/app/model/quadruple';

export class QuadHandler {
  private _tmp: number;
  private _label: number;
  private readonly _quads: Quadruple[];
  private tables: SymbolTable[];
  private stack: SymbolTable[];

  public constructor(tables: SymbolTable[]) {
    this._tmp = 0;
    this._label = 0;

    this._quads = [];
    this.tables = tables;
    this.stack = [];
  }

  public get tmpVar(): string {
    return `t${this._tmp++}`
  }

  public get label(): string {
    return `L${this._label++}`;
  }

  public push() {
    const table = this.tables.shift();
    if (table) {
      this.stack.push(table);
    }
  }

  public pop() {
    this.stack.pop();
  }

  public peek() {
    return this.stack[this.stack.length - 1];
  }

  get quads(): Quadruple[] {
    return this._quads;
  }
}
