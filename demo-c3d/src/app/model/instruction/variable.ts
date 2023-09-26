export class Variable {
  public id?: string;
  public type!: VariableType;
  public value?: any;
}

export enum VariableType {
  INTEGER,
  DOUBLE,
  BOOLEAN
}
