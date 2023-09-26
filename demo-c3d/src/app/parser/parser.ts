import { Instruction } from "src/app/model/instruction/instruction";

declare var parser: any;

export class Parser {
  private instructions: Instruction[] = [];
  private readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  parse() {
    try {
      this.instructions = parser.parse(this.source);
      console.log('Success');
    } catch(error) {
      console.error(error);
      window.alert('Algo salió mal :(');
    }
  }
}
