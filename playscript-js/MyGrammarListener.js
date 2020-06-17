// Generated from MyGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MyGrammarParser.
function MyGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MyGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MyGrammarListener.prototype.constructor = MyGrammarListener;

// Enter a parse tree produced by MyGrammarParser#literal.
MyGrammarListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#literal.
MyGrammarListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#primitiveType.
MyGrammarListener.prototype.enterPrimitiveType = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#primitiveType.
MyGrammarListener.prototype.exitPrimitiveType = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#expression.
MyGrammarListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#expression.
MyGrammarListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#primary.
MyGrammarListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#primary.
MyGrammarListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#functionCall.
MyGrammarListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#functionCall.
MyGrammarListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#expressionList.
MyGrammarListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#expressionList.
MyGrammarListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#typeType.
MyGrammarListener.prototype.enterTypeType = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#typeType.
MyGrammarListener.prototype.exitTypeType = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#classOrInterfaceType.
MyGrammarListener.prototype.enterClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#classOrInterfaceType.
MyGrammarListener.prototype.exitClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#functionType.
MyGrammarListener.prototype.enterFunctionType = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#functionType.
MyGrammarListener.prototype.exitFunctionType = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#typeList.
MyGrammarListener.prototype.enterTypeList = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#typeList.
MyGrammarListener.prototype.exitTypeList = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#typeTypeOrVoid.
MyGrammarListener.prototype.enterTypeTypeOrVoid = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#typeTypeOrVoid.
MyGrammarListener.prototype.exitTypeTypeOrVoid = function(ctx) {
};



exports.MyGrammarListener = MyGrammarListener;