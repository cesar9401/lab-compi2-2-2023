import { Assignment } from 'src/app/model/instruction/assignment';
import { BinaryOperation } from 'src/app/model/instruction/binary-operation';
import { Declaration } from 'src/app/model/instruction/declaration';
import { If, IfInstruction, TypeIf } from 'src/app/model/instruction/if';
import { OperationType } from 'src/app/model/instruction/operation-type';
import { Print } from 'src/app/model/instruction/print';
import { Program } from 'src/app/model/instruction/program';
import { Value, ValueType } from 'src/app/model/instruction/value';
import { Variable, VariableType } from 'src/app/model/instruction/variable';
import { VoidMain } from 'src/app/model/instruction/void-main';
import { While } from 'src/app/model/instruction/while';
import { QuadHandler } from 'src/app/model/QuadHandler';
import { QuadUtil } from 'src/app/model/QuadUtil';
import { QuadGeneratorVisitor } from 'src/app/model/visitor/QuadGeneratorVisitor';
import { SymbolTableVisitor } from 'src/app/model/visitor/SymbolTableVisitor';

declare var parser: any;

export class Parser {
  private yy: any;

  private readonly source: string;
  private program!: Program;

  constructor(source: string) {
    this.source = source;

    parser.yy.Assignment = Assignment;
    parser.yy.BinaryOperation = BinaryOperation;
    parser.yy.Declaration = Declaration;
    parser.yy.OperationType = OperationType;
    parser.yy.Print = Print;
    parser.yy.Value = Value;
    parser.yy.ValueType = ValueType;
    parser.yy.Variable = Variable;
    parser.yy.VariableType = VariableType;
    parser.yy.While = While;
    parser.yy.If = If;
    parser.yy.TypeIf = TypeIf;
    parser.yy.IfInstruction = IfInstruction;
    parser.yy.VoidMain = VoidMain;
    parser.yy.Program = Program;
  }

  parse() {
    try {
      this.program = parser.parse(this.source);

      // adding variables to symbol tables
      const symbolTableVisitor = new SymbolTableVisitor();
      this.program.accept(symbolTableVisitor);

      const quadHandler = new QuadHandler(symbolTableVisitor.tables);
      const quadVisitor = new QuadGeneratorVisitor(quadHandler);

      this.program.accept(quadVisitor);

      const quadUtil = new QuadUtil(quadHandler.quads);
      return quadUtil.toC();

    } catch (error) {
      console.error(error);
      window.alert('Algo salió mal :(');
      return 'Error :(';
    }
  }
}
