import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Instruction } from 'src/app/model/instruction/instruction';
import { Value } from 'src/app/model/instruction/value';
import { Visitor } from 'src/app/model/visitor/visitor';

export class If {
  type: TypeIf;
  condition: BinaryOperation | Value | undefined;
  instructions: Instruction[];

  constructor(type: TypeIf, condition: BinaryOperation | Value | undefined, instructions: Instruction[]) {
    this.type = type;
    this.condition = condition;
    this.instructions = instructions;
  }
}

export enum TypeIf {
  IF,
  ELSE_IF,
  ELSE
}

export class IfInstruction extends Instruction {
  _if!: If;
  _elseIfList: If[];
  _else: If | undefined;

  constructor(
    line: number,
    column: number,
    _if: If,
    _elseIfList: If[],
    _else: If | undefined
  ) {
    super(line, column);
    this._if = _if;
    this._elseIfList = _elseIfList;
    this._else = _else;
  }

  accept(v: Visitor): any {
    v.visitIfInstruction(this);
  }
}
