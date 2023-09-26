import { Variable } from "src/app/model/instruction/variable";

export class SymbolTable extends Array<Variable> {
  private scope: string;

  constructor(scope: string, parent?: SymbolTable) {
    super();
    this.scope = scope;

    if (parent) {
      this.push(...parent);
    }
  }

  add(variable: Variable) {
    variable.pos = this.length;
    return this.push(variable);
  }

  getById(id: string) {
    return this.find(v => v.id == id);
  }

  contains(id: string) {
    return this.some(v => v.id == id);
  }
}
