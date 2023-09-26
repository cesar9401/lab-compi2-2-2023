import { Assignment } from "src/app/model/instruction/assignment";
import { BinaryOperation } from "src/app/model/instruction/binary-operation";
import { Declaration } from "src/app/model/instruction/declaration";
import { Print } from "src/app/model/instruction/print";
import { Value } from "src/app/model/instruction/value";
import { While } from "src/app/model/instruction/while";
import { Visitor } from "src/app/model/visitor/visitor";

export class Runner2 extends Visitor {

  visitAssignment(i: Assignment): any {
    console.log(`linea: ${i.line}, column: ${i.column}`, 'Runner2');
  }

  visitBinaryOperation(i: BinaryOperation): any {
    console.log(`linea: ${i.line}, column: ${i.column}`, 'Runner2');
  }

  visitDeclaration(i: Declaration): any {
    console.log(`linea: ${i.line}, column: ${i.column}`, 'Runner2');
  }

  visitPrint(i: Print): any {
    console.log(`linea: ${i.line}, column: ${i.column}`, 'Runner2');
  }

  visitValue(i: Value): any {
    console.log(`linea: ${i.line}, column: ${i.column}`, 'Runner2');
  }

  visitWhile(i: While): any {
    console.log(`linea: ${i.line}, column: ${i.column}`, 'Runner2');
    i.instructions.forEach(instruction => {
      instruction.accept(this);
    });
  }
}
