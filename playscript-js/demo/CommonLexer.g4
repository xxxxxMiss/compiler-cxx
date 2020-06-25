lexer grammar CommonLexer; //lexer关键字意味着这是一个词法规则

Let: 'let';
Const: 'const';

IntegerLiteral: [0-9]+;
BooleanLiteral: 'true' | 'false';
NullLiteral: 'null';
VOID: 'void';
SUPER: 'super';
FUNCTION: 'function';
THIS: 'this';
INSTANCEOF: 'instanceof';

IDENTIFIER: [a-zA-Z_]([a-zA-Z_]|[0-9])*;


StringLiteral:     '"' (~["\\\r\n] | EscapeSequence)* '"';

SEMI: ';';

fragment EscapeSequence
    : '\\' [btnfr"'\\]
    | '\\' ([0-3]? [0-7])? [0-7]
    | '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;

fragment HexDigit
    : [0-9a-fA-F]
    ;

WS: [ \r\t\n]+ -> skip;