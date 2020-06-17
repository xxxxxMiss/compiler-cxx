// Generated from /Users/qsch/workspace/compiler-cxx/playscript-js/CommonLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CommonLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Let=1, Const=2, IntegerLiteral=3, BooleanLiteral=4, NullLiteral=5, VOID=6, 
		SUPER=7, FUNCTION=8, THIS=9, INSTANCEOF=10, IDENTIFIER=11, StringLiteral=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"Let", "Const", "IntegerLiteral", "BooleanLiteral", "NullLiteral", "VOID", 
		"SUPER", "FUNCTION", "THIS", "INSTANCEOF", "IDENTIFIER", "StringLiteral", 
		"EscapeSequence", "HexDigit"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'let'", "'const'", null, null, "'null'", "'void'", "'super'", "'function'", 
		"'this'", "'instanceof'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "Let", "Const", "IntegerLiteral", "BooleanLiteral", "NullLiteral", 
		"VOID", "SUPER", "FUNCTION", "THIS", "INSTANCEOF", "IDENTIFIER", "StringLiteral"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CommonLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16\u008c\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\2\3\2\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\4\6\4+\n\4\r\4\16\4,\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\5\58\n\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\7\fe\n\f\f"+
		"\f\16\fh\13\f\3\r\3\r\3\r\7\rm\n\r\f\r\16\rp\13\r\3\r\3\r\3\16\3\16\3"+
		"\16\3\16\5\16x\n\16\3\16\5\16{\n\16\3\16\3\16\3\16\6\16\u0080\n\16\r\16"+
		"\16\16\u0081\3\16\3\16\3\16\3\16\3\16\5\16\u0089\n\16\3\17\3\17\2\2\20"+
		"\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\2\35\2\3"+
		"\2\n\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\6\2\f\f\17\17$$^^\n\2$$))^^ddh"+
		"hppttvv\3\2\62\65\3\2\629\5\2\62;CHch\2\u0093\2\3\3\2\2\2\2\5\3\2\2\2"+
		"\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3"+
		"\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\3\37\3\2\2"+
		"\2\5#\3\2\2\2\7*\3\2\2\2\t\67\3\2\2\2\139\3\2\2\2\r>\3\2\2\2\17C\3\2\2"+
		"\2\21I\3\2\2\2\23R\3\2\2\2\25W\3\2\2\2\27b\3\2\2\2\31i\3\2\2\2\33\u0088"+
		"\3\2\2\2\35\u008a\3\2\2\2\37 \7n\2\2 !\7g\2\2!\"\7v\2\2\"\4\3\2\2\2#$"+
		"\7e\2\2$%\7q\2\2%&\7p\2\2&\'\7u\2\2\'(\7v\2\2(\6\3\2\2\2)+\t\2\2\2*)\3"+
		"\2\2\2+,\3\2\2\2,*\3\2\2\2,-\3\2\2\2-\b\3\2\2\2./\7v\2\2/\60\7t\2\2\60"+
		"\61\7w\2\2\618\7g\2\2\62\63\7h\2\2\63\64\7c\2\2\64\65\7n\2\2\65\66\7u"+
		"\2\2\668\7g\2\2\67.\3\2\2\2\67\62\3\2\2\28\n\3\2\2\29:\7p\2\2:;\7w\2\2"+
		";<\7n\2\2<=\7n\2\2=\f\3\2\2\2>?\7x\2\2?@\7q\2\2@A\7k\2\2AB\7f\2\2B\16"+
		"\3\2\2\2CD\7u\2\2DE\7w\2\2EF\7r\2\2FG\7g\2\2GH\7t\2\2H\20\3\2\2\2IJ\7"+
		"h\2\2JK\7w\2\2KL\7p\2\2LM\7e\2\2MN\7v\2\2NO\7k\2\2OP\7q\2\2PQ\7p\2\2Q"+
		"\22\3\2\2\2RS\7v\2\2ST\7j\2\2TU\7k\2\2UV\7u\2\2V\24\3\2\2\2WX\7k\2\2X"+
		"Y\7p\2\2YZ\7u\2\2Z[\7v\2\2[\\\7c\2\2\\]\7p\2\2]^\7e\2\2^_\7g\2\2_`\7q"+
		"\2\2`a\7h\2\2a\26\3\2\2\2bf\t\3\2\2ce\t\4\2\2dc\3\2\2\2eh\3\2\2\2fd\3"+
		"\2\2\2fg\3\2\2\2g\30\3\2\2\2hf\3\2\2\2in\7$\2\2jm\n\5\2\2km\5\33\16\2"+
		"lj\3\2\2\2lk\3\2\2\2mp\3\2\2\2nl\3\2\2\2no\3\2\2\2oq\3\2\2\2pn\3\2\2\2"+
		"qr\7$\2\2r\32\3\2\2\2st\7^\2\2t\u0089\t\6\2\2uz\7^\2\2vx\t\7\2\2wv\3\2"+
		"\2\2wx\3\2\2\2xy\3\2\2\2y{\t\b\2\2zw\3\2\2\2z{\3\2\2\2{|\3\2\2\2|\u0089"+
		"\t\b\2\2}\177\7^\2\2~\u0080\7w\2\2\177~\3\2\2\2\u0080\u0081\3\2\2\2\u0081"+
		"\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0084\5\35"+
		"\17\2\u0084\u0085\5\35\17\2\u0085\u0086\5\35\17\2\u0086\u0087\5\35\17"+
		"\2\u0087\u0089\3\2\2\2\u0088s\3\2\2\2\u0088u\3\2\2\2\u0088}\3\2\2\2\u0089"+
		"\34\3\2\2\2\u008a\u008b\t\t\2\2\u008b\36\3\2\2\2\r\2,\67dflnwz\u0081\u0088"+
		"\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}