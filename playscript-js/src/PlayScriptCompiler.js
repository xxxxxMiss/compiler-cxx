const antlr4 = require('antlr4')
const AnnotatedTree = require('./AnnotatedTree')
const { PlayScriptLexer } = require('./PlayScriptLexer')
const { PlayScriptParser } = require('./PlayScriptParser')
const ParseTreeWalker = antlr4.tree.ParseTreeWalker
const TypeAndScopeScanner = require('./TypeAndScopeScanner')
const ASTEvaluator = require('./ASTEvaluator')

class PlayScriptCompiler {
  // AnnotatedTree
  at = null
  // PlayScriptLexer
  lexer = null
  // PlayScriptParser
  parser = null

  compile(script, verbose, ast_dump) {
    this.at = new AnnotatedTree()
    this.lexer = new PlayScriptLexer(new antlr4.InputStream(script))
    const tokens = new antlr4.CommonTokenStream(this.lexer)
    this.parser = new PlayScriptParser(tokens)

    // TODO: location of prog()
    this.at.ast = this.parser.prog()
    // 语义分析
    const walker = new ParseTreeWalker()

    // 多步的语义解析
    const pass1 = new TypeAndScopeScanner(this.at)
    walker.walk(pass1, this.at.ast)

    return this.at
  }

  execute(at) {
    const visitor = new ASTEvaluator(at)
    return visitor.visit(at.ast)
  }
}

module.exports = PlayScriptCompiler
