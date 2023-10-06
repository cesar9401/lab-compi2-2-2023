/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,8],$V2=[9,34],$V3=[1,29],$V4=[1,28],$V5=[1,25],$V6=[1,23],$V7=[1,27],$V8=[1,32],$V9=[12,30,35,54],$Va=[1,33],$Vb=[12,30,35,37,54],$Vc=[1,34],$Vd=[1,35],$Ve=[1,36],$Vf=[1,37],$Vg=[1,38],$Vh=[1,39],$Vi=[12,30,35,37,39,41,42,43,44,45,54],$Vj=[1,40],$Vk=[1,41],$Vl=[12,30,35,37,39,41,42,43,44,45,46,48,54],$Vm=[1,42],$Vn=[1,43],$Vo=[1,44],$Vp=[12,30,35,37,39,41,42,43,44,45,46,48,49,51,52,54],$Vq=[15,21,26,29,31,34],$Vr=[2,8],$Vs=[1,72],$Vt=[1,75],$Vu=[1,74],$Vv=[1,71],$Vw=[1,81],$Vx=[15,21,26,27,29,31,34];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"initial":3,"program":4,"EOF":5,"declaration_stmts":6,"void_main":7,"declaration_stmt":8,"VOID":9,"MAIN":10,"LPAREN":11,"RPAREN":12,"LBRACE":13,"statements":14,"RBRACE":15,"statement":16,"assign_stmt":17,"while_stmt":18,"if_stmt":19,"println_stmt":20,"WHILE":21,"a":22,"if":23,"else":24,"list_else_if":25,"IF":26,"ELSE":27,"else_if":28,"PRINTLN":29,"SEMI":30,"ID":31,"EQ":32,"type":33,"INT":34,"OR":35,"b":36,"AND":37,"c":38,"GREATER":39,"d":40,"GREATER_EQ":41,"LESS":42,"LESS_EQ":43,"EQEQ":44,"NEQ":45,"PLUS":46,"e":47,"MINUS":48,"TIMES":49,"f":50,"DIVIDE":51,"MOD":52,"POW":53,"COMMA":54,"g":55,"h":56,"INTEGER":57,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"VOID",10:"MAIN",11:"LPAREN",12:"RPAREN",13:"LBRACE",15:"RBRACE",21:"WHILE",26:"IF",27:"ELSE",29:"PRINTLN",30:"SEMI",31:"ID",32:"EQ",34:"INT",35:"OR",37:"AND",39:"GREATER",41:"GREATER_EQ",42:"LESS",43:"LESS_EQ",44:"EQEQ",45:"NEQ",46:"PLUS",48:"MINUS",49:"TIMES",51:"DIVIDE",52:"MOD",53:"POW",54:"COMMA",57:"INTEGER"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,1],[7,7],[14,2],[14,0],[16,1],[16,1],[16,1],[16,1],[16,1],[18,7],[19,1],[19,2],[19,2],[19,3],[23,7],[24,4],[25,2],[25,1],[28,8],[20,5],[17,4],[8,5],[33,1],[22,3],[22,1],[36,3],[36,1],[38,3],[38,3],[38,3],[38,3],[38,3],[38,3],[38,1],[40,3],[40,3],[40,1],[47,3],[47,3],[47,3],[47,1],[50,6],[50,1],[55,2],[55,1],[56,1],[56,1],[56,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1]; 
break;
case 2:
 this.$ = new yy.Program(this._$.first_line, this._$.first_column, $$[$0-1], $$[$0]); 
break;
case 3:
 this.$ = new yy.Program(this._$.first_line, this._$.first_column, [], $$[$0]); 
break;
case 4: case 7: case 21:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 5: case 22:
 this.$ = [$$[$0]]; 
break;
case 6:
 this.$ = new yy.VoidMain(this._$.first_line, this._$.first_column, $$[$0-1]); 
break;
case 8:
 this.$ = []; 
break;
case 9: case 10: case 11: case 12: case 13: case 29: case 31: case 38: case 41: case 45: case 47: case 49:
 this.$ = $$[$0]; 
break;
case 14:
 this.$ = new yy.While(this._$.first_line, this._$.first_column, $$[$0-4], $$[$0-1]); 
break;
case 15:
 this.$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $$[$0], [], undefined); 
break;
case 16:
 this.$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $$[$0-1], [], $$[$0]); 
break;
case 17:
 this.$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $$[$0-1], $$[$0], undefined); 
break;
case 18:
 this.$ = new yy.IfInstruction(this._$.first_line, this._$.first_column, $$[$0-2], $$[$0-1], $$[$0]); 
break;
case 19:
 this.$ = new yy.If(yy.TypeIf.IF, $$[$0-4], $$[$0-1]); 
break;
case 20:
 this.$ = new yy.If(yy.TypeIf.ELSE, undefined, $$[$0-1]); 
