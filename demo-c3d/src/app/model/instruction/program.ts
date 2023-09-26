import { Declaration } from 'src/app/model/instruction/declaration';
import { Instruction } from 'src/app/model/instruction/instruction';
import { VoidMain } from 'src/app/model/instruction/void-main';
import { Visitor } from 'src/app/model/visitor/visitor';

export class Program extends Instruction {
  declarations: Declaration[];
  voidMain: VoidMain;

  constructor(line: number, column: number, declarations: Declaration[], voidMain: VoidMain) {
    super(line, column);
    this.declarations = declarations;
    this.voidMain = voidMain;
  }

  accept(v: Visitor): any {
    v.visitProgram(this);
  }
}
