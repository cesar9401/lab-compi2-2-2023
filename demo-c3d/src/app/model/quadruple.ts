export class Quadruple {
  public op!: QuadOperation;
  public arg1!: string;
  public arg2!: string;
  public result!: string;

  constructor(op: QuadOperation, arg1: string, arg2: string, result: string) {
    this.op = op;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.result = result;
  }
}

export enum QuadOperation {
  INTEGER,
  ID,
  PLUS,
  MINUS,
  TIMES,
  DIVIDE,
  ASSIGMENT, // or equal
  TMP_ASSIGMENT,
  PRINTLN,

  AND,
  OR,
  NOT,
  IF_GREATER,
  IF_GREATER_EQ,
  IF_LESS,
  IF_LESS_EQ,
  EQEQ,
  NEQ,
  GOTO,
  LABEL
}
