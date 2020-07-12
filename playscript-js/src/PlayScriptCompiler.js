const antlr4 = require('antlr4')
const AnnotatedTree = require('./AnnotatedTree')
const { PlayScriptLexer } = require('./PlayScriptLexer')
const { PlayScriptParser } = require('./PlayScriptParser')
const ParseTreeWalker = antlr4.tree.ParseTreeWalker
const TypeAndScopeScanner = require('./TypeAndScopeScanner')
const ASTEvaluator = require('./ASTEvaluator')
const TypeResolver = require('./TypeResolver')

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
    // 类型和scope
    const pass1 = new TypeAndScopeScanner(this.at)
    walker.walk(pass1, this.at.ast)

    //pass2：把变量、类继承、函数声明的类型都解析出来。也就是所有声明时用到类型的地方。
    const pass2 = new TypeResolver(this.at)
    walker.walk(pass2, this.at.ast)

    return this.at
  }

  execute(at) {
    const visitor = new ASTEvaluator(at)
    return visitor.visit(at.ast)
  }
}

module.exports = PlayScriptCompiler