break;
case 23:
 this.$ = new yy.If(yy.TypeIf.ELSE_IF, $$[$0-4], $$[$0-1]); 
break;
case 24:
 this.$ = new yy.Print(this._$.first_line, this._$.first_column, $$[$0-2]); 
break;
case 25:
 this.$ = new yy.Assignment(this._$.first_line, this._$.first_column, $$[$0-3], $$[$0-1]); 
break;
case 26:
 this.$ = new yy.Declaration(this._$.first_line, this._$.first_column, $$[$0-4], $$[$0-3], $$[$0-1]); 
break;
case 27:
 this.$ = yy.VariableType.INTEGER; 
break;
case 28:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.OR, $$[$0-2], $$[$0]); 
break;
case 30:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.AND, $$[$0-2], $$[$0]); 
break;
case 32:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.GREATER, $$[$0-2], $$[$0]); 
break;
case 33:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.GREATER_EQ, $$[$0-2], $$[$0]); 
break;
case 34:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.LESS, $$[$0-2], $$[$0]); 
break;
case 35:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.LESS_EQ, $$[$0-2], $$[$0]); 
break;
case 36:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.EQEQ, $$[$0-2], $$[$0]); 
break;
case 37:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.NEQ, $$[$0-2], $$[$0]); 
break;
case 39:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.PLUS, $$[$0-2], $$[$0]); 
break;
case 40:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.MINUS, $$[$0-2], $$[$0]); 
break;
case 42:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.TIMES, $$[$0-2], $$[$0]); 
break;
case 43:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.DIVIDE, $$[$0-2], $$[$0]); 
break;
case 44:
 this.$ = new yy.BinaryOperation(this._$.first_line, this._$.first_column, yy.OperationType.MOD, $$[$0-2], $$[$0]); 
break;
case 50:
 this.$ = new yy.Value(this._$.first_line, this._$.first_column, $$[$0], yy.ValueType.INTEGER); 
break;
case 51:
 this.$ = new yy.Value(this._$.first_line, this._$.first_column, $$[$0], yy.ValueType.ID); 
