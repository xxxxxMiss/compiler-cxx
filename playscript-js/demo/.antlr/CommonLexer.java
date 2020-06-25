// Generated from /Users/qsch/workspace/compiler-cxx/playscript-js/demo/CommonLexer.g4 by ANTLR 4.7.1
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
		SUPER=7, FUNCTION=8, THIS=9, INSTANCEOF=10, IDENTIFIER=11, StringLiteral=12, 
		SEMI=13, WS=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"Let", "Const", "IntegerLiteral", "BooleanLiteral", "NullLiteral", "VOID", 
		"SUPER", "FUNCTION", "THIS", "INSTANCEOF", "IDENTIFIER", "StringLiteral", 
		"SEMI", "EscapeSequence", "HexDigit", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'let'", "'const'", null, null, "'null'", "'void'", "'super'", "'function'", 
		"'this'", "'instanceof'", null, null, "';'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "Let", "Const", "IntegerLiteral", "BooleanLiteral", "NullLiteral", 
		"VOID", "SUPER", "FUNCTION", "THIS", "INSTANCEOF", "IDENTIFIER", "StringLiteral", 
		"SEMI", "WS"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20\u0099\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\6\4/\n\4\r\4\16\4\60\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5<\n\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3"+
		"\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\7\fi\n\f\f\f\16\fl\13\f\3\r\3\r\3\r\7\rq\n\r\f\r\16\rt\13\r\3"+
		"\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\5\17~\n\17\3\17\5\17\u0081\n\17\3"+
		"\17\3\17\3\17\6\17\u0086\n\17\r\17\16\17\u0087\3\17\3\17\3\17\3\17\3\17"+
		"\5\17\u008f\n\17\3\20\3\20\3\21\6\21\u0094\n\21\r\21\16\21\u0095\3\21"+
		"\3\21\2\2\22\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16"+
		"\33\17\35\2\37\2!\20\3\2\13\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\6\2\f\f"+
		"\17\17$$^^\n\2$$))^^ddhhppttvv\3\2\62\65\3\2\629\5\2\62;CHch\5\2\13\f"+
		"\17\17\"\"\2\u00a1\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2!\3\2\2\2\3#\3\2\2\2\5\'\3"+
		"\2\2\2\7.\3\2\2\2\t;\3\2\2\2\13=\3\2\2\2\rB\3\2\2\2\17G\3\2\2\2\21M\3"+
		"\2\2\2\23V\3\2\2\2\25[\3\2\2\2\27f\3\2\2\2\31m\3\2\2\2\33w\3\2\2\2\35"+
		"\u008e\3\2\2\2\37\u0090\3\2\2\2!\u0093\3\2\2\2#$\7n\2\2$%\7g\2\2%&\7v"+
		"\2\2&\4\3\2\2\2\'(\7e\2\2()\7q\2\2)*\7p\2\2*+\7u\2\2+,\7v\2\2,\6\3\2\2"+
		"\2-/\t\2\2\2.-\3\2\2\2/\60\3\2\2\2\60.\3\2\2\2\60\61\3\2\2\2\61\b\3\2"+
		"\2\2\62\63\7v\2\2\63\64\7t\2\2\64\65\7w\2\2\65<\7g\2\2\66\67\7h\2\2\67"+
		"8\7c\2\289\7n\2\29:\7u\2\2:<\7g\2\2;\62\3\2\2\2;\66\3\2\2\2<\n\3\2\2\2"+
		"=>\7p\2\2>?\7w\2\2?@\7n\2\2@A\7n\2\2A\f\3\2\2\2BC\7x\2\2CD\7q\2\2DE\7"+
		"k\2\2EF\7f\2\2F\16\3\2\2\2GH\7u\2\2HI\7w\2\2IJ\7r\2\2JK\7g\2\2KL\7t\2"+
		"\2L\20\3\2\2\2MN\7h\2\2NO\7w\2\2OP\7p\2\2PQ\7e\2\2QR\7v\2\2RS\7k\2\2S"+
		"T\7q\2\2TU\7p\2\2U\22\3\2\2\2VW\7v\2\2WX\7j\2\2XY\7k\2\2YZ\7u\2\2Z\24"+
		"\3\2\2\2[\\\7k\2\2\\]\7p\2\2]^\7u\2\2^_\7v\2\2_`\7c\2\2`a\7p\2\2ab\7e"+
		"\2\2bc\7g\2\2cd\7q\2\2de\7h\2\2e\26\3\2\2\2fj\t\3\2\2gi\t\4\2\2hg\3\2"+
		"\2\2il\3\2\2\2jh\3\2\2\2jk\3\2\2\2k\30\3\2\2\2lj\3\2\2\2mr\7$\2\2nq\n"+
		"\5\2\2oq\5\35\17\2pn\3\2\2\2po\3\2\2\2qt\3\2\2\2rp\3\2\2\2rs\3\2\2\2s"+
		"u\3\2\2\2tr\3\2\2\2uv\7$\2\2v\32\3\2\2\2wx\7=\2\2x\34\3\2\2\2yz\7^\2\2"+
		"z\u008f\t\6\2\2{\u0080\7^\2\2|~\t\7\2\2}|\3\2\2\2}~\3\2\2\2~\177\3\2\2"+
		"\2\177\u0081\t\b\2\2\u0080}\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0082\3"+
		"\2\2\2\u0082\u008f\t\b\2\2\u0083\u0085\7^\2\2\u0084\u0086\7w\2\2\u0085"+
		"\u0084\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088\3\2"+
		"\2\2\u0088\u0089\3\2\2\2\u0089\u008a\5\37\20\2\u008a\u008b\5\37\20\2\u008b"+
		"\u008c\5\37\20\2\u008c\u008d\5\37\20\2\u008d\u008f\3\2\2\2\u008ey\3\2"+
		"\2\2\u008e{\3\2\2\2\u008e\u0083\3\2\2\2\u008f\36\3\2\2\2\u0090\u0091\t"+
		"\t\2\2\u0091 \3\2\2\2\u0092\u0094\t\n\2\2\u0093\u0092\3\2\2\2\u0094\u0095"+
		"\3\2\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0097\3\2\2\2\u0097"+
		"\u0098\b\21\2\2\u0098\"\3\2\2\2\16\2\60;hjpr}\u0080\u0087\u008e\u0095"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}