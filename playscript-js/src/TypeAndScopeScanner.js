const { PlayScriptListener } = require('./PlayScriptListener')
const AnnotatedTree = require('./AnnotatedTree')
const { PlayScriptParser } = require('./PlayScriptParser')
const NameSpace = require('./NameSpace')
const BlockScope = require('./BlockScope')

class TypeAndScopeScanner extends PlayScriptListener {
  constructor(at) {
    super()
    this.at = at
    this.scopeStack = []
  }

  pushScope(scope, ctx) {
    this.at.node2Scope.set(ctx, scope)
    scope.ctx = ctx

    this.scopeStack.push(scope)
    return scope
  }

  popScope() {
    this.scopeStack.pop()
  }

  currentScope() {
    if (this.scopeStack.length) {
      return this.scopeStack[this.scopeStack.length - 1]
    }
    return null
  }

  enterProg(ctx) {
    const scope = new NameSpace('', this.currentScope(), ctx)
    this.at.nameSpace = scope
    this.pushScope(scope, ctx)
  }
  exitProg() {
    this.popScope()
  }

  enterBlock(ctx) {
    if (!(ctx.parent instanceof PlayScriptParser.FunctionBodyContext)) {
      const scope = new BlockScope(this.currentScope(), ctx)
      this.currentScope().addSymbol(scope)
      this.pushScope(scope, ctx)
    }
  }
  exitBlock(ctx) {
    if (!(ctx.parent instanceof PlayScriptParser.FunctionBodyContext)) {
      this.popScope()
    }
  }

  enterStatement(ctx) {
    // 为FOR建立额外的scope
    if (ctx.FOR() != null) {
      const scope = new BlockScope(this.currentScope(), ctx)
      this.currentScope().addSymbol(scope)
      this.pushScope(scope, ctx)
    }
  }
  exitStatement(ctx) {
    if (ctx.FOR() != null) {
      this.popScope()
    }
  }

  enterFunctionDeclaration(ctx) {}
  exitFunctionDeclaration(ctx) {}

  enterClassDeclaration(ctx) {}
  exitClassDeclaration(ctx) {}
}

module.exports = TypeAndScopeScanner
