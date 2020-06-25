// Generated from src/PlayScript.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index')

// This class defines a complete generic visitor for a parse tree produced by PlayScriptParser.

function PlayScriptVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this)
  return this
}

PlayScriptVisitor.prototype = Object.create(
  antlr4.tree.ParseTreeVisitor.prototype
)
PlayScriptVisitor.prototype.constructor = PlayScriptVisitor

// Visit a parse tree produced by PlayScriptParser#classDeclaration.
PlayScriptVisitor.prototype.visitClassDeclaration = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#classBody.
PlayScriptVisitor.prototype.visitClassBody = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#classBodyDeclaration.
PlayScriptVisitor.prototype.visitClassBodyDeclaration = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#memberDeclaration.
PlayScriptVisitor.prototype.visitMemberDeclaration = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#functionDeclaration.
PlayScriptVisitor.prototype.visitFunctionDeclaration = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#functionBody.
PlayScriptVisitor.prototype.visitFunctionBody = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#typeTypeOrVoid.
PlayScriptVisitor.prototype.visitTypeTypeOrVoid = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#qualifiedNameList.
PlayScriptVisitor.prototype.visitQualifiedNameList = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#formalParameters.
PlayScriptVisitor.prototype.visitFormalParameters = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#formalParameterList.
PlayScriptVisitor.prototype.visitFormalParameterList = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#formalParameter.
PlayScriptVisitor.prototype.visitFormalParameter = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#lastFormalParameter.
PlayScriptVisitor.prototype.visitLastFormalParameter = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#variableModifier.
PlayScriptVisitor.prototype.visitVariableModifier = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#qualifiedName.
PlayScriptVisitor.prototype.visitQualifiedName = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#fieldDeclaration.
PlayScriptVisitor.prototype.visitFieldDeclaration = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#constructorDeclaration.
PlayScriptVisitor.prototype.visitConstructorDeclaration = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#variableDeclarators.
PlayScriptVisitor.prototype.visitVariableDeclarators = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#variableDeclarator.
PlayScriptVisitor.prototype.visitVariableDeclarator = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#variableDeclaratorId.
PlayScriptVisitor.prototype.visitVariableDeclaratorId = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#variableInitializer.
PlayScriptVisitor.prototype.visitVariableInitializer = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#arrayInitializer.
PlayScriptVisitor.prototype.visitArrayInitializer = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#classOrInterfaceType.
PlayScriptVisitor.prototype.visitClassOrInterfaceType = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#typeArgument.
PlayScriptVisitor.prototype.visitTypeArgument = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#literal.
PlayScriptVisitor.prototype.visitLiteral = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#integerLiteral.
PlayScriptVisitor.prototype.visitIntegerLiteral = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#floatLiteral.
PlayScriptVisitor.prototype.visitFloatLiteral = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#prog.
PlayScriptVisitor.prototype.visitProg = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#block.
PlayScriptVisitor.prototype.visitBlock = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#blockStatements.
PlayScriptVisitor.prototype.visitBlockStatements = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#blockStatement.
PlayScriptVisitor.prototype.visitBlockStatement = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#statement.
PlayScriptVisitor.prototype.visitStatement = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#switchBlockStatementGroup.
PlayScriptVisitor.prototype.visitSwitchBlockStatementGroup = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#switchLabel.
PlayScriptVisitor.prototype.visitSwitchLabel = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#forControl.
PlayScriptVisitor.prototype.visitForControl = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#forInit.
PlayScriptVisitor.prototype.visitForInit = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#enhancedForControl.
PlayScriptVisitor.prototype.visitEnhancedForControl = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#parExpression.
PlayScriptVisitor.prototype.visitParExpression = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#expressionList.
PlayScriptVisitor.prototype.visitExpressionList = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#functionCall.
PlayScriptVisitor.prototype.visitFunctionCall = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#expression.
PlayScriptVisitor.prototype.visitExpression = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#primary.
PlayScriptVisitor.prototype.visitPrimary = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#typeList.
PlayScriptVisitor.prototype.visitTypeList = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#typeType.
PlayScriptVisitor.prototype.visitTypeType = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#functionType.
PlayScriptVisitor.prototype.visitFunctionType = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#primitiveType.
PlayScriptVisitor.prototype.visitPrimitiveType = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#creator.
PlayScriptVisitor.prototype.visitCreator = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#superSuffix.
PlayScriptVisitor.prototype.visitSuperSuffix = function (ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by PlayScriptParser#arguments.
PlayScriptVisitor.prototype.visitArguments = function (ctx) {
  return this.visitChildren(ctx)
}

exports.PlayScriptVisitor = PlayScriptVisitor