break;
case 52:
 this.$ = $$[$0-1]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:$V0,33:7,34:$V1},{1:[3]},{5:[1,9]},{7:10,8:11,9:$V0,33:7,34:$V1},{5:[2,3]},o($V2,[2,5]),{10:[1,12]},{31:[1,13]},{31:[2,27]},{1:[2,1]},{5:[2,2]},o($V2,[2,4]),{11:[1,14]},{32:[1,15]},{12:[1,16]},{11:$V3,22:17,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{13:[1,30]},{30:[1,31],35:$V8},o($V9,[2,29],{37:$Va}),o($Vb,[2,31],{39:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh}),o($Vi,[2,38],{46:$Vj,48:$Vk}),o($Vl,[2,41],{49:$Vm,51:$Vn,52:$Vo}),o($Vp,[2,45]),{11:[1,45]},o($Vp,[2,47]),{11:$V3,31:$V4,56:46,57:$V7},o($Vp,[2,49]),o($Vp,[2,50]),o($Vp,[2,51]),{11:$V3,22:47,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},o($Vq,$Vr,{14:48}),o([9,15,21,26,29,31,34],[2,26]),{11:$V3,31:$V4,36:49,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,38:50,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,40:51,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,40:52,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,40:53,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,40:54,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,40:55,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,40:56,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,47:57,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,47:58,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,48:$V5,50:59,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,48:$V5,50:60,53:$V6,55:24,56:26,57:$V7},{11:$V3,31:$V4,48:$V5,50:61,53:$V6,55:24,56:26,57:$V7},{11:$V3,22:62,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},o($Vp,[2,48]),{12:[1,63],35:$V8},{8:67,15:[1,64],16:65,17:66,18:68,19:69,20:70,21:$Vs,23:73,26:$Vt,29:$Vu,31:$Vv,33:7,34:$V1},o($V9,[2,28],{37:$Va}),o($Vb,[2,30],{39:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh}),o($Vi,[2,32],{46:$Vj,48:$Vk}),o($Vi,[2,33],{46:$Vj,48:$Vk}),o($Vi,[2,34],{46:$Vj,48:$Vk}),o($Vi,[2,35],{46:$Vj,48:$Vk}),o($Vi,[2,36],{46:$Vj,48:$Vk}),o($Vi,[2,37],{46:$Vj,48:$Vk}),o($Vl,[2,39],{49:$Vm,51:$Vn,52:$Vo}),o($Vl,[2,40],{49:$Vm,51:$Vn,52:$Vo}),o($Vp,[2,42]),o($Vp,[2,43]),o($Vp,[2,44]),{35:$V8,54:[1,76]},o($Vp,[2,52]),{5:[2,6]},o($Vq,[2,7]),o($Vq,[2,9]),o($Vq,[2,10]),o($Vq,[2,11]),o($Vq,[2,12]),o($Vq,[2,13]),{32:[1,77]},{11:[1,78]},o($Vq,[2,15],{24:79,25:80,28:82,27:$Vw}),{11:[1,83]},{11:[1,84]},{11:$V3,22:85,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,22:86,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,22:87,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},o($Vq,[2,16]),o($Vq,[2,17],{24:88,28:89,27:$Vw}),{13:[1,90],26:[1,91]},o($Vx,[2,22]),{11:$V3,22:92,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{11:$V3,22:93,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{12:[1,94],35:$V8},{30:[1,95],35:$V8},{12:[1,96],35:$V8},o($Vq,[2,18]),o($Vx,[2,21]),o($Vq,$Vr,{14:97}),{11:[1,98]},{12:[1,99],35:$V8},{12:[1,100],35:$V8},o($Vp,[2,46]),o($Vq,[2,25]),{13:[1,101]},{8:67,15:[1,102],16:65,17:66,18:68,19:69,20:70,21:$Vs,23:73,26:$Vt,29:$Vu,31:$Vv,33:7,34:$V1},{11:$V3,22:103,31:$V4,36:18,38:19,40:20,47:21,48:$V5,50:22,53:$V6,55:24,56:26,57:$V7},{30:[1,104]},{13:[1,105]},o($Vq,$Vr,{14:106}),o($Vq,[2,20]),{12:[1,107],35:$V8},o($Vq,[2,24]),o($Vq,$Vr,{14:108}),{8:67,15:[1,109],16:65,17:66,18:68,19:69,20:70,21:$Vs,23:73,26:$Vt,29:$Vu,31:$Vv,33:7,34:$V1},{13:[1,110]},{8:67,15:[1,111],16:65,17:66,18:68,19:69,20:70,21:$Vs,23:73,26:$Vt,29:$Vu,31:$Vv,33:7,34:$V1},o($Vq,[2,14]),o($Vq,$Vr,{14:112}),o($Vx,[2,19]),{8:67,15:[1,113],16:65,17:66,18:68,19:69,20:70,21:$Vs,23:73,26:$Vt,29:$Vu,31:$Vv,33:7,34:$V1},o($Vx,[2,23])],
defaultActions: {4:[2,3],8:[2,27],9:[2,1],10:[2,2],64:[2,6]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip */
break;
case 1:return "INTEGER";
break;
case 2:return "VOID";
break;
case 3:return "MAIN";
break;
case 4:return "POW";
break;
case 5:return "INT";
break;
case 6:return "WHILE";
break;
case 7:return "IF";
break;
case 8:return "ELSE";
break;
case 9:return "PRINTLN";
break;
case 10:return "PLUS";
break;
case 11:return "MINUS";
break;
case 12:return "TIMES";
break;
case 13:return "DIVIDE";
break;
case 14:return "MOD";
break;
case 15:return "COMMA";
break;
case 16:return "GREATER";
break;
case 17:return "GREATER_EQ";
break;
case 18:return "LESS";
break;
case 19:return "LESS_EQ";
break;
case 20:return "EQEQ";
break;
case 21:return "EQ";
break;
case 22:return "NEQ";
break;
case 23:return "AND";
break;
case 24:return "OR";
break;
case 25:return "NOT";
break;
case 26:return "LPAREN";
break;
case 27:return "RPAREN";
break;
case 28:return "LBRACE";
break;
case 29:return "RBRACE";
break;
case 30:return "SEMI";
break;
case 31:return "ID";
break;
case 32:return "EOF";
break;
case 33:
                        console.log(`Error lexico ${yy_.yytext}`);
                        return "INVALID";
                    
break;
}
},
rules: [/^(?:((\r|\n|\r\n)|[ \t\f]))/,/^(?:([0]|[1-9][0-9]*))/,/^(?:(void\b))/,/^(?:(main\b))/,/^(?:(pow|POW\b))/,/^(?:(int\b))/,/^(?:(while\b))/,/^(?:(if\b))/,/^(?:(else\b))/,/^(?:(System\.out\.println\b))/,/^(?:(\+))/,/^(?:(-))/,/^(?:(\*))/,/^(?:(\/))/,/^(?:(%))/,/^(?:(,))/,/^(?:(>))/,/^(?:(>=))/,/^(?:(<))/,/^(?:(<=))/,/^(?:(==))/,/^(?:(=))/,/^(?:(!=))/,/^(?:(&&))/,/^(?:(or\b))/,/^(?:(!))/,/^(?:(\())/,/^(?:(\)))/,/^(?:(\{))/,/^(?:(\}))/,/^(?:(;))/,/^(?:([a-zA-Z_][a-zA-Z_0-9]*))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}