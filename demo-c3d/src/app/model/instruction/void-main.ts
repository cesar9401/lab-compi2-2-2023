import { Instruction } from 'src/app/model/instruction/instruction';
import { Visitor } from 'src/app/model/visitor/visitor';

export class VoidMain extends Instruction {
  instructions: Instruction[];

  constructor(line: number, column: number, instructions: Instruction[]) {
    super(line, column);
    this.instructions = instructions;
  }

  accept(v: Visitor): any {
    v.visitVoidMain(this);
  }
}
