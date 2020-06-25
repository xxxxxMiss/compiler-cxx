// Generated from MyGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MyGrammarParser.

function MyGrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MyGrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MyGrammarVisitor.prototype.constructor = MyGrammarVisitor;

// Visit a parse tree produced by MyGrammarParser#literal.
MyGrammarVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#primitiveType.
MyGrammarVisitor.prototype.visitPrimitiveType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#expression.
MyGrammarVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#primary.
MyGrammarVisitor.prototype.visitPrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#functionCall.
MyGrammarVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#expressionList.
MyGrammarVisitor.prototype.visitExpressionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#typeType.
MyGrammarVisitor.prototype.visitTypeType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#classOrInterfaceType.
MyGrammarVisitor.prototype.visitClassOrInterfaceType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#functionType.
MyGrammarVisitor.prototype.visitFunctionType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#typeList.
MyGrammarVisitor.prototype.visitTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#typeTypeOrVoid.
MyGrammarVisitor.prototype.visitTypeTypeOrVoid = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MyGrammarVisitor = MyGrammarVisitor;