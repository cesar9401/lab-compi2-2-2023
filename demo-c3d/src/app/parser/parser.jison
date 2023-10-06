
%lex
/* regular expressions */

id                  [a-zA-Z_][a-zA-Z_0-9]*
integer             [0]|[1-9][0-9]*
lineTerminator      \r|\n|\r\n
whitespace          {lineTerminator}|[ \t\f]
void                "void"
main                "main"
pow                 "pow"|"POW"
int                 "int"
while               "while"
if                  "if"
else                "else"
println             "System.out.println"

/* operators */
plus						  	"+"
minus						  	"-"
times			  				"*"
divide		  				"/"
mod                 "%"
comma               ","
lparen              "("
rparen              ")"
lbrace              "{"
rbrace              "}"
semi                ";"
greater             ">"
greater_eq          ">="
less                "<"
less_eq             "<="
eq                  "="
eqeq                "=="
neq                 "!="
and                 "&&"
or                  "or"
not                 "!"

%%

{whitespace}        /* skip */
{integer}           return "INTEGER";

{void}              return "VOID";
{main}              return "MAIN";
{pow}               return "POW";
{int}               return "INT";
{while}             return "WHILE";
{if}                return "IF";
{else}              return "ELSE";
{println}           return "PRINTLN";

/* operators */
{plus}              return "PLUS";
{minus}             return "MINUS";
{times}             return "TIMES";
{divide}            return "DIVIDE";
{mod}               return "MOD";
{comma}             return "COMMA";
{greater}           return "GREATER";
{greater_eq}        return "GREATER_EQ";
{less}              return "LESS";
{less_eq}           return "LESS_EQ";
{eq}                return "EQ";
{eqeq}              return "EQEQ";
{neq}               return "NEQ";
{and}               return "AND";
{or}                return "OR";
{not}               return "NOT";
{lparen}            return "LPAREN";
{rparen}            return "RPAREN";
{lbrace}            return "LBRACE";
{rbrace}            return "RBRACE";
{semi}              return "SEMI";

/* id */
{id}                return "ID";

<<EOF>>               return "EOF";
.                   %{
                        console.log(`Error lexico ${yytext}`);
                        return "INVALID";
                    %}

/lex

%start initial

%%

initial
  : program EOF
    { return $1; }
  ;

program
  : declaration_stmts void_main
    { $$ = new yy.Program(this._$.first_line, this._$.first_column, $1, $2); }
  | void_main
    { $$ = new yy.Program(this._$.first_line, this._$.first_column, [], $1); }
  ;

declaration_stmts
  : declaration_stmts declaration_stmt
    { $$ = $1; $$.push($2); }
  | declaration_stmt
    { $$ = [$1]; }
  ;

void_main
  : VOID MAIN LPAREN RPAREN LBRACE statements RBRACE
    { $$ = new yy.VoidMain(this._$.first_line, this._$.first_column, $6); }
  ;

statements
  : statements statement
    { $$ = $1; $$.push($2); }
  |
    { $$ = []; }
  ;

statement
  : assign_stmt
    { $$ = $1; }
  | declaration_stmt
    { $$ = $1; }
  | while_stmt
    { $$ = $1; }
  | if_stmt
    { $$ = $1; }
  | println_stmt
    { $$ = $1; }
  ;

while_stmt
  : WHILE LPAREN a RPAREN LBRACE statements RBRACE
    { $$ = new yy.While(this._$.first_line, this._$.first_column, $3, $6); }
  ;

if_stmt
  : _if
    { $$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $1, [], undefined); }
  | _if _else
    { $$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $1, [], $2); }
  | _if list_else_if
    { $$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $1, $2, undefined); }
  | if list_else_if _else
    { $$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $1, $2, $3); }
  ;

_if
  : IF LPAREN a RPAREN LBRACE statements RBRACE
    { $$ = new yy.If(yy.TypeIf.IF, $3, $6); }
  ;

_else
  : ELSE LBRACE statements RBRACE
    { $$ = new yy.If(yy.TypeIf.ELSE, undefined, $3); }
  ;

list_else_if
  : list_else_if _else_if
    { $$ = $1; $$.push($2); }
  | _else_if
    { $$ = [$1]; }
  ;

_else_if
  : ELSE IF LPAREN a RPAREN LBRACE statements RBRACE
    { $$ = new yy.If(yy.TypeIf.ELSE_IF, $4, $7); }
  ;

println_stmt
  : PRINTLN LPAREN a RPAREN SEMI
    { $$ = new yy.Print(this._$.first_line, this._$.first_column, $3); }
  ;

assign_stmt
  : ID EQ a SEMI
    { $$ = new yy.Assignment(this._$.first_line, this._$.first_column, $1, $3); }
  ;

declaration_stmt
  : type ID EQ a SEMI
    { $$ = new yy.Declaration(this._$.first_line, this._$.first_column, $1, $2, $4); }
  ;

type
  : INT
    { $$ = yy.VariableType.INTEGER; }
  ;

a
  : a OR b
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.OR, $1, $3); }
  | b
    { $$ = $1; }
  ;

b
  : b AND c
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.AND, $1, $3); }
  | c
    { $$ = $1; }
  ;

c
  : c GREATER d
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.GREATER, $1, $3); }
  | c GREATER_EQ d
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.GREATER_EQ, $1, $3); }
  | c LESS d
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.LESS, $1, $3); }
  | c LESS_EQ d
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.LESS_EQ, $1, $3); }
  | c EQEQ d
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.EQEQ, $1, $3); }
  | c NEQ d
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.NEQ, $1, $3); }
  | d
    { $$ = $1; } ;

d
  : d PLUS e
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.PLUS, $1, $3); }
  | d MINUS e
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.MINUS, $1, $3); }
  | e
    { $$ = $1; }
  ;

e
  : e TIMES f
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.TIMES, $1, $3); }
  | e DIVIDE f
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.DIVIDE, $1, $3); }
  | e MOD f
    { $$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.MOD, $1, $3); }
  | f
    { $$ = $1; }
  ;

f
  : POW LPAREN a COMMA a RPAREN
  | g
    { $$ = $1; }
  ;

g
  : MINUS h
  | h
    { $$ = $1; }
  ;

h
  : INTEGER
    { $$ = new yy.Value(this._$.first_line, this._$.first_column, $1, yy.ValueType.INTEGER); }
  | ID
    { $$ = new yy.Value(this._$.first_line, this._$.first_column, $1, yy.ValueType.ID); }
  | LPAREN a RPAREN
    { $$ = $2; }
  ;
