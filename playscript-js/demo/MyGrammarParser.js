// Generated from MyGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MyGrammarListener = require('./MyGrammarListener').MyGrammarListener;
var MyGrammarVisitor = require('./MyGrammarVisitor').MyGrammarVisitor;

var grammarFileName = "MyGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00039\u00ba\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004%\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00045\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004Z",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "f\n\u0004\f\u0004\u000e\u0004i\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005t\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006y\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006\u007f\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u0085\n\u0006\u0003\u0006\u0005\u0006\u0088\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u008d\n\u0007\f\u0007\u000e",
    "\u0007\u0090\u000b\u0007\u0003\b\u0003\b\u0003\b\u0005\b\u0095\n\b\u0003",
    "\b\u0003\b\u0007\b\u0099\n\b\f\b\u000e\b\u009c\u000b\b\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u00a1\n\t\f\t\u000e\t\u00a4\u000b\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u00aa\n\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u00b1\n\u000b\f\u000b\u000e\u000b\u00b4",
    "\u000b\u000b\u0003\f\u0003\f\u0005\f\u00b8\n\f\u0003\f\u0002\u0003\u0006",
    "\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\f\u0004",
    "\u0002.077\u0004\u0002\u0003\u0003,-\u0003\u0002\u0007\n\u0003\u0002",
    "\u000b\f\u0003\u0002\r\u000f\u0003\u0002\t\n\u0003\u0002\u0010\u0013",
    "\u0003\u0002\u0014\u0015\u0003\u0002\u001d(\u0003\u0002\u0007\b\u0002",
    "\u00d5\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001a\u0003\u0002\u0002",
    "\u0002\u0006$\u0003\u0002\u0002\u0002\bs\u0003\u0002\u0002\u0002\n\u0087",
    "\u0003\u0002\u0002\u0002\f\u0089\u0003\u0002\u0002\u0002\u000e\u0094",
    "\u0003\u0002\u0002\u0002\u0010\u009d\u0003\u0002\u0002\u0002\u0012\u00a5",
    "\u0003\u0002\u0002\u0002\u0014\u00ad\u0003\u0002\u0002\u0002\u0016\u00b7",
    "\u0003\u0002\u0002\u0002\u0018\u0019\t\u0002\u0002\u0002\u0019\u0003",
    "\u0003\u0002\u0002\u0002\u001a\u001b\t\u0003\u0002\u0002\u001b\u0005",
    "\u0003\u0002\u0002\u0002\u001c\u001d\b\u0004\u0001\u0002\u001d%\u0005",
    "\b\u0005\u0002\u001e%\u0005\n\u0006\u0002\u001f \t\u0004\u0002\u0002",
    " %\u0005\u0006\u0004\u0012!\"\t\u0005\u0002\u0002\"%\u0005\u0006\u0004",
    "\u0011#%\u00078\u0002\u0002$\u001c\u0003\u0002\u0002\u0002$\u001e\u0003",
    "\u0002\u0002\u0002$\u001f\u0003\u0002\u0002\u0002$!\u0003\u0002\u0002",
    "\u0002$#\u0003\u0002\u0002\u0002%g\u0003\u0002\u0002\u0002&\'\f\u0010",
    "\u0002\u0002\'(\t\u0006\u0002\u0002(f\u0005\u0006\u0004\u0011)*\f\u000f",
    "\u0002\u0002*+\t\u0007\u0002\u0002+f\u0005\u0006\u0004\u0010,4\f\u000e",
    "\u0002\u0002-.\u0007\u0010\u0002\u0002.5\u0007\u0010\u0002\u0002/0\u0007",
    "\u0011\u0002\u000201\u0007\u0011\u0002\u000215\u0007\u0011\u0002\u0002",
    "23\u0007\u0011\u0002\u000235\u0007\u0011\u0002\u00024-\u0003\u0002\u0002",
    "\u00024/\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000256\u0003\u0002",
    "\u0002\u00026f\u0005\u0006\u0004\u000f78\f\r\u0002\u000289\t\b\u0002",
    "\u00029f\u0005\u0006\u0004\u000e:;\f\u000b\u0002\u0002;<\t\t\u0002\u0002",
    "<f\u0005\u0006\u0004\f=>\f\n\u0002\u0002>?\u0007\u0016\u0002\u0002?",
    "f\u0005\u0006\u0004\u000b@A\f\t\u0002\u0002AB\u0007\u0017\u0002\u0002",
    "Bf\u0005\u0006\u0004\nCD\f\b\u0002\u0002DE\u0007\u0018\u0002\u0002E",
    "f\u0005\u0006\u0004\tFG\f\u0007\u0002\u0002GH\u0007\u0019\u0002\u0002",
    "Hf\u0005\u0006\u0004\bIJ\f\u0006\u0002\u0002JK\u0007\u001a\u0002\u0002",
    "Kf\u0005\u0006\u0004\u0007LM\f\u0005\u0002\u0002MN\u0007\u001b\u0002",
    "\u0002NO\u0005\u0006\u0004\u0002OP\u0007\u001c\u0002\u0002PQ\u0005\u0006",
    "\u0004\u0006Qf\u0003\u0002\u0002\u0002RS\f\u0004\u0002\u0002ST\t\n\u0002",
    "\u0002Tf\u0005\u0006\u0004\u0004UV\f\u0016\u0002\u0002VY\u0007\u0004",
    "\u0002\u0002WZ\u00076\u0002\u0002XZ\u0005\n\u0006\u0002YW\u0003\u0002",
    "\u0002\u0002YX\u0003\u0002\u0002\u0002Zf\u0003\u0002\u0002\u0002[\\",
    "\f\u0015\u0002\u0002\\]\u0007\u0005\u0002\u0002]^\u0005\u0006\u0004",
    "\u0002^_\u0007\u0006\u0002\u0002_f\u0003\u0002\u0002\u0002`a\f\u0013",
    "\u0002\u0002af\t\u000b\u0002\u0002bc\f\f\u0002\u0002cd\u00075\u0002",
    "\u0002df\u0005\u000e\b\u0002e&\u0003\u0002\u0002\u0002e)\u0003\u0002",
    "\u0002\u0002e,\u0003\u0002\u0002\u0002e7\u0003\u0002\u0002\u0002e:\u0003",
    "\u0002\u0002\u0002e=\u0003\u0002\u0002\u0002e@\u0003\u0002\u0002\u0002",
    "eC\u0003\u0002\u0002\u0002eF\u0003\u0002\u0002\u0002eI\u0003\u0002\u0002",
    "\u0002eL\u0003\u0002\u0002\u0002eR\u0003\u0002\u0002\u0002eU\u0003\u0002",
    "\u0002\u0002e[\u0003\u0002\u0002\u0002e`\u0003\u0002\u0002\u0002eb\u0003",
    "\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002h\u0007\u0003\u0002\u0002\u0002ig\u0003\u0002",
    "\u0002\u0002jk\u0007)\u0002\u0002kl\u0005\u0006\u0004\u0002lm\u0007",
    "*\u0002\u0002mt\u0003\u0002\u0002\u0002nt\u00074\u0002\u0002op\u0005",
    "\u0002\u0002\u0002pq\b\u0005\u0001\u0002qt\u0003\u0002\u0002\u0002r",
    "t\u00076\u0002\u0002sj\u0003\u0002\u0002\u0002sn\u0003\u0002\u0002\u0002",
    "so\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t\t\u0003\u0002",
    "\u0002\u0002uv\u00076\u0002\u0002vx\u0007)\u0002\u0002wy\u0005\f\u0007",
    "\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z\u0088\u0007*\u0002\u0002{|\u00074\u0002\u0002|~\u0007",
    ")\u0002\u0002}\u007f\u0005\f\u0007\u0002~}\u0003\u0002\u0002\u0002~",
    "\u007f\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080",
    "\u0088\u0007*\u0002\u0002\u0081\u0082\u00072\u0002\u0002\u0082\u0084",
    "\u0007)\u0002\u0002\u0083\u0085\u0005\f\u0007\u0002\u0084\u0083\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u0088\u0007*\u0002\u0002\u0087u\u0003\u0002",
    "\u0002\u0002\u0087{\u0003\u0002\u0002\u0002\u0087\u0081\u0003\u0002",
    "\u0002\u0002\u0088\u000b\u0003\u0002\u0002\u0002\u0089\u008e\u0005\u0006",
    "\u0004\u0002\u008a\u008b\u0007+\u0002\u0002\u008b\u008d\u0005\u0006",
    "\u0004\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002",
    "\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002",
    "\u0002\u0002\u008f\r\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0091\u0095\u0005\u0010\t\u0002\u0092\u0095\u0005\u0012",
    "\n\u0002\u0093\u0095\u0005\u0004\u0003\u0002\u0094\u0091\u0003\u0002",
    "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0093\u0003\u0002",
    "\u0002\u0002\u0095\u009a\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0005",
    "\u0002\u0002\u0097\u0099\u0007\u0006\u0002\u0002\u0098\u0096\u0003\u0002",
    "\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u000f\u0003\u0002",
    "\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u00a2\u00076",
    "\u0002\u0002\u009e\u009f\u0007\u0004\u0002\u0002\u009f\u00a1\u00076",
    "\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a4\u0003\u0002",
    "\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002",
    "\u0002\u0002\u00a3\u0011\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002",
    "\u0002\u0002\u00a5\u00a6\u00073\u0002\u0002\u00a6\u00a7\u0005\u0016",
    "\f\u0002\u00a7\u00a9\u0007)\u0002\u0002\u00a8\u00aa\u0005\u0014\u000b",
    "\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007*\u0002",
    "\u0002\u00ac\u0013\u0003\u0002\u0002\u0002\u00ad\u00b2\u0005\u000e\b",
    "\u0002\u00ae\u00af\u0007+\u0002\u0002\u00af\u00b1\u0005\u000e\b\u0002",
    "\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002",
    "\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002",
    "\u00b3\u0015\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002",
    "\u00b5\u00b8\u0005\u000e\b\u0002\u00b6\u00b8\u00071\u0002\u0002\u00b7",
    "\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8",
    "\u0017\u0003\u0002\u0002\u0002\u0013$4Yegsx~\u0084\u0087\u008e\u0094",
    "\u009a\u00a2\u00a9\u00b2\u00b7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'var'", "'.'", "'['", "']'", "'++'", "'--'", 
                     "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'<'", 
                     "'>'", "'<='", "'>='", "'=='", "'!='", "'&'", "'^'", 
                     "'|'", "'&&'", "'||'", "'?'", "':'", "'='", "'+='", 
                     "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'>>='", 
                     "'>>>='", "'<<='", "'%='", "'('", "')'", "','", "'let'", 
                     "'const'", null, null, "'null'", "'void'", "'super'", 
                     "'function'", "'this'", "'instanceof'", null, null, 
                     "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "Let", "Const", 
                      "IntegerLiteral", "BooleanLiteral", "NullLiteral", 
                      "VOID", "SUPER", "FUNCTION", "THIS", "INSTANCEOF", 
                      "IDENTIFIER", "StringLiteral", "SEMI", "WS" ];

