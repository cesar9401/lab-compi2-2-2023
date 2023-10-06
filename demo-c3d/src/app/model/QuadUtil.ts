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
      console.log(quad);
      result += '\t';
      switch (quad.op) {
        case QuadOperation.PLUS:
          result += `int ${quad.result} = ${quad.arg1} + ${quad.arg2};`;
          break;
        case QuadOperation.MINUS:
          result += `int ${quad.result} = ${quad.arg1} - ${quad.arg2};`;
          break;
        case QuadOperation.TIMES:
          result += `int ${quad.result} = ${quad.arg1} * ${quad.arg2};`;
          break;
        case QuadOperation.DIVIDE:
          result += `int ${quad.result} = ${quad.arg1} / ${quad.arg2};`;
          break;
        case QuadOperation.PRINTLN:
          result += `printf("%d\\n", ${quad.arg1});`;
          break;
        case QuadOperation.ASSIGMENT:
          result += `${quad.result} = ${quad.arg1};`;
          break;
        case QuadOperation.TMP_ASSIGMENT:
          result += `int ${quad.result} = ${quad.arg1};`;
          break;
        case QuadOperation.IF_GREATER:
          result += `if (${quad.arg1} > ${quad.arg2}) goto ${quad.result};`;
          break;
        case QuadOperation.IF_GREATER_EQ:
          result += `if (${quad.arg1} >= ${quad.arg2}) goto ${quad.result};`;
          break;
        case QuadOperation.IF_LESS:
          result += `if (${quad.arg1} < ${quad.arg2}) goto ${quad.result};`;
          break;
        case QuadOperation.IF_LESS_EQ:
          result += `if (${quad.arg1} <= ${quad.arg2}) goto ${quad.result};`;
          break;
        case QuadOperation.EQEQ:
          result += `if (${quad.arg1} == ${quad.arg2}) goto ${quad.result};`;
          break;
        case QuadOperation.NEQ:
          result += `if (${quad.arg1} != ${quad.arg2}) goto ${quad.result};`;
          break;
        case QuadOperation.LABEL:
          result += `${quad.arg1}:`;
          break;
        case QuadOperation.GOTO:
          result += `goto ${quad.arg1};`;
          break;
      }
      result += '\n';
    }

    result += `

\treturn 0;
\n}\n
`;

    return result;
  }
}
