// Generated from /Users/qsch/workspace/compiler-cxx/playscript-js/MyGrammar.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MyGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, Let=42, Const=43, IntegerLiteral=44, BooleanLiteral=45, 
		NullLiteral=46, VOID=47, SUPER=48, FUNCTION=49, THIS=50, INSTANCEOF=51, 
		IDENTIFIER=52, StringLiteral=53, SEMI=54, WS=55;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"Let", "Const", "IntegerLiteral", "BooleanLiteral", "NullLiteral", "VOID", 
		"SUPER", "FUNCTION", "THIS", "INSTANCEOF", "IDENTIFIER", "StringLiteral", 
		"SEMI", "EscapeSequence", "HexDigit", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'var'", "'.'", "'['", "']'", "'++'", "'--'", "'+'", "'-'", "'~'", 
		"'!'", "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'&'", "'^'", "'|'", "'&&'", "'||'", "'?'", "':'", "'='", "'+='", "'-='", 
		"'*='", "'/='", "'&='", "'|='", "'^='", "'>>='", "'>>>='", "'<<='", "'%='", 
		"'('", "')'", "','", "'let'", "'const'", null, null, "'null'", "'void'", 
		"'super'", "'function'", "'this'", "'instanceof'", null, null, "';'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, "Let", "Const", "IntegerLiteral", 
		"BooleanLiteral", "NullLiteral", "VOID", "SUPER", "FUNCTION", "THIS", 
		"INSTANCEOF", "IDENTIFIER", "StringLiteral", "SEMI", "WS"
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


	public MyGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MyGrammar.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\29\u0156\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\3\2\3\2\3\2\3\2\3"+
		"\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n"+
		"\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\26\3\26\3\27"+
		"\3\27\3\30\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35"+
		"\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3\""+
		"\3#\3#\3#\3$\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3\'\3\'\3\'\3(\3(\3)"+
		"\3)\3*\3*\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3-\6-\u00ec\n-\r-\16-\u00ed\3"+
		".\3.\3.\3.\3.\3.\3.\3.\3.\5.\u00f9\n.\3/\3/\3/\3/\3/\3\60\3\60\3\60\3"+
		"\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3"+
		"\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3"+
		"\64\3\64\3\64\3\64\3\64\3\65\3\65\7\65\u0126\n\65\f\65\16\65\u0129\13"+
		"\65\3\66\3\66\3\66\7\66\u012e\n\66\f\66\16\66\u0131\13\66\3\66\3\66\3"+
		"\67\3\67\38\38\38\38\58\u013b\n8\38\58\u013e\n8\38\38\38\68\u0143\n8\r"+
		"8\168\u0144\38\38\38\38\38\58\u014c\n8\39\39\3:\6:\u0151\n:\r:\16:\u0152"+
		"\3:\3:\2\2;\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65"+
		"i\66k\67m8o\2q\2s9\3\2\13\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\6\2\f\f\17"+
		"\17$$^^\n\2$$))^^ddhhppttvv\3\2\62\65\3\2\629\5\2\62;CHch\5\2\13\f\17"+
		"\17\"\"\2\u015e\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3"+
		"\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2"+
		"\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3"+
		"\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2"+
		"\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\2"+
		"9\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3"+
		"\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2"+
		"\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2"+
		"_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3"+
		"\2\2\2\2m\3\2\2\2\2s\3\2\2\2\3u\3\2\2\2\5y\3\2\2\2\7{\3\2\2\2\t}\3\2\2"+
		"\2\13\177\3\2\2\2\r\u0082\3\2\2\2\17\u0085\3\2\2\2\21\u0087\3\2\2\2\23"+
		"\u0089\3\2\2\2\25\u008b\3\2\2\2\27\u008d\3\2\2\2\31\u008f\3\2\2\2\33\u0091"+
		"\3\2\2\2\35\u0093\3\2\2\2\37\u0095\3\2\2\2!\u0097\3\2\2\2#\u009a\3\2\2"+
		"\2%\u009d\3\2\2\2\'\u00a0\3\2\2\2)\u00a3\3\2\2\2+\u00a5\3\2\2\2-\u00a7"+
		"\3\2\2\2/\u00a9\3\2\2\2\61\u00ac\3\2\2\2\63\u00af\3\2\2\2\65\u00b1\3\2"+
		"\2\2\67\u00b3\3\2\2\29\u00b5\3\2\2\2;\u00b8\3\2\2\2=\u00bb\3\2\2\2?\u00be"+
		"\3\2\2\2A\u00c1\3\2\2\2C\u00c4\3\2\2\2E\u00c7\3\2\2\2G\u00ca\3\2\2\2I"+
		"\u00ce\3\2\2\2K\u00d3\3\2\2\2M\u00d7\3\2\2\2O\u00da\3\2\2\2Q\u00dc\3\2"+
		"\2\2S\u00de\3\2\2\2U\u00e0\3\2\2\2W\u00e4\3\2\2\2Y\u00eb\3\2\2\2[\u00f8"+
		"\3\2\2\2]\u00fa\3\2\2\2_\u00ff\3\2\2\2a\u0104\3\2\2\2c\u010a\3\2\2\2e"+
		"\u0113\3\2\2\2g\u0118\3\2\2\2i\u0123\3\2\2\2k\u012a\3\2\2\2m\u0134\3\2"+
		"\2\2o\u014b\3\2\2\2q\u014d\3\2\2\2s\u0150\3\2\2\2uv\7x\2\2vw\7c\2\2wx"+
		"\7t\2\2x\4\3\2\2\2yz\7\60\2\2z\6\3\2\2\2{|\7]\2\2|\b\3\2\2\2}~\7_\2\2"+
		"~\n\3\2\2\2\177\u0080\7-\2\2\u0080\u0081\7-\2\2\u0081\f\3\2\2\2\u0082"+
		"\u0083\7/\2\2\u0083\u0084\7/\2\2\u0084\16\3\2\2\2\u0085\u0086\7-\2\2\u0086"+
		"\20\3\2\2\2\u0087\u0088\7/\2\2\u0088\22\3\2\2\2\u0089\u008a\7\u0080\2"+
		"\2\u008a\24\3\2\2\2\u008b\u008c\7#\2\2\u008c\26\3\2\2\2\u008d\u008e\7"+
		",\2\2\u008e\30\3\2\2\2\u008f\u0090\7\61\2\2\u0090\32\3\2\2\2\u0091\u0092"+
		"\7\'\2\2\u0092\34\3\2\2\2\u0093\u0094\7>\2\2\u0094\36\3\2\2\2\u0095\u0096"+
		"\7@\2\2\u0096 \3\2\2\2\u0097\u0098\7>\2\2\u0098\u0099\7?\2\2\u0099\"\3"+
		"\2\2\2\u009a\u009b\7@\2\2\u009b\u009c\7?\2\2\u009c$\3\2\2\2\u009d\u009e"+
		"\7?\2\2\u009e\u009f\7?\2\2\u009f&\3\2\2\2\u00a0\u00a1\7#\2\2\u00a1\u00a2"+
		"\7?\2\2\u00a2(\3\2\2\2\u00a3\u00a4\7(\2\2\u00a4*\3\2\2\2\u00a5\u00a6\7"+
		"`\2\2\u00a6,\3\2\2\2\u00a7\u00a8\7~\2\2\u00a8.\3\2\2\2\u00a9\u00aa\7("+
		"\2\2\u00aa\u00ab\7(\2\2\u00ab\60\3\2\2\2\u00ac\u00ad\7~\2\2\u00ad\u00ae"+
		"\7~\2\2\u00ae\62\3\2\2\2\u00af\u00b0\7A\2\2\u00b0\64\3\2\2\2\u00b1\u00b2"+
		"\7<\2\2\u00b2\66\3\2\2\2\u00b3\u00b4\7?\2\2\u00b48\3\2\2\2\u00b5\u00b6"+
		"\7-\2\2\u00b6\u00b7\7?\2\2\u00b7:\3\2\2\2\u00b8\u00b9\7/\2\2\u00b9\u00ba"+
		"\7?\2\2\u00ba<\3\2\2\2\u00bb\u00bc\7,\2\2\u00bc\u00bd\7?\2\2\u00bd>\3"+
		"\2\2\2\u00be\u00bf\7\61\2\2\u00bf\u00c0\7?\2\2\u00c0@\3\2\2\2\u00c1\u00c2"+
		"\7(\2\2\u00c2\u00c3\7?\2\2\u00c3B\3\2\2\2\u00c4\u00c5\7~\2\2\u00c5\u00c6"+
		"\7?\2\2\u00c6D\3\2\2\2\u00c7\u00c8\7`\2\2\u00c8\u00c9\7?\2\2\u00c9F\3"+
		"\2\2\2\u00ca\u00cb\7@\2\2\u00cb\u00cc\7@\2\2\u00cc\u00cd\7?\2\2\u00cd"+
		"H\3\2\2\2\u00ce\u00cf\7@\2\2\u00cf\u00d0\7@\2\2\u00d0\u00d1\7@\2\2\u00d1"+
		"\u00d2\7?\2\2\u00d2J\3\2\2\2\u00d3\u00d4\7>\2\2\u00d4\u00d5\7>\2\2\u00d5"+
		"\u00d6\7?\2\2\u00d6L\3\2\2\2\u00d7\u00d8\7\'\2\2\u00d8\u00d9\7?\2\2\u00d9"+
		"N\3\2\2\2\u00da\u00db\7*\2\2\u00dbP\3\2\2\2\u00dc\u00dd\7+\2\2\u00ddR"+
		"\3\2\2\2\u00de\u00df\7.\2\2\u00dfT\3\2\2\2\u00e0\u00e1\7n\2\2\u00e1\u00e2"+
		"\7g\2\2\u00e2\u00e3\7v\2\2\u00e3V\3\2\2\2\u00e4\u00e5\7e\2\2\u00e5\u00e6"+
		"\7q\2\2\u00e6\u00e7\7p\2\2\u00e7\u00e8\7u\2\2\u00e8\u00e9\7v\2\2\u00e9"+
		"X\3\2\2\2\u00ea\u00ec\t\2\2\2\u00eb\u00ea\3\2\2\2\u00ec\u00ed\3\2\2\2"+
		"\u00ed\u00eb\3\2\2\2\u00ed\u00ee\3\2\2\2\u00eeZ\3\2\2\2\u00ef\u00f0\7"+
		"v\2\2\u00f0\u00f1\7t\2\2\u00f1\u00f2\7w\2\2\u00f2\u00f9\7g\2\2\u00f3\u00f4"+
		"\7h\2\2\u00f4\u00f5\7c\2\2\u00f5\u00f6\7n\2\2\u00f6\u00f7\7u\2\2\u00f7"+
		"\u00f9\7g\2\2\u00f8\u00ef\3\2\2\2\u00f8\u00f3\3\2\2\2\u00f9\\\3\2\2\2"+
		"\u00fa\u00fb\7p\2\2\u00fb\u00fc\7w\2\2\u00fc\u00fd\7n\2\2\u00fd\u00fe"+
		"\7n\2\2\u00fe^\3\2\2\2\u00ff\u0100\7x\2\2\u0100\u0101\7q\2\2\u0101\u0102"+
		"\7k\2\2\u0102\u0103\7f\2\2\u0103`\3\2\2\2\u0104\u0105\7u\2\2\u0105\u0106"+
		"\7w\2\2\u0106\u0107\7r\2\2\u0107\u0108\7g\2\2\u0108\u0109\7t\2\2\u0109"+
		"b\3\2\2\2\u010a\u010b\7h\2\2\u010b\u010c\7w\2\2\u010c\u010d\7p\2\2\u010d"+
		"\u010e\7e\2\2\u010e\u010f\7v\2\2\u010f\u0110\7k\2\2\u0110\u0111\7q\2\2"+
		"\u0111\u0112\7p\2\2\u0112d\3\2\2\2\u0113\u0114\7v\2\2\u0114\u0115\7j\2"+
		"\2\u0115\u0116\7k\2\2\u0116\u0117\7u\2\2\u0117f\3\2\2\2\u0118\u0119\7"+
		"k\2\2\u0119\u011a\7p\2\2\u011a\u011b\7u\2\2\u011b\u011c\7v\2\2\u011c\u011d"+
		"\7c\2\2\u011d\u011e\7p\2\2\u011e\u011f\7e\2\2\u011f\u0120\7g\2\2\u0120"+
		"\u0121\7q\2\2\u0121\u0122\7h\2\2\u0122h\3\2\2\2\u0123\u0127\t\3\2\2\u0124"+
		"\u0126\t\4\2\2\u0125\u0124\3\2\2\2\u0126\u0129\3\2\2\2\u0127\u0125\3\2"+
		"\2\2\u0127\u0128\3\2\2\2\u0128j\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u012f"+
		"\7$\2\2\u012b\u012e\n\5\2\2\u012c\u012e\5o8\2\u012d\u012b\3\2\2\2\u012d"+
		"\u012c\3\2\2\2\u012e\u0131\3\2\2\2\u012f\u012d\3\2\2\2\u012f\u0130\3\2"+
		"\2\2\u0130\u0132\3\2\2\2\u0131\u012f\3\2\2\2\u0132\u0133\7$\2\2\u0133"+
		"l\3\2\2\2\u0134\u0135\7=\2\2\u0135n\3\2\2\2\u0136\u0137\7^\2\2\u0137\u014c"+
		"\t\6\2\2\u0138\u013d\7^\2\2\u0139\u013b\t\7\2\2\u013a\u0139\3\2\2\2\u013a"+
		"\u013b\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013e\t\b\2\2\u013d\u013a\3\2"+
		"\2\2\u013d\u013e\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u014c\t\b\2\2\u0140"+
		"\u0142\7^\2\2\u0141\u0143\7w\2\2\u0142\u0141\3\2\2\2\u0143\u0144\3\2\2"+
		"\2\u0144\u0142\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0147"+
		"\5q9\2\u0147\u0148\5q9\2\u0148\u0149\5q9\2\u0149\u014a\5q9\2\u014a\u014c"+
		"\3\2\2\2\u014b\u0136\3\2\2\2\u014b\u0138\3\2\2\2\u014b\u0140\3\2\2\2\u014c"+
		"p\3\2\2\2\u014d\u014e\t\t\2\2\u014er\3\2\2\2\u014f\u0151\t\n\2\2\u0150"+
		"\u014f\3\2\2\2\u0151\u0152\3\2\2\2\u0152\u0150\3\2\2\2\u0152\u0153\3\2"+
		"\2\2\u0153\u0154\3\2\2\2\u0154\u0155\b:\2\2\u0155t\3\2\2\2\16\2\u00ed"+
		"\u00f8\u0125\u0127\u012d\u012f\u013a\u013d\u0144\u014b\u0152\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}