grammar MyGrammar;

import CommonLexer;   //导入词法定义

// @header {
// package antlrtest;
// }


// expression
//     :   assignmentExpression
//     |   expression ',' assignmentExpression
//     ;

// assignmentExpression
//     :   additiveExpression
//     |   Identifier assignmentOperator additiveExpression
//     ;

// assignmentOperator
//     :   '='
//     |   '*='
//     |  '/='
//     |   '%='
//     |   '+='
//     |   '-='
//     ;

// additiveExpression
//     :   multiplicativeExpression
//     |   additiveExpression '+' multiplicativeExpression
//     |   additiveExpression '-' multiplicativeExpression
//     ;

// multiplicativeExpression
//     :   primaryExpression
//     |   multiplicativeExpression '*' primaryExpression
//     |   multiplicativeExpression '/' primaryExpression
//     |   multiplicativeExpression '%' primaryExpression
//     ;

// primaryExpression
//     :   Identifier
//     |   literal
//     |   Identifier '(' argumentExpressionList? ')'
//     |   '(' expression ')'
//     ;

// argumentExpressionList
//     :   assignmentExpression
//     |   argumentExpressionList ',' assignmentExpression
//     ;

literal
	:	IntegerLiteral
	|	BooleanLiteral
	|	StringLiteral
	|	NullLiteral
	;

primitiveType
    :   'let'
    |   'const'
    |   'var'
    ;

// statement
//     :   expressionStatement
//     |    compoundStatement
//     //|   selectionStatement
//     //|   iterationStatement
//     ;

// expressionStatement
//     :   expression? ';'
//     ;

// declaration          
//     : primitiveType Identifier 
//     | primitiveType Identifier initializer
//     ;

// initializer
//     :   assignmentOperator assignmentExpression
//     //|   LeftBrace initializerList RightBrace
//     //|   LeftBrace initializerList Comm RightBrace
//     ;


// expression
//     :   assignmentExpression
//     |   expression ',' assignmentExpression
//     ;

// assignmentExpression
//     :   additiveExpression
//     |   Identifier assignmentOperator additiveExpression
//     ;

// assignmentOperator
// 	:	'='
// 	|	'*='
// 	|	'/='
// 	|	'%='
// 	|	'+='
// 	|	'-='
// 	|	'<<='
// 	|	'>>='
// 	|	'>>>='
// 	|	'&='
// 	|	'^='
// 	|	'|='
// 	;

// //加法表达式，Antlr能够支持左递归
// additiveExpression
//     :   multiplicativeExpression
//     |   additiveExpression '+' multiplicativeExpression
//     |   additiveExpression '-' multiplicativeExpression
//     ;

// //乘法表达式，Antlr能够支持左递归
// multiplicativeExpression
//     :   primaryExpression
//     |   multiplicativeExpression '*' primaryExpression
//     |   multiplicativeExpression '/' primaryExpression
//     |   multiplicativeExpression '%' primaryExpression
//     ;

// primaryExpression
//     :   Identifier
//     |   literal
//     |   Identifier '(' argumentExpressionList? ')'
//     |   '(' expression ')'
//     ;

// argumentExpressionList
//     :   assignmentExpression
//     |   argumentExpressionList ',' assignmentExpression
//     ;

// compoundStatement
//     :   '{' blockItemList? '}'
//     ;

// blockItemList
//     :   blockItem
//     |   blockItemList blockItem
//     ;

// blockItem
//     :   statement
//     |   declaration
//     ;

expression
    : primary
    | expression bop='.'
      ( IDENTIFIER
      | functionCall
    //   | THIS
    //   | NEW nonWildcardTypeArguments? innerCreator
    //   | SUPER superSuffix
    //   | explicitGenericInvocation
      )
    | expression '[' expression ']'
    | functionCall
    // | NEW creator   //不用new关键字，而是用类名相同的函数直接生成对象。
    // | '(' typeType ')' expression
    | expression postfix=('++' | '--')
    | prefix=('+'|'-'|'++'|'--') expression
    | prefix=('~'|'!') expression
    | expression bop=('*'|'/'|'%') expression  
    | expression bop=('+'|'-') expression 
    | expression ('<' '<' | '>' '>' '>' | '>' '>') expression
    | expression bop=('<=' | '>=' | '>' | '<') expression
    | expression bop=INSTANCEOF typeType
    | expression bop=('==' | '!=') expression
    | expression bop='&' expression
    | expression bop='^' expression
    | expression bop='|' expression
    | expression bop='&&' expression
    | expression bop='||' expression
    | expression bop='?' expression ':' expression
    | <assoc=right> expression
      bop=('=' | '+=' | '-=' | '*=' | '/=' | '&=' | '|=' | '^=' | '>>=' | '>>>=' | '<<=' | '%=')
      expression
    // | lambdaExpression // Java8

    // Java 8 functionReference
    // | expression '::' typeArguments? IDENTIFIER
    // | typeType '::' (typeArguments? IDENTIFIER | NEW)
    // | classType '::' typeArguments? NEW
    | SEMI
    ;

primary
    : '(' expression ')'
    | THIS
    // | SUPER
    | literal {console.log($literal.text)}
    | IDENTIFIER
    // | typeTypeOrVoid '.' CLASS
    ;

functionCall
    : IDENTIFIER '(' expressionList? ')'
    | THIS '(' expressionList? ')'
    | SUPER '(' expressionList? ')'
    ;

expressionList
    : expression (',' expression)*
    ;

typeType
    : (classOrInterfaceType| functionType | primitiveType) ('[' ']')*
    ;

classOrInterfaceType
    : IDENTIFIER ('.' IDENTIFIER)*
    //: IDENTIFIER
    ;

functionType
    : FUNCTION typeTypeOrVoid '(' typeList? ')'
    ;

typeList
    : typeType (',' typeType)*
    ;

typeTypeOrVoid
    : typeType
    | VOID
    ;