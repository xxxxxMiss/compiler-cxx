var antlr4 = require('antlr4');
var MyGrammarLexer = require('./MyGrammarLexer').MyGrammarLexer;
var MyGrammarParser = require('./MyGrammarParser').MyGrammarParser;
var MyGrammarListener = require('./MyGrammarListener').MyGrammarListener;

var input = "a = 3 + 2;"
var chars = new antlr4.InputStream(input);
var lexer = new MyGrammarLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
// parser.setBuildParseTree(false)
var tree = parser.expression();
// console.log(tree)

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    // if (ctx.children) {
    //   return ctx.children.map(child => {
    //     if (child.children && child.children.length != 0) {
    //       return child.accept(this);
    //     } else {
    //       console.log(child.getText())
    //       return child.getText();
    //     }
    //   });
    // }
  }
}

tree.accept(new Visitor());

var KeyPrinter = function() {
  MyGrammarListener.call(this); // inherit default listener
  return this;
};

// continue inheriting default listener
KeyPrinter.prototype = Object.create(MyGrammarListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

// override default listener behavior
KeyPrinter.prototype.exitExpression = function(ctx) {
  console.log("Oh, a key!");
};

var printer = new KeyPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);