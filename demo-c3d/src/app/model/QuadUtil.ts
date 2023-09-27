import { QuadOperation, Quadruple } from 'src/app/model/quadruple';

export class QuadUtil {
  private quads: Quadruple[];

  constructor(quads: Quadruple[]) {
    this.quads = quads;
  }

  toC(): string {
    let result = `
/*
* compilar con:
* gcc output.c -o output.out -lm
* by: cesar31
*
*/

#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <termios.h>
#include <string.h>

int stack[3000];
int ptr = 0;

int main() {
`;

    for (const quad of this.quads) {
      switch (quad.op) {
        case QuadOperation.PLUS:
          result += `\tint ${quad.result} = ${quad.arg1} + ${quad.arg2};\n`;
          break;
        case QuadOperation.MINUS:
          result += `\tint ${quad.result} = ${quad.arg1} - ${quad.arg2};\n`;
          break;
        case QuadOperation.TIMES:
          result += `\tint ${quad.result} = ${quad.arg1} * ${quad.arg2};\n`;
          break;
        case QuadOperation.DIVIDE:
          result += `\tint ${quad.result} = ${quad.arg1} / ${quad.arg2};\n`;
          break;
        case QuadOperation.PRINTLN:
          result += `\tprintf("%d\\n", ${quad.arg1});\n`;
          break;
        case QuadOperation.ASSIGMENT:
          result += `\t${quad.result} = ${quad.arg1};\n`;
          break;
        case QuadOperation.TMP_ASSIGMENT:
          result += `\tint ${quad.result} = ${quad.arg1};\n`;
          break;
      }
    }

    result += `

\treturn 0;
\n}\n
    `;

    return result;
  }
}