var ruleNames =  [ "literal", "primitiveType", "expression", "primary", 
                   "functionCall", "expressionList", "typeType", "classOrInterfaceType", 
                   "functionType", "typeList", "typeTypeOrVoid" ];

function MyGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MyGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
MyGrammarParser.prototype.constructor = MyGrammarParser;

Object.defineProperty(MyGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MyGrammarParser.EOF = antlr4.Token.EOF;
MyGrammarParser.T__0 = 1;
MyGrammarParser.T__1 = 2;
MyGrammarParser.T__2 = 3;
MyGrammarParser.T__3 = 4;
MyGrammarParser.T__4 = 5;
MyGrammarParser.T__5 = 6;
MyGrammarParser.T__6 = 7;
MyGrammarParser.T__7 = 8;
MyGrammarParser.T__8 = 9;
MyGrammarParser.T__9 = 10;
MyGrammarParser.T__10 = 11;
MyGrammarParser.T__11 = 12;
MyGrammarParser.T__12 = 13;
MyGrammarParser.T__13 = 14;
MyGrammarParser.T__14 = 15;
MyGrammarParser.T__15 = 16;
MyGrammarParser.T__16 = 17;
MyGrammarParser.T__17 = 18;
MyGrammarParser.T__18 = 19;
MyGrammarParser.T__19 = 20;
MyGrammarParser.T__20 = 21;
MyGrammarParser.T__21 = 22;
MyGrammarParser.T__22 = 23;
MyGrammarParser.T__23 = 24;
MyGrammarParser.T__24 = 25;
MyGrammarParser.T__25 = 26;
MyGrammarParser.T__26 = 27;
MyGrammarParser.T__27 = 28;
MyGrammarParser.T__28 = 29;
MyGrammarParser.T__29 = 30;
MyGrammarParser.T__30 = 31;
MyGrammarParser.T__31 = 32;
MyGrammarParser.T__32 = 33;
MyGrammarParser.T__33 = 34;
MyGrammarParser.T__34 = 35;
MyGrammarParser.T__35 = 36;
MyGrammarParser.T__36 = 37;
MyGrammarParser.T__37 = 38;
MyGrammarParser.T__38 = 39;
MyGrammarParser.T__39 = 40;
MyGrammarParser.T__40 = 41;
MyGrammarParser.Let = 42;
MyGrammarParser.Const = 43;
MyGrammarParser.IntegerLiteral = 44;
MyGrammarParser.BooleanLiteral = 45;
MyGrammarParser.NullLiteral = 46;
MyGrammarParser.VOID = 47;
MyGrammarParser.SUPER = 48;
MyGrammarParser.FUNCTION = 49;
MyGrammarParser.THIS = 50;
MyGrammarParser.INSTANCEOF = 51;
MyGrammarParser.IDENTIFIER = 52;
MyGrammarParser.StringLiteral = 53;
MyGrammarParser.SEMI = 54;
MyGrammarParser.WS = 55;

MyGrammarParser.RULE_literal = 0;
MyGrammarParser.RULE_primitiveType = 1;
MyGrammarParser.RULE_expression = 2;
MyGrammarParser.RULE_primary = 3;
MyGrammarParser.RULE_functionCall = 4;
MyGrammarParser.RULE_expressionList = 5;
MyGrammarParser.RULE_typeType = 6;
MyGrammarParser.RULE_classOrInterfaceType = 7;
MyGrammarParser.RULE_functionType = 8;
MyGrammarParser.RULE_typeList = 9;
MyGrammarParser.RULE_typeTypeOrVoid = 10;


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(MyGrammarParser.IntegerLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(MyGrammarParser.BooleanLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(MyGrammarParser.StringLiteral, 0);
};

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(MyGrammarParser.NullLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.LiteralContext = LiteralContext;

MyGrammarParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MyGrammarParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        _la = this._input.LA(1);
        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MyGrammarParser.IntegerLiteral - 44)) | (1 << (MyGrammarParser.BooleanLiteral - 44)) | (1 << (MyGrammarParser.NullLiteral - 44)) | (1 << (MyGrammarParser.StringLiteral - 44)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;

PrimitiveTypeContext.prototype.Let = function() {
    return this.getToken(MyGrammarParser.Let, 0);
};

PrimitiveTypeContext.prototype.Const = function() {
    return this.getToken(MyGrammarParser.Const, 0);
};

PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitPrimitiveType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.PrimitiveTypeContext = PrimitiveTypeContext;

MyGrammarParser.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MyGrammarParser.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        _la = this._input.LA(1);
        if(!(_la===MyGrammarParser.T__0 || _la===MyGrammarParser.Let || _la===MyGrammarParser.Const)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_expression;
    this.prefix = null; // Token
    this.bop = null; // Token
    this.postfix = null; // Token
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

ExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.SEMI = function() {
    return this.getToken(MyGrammarParser.SEMI, 0);
};

ExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(MyGrammarParser.IDENTIFIER, 0);
};

ExpressionContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

ExpressionContext.prototype.INSTANCEOF = function() {
    return this.getToken(MyGrammarParser.INSTANCEOF, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MyGrammarParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, MyGrammarParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 27;
            this.primary();
            break;

        case 2:
            this.state = 28;
            this.functionCall();
            break;

        case 3:
            this.state = 29;
            localctx.prefix = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T__4) | (1 << MyGrammarParser.T__5) | (1 << MyGrammarParser.T__6) | (1 << MyGrammarParser.T__7))) !== 0))) {
                localctx.prefix = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 30;
            this.expression(16);
            break;

        case 4:
            this.state = 31;
            localctx.prefix = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===MyGrammarParser.T__8 || _la===MyGrammarParser.T__9)) {
                localctx.prefix = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 32;
            this.expression(15);
            break;

        case 5:
            this.state = 33;
            this.match(MyGrammarParser.SEMI);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 101;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 99;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 36;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 37;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T__10) | (1 << MyGrammarParser.T__11) | (1 << MyGrammarParser.T__12))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 38;
                    this.expression(15);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 39;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 40;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MyGrammarParser.T__6 || _la===MyGrammarParser.T__7)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 41;
                    this.expression(14);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 42;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 50;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 43;
                        this.match(MyGrammarParser.T__13);
                        this.state = 44;
                        this.match(MyGrammarParser.T__13);
                        break;

                    case 2:
                        this.state = 45;
                        this.match(MyGrammarParser.T__14);
                        this.state = 46;
                        this.match(MyGrammarParser.T__14);
                        this.state = 47;
                        this.match(MyGrammarParser.T__14);
                        break;

                    case 3:
                        this.state = 48;
                        this.match(MyGrammarParser.T__14);
                        this.state = 49;
                        this.match(MyGrammarParser.T__14);
                        break;

                    }
                    this.state = 52;
                    this.expression(13);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 53;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 54;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T__13) | (1 << MyGrammarParser.T__14) | (1 << MyGrammarParser.T__15) | (1 << MyGrammarParser.T__16))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 55;
                    this.expression(12);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 56;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 57;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MyGrammarParser.T__17 || _la===MyGrammarParser.T__18)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 58;
                    this.expression(10);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 59;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 60;
                    localctx.bop = this.match(MyGrammarParser.T__19);
                    this.state = 61;
                    this.expression(9);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 62;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 63;
                    localctx.bop = this.match(MyGrammarParser.T__20);
                    this.state = 64;
                    this.expression(8);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 65;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 66;
                    localctx.bop = this.match(MyGrammarParser.T__21);
                    this.state = 67;
                    this.expression(7);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 68;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 69;
                    localctx.bop = this.match(MyGrammarParser.T__22);
                    this.state = 70;
                    this.expression(6);
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 71;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 72;
                    localctx.bop = this.match(MyGrammarParser.T__23);
                    this.state = 73;
                    this.expression(5);
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 74;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 75;
                    localctx.bop = this.match(MyGrammarParser.T__24);
                    this.state = 76;
                    this.expression(0);
                    this.state = 77;
                    this.match(MyGrammarParser.T__25);
                    this.state = 78;
                    this.expression(4);
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 80;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 81;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (MyGrammarParser.T__26 - 27)) | (1 << (MyGrammarParser.T__27 - 27)) | (1 << (MyGrammarParser.T__28 - 27)) | (1 << (MyGrammarParser.T__29 - 27)) | (1 << (MyGrammarParser.T__30 - 27)) | (1 << (MyGrammarParser.T__31 - 27)) | (1 << (MyGrammarParser.T__32 - 27)) | (1 << (MyGrammarParser.T__33 - 27)) | (1 << (MyGrammarParser.T__34 - 27)) | (1 << (MyGrammarParser.T__35 - 27)) | (1 << (MyGrammarParser.T__36 - 27)) | (1 << (MyGrammarParser.T__37 - 27)))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 82;
                    this.expression(2);
                    break;

                case 13:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 83;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 84;
                    localctx.bop = this.match(MyGrammarParser.T__1);
                    this.state = 87;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 85;
                        this.match(MyGrammarParser.IDENTIFIER);
                        break;

                    case 2:
                        this.state = 86;
                        this.functionCall();
                        break;

                    }
                    break;

                case 14:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 90;
                    this.match(MyGrammarParser.T__2);
                    this.state = 91;
                    this.expression(0);
                    this.state = 92;
                    this.match(MyGrammarParser.T__3);
                    break;

                case 15:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 95;
                    localctx.postfix = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MyGrammarParser.T__4 || _la===MyGrammarParser.T__5)) {
                        localctx.postfix = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    break;

                case 16:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expression);
                    this.state = 96;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 97;
                    localctx.bop = this.match(MyGrammarParser.INSTANCEOF);
                    this.state = 98;
                    this.typeType();
                    break;

                } 
            }
            this.state = 103;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_primary;
    this._literal = null; // LiteralContext
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryContext.prototype.THIS = function() {
    return this.getToken(MyGrammarParser.THIS, 0);
};

PrimaryContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryContext.prototype.IDENTIFIER = function() {
    return this.getToken(MyGrammarParser.IDENTIFIER, 0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.PrimaryContext = PrimaryContext;

MyGrammarParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MyGrammarParser.RULE_primary);
    try {
        this.state = 113;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MyGrammarParser.T__38:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.match(MyGrammarParser.T__38);
            this.state = 105;
            this.expression(0);
            this.state = 106;
            this.match(MyGrammarParser.T__39);
            break;
        case MyGrammarParser.THIS:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.match(MyGrammarParser.THIS);
            break;
        case MyGrammarParser.IntegerLiteral:
        case MyGrammarParser.BooleanLiteral:
        case MyGrammarParser.NullLiteral:
        case MyGrammarParser.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            localctx._literal = this.literal();
            console.log((localctx._literal===null ? null : this._input.getText(new antlr4.Interval(localctx._literal.start,localctx._literal.stop))))
            break;
        case MyGrammarParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 4);
            this.state = 112;
            this.match(MyGrammarParser.IDENTIFIER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.IDENTIFIER = function() {
    return this.getToken(MyGrammarParser.IDENTIFIER, 0);
};

FunctionCallContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallContext.prototype.THIS = function() {
    return this.getToken(MyGrammarParser.THIS, 0);
};

FunctionCallContext.prototype.SUPER = function() {
    return this.getToken(MyGrammarParser.SUPER, 0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.FunctionCallContext = FunctionCallContext;

MyGrammarParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MyGrammarParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.state = 133;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MyGrammarParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 115;
            this.match(MyGrammarParser.IDENTIFIER);
            this.state = 116;
            this.match(MyGrammarParser.T__38);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T__4) | (1 << MyGrammarParser.T__5) | (1 << MyGrammarParser.T__6) | (1 << MyGrammarParser.T__7) | (1 << MyGrammarParser.T__8) | (1 << MyGrammarParser.T__9))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (MyGrammarParser.T__38 - 39)) | (1 << (MyGrammarParser.IntegerLiteral - 39)) | (1 << (MyGrammarParser.BooleanLiteral - 39)) | (1 << (MyGrammarParser.NullLiteral - 39)) | (1 << (MyGrammarParser.SUPER - 39)) | (1 << (MyGrammarParser.THIS - 39)) | (1 << (MyGrammarParser.IDENTIFIER - 39)) | (1 << (MyGrammarParser.StringLiteral - 39)) | (1 << (MyGrammarParser.SEMI - 39)))) !== 0)) {
                this.state = 117;
                this.expressionList();
            }

            this.state = 120;
            this.match(MyGrammarParser.T__39);
            break;
        case MyGrammarParser.THIS:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.match(MyGrammarParser.THIS);
            this.state = 122;
            this.match(MyGrammarParser.T__38);
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T__4) | (1 << MyGrammarParser.T__5) | (1 << MyGrammarParser.T__6) | (1 << MyGrammarParser.T__7) | (1 << MyGrammarParser.T__8) | (1 << MyGrammarParser.T__9))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (MyGrammarParser.T__38 - 39)) | (1 << (MyGrammarParser.IntegerLiteral - 39)) | (1 << (MyGrammarParser.BooleanLiteral - 39)) | (1 << (MyGrammarParser.NullLiteral - 39)) | (1 << (MyGrammarParser.SUPER - 39)) | (1 << (MyGrammarParser.THIS - 39)) | (1 << (MyGrammarParser.IDENTIFIER - 39)) | (1 << (MyGrammarParser.StringLiteral - 39)) | (1 << (MyGrammarParser.SEMI - 39)))) !== 0)) {
                this.state = 123;
                this.expressionList();
            }

            this.state = 126;
            this.match(MyGrammarParser.T__39);
            break;
        case MyGrammarParser.SUPER:
            this.enterOuterAlt(localctx, 3);
            this.state = 127;
            this.match(MyGrammarParser.SUPER);
            this.state = 128;
            this.match(MyGrammarParser.T__38);
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T__4) | (1 << MyGrammarParser.T__5) | (1 << MyGrammarParser.T__6) | (1 << MyGrammarParser.T__7) | (1 << MyGrammarParser.T__8) | (1 << MyGrammarParser.T__9))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (MyGrammarParser.T__38 - 39)) | (1 << (MyGrammarParser.IntegerLiteral - 39)) | (1 << (MyGrammarParser.BooleanLiteral - 39)) | (1 << (MyGrammarParser.NullLiteral - 39)) | (1 << (MyGrammarParser.SUPER - 39)) | (1 << (MyGrammarParser.THIS - 39)) | (1 << (MyGrammarParser.IDENTIFIER - 39)) | (1 << (MyGrammarParser.StringLiteral - 39)) | (1 << (MyGrammarParser.SEMI - 39)))) !== 0)) {
                this.state = 129;
                this.expressionList();
            }

            this.state = 132;
            this.match(MyGrammarParser.T__39);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitExpressionList(this);
	}
};

ExpressionListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitExpressionList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.ExpressionListContext = ExpressionListContext;

MyGrammarParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MyGrammarParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.expression(0);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MyGrammarParser.T__40) {
            this.state = 136;
            this.match(MyGrammarParser.T__40);
            this.state = 137;
            this.expression(0);
            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_typeType;
    return this;
}

TypeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeTypeContext.prototype.constructor = TypeTypeContext;

TypeTypeContext.prototype.classOrInterfaceType = function() {
    return this.getTypedRuleContext(ClassOrInterfaceTypeContext,0);
};

TypeTypeContext.prototype.functionType = function() {
    return this.getTypedRuleContext(FunctionTypeContext,0);
};

TypeTypeContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

TypeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterTypeType(this);
	}
};

TypeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitTypeType(this);
	}
};

TypeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitTypeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.TypeTypeContext = TypeTypeContext;

MyGrammarParser.prototype.typeType = function() {

    var localctx = new TypeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MyGrammarParser.RULE_typeType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MyGrammarParser.IDENTIFIER:
            this.state = 143;
            this.classOrInterfaceType();
            break;
        case MyGrammarParser.FUNCTION:
            this.state = 144;
            this.functionType();
            break;
        case MyGrammarParser.T__0:
        case MyGrammarParser.Let:
        case MyGrammarParser.Const:
            this.state = 145;
            this.primitiveType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 152;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 148;
                this.match(MyGrammarParser.T__2);
                this.state = 149;
                this.match(MyGrammarParser.T__3); 
            }
            this.state = 154;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassOrInterfaceTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_classOrInterfaceType;
    return this;
}

ClassOrInterfaceTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassOrInterfaceTypeContext.prototype.constructor = ClassOrInterfaceTypeContext;

ClassOrInterfaceTypeContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyGrammarParser.IDENTIFIER);
    } else {
        return this.getToken(MyGrammarParser.IDENTIFIER, i);
    }
};


ClassOrInterfaceTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterClassOrInterfaceType(this);
	}
};

ClassOrInterfaceTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitClassOrInterfaceType(this);
	}
};

ClassOrInterfaceTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitClassOrInterfaceType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.ClassOrInterfaceTypeContext = ClassOrInterfaceTypeContext;

MyGrammarParser.prototype.classOrInterfaceType = function() {

    var localctx = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MyGrammarParser.RULE_classOrInterfaceType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(MyGrammarParser.IDENTIFIER);
        this.state = 160;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 156;
                this.match(MyGrammarParser.T__1);
                this.state = 157;
                this.match(MyGrammarParser.IDENTIFIER); 
            }
            this.state = 162;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_functionType;
    return this;
}

FunctionTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionTypeContext.prototype.constructor = FunctionTypeContext;

FunctionTypeContext.prototype.FUNCTION = function() {
    return this.getToken(MyGrammarParser.FUNCTION, 0);
};

FunctionTypeContext.prototype.typeTypeOrVoid = function() {
    return this.getTypedRuleContext(TypeTypeOrVoidContext,0);
};

