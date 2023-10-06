import { SymbolTable } from 'src/app/model/instruction/symbol-table';
import { Quadruple } from 'src/app/model/quadruple';

export class QuadHandler {
  private _tmp: number;
  private _label: number;
  private tables: SymbolTable[];
  private quadTrue: Quadruple[];
  private quadFalse: Quadruple[];

  private _labelTrue: string | undefined;
  private _labelFalse: string | undefined;

  private readonly stack: SymbolTable[];
  private readonly _quads: Quadruple[];

  public constructor(tables: SymbolTable[]) {
    this._tmp = 1;
    this._label = 1;
    this._quads = [];
    this.stack = [];
    this.quadTrue = [];
    this.quadFalse = [];
    this.tables = tables;

    this._labelTrue = undefined;
    this._labelFalse = undefined;
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

  public addTrue(quad: Quadruple): void {
    this.quadTrue.push(quad);
  }

  public addFalse(quad: Quadruple): void {
    this.quadFalse.push(quad);
  }

  public switch(): void {
    const aux = [...this.quadTrue];
    this.quadTrue = [...this.quadFalse];
    this.quadFalse = [...aux];
  }

  public toTrue(label: string): void {
    while (this.quadTrue.length) {
      const tmp = this.quadTrue.pop();
      if (tmp) tmp.result = label;
    }
  }

  public toFalse(label: string): void {
    while (this.quadFalse.length) {
      const tmp = this.quadFalse.pop();
      if (tmp) tmp.result = label;
    }
  }


  get labelTrue(): string | undefined {
    return this._labelTrue;
  }

  set labelTrue(value: string | undefined) {
    this._labelTrue = value;
  }

  get labelFalse(): string | undefined {
    return this._labelFalse;
  }

  set labelFalse(value: string | undefined) {
    this._labelFalse = value;
  }
}
