import { Assignment } from "src/app/model/instruction/assignment";
import { BinaryOperation } from "src/app/model/instruction/binary-operation";
import { Declaration } from "src/app/model/instruction/declaration";
import { IfInstruction } from 'src/app/model/instruction/if';
import { Print } from "src/app/model/instruction/print";
import { Program } from 'src/app/model/instruction/program';
import { Value } from "src/app/model/instruction/value";
import { VoidMain } from 'src/app/model/instruction/void-main';
import { While } from "src/app/model/instruction/while";

export abstract class Visitor {

  abstract visitAssignment(i: Assignment): any;
  abstract visitBinaryOperation(i: BinaryOperation): any;
  abstract visitDeclaration(i: Declaration): any;
  abstract visitPrint(i: Print): any;
  abstract visitValue(i: Value): any;
  abstract visitWhile(i: While): any;
  abstract visitVoidMain(i: VoidMain): any;
  abstract visitProgram(i: Program): any;
  abstract visitIfInstruction(i: IfInstruction): any;
}
