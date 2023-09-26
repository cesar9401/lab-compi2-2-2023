export class Variable {
  public id?: string;
  public type!: VariableType;
  public value?: any;

  public pos!: number;
}

export enum VariableType {
  INTEGER,
  DOUBLE,
  BOOLEAN
}
