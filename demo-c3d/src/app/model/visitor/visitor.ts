import { Assignment } from "src/app/model/instruction/assignment";
import { BinaryOperation } from "src/app/model/instruction/binary-operation";
import { Declaration } from "src/app/model/instruction/declaration";
import { Print } from "src/app/model/instruction/print";
import { Value } from "src/app/model/instruction/value";
import { While } from "src/app/model/instruction/while";

export abstract class Visitor {

  abstract visitAssignment(i: Assignment): any;
  abstract visitBinaryOperation(i: BinaryOperation): any;
  abstract visitDeclaration(i: Declaration): any;
  abstract visitPrint(i: Print): any;
  abstract visitValue(i: Value): any;
  abstract visitWhile(i: While): any;
}