FunctionTypeContext.prototype.typeList = function() {
    return this.getTypedRuleContext(TypeListContext,0);
};

FunctionTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterFunctionType(this);
	}
};

FunctionTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitFunctionType(this);
	}
};

FunctionTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitFunctionType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.FunctionTypeContext = FunctionTypeContext;

MyGrammarParser.prototype.functionType = function() {

    var localctx = new FunctionTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MyGrammarParser.RULE_functionType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(MyGrammarParser.FUNCTION);
        this.state = 164;
        this.typeTypeOrVoid();
        this.state = 165;
        this.match(MyGrammarParser.T__38);
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MyGrammarParser.T__0 || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (MyGrammarParser.Let - 42)) | (1 << (MyGrammarParser.Const - 42)) | (1 << (MyGrammarParser.FUNCTION - 42)) | (1 << (MyGrammarParser.IDENTIFIER - 42)))) !== 0)) {
            this.state = 166;
            this.typeList();
        }

        this.state = 169;
        this.match(MyGrammarParser.T__39);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_typeList;
    return this;
}

TypeListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeListContext.prototype.constructor = TypeListContext;

TypeListContext.prototype.typeType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeTypeContext);
    } else {
        return this.getTypedRuleContext(TypeTypeContext,i);
    }
};

TypeListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterTypeList(this);
	}
};

TypeListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitTypeList(this);
	}
};

TypeListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitTypeList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.TypeListContext = TypeListContext;

MyGrammarParser.prototype.typeList = function() {

    var localctx = new TypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MyGrammarParser.RULE_typeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.typeType();
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MyGrammarParser.T__40) {
            this.state = 172;
            this.match(MyGrammarParser.T__40);
            this.state = 173;
            this.typeType();
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeTypeOrVoidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_typeTypeOrVoid;
    return this;
}

TypeTypeOrVoidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeTypeOrVoidContext.prototype.constructor = TypeTypeOrVoidContext;

TypeTypeOrVoidContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

TypeTypeOrVoidContext.prototype.VOID = function() {
    return this.getToken(MyGrammarParser.VOID, 0);
};

TypeTypeOrVoidContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.enterTypeTypeOrVoid(this);
	}
};

TypeTypeOrVoidContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyGrammarListener ) {
        listener.exitTypeTypeOrVoid(this);
	}
};

TypeTypeOrVoidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyGrammarVisitor ) {
        return visitor.visitTypeTypeOrVoid(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyGrammarParser.TypeTypeOrVoidContext = TypeTypeOrVoidContext;

MyGrammarParser.prototype.typeTypeOrVoid = function() {

    var localctx = new TypeTypeOrVoidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MyGrammarParser.RULE_typeTypeOrVoid);
    try {
        this.state = 181;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MyGrammarParser.T__0:
        case MyGrammarParser.Let:
        case MyGrammarParser.Const:
        case MyGrammarParser.FUNCTION:
        case MyGrammarParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.typeType();
            break;
        case MyGrammarParser.VOID:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            this.match(MyGrammarParser.VOID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MyGrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MyGrammarParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 6);
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 4);
		case 10:
			return this.precpred(this._ctx, 3);
		case 11:
			return this.precpred(this._ctx, 2);
		case 12:
			return this.precpred(this._ctx, 20);
		case 13:
			return this.precpred(this._ctx, 19);
		case 14:
			return this.precpred(this._ctx, 17);
		case 15:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MyGrammarParser = MyGrammarParser;
