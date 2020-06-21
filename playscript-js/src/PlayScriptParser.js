// Generated from src/PlayScript.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlayScriptListener = require('./PlayScriptListener').PlayScriptListener;
var PlayScriptVisitor = require('./PlayScriptVisitor').PlayScriptVisitor;

var grammarFileName = "PlayScript.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003s\u024d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002g\n\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002k\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0007\u0003q\n\u0003\f\u0003\u000e\u0003t\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004z\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u007f\n\u0005\u0003\u0006\u0005",
    "\u0006\u0082\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006\u0088\n\u0006\f\u0006\u000e\u0006\u008b\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u008f\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u0095\n\u0007\u0003\b\u0003\b\u0005",
    "\b\u0099\n\b\u0003\t\u0003\t\u0003\t\u0007\t\u009e\n\t\f\t\u000e\t\u00a1",
    "\u000b\t\u0003\n\u0003\n\u0005\n\u00a5\n\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u00ac\n\u000b\f\u000b\u000e\u000b",
    "\u00af\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b3\n\u000b",
    "\u0003\u000b\u0005\u000b\u00b6\n\u000b\u0003\f\u0007\f\u00b9\n\f\f\f",
    "\u000e\f\u00bc\u000b\f\u0003\f\u0003\f\u0003\f\u0003\r\u0007\r\u00c2",
    "\n\r\f\r\u000e\r\u00c5\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00d0",
    "\n\u000f\f\u000f\u000e\u000f\u00d3\u000b\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00dc\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u00e4\n\u0012\f\u0012\u000e\u0012\u00e7",
    "\u000b\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00ec\n",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00f1\n\u0014",
    "\f\u0014\u000e\u0014\u00f4\u000b\u0014\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00f8\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0007\u0016\u00fe\n\u0016\f\u0016\u000e\u0016\u0101\u000b\u0016\u0003",
    "\u0016\u0005\u0016\u0104\n\u0016\u0005\u0016\u0106\n\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u010d\n",
    "\u0017\f\u0017\u000e\u0017\u0110\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u0116\n\u0018\u0005\u0018\u0118",
    "\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0120\n\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0007\u001e\u012d\n\u001e\f\u001e\u000e",
    "\u001e\u0130\u000b\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0138\n\u001f\u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u0140\n \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0007 \u0156\n \f \u000e \u0159",
    "\u000b \u0003 \u0007 \u015c\n \f \u000e \u015f\u000b \u0003 \u0003 ",
    "\u0003 \u0003 \u0005 \u0165\n \u0003 \u0003 \u0003 \u0005 \u016a\n ",
    "\u0003 \u0003 \u0003 \u0005 \u016f\n \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u0179\n \u0003!\u0006!\u017c\n!\r!\u000e",
    "!\u017d\u0003!\u0006!\u0181\n!\r!\u000e!\u0182\u0003\"\u0003\"\u0003",
    "\"\u0005\"\u0188\n\"\u0003\"\u0003\"\u0003\"\u0005\"\u018d\n\"\u0003",
    "#\u0003#\u0005#\u0191\n#\u0003#\u0003#\u0005#\u0195\n#\u0003#\u0003",
    "#\u0005#\u0199\n#\u0005#\u019b\n#\u0003$\u0003$\u0005$\u019f\n$\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003\'\u0007\'\u01ad\n\'\f\'\u000e\'\u01b0\u000b\'\u0003(\u0003",
    "(\u0003(\u0005(\u01b5\n(\u0003(\u0003(\u0003(\u0003(\u0005(\u01bb\n",
    "(\u0003(\u0003(\u0003(\u0003(\u0005(\u01c1\n(\u0003(\u0005(\u01c4\n",
    "(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u01cd\n)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0005)\u01dd\n)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0005)\u0203\n)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0007)\u020f\n)\f)\u000e)\u0212\u000b)\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u021c\n*\u0003",
    "+\u0003+\u0003+\u0007+\u0221\n+\f+\u000e+\u0224\u000b+\u0003,\u0003",
    ",\u0003,\u0005,\u0229\n,\u0003,\u0003,\u0007,\u022d\n,\f,\u000e,\u0230",
    "\u000b,\u0003-\u0003-\u0003-\u0003-\u0005-\u0236\n-\u0003-\u0003-\u0003",
    ".\u0003.\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00050\u0243",
    "\n0\u00050\u0245\n0\u00031\u00031\u00051\u0249\n1\u00031\u00031\u0003",
    "1\u0002\u0003P2\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`\u0002\u000e",
    "\u0004\u0002\u0013\u0013**\u0003\u00027:\u0003\u0002;<\u0003\u0002W",
    "Z\u0003\u0002MN\u0004\u0002[\\``\u0003\u0002YZ\u0004\u0002KLRS\u0004",
    "\u0002QQTT\u0004\u0002JJak\u0003\u0002WX\u000b\u0002\u0005\u0005\u0007",
    "\u0007\n\n\u0010\u0010\u0016\u0016\u001d\u001d\u001f\u001f\'\'66\u0002",
    "\u0286\u0002b\u0003\u0002\u0002\u0002\u0004n\u0003\u0002\u0002\u0002",
    "\u0006y\u0003\u0002\u0002\u0002\b~\u0003\u0002\u0002\u0002\n\u0081\u0003",
    "\u0002\u0002\u0002\f\u0094\u0003\u0002\u0002\u0002\u000e\u0098\u0003",
    "\u0002\u0002\u0002\u0010\u009a\u0003\u0002\u0002\u0002\u0012\u00a2\u0003",
    "\u0002\u0002\u0002\u0014\u00b5\u0003\u0002\u0002\u0002\u0016\u00ba\u0003",
    "\u0002\u0002\u0002\u0018\u00c3\u0003\u0002\u0002\u0002\u001a\u00ca\u0003",
    "\u0002\u0002\u0002\u001c\u00cc\u0003\u0002\u0002\u0002\u001e\u00d4\u0003",
    "\u0002\u0002\u0002 \u00d7\u0003\u0002\u0002\u0002\"\u00df\u0003\u0002",
    "\u0002\u0002$\u00e8\u0003\u0002\u0002\u0002&\u00ed\u0003\u0002\u0002",
    "\u0002(\u00f7\u0003\u0002\u0002\u0002*\u00f9\u0003\u0002\u0002\u0002",
    ",\u0109\u0003\u0002\u0002\u0002.\u0117\u0003\u0002\u0002\u00020\u011f",
    "\u0003\u0002\u0002\u00022\u0121\u0003\u0002\u0002\u00024\u0123\u0003",
    "\u0002\u0002\u00026\u0125\u0003\u0002\u0002\u00028\u0127\u0003\u0002",
    "\u0002\u0002:\u012e\u0003\u0002\u0002\u0002<\u0137\u0003\u0002\u0002",
    "\u0002>\u0178\u0003\u0002\u0002\u0002@\u017b\u0003\u0002\u0002\u0002",
    "B\u018c\u0003\u0002\u0002\u0002D\u019a\u0003\u0002\u0002\u0002F\u019e",
    "\u0003\u0002\u0002\u0002H\u01a0\u0003\u0002\u0002\u0002J\u01a5\u0003",
    "\u0002\u0002\u0002L\u01a9\u0003\u0002\u0002\u0002N\u01c3\u0003\u0002",
    "\u0002\u0002P\u01cc\u0003\u0002\u0002\u0002R\u021b\u0003\u0002\u0002",
    "\u0002T\u021d\u0003\u0002\u0002\u0002V\u0228\u0003\u0002\u0002\u0002",
    "X\u0231\u0003\u0002\u0002\u0002Z\u0239\u0003\u0002\u0002\u0002\\\u023b",
    "\u0003\u0002\u0002\u0002^\u0244\u0003\u0002\u0002\u0002`\u0246\u0003",
    "\u0002\u0002\u0002bc\u0007\u000b\u0002\u0002cf\u0007s\u0002\u0002de",
    "\u0007\u0013\u0002\u0002eg\u0005V,\u0002fd\u0003\u0002\u0002\u0002f",
    "g\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hi\u0007\u001a\u0002",
    "\u0002ik\u0005T+\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002kl\u0003\u0002\u0002\u0002lm\u0005\u0004\u0003\u0002m\u0003\u0003",
    "\u0002\u0002\u0002nr\u0007C\u0002\u0002oq\u0005\u0006\u0004\u0002po",
    "\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002",
    "\u0002rs\u0003\u0002\u0002\u0002su\u0003\u0002\u0002\u0002tr\u0003\u0002",
    "\u0002\u0002uv\u0007D\u0002\u0002v\u0005\u0003\u0002\u0002\u0002wz\u0007",
    "G\u0002\u0002xz\u0005\b\u0005\u0002yw\u0003\u0002\u0002\u0002yx\u0003",
    "\u0002\u0002\u0002z\u0007\u0003\u0002\u0002\u0002{\u007f\u0005\n\u0006",
    "\u0002|\u007f\u0005\u001e\u0010\u0002}\u007f\u0005\u0002\u0002\u0002",
    "~{\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~}\u0003\u0002\u0002",
    "\u0002\u007f\t\u0003\u0002\u0002\u0002\u0080\u0082\u0005\u000e\b\u0002",
    "\u0081\u0080\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0007s\u0002\u0002",
    "\u0084\u0089\u0005\u0012\n\u0002\u0085\u0086\u0007E\u0002\u0002\u0086",
    "\u0088\u0007F\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088",
    "\u008b\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0003\u0002\u0002\u0002\u008a\u008e\u0003\u0002\u0002\u0002\u008b",
    "\u0089\u0003\u0002\u0002\u0002\u008c\u008d\u0007/\u0002\u0002\u008d",
    "\u008f\u0005\u0010\t\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0005\f\u0007\u0002\u0091\u000b\u0003\u0002\u0002\u0002\u0092",
    "\u0095\u00058\u001d\u0002\u0093\u0095\u0007G\u0002\u0002\u0094\u0092",
    "\u0003\u0002\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\r",
    "\u0003\u0002\u0002\u0002\u0096\u0099\u0005V,\u0002\u0097\u0099\u0007",
    "2\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0097\u0003",
    "\u0002\u0002\u0002\u0099\u000f\u0003\u0002\u0002\u0002\u009a\u009f\u0005",
    "\u001c\u000f\u0002\u009b\u009c\u0007H\u0002\u0002\u009c\u009e\u0005",
    "\u001c\u000f\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a1\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003",
    "\u0002\u0002\u0002\u00a0\u0011\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a2\u00a4\u0007A\u0002\u0002\u00a3\u00a5\u0005",
    "\u0014\u000b\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007",
    "B\u0002\u0002\u00a7\u0013\u0003\u0002\u0002\u0002\u00a8\u00ad\u0005",
    "\u0016\f\u0002\u00a9\u00aa\u0007H\u0002\u0002\u00aa\u00ac\u0005\u0016",
    "\f\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002",
    "\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002",
    "\u0002\u0002\u00ae\u00b2\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0007H\u0002\u0002\u00b1\u00b3\u0005\u0018",
    "\r\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002",
    "\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b6\u0005\u0018",
    "\r\u0002\u00b5\u00a8\u0003\u0002\u0002\u0002\u00b5\u00b4\u0003\u0002",
    "\u0002\u0002\u00b6\u0015\u0003\u0002\u0002\u0002\u00b7\u00b9\u0005\u001a",
    "\u000e\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002",
    "\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002",
    "\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002",
    "\u0002\u0002\u00bd\u00be\u0005V,\u0002\u00be\u00bf\u0005&\u0014\u0002",
    "\u00bf\u0017\u0003\u0002\u0002\u0002\u00c0\u00c2\u0005\u001a\u000e\u0002",
    "\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002",
    "\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002",
    "\u00c4\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\u0005V,\u0002\u00c7\u00c8\u0007o\u0002\u0002\u00c8\u00c9",
    "\u0005&\u0014\u0002\u00c9\u0019\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0007\u0014\u0002\u0002\u00cb\u001b\u0003\u0002\u0002\u0002\u00cc\u00d1",
    "\u0007s\u0002\u0002\u00cd\u00ce\u0007I\u0002\u0002\u00ce\u00d0\u0007",
    "s\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d3\u0003",
    "\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003",
    "\u0002\u0002\u0002\u00d2\u001d\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0005\"\u0012\u0002\u00d5\u00d6\u0007",
    "G\u0002\u0002\u00d6\u001f\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007",
    "s\u0002\u0002\u00d8\u00db\u0005\u0012\n\u0002\u00d9\u00da\u0007/\u0002",
    "\u0002\u00da\u00dc\u0005\u0010\t\u0002\u00db\u00d9\u0003\u0002\u0002",
    "\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u00058\u001d\u0002\u00de!\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0005V,\u0002\u00e0\u00e5\u0005$\u0013\u0002\u00e1\u00e2",
    "\u0007H\u0002\u0002\u00e2\u00e4\u0005$\u0013\u0002\u00e3\u00e1\u0003",
    "\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003",
    "\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6#\u0003",
    "\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8\u00eb\u0005",
    "&\u0014\u0002\u00e9\u00ea\u0007J\u0002\u0002\u00ea\u00ec\u0005(\u0015",
    "\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec%\u0003\u0002\u0002\u0002\u00ed\u00f2\u0007s\u0002\u0002",
    "\u00ee\u00ef\u0007E\u0002\u0002\u00ef\u00f1\u0007F\u0002\u0002\u00f0",
    "\u00ee\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003\u0002\u0002\u0002\u00f2",
    "\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3",
    "\'\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f5",
    "\u00f8\u0005*\u0016\u0002\u00f6\u00f8\u0005P)\u0002\u00f7\u00f5\u0003",
    "\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8)\u0003",
    "\u0002\u0002\u0002\u00f9\u0105\u0007C\u0002\u0002\u00fa\u00ff\u0005",
    "(\u0015\u0002\u00fb\u00fc\u0007H\u0002\u0002\u00fc\u00fe\u0005(\u0015",
    "\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002",
    "\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002",
    "\u0002\u0100\u0103\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002",
    "\u0002\u0102\u0104\u0007H\u0002\u0002\u0103\u0102\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0106\u0003\u0002\u0002",
    "\u0002\u0105\u00fa\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002",
    "\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0108\u0007D\u0002",
    "\u0002\u0108+\u0003\u0002\u0002\u0002\u0109\u010e\u0007s\u0002\u0002",
    "\u010a\u010b\u0007I\u0002\u0002\u010b\u010d\u0007s\u0002\u0002\u010c",
    "\u010a\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002\u010e",
    "\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f",
    "-\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0111",
    "\u0118\u0005V,\u0002\u0112\u0115\u0007O\u0002\u0002\u0113\u0114\t\u0002",
    "\u0002\u0002\u0114\u0116\u0005V,\u0002\u0115\u0113\u0003\u0002\u0002",
    "\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u0118\u0003\u0002\u0002",
    "\u0002\u0117\u0111\u0003\u0002\u0002\u0002\u0117\u0112\u0003\u0002\u0002",
    "\u0002\u0118/\u0003\u0002\u0002\u0002\u0119\u0120\u00052\u001a\u0002",
    "\u011a\u0120\u00054\u001b\u0002\u011b\u0120\u0007>\u0002\u0002\u011c",
    "\u0120\u0007?\u0002\u0002\u011d\u0120\u0007=\u0002\u0002\u011e\u0120",
    "\u0007@\u0002\u0002\u011f\u0119\u0003\u0002\u0002\u0002\u011f\u011a",
    "\u0003\u0002\u0002\u0002\u011f\u011b\u0003\u0002\u0002\u0002\u011f\u011c",
    "\u0003\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u011e",
    "\u0003\u0002\u0002\u0002\u01201\u0003\u0002\u0002\u0002\u0121\u0122",
    "\t\u0003\u0002\u0002\u01223\u0003\u0002\u0002\u0002\u0123\u0124\t\u0004",
    "\u0002\u0002\u01245\u0003\u0002\u0002\u0002\u0125\u0126\u0005:\u001e",
    "\u0002\u01267\u0003\u0002\u0002\u0002\u0127\u0128\u0007C\u0002\u0002",
    "\u0128\u0129\u0005:\u001e\u0002\u0129\u012a\u0007D\u0002\u0002\u012a",
    "9\u0003\u0002\u0002\u0002\u012b\u012d\u0005<\u001f\u0002\u012c\u012b",
    "\u0003\u0002\u0002\u0002\u012d\u0130\u0003\u0002\u0002\u0002\u012e\u012c",
    "\u0003\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f;",
    "\u0003\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0131\u0132",
    "\u0005\"\u0012\u0002\u0132\u0133\u0007G\u0002\u0002\u0133\u0138\u0003",
    "\u0002\u0002\u0002\u0134\u0138\u0005> \u0002\u0135\u0138\u0005\n\u0006",
    "\u0002\u0136\u0138\u0005\u0002\u0002\u0002\u0137\u0131\u0003\u0002\u0002",
    "\u0002\u0137\u0134\u0003\u0002\u0002\u0002\u0137\u0135\u0003\u0002\u0002",
    "\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138=\u0003\u0002\u0002",
    "\u0002\u0139\u0179\u00058\u001d\u0002\u013a\u013b\u0007\u0018\u0002",
    "\u0002\u013b\u013c\u0005J&\u0002\u013c\u013f\u0005> \u0002\u013d\u013e",
    "\u0007\u0011\u0002\u0002\u013e\u0140\u0005> \u0002\u013f\u013d\u0003",
    "\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0179\u0003",
    "\u0002\u0002\u0002\u0141\u0142\u0007\u0017\u0002\u0002\u0142\u0143\u0007",
    "A\u0002\u0002\u0143\u0144\u0005D#\u0002\u0144\u0145\u0007B\u0002\u0002",
    "\u0145\u0146\u0005> \u0002\u0146\u0179\u0003\u0002\u0002\u0002\u0147",
    "\u0148\u00074\u0002\u0002\u0148\u0149\u0005J&\u0002\u0149\u014a\u0005",
    "> \u0002\u014a\u0179\u0003\u0002\u0002\u0002\u014b\u014c\u0007\u000f",
    "\u0002\u0002\u014c\u014d\u0005> \u0002\u014d\u014e\u00074\u0002\u0002",
    "\u014e\u014f\u0005J&\u0002\u014f\u0150\u0007G\u0002\u0002\u0150\u0179",
    "\u0003\u0002\u0002\u0002\u0151\u0152\u0007+\u0002\u0002\u0152\u0153",
    "\u0005J&\u0002\u0153\u0157\u0007C\u0002\u0002\u0154\u0156\u0005@!\u0002",
    "\u0155\u0154\u0003\u0002\u0002\u0002\u0156\u0159\u0003\u0002\u0002\u0002",
    "\u0157\u0155\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002\u0002",
    "\u0158\u015d\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002\u0002\u0002",
    "\u015a\u015c\u0005B\"\u0002\u015b\u015a\u0003\u0002\u0002\u0002\u015c",
    "\u015f\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015d",
    "\u015e\u0003\u0002\u0002\u0002\u015e\u0160\u0003\u0002\u0002\u0002\u015f",
    "\u015d\u0003\u0002\u0002\u0002\u0160\u0161\u0007D\u0002\u0002\u0161",
    "\u0179\u0003\u0002\u0002\u0002\u0162\u0164\u0007&\u0002\u0002\u0163",
    "\u0165\u0005P)\u0002\u0164\u0163\u0003\u0002\u0002\u0002\u0164\u0165",
    "\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0179",
    "\u0007G\u0002\u0002\u0167\u0169\u0007\u0006\u0002\u0002\u0168\u016a",
    "\u0007s\u0002\u0002\u0169\u0168\u0003\u0002\u0002\u0002\u0169\u016a",
    "\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u0179",
    "\u0007G\u0002\u0002\u016c\u016e\u0007\r\u0002\u0002\u016d\u016f\u0007",
    "s\u0002\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016e\u016f\u0003",
    "\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170\u0179\u0007",
    "G\u0002\u0002\u0171\u0179\u0007G\u0002\u0002\u0172\u0173\u0005P)\u0002",
    "\u0173\u0174\u0007G\u0002\u0002\u0174\u0179\u0003\u0002\u0002\u0002",
    "\u0175\u0176\u0007s\u0002\u0002\u0176\u0177\u0007P\u0002\u0002\u0177",
    "\u0179\u0005> \u0002\u0178\u0139\u0003\u0002\u0002\u0002\u0178\u013a",
    "\u0003\u0002\u0002\u0002\u0178\u0141\u0003\u0002\u0002\u0002\u0178\u0147",
    "\u0003\u0002\u0002\u0002\u0178\u014b\u0003\u0002\u0002\u0002\u0178\u0151",
    "\u0003\u0002\u0002\u0002\u0178\u0162\u0003\u0002\u0002\u0002\u0178\u0167",
    "\u0003\u0002\u0002\u0002\u0178\u016c\u0003\u0002\u0002\u0002\u0178\u0171",
    "\u0003\u0002\u0002\u0002\u0178\u0172\u0003\u0002\u0002\u0002\u0178\u0175",
    "\u0003\u0002\u0002\u0002\u0179?\u0003\u0002\u0002\u0002\u017a\u017c",
    "\u0005B\"\u0002\u017b\u017a\u0003\u0002\u0002\u0002\u017c\u017d\u0003",
    "\u0002\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017e\u0003",
    "\u0002\u0002\u0002\u017e\u0180\u0003\u0002\u0002\u0002\u017f\u0181\u0005",
    "<\u001f\u0002\u0180\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003",
    "\u0002\u0002\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0182\u0183\u0003",
    "\u0002\u0002\u0002\u0183A\u0003\u0002\u0002\u0002\u0184\u0187\u0007",
    "\b\u0002\u0002\u0185\u0188\u0005P)\u0002\u0186\u0188\u0007s\u0002\u0002",
    "\u0187\u0185\u0003\u0002\u0002\u0002\u0187\u0186\u0003\u0002\u0002\u0002",
    "\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018d\u0007P\u0002\u0002",
    "\u018a\u018b\u0007\u000e\u0002\u0002\u018b\u018d\u0007P\u0002\u0002",
    "\u018c\u0184\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002",
    "\u018dC\u0003\u0002\u0002\u0002\u018e\u019b\u0005H%\u0002\u018f\u0191",
    "\u0005F$\u0002\u0190\u018f\u0003\u0002\u0002\u0002\u0190\u0191\u0003",
    "\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0194\u0007",
    "G\u0002\u0002\u0193\u0195\u0005P)\u0002\u0194\u0193\u0003\u0002\u0002",
    "\u0002\u0194\u0195\u0003\u0002\u0002\u0002\u0195\u0196\u0003\u0002\u0002",
    "\u0002\u0196\u0198\u0007G\u0002\u0002\u0197\u0199\u0005L\'\u0002\u0198",
    "\u0197\u0003\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199",
    "\u019b\u0003\u0002\u0002\u0002\u019a\u018e\u0003\u0002\u0002\u0002\u019a",
    "\u0190\u0003\u0002\u0002\u0002\u019bE\u0003\u0002\u0002\u0002\u019c",
    "\u019f\u0005\"\u0012\u0002\u019d\u019f\u0005L\'\u0002\u019e\u019c\u0003",
    "\u0002\u0002\u0002\u019e\u019d\u0003\u0002\u0002\u0002\u019fG\u0003",
    "\u0002\u0002\u0002\u01a0\u01a1\u0005V,\u0002\u01a1\u01a2\u0005&\u0014",
    "\u0002\u01a2\u01a3\u0007P\u0002\u0002\u01a3\u01a4\u0005P)\u0002\u01a4",
    "I\u0003\u0002\u0002\u0002\u01a5\u01a6\u0007A\u0002\u0002\u01a6\u01a7",
    "\u0005P)\u0002\u01a7\u01a8\u0007B\u0002\u0002\u01a8K\u0003\u0002\u0002",
    "\u0002\u01a9\u01ae\u0005P)\u0002\u01aa\u01ab\u0007H\u0002\u0002\u01ab",
    "\u01ad\u0005P)\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ad\u01b0",
    "\u0003\u0002\u0002\u0002\u01ae\u01ac\u0003\u0002\u0002\u0002\u01ae\u01af",
    "\u0003\u0002\u0002\u0002\u01afM\u0003\u0002\u0002\u0002\u01b0\u01ae",
    "\u0003\u0002\u0002\u0002\u01b1\u01b2\u0007s\u0002\u0002\u01b2\u01b4",
    "\u0007A\u0002\u0002\u01b3\u01b5\u0005L\'\u0002\u01b4\u01b3\u0003\u0002",
    "\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b6\u0003\u0002",
    "\u0002\u0002\u01b6\u01c4\u0007B\u0002\u0002\u01b7\u01b8\u0007-\u0002",
    "\u0002\u01b8\u01ba\u0007A\u0002\u0002\u01b9\u01bb\u0005L\'\u0002\u01ba",
    "\u01b9\u0003\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb",
    "\u01bc\u0003\u0002\u0002\u0002\u01bc\u01c4\u0007B\u0002\u0002\u01bd",
    "\u01be\u0007*\u0002\u0002\u01be\u01c0\u0007A\u0002\u0002\u01bf\u01c1",
    "\u0005L\'\u0002\u01c0\u01bf\u0003\u0002\u0002\u0002\u01c0\u01c1\u0003",
    "\u0002\u0002\u0002\u01c1\u01c2\u0003\u0002\u0002\u0002\u01c2\u01c4\u0007",
    "B\u0002\u0002\u01c3\u01b1\u0003\u0002\u0002\u0002\u01c3\u01b7\u0003",
    "\u0002\u0002\u0002\u01c3\u01bd\u0003\u0002\u0002\u0002\u01c4O\u0003",
    "\u0002\u0002\u0002\u01c5\u01c6\b)\u0001\u0002\u01c6\u01cd\u0005R*\u0002",
    "\u01c7\u01cd\u0005N(\u0002\u01c8\u01c9\t\u0005\u0002\u0002\u01c9\u01cd",
    "\u0005P)\u0011\u01ca\u01cb\t\u0006\u0002\u0002\u01cb\u01cd\u0005P)\u0010",
    "\u01cc\u01c5\u0003\u0002\u0002\u0002\u01cc\u01c7\u0003\u0002\u0002\u0002",
    "\u01cc\u01c8\u0003\u0002\u0002\u0002\u01cc\u01ca\u0003\u0002\u0002\u0002",
    "\u01cd\u0210\u0003\u0002\u0002\u0002\u01ce\u01cf\f\u000f\u0002\u0002",
    "\u01cf\u01d0\t\u0007\u0002\u0002\u01d0\u020f\u0005P)\u0010\u01d1\u01d2",
    "\f\u000e\u0002\u0002\u01d2\u01d3\t\b\u0002\u0002\u01d3\u020f\u0005P",
    ")\u000f\u01d4\u01dc\f\r\u0002\u0002\u01d5\u01d6\u0007L\u0002\u0002\u01d6",
    "\u01dd\u0007L\u0002\u0002\u01d7\u01d8\u0007K\u0002\u0002\u01d8\u01d9",
    "\u0007K\u0002\u0002\u01d9\u01dd\u0007K\u0002\u0002\u01da\u01db\u0007",
    "K\u0002\u0002\u01db\u01dd\u0007K\u0002\u0002\u01dc\u01d5\u0003\u0002",
    "\u0002\u0002\u01dc\u01d7\u0003\u0002\u0002\u0002\u01dc\u01da\u0003\u0002",
    "\u0002\u0002\u01dd\u01de\u0003\u0002\u0002\u0002\u01de\u020f\u0005P",
    ")\u000e\u01df\u01e0\f\f\u0002\u0002\u01e0\u01e1\t\t\u0002\u0002\u01e1",
    "\u020f\u0005P)\r\u01e2\u01e3\f\n\u0002\u0002\u01e3\u01e4\t\n\u0002\u0002",
    "\u01e4\u020f\u0005P)\u000b\u01e5\u01e6\f\t\u0002\u0002\u01e6\u01e7\u0007",
    "]\u0002\u0002\u01e7\u020f\u0005P)\n\u01e8\u01e9\f\b\u0002\u0002\u01e9",
    "\u01ea\u0007_\u0002\u0002\u01ea\u020f\u0005P)\t\u01eb\u01ec\f\u0007",
    "\u0002\u0002\u01ec\u01ed\u0007^\u0002\u0002\u01ed\u020f\u0005P)\b\u01ee",
    "\u01ef\f\u0006\u0002\u0002\u01ef\u01f0\u0007U\u0002\u0002\u01f0\u020f",
    "\u0005P)\u0007\u01f1\u01f2\f\u0005\u0002\u0002\u01f2\u01f3\u0007V\u0002",
    "\u0002\u01f3\u020f\u0005P)\u0006\u01f4\u01f5\f\u0004\u0002\u0002\u01f5",
    "\u01f6\u0007O\u0002\u0002\u01f6\u01f7\u0005P)\u0002\u01f7\u01f8\u0007",
    "P\u0002\u0002\u01f8\u01f9\u0005P)\u0005\u01f9\u020f\u0003\u0002\u0002",
    "\u0002\u01fa\u01fb\f\u0003\u0002\u0002\u01fb\u01fc\t\u000b\u0002\u0002",
    "\u01fc\u020f\u0005P)\u0003\u01fd\u01fe\f\u0015\u0002\u0002\u01fe\u0202",
    "\u0007I\u0002\u0002\u01ff\u0203\u0007s\u0002\u0002\u0200\u0203\u0005",
    "N(\u0002\u0201\u0203\u0007-\u0002\u0002\u0202\u01ff\u0003\u0002\u0002",
    "\u0002\u0202\u0200\u0003\u0002\u0002\u0002\u0202\u0201\u0003\u0002\u0002",
    "\u0002\u0203\u020f\u0003\u0002\u0002\u0002\u0204\u0205\f\u0014\u0002",
    "\u0002\u0205\u0206\u0007E\u0002\u0002\u0206\u0207\u0005P)\u0002\u0207",
    "\u0208\u0007F\u0002\u0002\u0208\u020f\u0003\u0002\u0002\u0002\u0209",
    "\u020a\f\u0012\u0002\u0002\u020a\u020f\t\f\u0002\u0002\u020b\u020c\f",
    "\u000b\u0002\u0002\u020c\u020d\u0007\u001c\u0002\u0002\u020d\u020f\u0005",
    "V,\u0002\u020e\u01ce\u0003\u0002\u0002\u0002\u020e\u01d1\u0003\u0002",
    "\u0002\u0002\u020e\u01d4\u0003\u0002\u0002\u0002\u020e\u01df\u0003\u0002",
    "\u0002\u0002\u020e\u01e2\u0003\u0002\u0002\u0002\u020e\u01e5\u0003\u0002",
    "\u0002\u0002\u020e\u01e8\u0003\u0002\u0002\u0002\u020e\u01eb\u0003\u0002",
    "\u0002\u0002\u020e\u01ee\u0003\u0002\u0002\u0002\u020e\u01f1\u0003\u0002",
    "\u0002\u0002\u020e\u01f4\u0003\u0002\u0002\u0002\u020e\u01fa\u0003\u0002",
    "\u0002\u0002\u020e\u01fd\u0003\u0002\u0002\u0002\u020e\u0204\u0003\u0002",
    "\u0002\u0002\u020e\u0209\u0003\u0002\u0002\u0002\u020e\u020b\u0003\u0002",
    "\u0002\u0002\u020f\u0212\u0003\u0002\u0002\u0002\u0210\u020e\u0003\u0002",
    "\u0002\u0002\u0210\u0211\u0003\u0002\u0002\u0002\u0211Q\u0003\u0002",
    "\u0002\u0002\u0212\u0210\u0003\u0002\u0002\u0002\u0213\u0214\u0007A",
    "\u0002\u0002\u0214\u0215\u0005P)\u0002\u0215\u0216\u0007B\u0002\u0002",
    "\u0216\u021c\u0003\u0002\u0002\u0002\u0217\u021c\u0007-\u0002\u0002",
    "\u0218\u021c\u0007*\u0002\u0002\u0219\u021c\u00050\u0019\u0002\u021a",
    "\u021c\u0007s\u0002\u0002\u021b\u0213\u0003\u0002\u0002\u0002\u021b",
    "\u0217\u0003\u0002\u0002\u0002\u021b\u0218\u0003\u0002\u0002\u0002\u021b",
    "\u0219\u0003\u0002\u0002\u0002\u021b\u021a\u0003\u0002\u0002\u0002\u021c",
    "S\u0003\u0002\u0002\u0002\u021d\u0222\u0005V,\u0002\u021e\u021f\u0007",
    "H\u0002\u0002\u021f\u0221\u0005V,\u0002\u0220\u021e\u0003\u0002\u0002",
    "\u0002\u0221\u0224\u0003\u0002\u0002\u0002\u0222\u0220\u0003\u0002\u0002",
    "\u0002\u0222\u0223\u0003\u0002\u0002\u0002\u0223U\u0003\u0002\u0002",
    "\u0002\u0224\u0222\u0003\u0002\u0002\u0002\u0225\u0229\u0005,\u0017",
    "\u0002\u0226\u0229\u0005X-\u0002\u0227\u0229\u0005Z.\u0002\u0228\u0225",
    "\u0003\u0002\u0002\u0002\u0228\u0226\u0003\u0002\u0002\u0002\u0228\u0227",
    "\u0003\u0002\u0002\u0002\u0229\u022e\u0003\u0002\u0002\u0002\u022a\u022b",
    "\u0007E\u0002\u0002\u022b\u022d\u0007F\u0002\u0002\u022c\u022a\u0003",
    "\u0002\u0002\u0002\u022d\u0230\u0003\u0002\u0002\u0002\u022e\u022c\u0003",
    "\u0002\u0002\u0002\u022e\u022f\u0003\u0002\u0002\u0002\u022fW\u0003",
    "\u0002\u0002\u0002\u0230\u022e\u0003\u0002\u0002\u0002\u0231\u0232\u0007",
    "5\u0002\u0002\u0232\u0233\u0005\u000e\b\u0002\u0233\u0235\u0007A\u0002",
    "\u0002\u0234\u0236\u0005T+\u0002\u0235\u0234\u0003\u0002\u0002\u0002",
    "\u0235\u0236\u0003\u0002\u0002\u0002\u0236\u0237\u0003\u0002\u0002\u0002",
    "\u0237\u0238\u0007B\u0002\u0002\u0238Y\u0003\u0002\u0002\u0002\u0239",
    "\u023a\t\r\u0002\u0002\u023a[\u0003\u0002\u0002\u0002\u023b\u023c\u0007",
    "s\u0002\u0002\u023c\u023d\u0005`1\u0002\u023d]\u0003\u0002\u0002\u0002",
    "\u023e\u0245\u0005`1\u0002\u023f\u0240\u0007I\u0002\u0002\u0240\u0242",
    "\u0007s\u0002\u0002\u0241\u0243\u0005`1\u0002\u0242\u0241\u0003\u0002",
    "\u0002\u0002\u0242\u0243\u0003\u0002\u0002\u0002\u0243\u0245\u0003\u0002",
    "\u0002\u0002\u0244\u023e\u0003\u0002\u0002\u0002\u0244\u023f\u0003\u0002",
    "\u0002\u0002\u0245_\u0003\u0002\u0002\u0002\u0246\u0248\u0007A\u0002",
    "\u0002\u0247\u0249\u0005L\'\u0002\u0248\u0247\u0003\u0002\u0002\u0002",
    "\u0248\u0249\u0003\u0002\u0002\u0002\u0249\u024a\u0003\u0002\u0002\u0002",
    "\u024a\u024b\u0007B\u0002\u0002\u024ba\u0003\u0002\u0002\u0002Dfjry",
    "~\u0081\u0089\u008e\u0094\u0098\u009f\u00a4\u00ad\u00b2\u00b5\u00ba",
    "\u00c3\u00d1\u00db\u00e5\u00eb\u00f2\u00f7\u00ff\u0103\u0105\u010e\u0115",
    "\u0117\u011f\u012e\u0137\u013f\u0157\u015d\u0164\u0169\u016e\u0178\u017d",
    "\u0182\u0187\u018c\u0190\u0194\u0198\u019a\u019e\u01ae\u01b4\u01ba\u01c0",
    "\u01c3\u01cc\u01dc\u0202\u020e\u0210\u021b\u0222\u0228\u022e\u0235\u0242",
    "\u0244\u0248"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'abstract'", "'assert'", "'boolean'", "'break'", 
                     "'byte'", "'case'", "'catch'", "'char'", "'class'", 
                     "'const'", "'continue'", "'default'", "'do'", "'double'", 
                     "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
                     "'float'", "'for'", "'if'", "'goto'", "'implements'", 
                     "'import'", "'instanceof'", "'int'", "'interface'", 
                     "'long'", "'native'", "'new'", "'package'", "'private'", 
                     "'protected'", "'public'", "'return'", "'short'", "'static'", 
                     "'strictfp'", "'super'", "'switch'", "'synchronized'", 
                     "'this'", "'throw'", "'throws'", "'transient'", "'try'", 
                     "'void'", "'volatile'", "'while'", "'function'", "'string'", 
                     null, null, null, null, null, null, null, null, null, 
                     "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
                     "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", 
                     "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", 
                     "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", 
                     "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", 
                     "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", 
                     "'>>>='", "'->'", "'::'", "'@'", "'...'" ];

var symbolicNames = [ null, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", 
                      "CASE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", 
                      "DEFAULT", "DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", 
                      "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", 
                      "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", 
                      "LONG", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
                      "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
                      "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", 
                      "THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", 
                      "WHILE", "FUNCTION", "STRING", "DECIMAL_LITERAL", 
                      "HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", 
                      "HEX_FLOAT_LITERAL", "BOOL_LITERAL", "CHAR_LITERAL", 
                      "STRING_LITERAL", "NULL_LITERAL", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
                      "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", 
                      "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", 
                      "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
                      "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
                      "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                      "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
                      "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS", 
                      "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER" ];

var ruleNames =  [ "classDeclaration", "classBody", "classBodyDeclaration", 
                   "memberDeclaration", "functionDeclaration", "functionBody", 
                   "typeTypeOrVoid", "qualifiedNameList", "formalParameters", 
                   "formalParameterList", "formalParameter", "lastFormalParameter", 
                   "variableModifier", "qualifiedName", "fieldDeclaration", 
                   "constructorDeclaration", "variableDeclarators", "variableDeclarator", 
                   "variableDeclaratorId", "variableInitializer", "arrayInitializer", 
                   "classOrInterfaceType", "typeArgument", "literal", "integerLiteral", 
                   "floatLiteral", "prog", "block", "blockStatements", "blockStatement", 
                   "statement", "switchBlockStatementGroup", "switchLabel", 
                   "forControl", "forInit", "enhancedForControl", "parExpression", 
                   "expressionList", "functionCall", "expression", "primary", 
                   "typeList", "typeType", "functionType", "primitiveType", 
                   "creator", "superSuffix", "arguments" ];

function PlayScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PlayScriptParser.prototype = Object.create(antlr4.Parser.prototype);
PlayScriptParser.prototype.constructor = PlayScriptParser;

Object.defineProperty(PlayScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PlayScriptParser.EOF = antlr4.Token.EOF;
PlayScriptParser.ABSTRACT = 1;
PlayScriptParser.ASSERT = 2;
PlayScriptParser.BOOLEAN = 3;
PlayScriptParser.BREAK = 4;
PlayScriptParser.BYTE = 5;
PlayScriptParser.CASE = 6;
PlayScriptParser.CATCH = 7;
PlayScriptParser.CHAR = 8;
PlayScriptParser.CLASS = 9;
PlayScriptParser.CONST = 10;
PlayScriptParser.CONTINUE = 11;
PlayScriptParser.DEFAULT = 12;
PlayScriptParser.DO = 13;
PlayScriptParser.DOUBLE = 14;
PlayScriptParser.ELSE = 15;
PlayScriptParser.ENUM = 16;
PlayScriptParser.EXTENDS = 17;
PlayScriptParser.FINAL = 18;
PlayScriptParser.FINALLY = 19;
PlayScriptParser.FLOAT = 20;
PlayScriptParser.FOR = 21;
PlayScriptParser.IF = 22;
PlayScriptParser.GOTO = 23;
PlayScriptParser.IMPLEMENTS = 24;
PlayScriptParser.IMPORT = 25;
PlayScriptParser.INSTANCEOF = 26;
PlayScriptParser.INT = 27;
PlayScriptParser.INTERFACE = 28;
PlayScriptParser.LONG = 29;
PlayScriptParser.NATIVE = 30;
PlayScriptParser.NEW = 31;
PlayScriptParser.PACKAGE = 32;
PlayScriptParser.PRIVATE = 33;
PlayScriptParser.PROTECTED = 34;
PlayScriptParser.PUBLIC = 35;
PlayScriptParser.RETURN = 36;
PlayScriptParser.SHORT = 37;
PlayScriptParser.STATIC = 38;
PlayScriptParser.STRICTFP = 39;
PlayScriptParser.SUPER = 40;
PlayScriptParser.SWITCH = 41;
PlayScriptParser.SYNCHRONIZED = 42;
PlayScriptParser.THIS = 43;
PlayScriptParser.THROW = 44;
PlayScriptParser.THROWS = 45;
PlayScriptParser.TRANSIENT = 46;
PlayScriptParser.TRY = 47;
PlayScriptParser.VOID = 48;
PlayScriptParser.VOLATILE = 49;
PlayScriptParser.WHILE = 50;
PlayScriptParser.FUNCTION = 51;
PlayScriptParser.STRING = 52;
PlayScriptParser.DECIMAL_LITERAL = 53;
PlayScriptParser.HEX_LITERAL = 54;
PlayScriptParser.OCT_LITERAL = 55;
PlayScriptParser.BINARY_LITERAL = 56;
PlayScriptParser.FLOAT_LITERAL = 57;
PlayScriptParser.HEX_FLOAT_LITERAL = 58;
PlayScriptParser.BOOL_LITERAL = 59;
PlayScriptParser.CHAR_LITERAL = 60;
PlayScriptParser.STRING_LITERAL = 61;
PlayScriptParser.NULL_LITERAL = 62;
PlayScriptParser.LPAREN = 63;
PlayScriptParser.RPAREN = 64;
PlayScriptParser.LBRACE = 65;
PlayScriptParser.RBRACE = 66;
PlayScriptParser.LBRACK = 67;
PlayScriptParser.RBRACK = 68;
PlayScriptParser.SEMI = 69;
PlayScriptParser.COMMA = 70;
PlayScriptParser.DOT = 71;
PlayScriptParser.ASSIGN = 72;
PlayScriptParser.GT = 73;
PlayScriptParser.LT = 74;
PlayScriptParser.BANG = 75;
PlayScriptParser.TILDE = 76;
PlayScriptParser.QUESTION = 77;
PlayScriptParser.COLON = 78;
PlayScriptParser.EQUAL = 79;
PlayScriptParser.LE = 80;
PlayScriptParser.GE = 81;
PlayScriptParser.NOTEQUAL = 82;
PlayScriptParser.AND = 83;
PlayScriptParser.OR = 84;
PlayScriptParser.INC = 85;
PlayScriptParser.DEC = 86;
PlayScriptParser.ADD = 87;
PlayScriptParser.SUB = 88;
PlayScriptParser.MUL = 89;
PlayScriptParser.DIV = 90;
PlayScriptParser.BITAND = 91;
PlayScriptParser.BITOR = 92;
PlayScriptParser.CARET = 93;
PlayScriptParser.MOD = 94;
PlayScriptParser.ADD_ASSIGN = 95;
PlayScriptParser.SUB_ASSIGN = 96;
PlayScriptParser.MUL_ASSIGN = 97;
PlayScriptParser.DIV_ASSIGN = 98;
PlayScriptParser.AND_ASSIGN = 99;
PlayScriptParser.OR_ASSIGN = 100;
PlayScriptParser.XOR_ASSIGN = 101;
PlayScriptParser.MOD_ASSIGN = 102;
PlayScriptParser.LSHIFT_ASSIGN = 103;
PlayScriptParser.RSHIFT_ASSIGN = 104;
PlayScriptParser.URSHIFT_ASSIGN = 105;
PlayScriptParser.ARROW = 106;
PlayScriptParser.COLONCOLON = 107;
PlayScriptParser.AT = 108;
PlayScriptParser.ELLIPSIS = 109;
PlayScriptParser.WS = 110;
PlayScriptParser.COMMENT = 111;
PlayScriptParser.LINE_COMMENT = 112;
PlayScriptParser.IDENTIFIER = 113;

PlayScriptParser.RULE_classDeclaration = 0;
PlayScriptParser.RULE_classBody = 1;
PlayScriptParser.RULE_classBodyDeclaration = 2;
PlayScriptParser.RULE_memberDeclaration = 3;
PlayScriptParser.RULE_functionDeclaration = 4;
PlayScriptParser.RULE_functionBody = 5;
PlayScriptParser.RULE_typeTypeOrVoid = 6;
PlayScriptParser.RULE_qualifiedNameList = 7;
PlayScriptParser.RULE_formalParameters = 8;
PlayScriptParser.RULE_formalParameterList = 9;
PlayScriptParser.RULE_formalParameter = 10;
PlayScriptParser.RULE_lastFormalParameter = 11;
PlayScriptParser.RULE_variableModifier = 12;
PlayScriptParser.RULE_qualifiedName = 13;
PlayScriptParser.RULE_fieldDeclaration = 14;
PlayScriptParser.RULE_constructorDeclaration = 15;
PlayScriptParser.RULE_variableDeclarators = 16;
PlayScriptParser.RULE_variableDeclarator = 17;
PlayScriptParser.RULE_variableDeclaratorId = 18;
PlayScriptParser.RULE_variableInitializer = 19;
PlayScriptParser.RULE_arrayInitializer = 20;
PlayScriptParser.RULE_classOrInterfaceType = 21;
PlayScriptParser.RULE_typeArgument = 22;
PlayScriptParser.RULE_literal = 23;
PlayScriptParser.RULE_integerLiteral = 24;
PlayScriptParser.RULE_floatLiteral = 25;
PlayScriptParser.RULE_prog = 26;
PlayScriptParser.RULE_block = 27;
PlayScriptParser.RULE_blockStatements = 28;
PlayScriptParser.RULE_blockStatement = 29;
PlayScriptParser.RULE_statement = 30;
PlayScriptParser.RULE_switchBlockStatementGroup = 31;
PlayScriptParser.RULE_switchLabel = 32;
PlayScriptParser.RULE_forControl = 33;
PlayScriptParser.RULE_forInit = 34;
PlayScriptParser.RULE_enhancedForControl = 35;
PlayScriptParser.RULE_parExpression = 36;
PlayScriptParser.RULE_expressionList = 37;
PlayScriptParser.RULE_functionCall = 38;
PlayScriptParser.RULE_expression = 39;
PlayScriptParser.RULE_primary = 40;
PlayScriptParser.RULE_typeList = 41;
PlayScriptParser.RULE_typeType = 42;
PlayScriptParser.RULE_functionType = 43;
PlayScriptParser.RULE_primitiveType = 44;
PlayScriptParser.RULE_creator = 45;
PlayScriptParser.RULE_superSuffix = 46;
PlayScriptParser.RULE_arguments = 47;


function ClassDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_classDeclaration;
    return this;
}

ClassDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclarationContext.prototype.constructor = ClassDeclarationContext;

ClassDeclarationContext.prototype.CLASS = function() {
    return this.getToken(PlayScriptParser.CLASS, 0);
};

ClassDeclarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

ClassDeclarationContext.prototype.classBody = function() {
    return this.getTypedRuleContext(ClassBodyContext,0);
};

ClassDeclarationContext.prototype.EXTENDS = function() {
    return this.getToken(PlayScriptParser.EXTENDS, 0);
};

ClassDeclarationContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

ClassDeclarationContext.prototype.IMPLEMENTS = function() {
    return this.getToken(PlayScriptParser.IMPLEMENTS, 0);
};

ClassDeclarationContext.prototype.typeList = function() {
    return this.getTypedRuleContext(TypeListContext,0);
};

ClassDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitClassDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ClassDeclarationContext = ClassDeclarationContext;

PlayScriptParser.prototype.classDeclaration = function() {

    var localctx = new ClassDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PlayScriptParser.RULE_classDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(PlayScriptParser.CLASS);
        this.state = 97;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlayScriptParser.EXTENDS) {
            this.state = 98;
            this.match(PlayScriptParser.EXTENDS);
            this.state = 99;
            this.typeType();
        }

        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlayScriptParser.IMPLEMENTS) {
            this.state = 102;
            this.match(PlayScriptParser.IMPLEMENTS);
            this.state = 103;
            this.typeList();
        }

        this.state = 106;
        this.classBody();
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


function ClassBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_classBody;
    return this;
}

ClassBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassBodyContext.prototype.constructor = ClassBodyContext;

ClassBodyContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

ClassBodyContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

ClassBodyContext.prototype.classBodyDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassBodyDeclarationContext);
    } else {
        return this.getTypedRuleContext(ClassBodyDeclarationContext,i);
    }
};

ClassBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterClassBody(this);
	}
};

ClassBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitClassBody(this);
	}
};

ClassBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitClassBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ClassBodyContext = ClassBodyContext;

PlayScriptParser.prototype.classBody = function() {

    var localctx = new ClassBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PlayScriptParser.RULE_classBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(PlayScriptParser.LBRACE);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.CLASS) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlayScriptParser.SHORT - 37)) | (1 << (PlayScriptParser.VOID - 37)) | (1 << (PlayScriptParser.FUNCTION - 37)) | (1 << (PlayScriptParser.STRING - 37)))) !== 0) || _la===PlayScriptParser.SEMI || _la===PlayScriptParser.IDENTIFIER) {
            this.state = 109;
            this.classBodyDeclaration();
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 115;
        this.match(PlayScriptParser.RBRACE);
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


function ClassBodyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_classBodyDeclaration;
    return this;
}

ClassBodyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassBodyDeclarationContext.prototype.constructor = ClassBodyDeclarationContext;

ClassBodyDeclarationContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

ClassBodyDeclarationContext.prototype.memberDeclaration = function() {
    return this.getTypedRuleContext(MemberDeclarationContext,0);
};

ClassBodyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterClassBodyDeclaration(this);
	}
};

ClassBodyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitClassBodyDeclaration(this);
	}
};

ClassBodyDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitClassBodyDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ClassBodyDeclarationContext = ClassBodyDeclarationContext;

PlayScriptParser.prototype.classBodyDeclaration = function() {

    var localctx = new ClassBodyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PlayScriptParser.RULE_classBodyDeclaration);
    try {
        this.state = 119;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.SEMI:
            this.enterOuterAlt(localctx, 1);
            this.state = 117;
            this.match(PlayScriptParser.SEMI);
            break;
        case PlayScriptParser.BOOLEAN:
        case PlayScriptParser.BYTE:
        case PlayScriptParser.CHAR:
        case PlayScriptParser.CLASS:
        case PlayScriptParser.DOUBLE:
        case PlayScriptParser.FLOAT:
        case PlayScriptParser.INT:
        case PlayScriptParser.LONG:
        case PlayScriptParser.SHORT:
        case PlayScriptParser.VOID:
        case PlayScriptParser.FUNCTION:
        case PlayScriptParser.STRING:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this.memberDeclaration();
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


function MemberDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_memberDeclaration;
    return this;
}

MemberDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberDeclarationContext.prototype.constructor = MemberDeclarationContext;

MemberDeclarationContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

MemberDeclarationContext.prototype.fieldDeclaration = function() {
    return this.getTypedRuleContext(FieldDeclarationContext,0);
};

MemberDeclarationContext.prototype.classDeclaration = function() {
    return this.getTypedRuleContext(ClassDeclarationContext,0);
};

MemberDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterMemberDeclaration(this);
	}
};

MemberDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitMemberDeclaration(this);
	}
};

MemberDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitMemberDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.MemberDeclarationContext = MemberDeclarationContext;

PlayScriptParser.prototype.memberDeclaration = function() {

    var localctx = new MemberDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PlayScriptParser.RULE_memberDeclaration);
    try {
        this.state = 124;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.functionDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.fieldDeclaration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.classDeclaration();
            break;

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


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

FunctionDeclarationContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.typeTypeOrVoid = function() {
    return this.getTypedRuleContext(TypeTypeOrVoidContext,0);
};

FunctionDeclarationContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LBRACK);
    } else {
        return this.getToken(PlayScriptParser.LBRACK, i);
    }
};


FunctionDeclarationContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.RBRACK);
    } else {
        return this.getToken(PlayScriptParser.RBRACK, i);
    }
};


FunctionDeclarationContext.prototype.THROWS = function() {
    return this.getToken(PlayScriptParser.THROWS, 0);
};

FunctionDeclarationContext.prototype.qualifiedNameList = function() {
    return this.getTypedRuleContext(QualifiedNameListContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FunctionDeclarationContext = FunctionDeclarationContext;

PlayScriptParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PlayScriptParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 126;
            this.typeTypeOrVoid();

        }
        this.state = 129;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 130;
        this.formalParameters();
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.LBRACK) {
            this.state = 131;
            this.match(PlayScriptParser.LBRACK);
            this.state = 132;
            this.match(PlayScriptParser.RBRACK);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlayScriptParser.THROWS) {
            this.state = 138;
            this.match(PlayScriptParser.THROWS);
            this.state = 139;
            this.qualifiedNameList();
        }

        this.state = 142;
        this.functionBody();
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


function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionBodyContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFunctionBody(this);
	}
};

FunctionBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFunctionBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FunctionBodyContext = FunctionBodyContext;

PlayScriptParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PlayScriptParser.RULE_functionBody);
    try {
        this.state = 146;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.block();
            break;
        case PlayScriptParser.SEMI:
            this.enterOuterAlt(localctx, 2);
            this.state = 145;
            this.match(PlayScriptParser.SEMI);
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


function TypeTypeOrVoidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_typeTypeOrVoid;
    return this;
}

TypeTypeOrVoidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeTypeOrVoidContext.prototype.constructor = TypeTypeOrVoidContext;

TypeTypeOrVoidContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

TypeTypeOrVoidContext.prototype.VOID = function() {
    return this.getToken(PlayScriptParser.VOID, 0);
};

TypeTypeOrVoidContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterTypeTypeOrVoid(this);
	}
};

TypeTypeOrVoidContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitTypeTypeOrVoid(this);
	}
};

TypeTypeOrVoidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitTypeTypeOrVoid(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.TypeTypeOrVoidContext = TypeTypeOrVoidContext;

PlayScriptParser.prototype.typeTypeOrVoid = function() {

    var localctx = new TypeTypeOrVoidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PlayScriptParser.RULE_typeTypeOrVoid);
    try {
        this.state = 150;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.BOOLEAN:
        case PlayScriptParser.BYTE:
        case PlayScriptParser.CHAR:
        case PlayScriptParser.DOUBLE:
        case PlayScriptParser.FLOAT:
        case PlayScriptParser.INT:
        case PlayScriptParser.LONG:
        case PlayScriptParser.SHORT:
        case PlayScriptParser.FUNCTION:
        case PlayScriptParser.STRING:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.typeType();
            break;
        case PlayScriptParser.VOID:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(PlayScriptParser.VOID);
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


function QualifiedNameListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_qualifiedNameList;
    return this;
}

QualifiedNameListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedNameListContext.prototype.constructor = QualifiedNameListContext;

QualifiedNameListContext.prototype.qualifiedName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualifiedNameContext);
    } else {
        return this.getTypedRuleContext(QualifiedNameContext,i);
    }
};

QualifiedNameListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


QualifiedNameListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterQualifiedNameList(this);
	}
};

QualifiedNameListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitQualifiedNameList(this);
	}
};

QualifiedNameListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitQualifiedNameList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.QualifiedNameListContext = QualifiedNameListContext;

PlayScriptParser.prototype.qualifiedNameList = function() {

    var localctx = new QualifiedNameListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PlayScriptParser.RULE_qualifiedNameList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.qualifiedName();
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.COMMA) {
            this.state = 153;
            this.match(PlayScriptParser.COMMA);
            this.state = 154;
            this.qualifiedName();
            this.state = 159;
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


function FormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_formalParameters;
    return this;
}

FormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParametersContext.prototype.constructor = FormalParametersContext;

FormalParametersContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

FormalParametersContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

FormalParametersContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFormalParameters(this);
	}
};

FormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFormalParameters(this);
	}
};

FormalParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFormalParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FormalParametersContext = FormalParametersContext;

PlayScriptParser.prototype.formalParameters = function() {

    var localctx = new FormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PlayScriptParser.RULE_formalParameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(PlayScriptParser.LPAREN);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FINAL) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlayScriptParser.SHORT - 37)) | (1 << (PlayScriptParser.FUNCTION - 37)) | (1 << (PlayScriptParser.STRING - 37)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
            this.state = 161;
            this.formalParameterList();
        }

        this.state = 164;
        this.match(PlayScriptParser.RPAREN);
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


function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.formalParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterContext);
    } else {
        return this.getTypedRuleContext(FormalParameterContext,i);
    }
};

FormalParameterListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


FormalParameterListContext.prototype.lastFormalParameter = function() {
    return this.getTypedRuleContext(LastFormalParameterContext,0);
};

FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFormalParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FormalParameterListContext = FormalParameterListContext;

PlayScriptParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PlayScriptParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.state = 179;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.formalParameter();
            this.state = 171;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 167;
                    this.match(PlayScriptParser.COMMA);
                    this.state = 168;
                    this.formalParameter(); 
                }
                this.state = 173;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
            }

            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.COMMA) {
                this.state = 174;
                this.match(PlayScriptParser.COMMA);
                this.state = 175;
                this.lastFormalParameter();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.lastFormalParameter();
            break;

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


function FormalParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_formalParameter;
    return this;
}

FormalParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterContext.prototype.constructor = FormalParameterContext;

FormalParameterContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

FormalParameterContext.prototype.variableDeclaratorId = function() {
    return this.getTypedRuleContext(VariableDeclaratorIdContext,0);
};

FormalParameterContext.prototype.variableModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableModifierContext);
    } else {
        return this.getTypedRuleContext(VariableModifierContext,i);
    }
};

FormalParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFormalParameter(this);
	}
};

FormalParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFormalParameter(this);
	}
};

FormalParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFormalParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FormalParameterContext = FormalParameterContext;

PlayScriptParser.prototype.formalParameter = function() {

    var localctx = new FormalParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PlayScriptParser.RULE_formalParameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.FINAL) {
            this.state = 181;
            this.variableModifier();
            this.state = 186;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 187;
        this.typeType();
        this.state = 188;
        this.variableDeclaratorId();
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


function LastFormalParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_lastFormalParameter;
    return this;
}

LastFormalParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LastFormalParameterContext.prototype.constructor = LastFormalParameterContext;

LastFormalParameterContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

LastFormalParameterContext.prototype.ELLIPSIS = function() {
    return this.getToken(PlayScriptParser.ELLIPSIS, 0);
};

LastFormalParameterContext.prototype.variableDeclaratorId = function() {
    return this.getTypedRuleContext(VariableDeclaratorIdContext,0);
};

LastFormalParameterContext.prototype.variableModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableModifierContext);
    } else {
        return this.getTypedRuleContext(VariableModifierContext,i);
    }
};

LastFormalParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterLastFormalParameter(this);
	}
};

LastFormalParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitLastFormalParameter(this);
	}
};

LastFormalParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitLastFormalParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.LastFormalParameterContext = LastFormalParameterContext;

PlayScriptParser.prototype.lastFormalParameter = function() {

    var localctx = new LastFormalParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PlayScriptParser.RULE_lastFormalParameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.FINAL) {
            this.state = 190;
            this.variableModifier();
            this.state = 195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 196;
        this.typeType();
        this.state = 197;
        this.match(PlayScriptParser.ELLIPSIS);
        this.state = 198;
        this.variableDeclaratorId();
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


function VariableModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableModifier;
    return this;
}

VariableModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableModifierContext.prototype.constructor = VariableModifierContext;

VariableModifierContext.prototype.FINAL = function() {
    return this.getToken(PlayScriptParser.FINAL, 0);
};

VariableModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableModifier(this);
	}
};

VariableModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableModifier(this);
	}
};

VariableModifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitVariableModifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.VariableModifierContext = VariableModifierContext;

PlayScriptParser.prototype.variableModifier = function() {

    var localctx = new VariableModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PlayScriptParser.RULE_variableModifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(PlayScriptParser.FINAL);
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


function QualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_qualifiedName;
    return this;
}

QualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedNameContext.prototype.constructor = QualifiedNameContext;

QualifiedNameContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.IDENTIFIER);
    } else {
        return this.getToken(PlayScriptParser.IDENTIFIER, i);
    }
};


QualifiedNameContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.DOT);
    } else {
        return this.getToken(PlayScriptParser.DOT, i);
    }
};


QualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterQualifiedName(this);
	}
};

QualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitQualifiedName(this);
	}
};

QualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.QualifiedNameContext = QualifiedNameContext;

PlayScriptParser.prototype.qualifiedName = function() {

    var localctx = new QualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PlayScriptParser.RULE_qualifiedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.DOT) {
            this.state = 203;
            this.match(PlayScriptParser.DOT);
            this.state = 204;
            this.match(PlayScriptParser.IDENTIFIER);
            this.state = 209;
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


function FieldDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_fieldDeclaration;
    return this;
}

FieldDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldDeclarationContext.prototype.constructor = FieldDeclarationContext;

FieldDeclarationContext.prototype.variableDeclarators = function() {
    return this.getTypedRuleContext(VariableDeclaratorsContext,0);
};

FieldDeclarationContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

FieldDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFieldDeclaration(this);
	}
};

FieldDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFieldDeclaration(this);
	}
};

FieldDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFieldDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FieldDeclarationContext = FieldDeclarationContext;

PlayScriptParser.prototype.fieldDeclaration = function() {

    var localctx = new FieldDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, PlayScriptParser.RULE_fieldDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.variableDeclarators();
        this.state = 211;
        this.match(PlayScriptParser.SEMI);
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


function ConstructorDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_constructorDeclaration;
    this.constructorBody = null; // BlockContext
    return this;
}

ConstructorDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructorDeclarationContext.prototype.constructor = ConstructorDeclarationContext;

ConstructorDeclarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

ConstructorDeclarationContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

ConstructorDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ConstructorDeclarationContext.prototype.THROWS = function() {
    return this.getToken(PlayScriptParser.THROWS, 0);
};

ConstructorDeclarationContext.prototype.qualifiedNameList = function() {
    return this.getTypedRuleContext(QualifiedNameListContext,0);
};

ConstructorDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterConstructorDeclaration(this);
	}
};

ConstructorDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitConstructorDeclaration(this);
	}
};

ConstructorDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitConstructorDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ConstructorDeclarationContext = ConstructorDeclarationContext;

PlayScriptParser.prototype.constructorDeclaration = function() {

    var localctx = new ConstructorDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PlayScriptParser.RULE_constructorDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 214;
        this.formalParameters();
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlayScriptParser.THROWS) {
            this.state = 215;
            this.match(PlayScriptParser.THROWS);
            this.state = 216;
            this.qualifiedNameList();
        }

        this.state = 219;
        localctx.constructorBody = this.block();
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


function VariableDeclaratorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableDeclarators;
    return this;
}

VariableDeclaratorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaratorsContext.prototype.constructor = VariableDeclaratorsContext;

VariableDeclaratorsContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

VariableDeclaratorsContext.prototype.variableDeclarator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclaratorContext);
    } else {
        return this.getTypedRuleContext(VariableDeclaratorContext,i);
    }
};

VariableDeclaratorsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


VariableDeclaratorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableDeclarators(this);
	}
};

VariableDeclaratorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableDeclarators(this);
	}
};

VariableDeclaratorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitVariableDeclarators(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.VariableDeclaratorsContext = VariableDeclaratorsContext;

PlayScriptParser.prototype.variableDeclarators = function() {

    var localctx = new VariableDeclaratorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PlayScriptParser.RULE_variableDeclarators);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.typeType();
        this.state = 222;
        this.variableDeclarator();
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.COMMA) {
            this.state = 223;
            this.match(PlayScriptParser.COMMA);
            this.state = 224;
            this.variableDeclarator();
            this.state = 229;
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


function VariableDeclaratorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableDeclarator;
    return this;
}

VariableDeclaratorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaratorContext.prototype.constructor = VariableDeclaratorContext;

VariableDeclaratorContext.prototype.variableDeclaratorId = function() {
    return this.getTypedRuleContext(VariableDeclaratorIdContext,0);
};

VariableDeclaratorContext.prototype.ASSIGN = function() {
    return this.getToken(PlayScriptParser.ASSIGN, 0);
};

VariableDeclaratorContext.prototype.variableInitializer = function() {
    return this.getTypedRuleContext(VariableInitializerContext,0);
};

VariableDeclaratorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableDeclarator(this);
	}
};

VariableDeclaratorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableDeclarator(this);
	}
};

VariableDeclaratorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitVariableDeclarator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.VariableDeclaratorContext = VariableDeclaratorContext;

PlayScriptParser.prototype.variableDeclarator = function() {

    var localctx = new VariableDeclaratorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, PlayScriptParser.RULE_variableDeclarator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.variableDeclaratorId();
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlayScriptParser.ASSIGN) {
            this.state = 231;
            this.match(PlayScriptParser.ASSIGN);
            this.state = 232;
            this.variableInitializer();
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


function VariableDeclaratorIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableDeclaratorId;
    return this;
}

VariableDeclaratorIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaratorIdContext.prototype.constructor = VariableDeclaratorIdContext;

VariableDeclaratorIdContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

VariableDeclaratorIdContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LBRACK);
    } else {
        return this.getToken(PlayScriptParser.LBRACK, i);
    }
};


VariableDeclaratorIdContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.RBRACK);
    } else {
        return this.getToken(PlayScriptParser.RBRACK, i);
    }
};


VariableDeclaratorIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableDeclaratorId(this);
	}
};

VariableDeclaratorIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableDeclaratorId(this);
	}
};

VariableDeclaratorIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitVariableDeclaratorId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.VariableDeclaratorIdContext = VariableDeclaratorIdContext;

PlayScriptParser.prototype.variableDeclaratorId = function() {

    var localctx = new VariableDeclaratorIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PlayScriptParser.RULE_variableDeclaratorId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.LBRACK) {
            this.state = 236;
            this.match(PlayScriptParser.LBRACK);
            this.state = 237;
            this.match(PlayScriptParser.RBRACK);
            this.state = 242;
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


function VariableInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableInitializer;
    return this;
}

VariableInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableInitializerContext.prototype.constructor = VariableInitializerContext;

VariableInitializerContext.prototype.arrayInitializer = function() {
    return this.getTypedRuleContext(ArrayInitializerContext,0);
};

VariableInitializerContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VariableInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableInitializer(this);
	}
};

VariableInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableInitializer(this);
	}
};

VariableInitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitVariableInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.VariableInitializerContext = VariableInitializerContext;

PlayScriptParser.prototype.variableInitializer = function() {

    var localctx = new VariableInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, PlayScriptParser.RULE_variableInitializer);
    try {
        this.state = 245;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.arrayInitializer();
            break;
        case PlayScriptParser.SUPER:
        case PlayScriptParser.THIS:
        case PlayScriptParser.DECIMAL_LITERAL:
        case PlayScriptParser.HEX_LITERAL:
        case PlayScriptParser.OCT_LITERAL:
        case PlayScriptParser.BINARY_LITERAL:
        case PlayScriptParser.FLOAT_LITERAL:
        case PlayScriptParser.HEX_FLOAT_LITERAL:
        case PlayScriptParser.BOOL_LITERAL:
        case PlayScriptParser.CHAR_LITERAL:
        case PlayScriptParser.STRING_LITERAL:
        case PlayScriptParser.NULL_LITERAL:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.BANG:
        case PlayScriptParser.TILDE:
        case PlayScriptParser.INC:
        case PlayScriptParser.DEC:
        case PlayScriptParser.ADD:
        case PlayScriptParser.SUB:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 244;
            this.expression(0);
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


function ArrayInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_arrayInitializer;
    return this;
}

ArrayInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerContext.prototype.constructor = ArrayInitializerContext;

ArrayInitializerContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

ArrayInitializerContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

ArrayInitializerContext.prototype.variableInitializer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableInitializerContext);
    } else {
        return this.getTypedRuleContext(VariableInitializerContext,i);
    }
};

ArrayInitializerContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


ArrayInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterArrayInitializer(this);
	}
};

ArrayInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitArrayInitializer(this);
	}
};

ArrayInitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitArrayInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ArrayInitializerContext = ArrayInitializerContext;

PlayScriptParser.prototype.arrayInitializer = function() {

    var localctx = new ArrayInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, PlayScriptParser.RULE_arrayInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(PlayScriptParser.LBRACE);
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)) | (1 << (PlayScriptParser.LBRACE - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
            this.state = 248;
            this.variableInitializer();
            this.state = 253;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 249;
                    this.match(PlayScriptParser.COMMA);
                    this.state = 250;
                    this.variableInitializer(); 
                }
                this.state = 255;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
            }

            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.COMMA) {
                this.state = 256;
                this.match(PlayScriptParser.COMMA);
            }

        }

        this.state = 261;
        this.match(PlayScriptParser.RBRACE);
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
    this.ruleIndex = PlayScriptParser.RULE_classOrInterfaceType;
    return this;
}

ClassOrInterfaceTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassOrInterfaceTypeContext.prototype.constructor = ClassOrInterfaceTypeContext;

ClassOrInterfaceTypeContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.IDENTIFIER);
    } else {
        return this.getToken(PlayScriptParser.IDENTIFIER, i);
    }
};


ClassOrInterfaceTypeContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.DOT);
    } else {
        return this.getToken(PlayScriptParser.DOT, i);
    }
};


ClassOrInterfaceTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterClassOrInterfaceType(this);
	}
};

ClassOrInterfaceTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitClassOrInterfaceType(this);
	}
};

ClassOrInterfaceTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitClassOrInterfaceType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ClassOrInterfaceTypeContext = ClassOrInterfaceTypeContext;

PlayScriptParser.prototype.classOrInterfaceType = function() {

    var localctx = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, PlayScriptParser.RULE_classOrInterfaceType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 268;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 264;
                this.match(PlayScriptParser.DOT);
                this.state = 265;
                this.match(PlayScriptParser.IDENTIFIER); 
            }
            this.state = 270;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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


function TypeArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_typeArgument;
    return this;
}

TypeArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeArgumentContext.prototype.constructor = TypeArgumentContext;

TypeArgumentContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

TypeArgumentContext.prototype.QUESTION = function() {
    return this.getToken(PlayScriptParser.QUESTION, 0);
};

TypeArgumentContext.prototype.EXTENDS = function() {
    return this.getToken(PlayScriptParser.EXTENDS, 0);
};

TypeArgumentContext.prototype.SUPER = function() {
    return this.getToken(PlayScriptParser.SUPER, 0);
};

TypeArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterTypeArgument(this);
	}
};

TypeArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitTypeArgument(this);
	}
};

TypeArgumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitTypeArgument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.TypeArgumentContext = TypeArgumentContext;

PlayScriptParser.prototype.typeArgument = function() {

    var localctx = new TypeArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, PlayScriptParser.RULE_typeArgument);
    var _la = 0; // Token type
    try {
        this.state = 277;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.BOOLEAN:
        case PlayScriptParser.BYTE:
        case PlayScriptParser.CHAR:
        case PlayScriptParser.DOUBLE:
        case PlayScriptParser.FLOAT:
        case PlayScriptParser.INT:
        case PlayScriptParser.LONG:
        case PlayScriptParser.SHORT:
        case PlayScriptParser.FUNCTION:
        case PlayScriptParser.STRING:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 271;
            this.typeType();
            break;
        case PlayScriptParser.QUESTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 272;
            this.match(PlayScriptParser.QUESTION);
            this.state = 275;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.EXTENDS || _la===PlayScriptParser.SUPER) {
                this.state = 273;
                _la = this._input.LA(1);
                if(!(_la===PlayScriptParser.EXTENDS || _la===PlayScriptParser.SUPER)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 274;
                this.typeType();
            }

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


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.integerLiteral = function() {
    return this.getTypedRuleContext(IntegerLiteralContext,0);
};

LiteralContext.prototype.floatLiteral = function() {
    return this.getTypedRuleContext(FloatLiteralContext,0);
};

LiteralContext.prototype.CHAR_LITERAL = function() {
    return this.getToken(PlayScriptParser.CHAR_LITERAL, 0);
};

LiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(PlayScriptParser.STRING_LITERAL, 0);
};

LiteralContext.prototype.BOOL_LITERAL = function() {
    return this.getToken(PlayScriptParser.BOOL_LITERAL, 0);
};

LiteralContext.prototype.NULL_LITERAL = function() {
    return this.getToken(PlayScriptParser.NULL_LITERAL, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.LiteralContext = LiteralContext;

PlayScriptParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, PlayScriptParser.RULE_literal);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.DECIMAL_LITERAL:
        case PlayScriptParser.HEX_LITERAL:
        case PlayScriptParser.OCT_LITERAL:
        case PlayScriptParser.BINARY_LITERAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 279;
            this.integerLiteral();
            break;
        case PlayScriptParser.FLOAT_LITERAL:
        case PlayScriptParser.HEX_FLOAT_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 280;
            this.floatLiteral();
            break;
        case PlayScriptParser.CHAR_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 281;
            this.match(PlayScriptParser.CHAR_LITERAL);
            break;
        case PlayScriptParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 4);
            this.state = 282;
            this.match(PlayScriptParser.STRING_LITERAL);
            break;
        case PlayScriptParser.BOOL_LITERAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 283;
            this.match(PlayScriptParser.BOOL_LITERAL);
            break;
        case PlayScriptParser.NULL_LITERAL:
            this.enterOuterAlt(localctx, 6);
            this.state = 284;
            this.match(PlayScriptParser.NULL_LITERAL);
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


function IntegerLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_integerLiteral;
    return this;
}

IntegerLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerLiteralContext.prototype.constructor = IntegerLiteralContext;

IntegerLiteralContext.prototype.DECIMAL_LITERAL = function() {
    return this.getToken(PlayScriptParser.DECIMAL_LITERAL, 0);
};

IntegerLiteralContext.prototype.HEX_LITERAL = function() {
    return this.getToken(PlayScriptParser.HEX_LITERAL, 0);
};

IntegerLiteralContext.prototype.OCT_LITERAL = function() {
    return this.getToken(PlayScriptParser.OCT_LITERAL, 0);
};

IntegerLiteralContext.prototype.BINARY_LITERAL = function() {
    return this.getToken(PlayScriptParser.BINARY_LITERAL, 0);
};

IntegerLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterIntegerLiteral(this);
	}
};

IntegerLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitIntegerLiteral(this);
	}
};

IntegerLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitIntegerLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.IntegerLiteralContext = IntegerLiteralContext;

PlayScriptParser.prototype.integerLiteral = function() {

    var localctx = new IntegerLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, PlayScriptParser.RULE_integerLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (PlayScriptParser.DECIMAL_LITERAL - 53)) | (1 << (PlayScriptParser.HEX_LITERAL - 53)) | (1 << (PlayScriptParser.OCT_LITERAL - 53)) | (1 << (PlayScriptParser.BINARY_LITERAL - 53)))) !== 0))) {
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


function FloatLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_floatLiteral;
    return this;
}

FloatLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FloatLiteralContext.prototype.constructor = FloatLiteralContext;

FloatLiteralContext.prototype.FLOAT_LITERAL = function() {
    return this.getToken(PlayScriptParser.FLOAT_LITERAL, 0);
};

FloatLiteralContext.prototype.HEX_FLOAT_LITERAL = function() {
    return this.getToken(PlayScriptParser.HEX_FLOAT_LITERAL, 0);
};

FloatLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFloatLiteral(this);
	}
};

FloatLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFloatLiteral(this);
	}
};

FloatLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFloatLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FloatLiteralContext = FloatLiteralContext;

PlayScriptParser.prototype.floatLiteral = function() {

    var localctx = new FloatLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, PlayScriptParser.RULE_floatLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        _la = this._input.LA(1);
        if(!(_la===PlayScriptParser.FLOAT_LITERAL || _la===PlayScriptParser.HEX_FLOAT_LITERAL)) {
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


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.blockStatements = function() {
    return this.getTypedRuleContext(BlockStatementsContext,0);
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ProgContext = ProgContext;

PlayScriptParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, PlayScriptParser.RULE_prog);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.blockStatements();
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

BlockContext.prototype.blockStatements = function() {
    return this.getTypedRuleContext(BlockStatementsContext,0);
};

BlockContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.BlockContext = BlockContext;

PlayScriptParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, PlayScriptParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(PlayScriptParser.LBRACE);
        this.state = 294;
        this.blockStatements();
        this.state = 295;
        this.match(PlayScriptParser.RBRACE);
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


function BlockStatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_blockStatements;
    return this;
}

BlockStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementsContext.prototype.constructor = BlockStatementsContext;

BlockStatementsContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

BlockStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlockStatements(this);
	}
};

BlockStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlockStatements(this);
	}
};

BlockStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitBlockStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.BlockStatementsContext = BlockStatementsContext;

PlayScriptParser.prototype.blockStatements = function() {

    var localctx = new BlockStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, PlayScriptParser.RULE_blockStatements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BREAK) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.CLASS) | (1 << PlayScriptParser.CONTINUE) | (1 << PlayScriptParser.DO) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.FOR) | (1 << PlayScriptParser.IF) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (PlayScriptParser.RETURN - 36)) | (1 << (PlayScriptParser.SHORT - 36)) | (1 << (PlayScriptParser.SUPER - 36)) | (1 << (PlayScriptParser.SWITCH - 36)) | (1 << (PlayScriptParser.THIS - 36)) | (1 << (PlayScriptParser.VOID - 36)) | (1 << (PlayScriptParser.WHILE - 36)) | (1 << (PlayScriptParser.FUNCTION - 36)) | (1 << (PlayScriptParser.STRING - 36)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 36)) | (1 << (PlayScriptParser.HEX_LITERAL - 36)) | (1 << (PlayScriptParser.OCT_LITERAL - 36)) | (1 << (PlayScriptParser.BINARY_LITERAL - 36)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 36)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 36)) | (1 << (PlayScriptParser.BOOL_LITERAL - 36)) | (1 << (PlayScriptParser.CHAR_LITERAL - 36)) | (1 << (PlayScriptParser.STRING_LITERAL - 36)) | (1 << (PlayScriptParser.NULL_LITERAL - 36)) | (1 << (PlayScriptParser.LPAREN - 36)) | (1 << (PlayScriptParser.LBRACE - 36)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (PlayScriptParser.SEMI - 69)) | (1 << (PlayScriptParser.BANG - 69)) | (1 << (PlayScriptParser.TILDE - 69)) | (1 << (PlayScriptParser.INC - 69)) | (1 << (PlayScriptParser.DEC - 69)) | (1 << (PlayScriptParser.ADD - 69)) | (1 << (PlayScriptParser.SUB - 69)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
            this.state = 297;
            this.blockStatement();
            this.state = 302;
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


function BlockStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_blockStatement;
    return this;
}

BlockStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

BlockStatementContext.prototype.variableDeclarators = function() {
    return this.getTypedRuleContext(VariableDeclaratorsContext,0);
};

BlockStatementContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

BlockStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

BlockStatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

BlockStatementContext.prototype.classDeclaration = function() {
    return this.getTypedRuleContext(ClassDeclarationContext,0);
};

BlockStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlockStatement(this);
	}
};

BlockStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlockStatement(this);
	}
};

BlockStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitBlockStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.BlockStatementContext = BlockStatementContext;

PlayScriptParser.prototype.blockStatement = function() {

    var localctx = new BlockStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, PlayScriptParser.RULE_blockStatement);
    try {
        this.state = 309;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 303;
            this.variableDeclarators();
            this.state = 304;
            this.match(PlayScriptParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 306;
            this.statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 307;
            this.functionDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 308;
            this.classDeclaration();
            break;

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


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_statement;
    this.blockLabel = null; // BlockContext
    this.statementExpression = null; // ExpressionContext
    this.identifierLabel = null; // Token
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.IF = function() {
    return this.getToken(PlayScriptParser.IF, 0);
};

StatementContext.prototype.parExpression = function() {
    return this.getTypedRuleContext(ParExpressionContext,0);
};

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.ELSE = function() {
    return this.getToken(PlayScriptParser.ELSE, 0);
};

StatementContext.prototype.FOR = function() {
    return this.getToken(PlayScriptParser.FOR, 0);
};

StatementContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

StatementContext.prototype.forControl = function() {
    return this.getTypedRuleContext(ForControlContext,0);
};

StatementContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

StatementContext.prototype.WHILE = function() {
    return this.getToken(PlayScriptParser.WHILE, 0);
};

StatementContext.prototype.DO = function() {
    return this.getToken(PlayScriptParser.DO, 0);
};

StatementContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

StatementContext.prototype.SWITCH = function() {
    return this.getToken(PlayScriptParser.SWITCH, 0);
};

StatementContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

StatementContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

StatementContext.prototype.switchBlockStatementGroup = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchBlockStatementGroupContext);
    } else {
        return this.getTypedRuleContext(SwitchBlockStatementGroupContext,i);
    }
};

StatementContext.prototype.switchLabel = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchLabelContext);
    } else {
        return this.getTypedRuleContext(SwitchLabelContext,i);
    }
};

StatementContext.prototype.RETURN = function() {
    return this.getToken(PlayScriptParser.RETURN, 0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.BREAK = function() {
    return this.getToken(PlayScriptParser.BREAK, 0);
};

StatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

StatementContext.prototype.CONTINUE = function() {
    return this.getToken(PlayScriptParser.CONTINUE, 0);
};

StatementContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.StatementContext = StatementContext;

PlayScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, PlayScriptParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 374;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 311;
            localctx.blockLabel = this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 312;
            this.match(PlayScriptParser.IF);
            this.state = 313;
            this.parExpression();
            this.state = 314;
            this.statement();
            this.state = 317;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
            if(la_===1) {
                this.state = 315;
                this.match(PlayScriptParser.ELSE);
                this.state = 316;
                this.statement();

            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 319;
            this.match(PlayScriptParser.FOR);
            this.state = 320;
            this.match(PlayScriptParser.LPAREN);
            this.state = 321;
            this.forControl();
            this.state = 322;
            this.match(PlayScriptParser.RPAREN);
            this.state = 323;
            this.statement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 325;
            this.match(PlayScriptParser.WHILE);
            this.state = 326;
            this.parExpression();
            this.state = 327;
            this.statement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 329;
            this.match(PlayScriptParser.DO);
            this.state = 330;
            this.statement();
            this.state = 331;
            this.match(PlayScriptParser.WHILE);
            this.state = 332;
            this.parExpression();
            this.state = 333;
            this.match(PlayScriptParser.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 335;
            this.match(PlayScriptParser.SWITCH);
            this.state = 336;
            this.parExpression();
            this.state = 337;
            this.match(PlayScriptParser.LBRACE);
            this.state = 341;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 338;
                    this.switchBlockStatementGroup(); 
                }
                this.state = 343;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
            }

            this.state = 347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlayScriptParser.CASE || _la===PlayScriptParser.DEFAULT) {
                this.state = 344;
                this.switchLabel();
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 350;
            this.match(PlayScriptParser.RBRACE);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 352;
            this.match(PlayScriptParser.RETURN);
            this.state = 354;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 353;
                this.expression(0);
            }

            this.state = 356;
            this.match(PlayScriptParser.SEMI);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 357;
            this.match(PlayScriptParser.BREAK);
            this.state = 359;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.IDENTIFIER) {
                this.state = 358;
                this.match(PlayScriptParser.IDENTIFIER);
            }

            this.state = 361;
            this.match(PlayScriptParser.SEMI);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 362;
            this.match(PlayScriptParser.CONTINUE);
            this.state = 364;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.IDENTIFIER) {
                this.state = 363;
                this.match(PlayScriptParser.IDENTIFIER);
            }

            this.state = 366;
            this.match(PlayScriptParser.SEMI);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 367;
            this.match(PlayScriptParser.SEMI);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 368;
            localctx.statementExpression = this.expression(0);
            this.state = 369;
            this.match(PlayScriptParser.SEMI);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 371;
            localctx.identifierLabel = this.match(PlayScriptParser.IDENTIFIER);
            this.state = 372;
            this.match(PlayScriptParser.COLON);
            this.state = 373;
            this.statement();
            break;

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


function SwitchBlockStatementGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_switchBlockStatementGroup;
    return this;
}

SwitchBlockStatementGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchBlockStatementGroupContext.prototype.constructor = SwitchBlockStatementGroupContext;

SwitchBlockStatementGroupContext.prototype.switchLabel = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchLabelContext);
    } else {
        return this.getTypedRuleContext(SwitchLabelContext,i);
    }
};

SwitchBlockStatementGroupContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

SwitchBlockStatementGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterSwitchBlockStatementGroup(this);
	}
};

SwitchBlockStatementGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitSwitchBlockStatementGroup(this);
	}
};

SwitchBlockStatementGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitSwitchBlockStatementGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.SwitchBlockStatementGroupContext = SwitchBlockStatementGroupContext;

PlayScriptParser.prototype.switchBlockStatementGroup = function() {

    var localctx = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, PlayScriptParser.RULE_switchBlockStatementGroup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 376;
            this.switchLabel();
            this.state = 379; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlayScriptParser.CASE || _la===PlayScriptParser.DEFAULT);
        this.state = 382; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 381;
            this.blockStatement();
            this.state = 384; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BREAK) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.CLASS) | (1 << PlayScriptParser.CONTINUE) | (1 << PlayScriptParser.DO) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.FOR) | (1 << PlayScriptParser.IF) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (PlayScriptParser.RETURN - 36)) | (1 << (PlayScriptParser.SHORT - 36)) | (1 << (PlayScriptParser.SUPER - 36)) | (1 << (PlayScriptParser.SWITCH - 36)) | (1 << (PlayScriptParser.THIS - 36)) | (1 << (PlayScriptParser.VOID - 36)) | (1 << (PlayScriptParser.WHILE - 36)) | (1 << (PlayScriptParser.FUNCTION - 36)) | (1 << (PlayScriptParser.STRING - 36)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 36)) | (1 << (PlayScriptParser.HEX_LITERAL - 36)) | (1 << (PlayScriptParser.OCT_LITERAL - 36)) | (1 << (PlayScriptParser.BINARY_LITERAL - 36)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 36)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 36)) | (1 << (PlayScriptParser.BOOL_LITERAL - 36)) | (1 << (PlayScriptParser.CHAR_LITERAL - 36)) | (1 << (PlayScriptParser.STRING_LITERAL - 36)) | (1 << (PlayScriptParser.NULL_LITERAL - 36)) | (1 << (PlayScriptParser.LPAREN - 36)) | (1 << (PlayScriptParser.LBRACE - 36)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (PlayScriptParser.SEMI - 69)) | (1 << (PlayScriptParser.BANG - 69)) | (1 << (PlayScriptParser.TILDE - 69)) | (1 << (PlayScriptParser.INC - 69)) | (1 << (PlayScriptParser.DEC - 69)) | (1 << (PlayScriptParser.ADD - 69)) | (1 << (PlayScriptParser.SUB - 69)))) !== 0) || _la===PlayScriptParser.IDENTIFIER);
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


function SwitchLabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_switchLabel;
    this.constantExpression = null; // ExpressionContext
    this.enumConstantName = null; // Token
    return this;
}

SwitchLabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchLabelContext.prototype.constructor = SwitchLabelContext;

SwitchLabelContext.prototype.CASE = function() {
    return this.getToken(PlayScriptParser.CASE, 0);
};

SwitchLabelContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

SwitchLabelContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SwitchLabelContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

SwitchLabelContext.prototype.DEFAULT = function() {
    return this.getToken(PlayScriptParser.DEFAULT, 0);
};

SwitchLabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterSwitchLabel(this);
	}
};

SwitchLabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitSwitchLabel(this);
	}
};

SwitchLabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitSwitchLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.SwitchLabelContext = SwitchLabelContext;

PlayScriptParser.prototype.switchLabel = function() {

    var localctx = new SwitchLabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, PlayScriptParser.RULE_switchLabel);
    try {
        this.state = 394;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.CASE:
            this.enterOuterAlt(localctx, 1);
            this.state = 386;
            this.match(PlayScriptParser.CASE);
            this.state = 389;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
            switch(la_) {
            case 1:
                this.state = 387;
                localctx.constantExpression = this.expression(0);
                break;

            case 2:
                this.state = 388;
                localctx.enumConstantName = this.match(PlayScriptParser.IDENTIFIER);
                break;

            }
            this.state = 391;
            this.match(PlayScriptParser.COLON);
            break;
        case PlayScriptParser.DEFAULT:
            this.enterOuterAlt(localctx, 2);
            this.state = 392;
            this.match(PlayScriptParser.DEFAULT);
            this.state = 393;
            this.match(PlayScriptParser.COLON);
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


function ForControlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_forControl;
    this.forUpdate = null; // ExpressionListContext
    return this;
}

ForControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForControlContext.prototype.constructor = ForControlContext;

ForControlContext.prototype.enhancedForControl = function() {
    return this.getTypedRuleContext(EnhancedForControlContext,0);
};

ForControlContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.SEMI);
    } else {
        return this.getToken(PlayScriptParser.SEMI, i);
    }
};


ForControlContext.prototype.forInit = function() {
    return this.getTypedRuleContext(ForInitContext,0);
};

ForControlContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForControlContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForControlContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterForControl(this);
	}
};

ForControlContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitForControl(this);
	}
};

ForControlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitForControl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ForControlContext = ForControlContext;

PlayScriptParser.prototype.forControl = function() {

    var localctx = new ForControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, PlayScriptParser.RULE_forControl);
    var _la = 0; // Token type
    try {
        this.state = 408;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 396;
            this.enhancedForControl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 398;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlayScriptParser.SHORT - 37)) | (1 << (PlayScriptParser.SUPER - 37)) | (1 << (PlayScriptParser.THIS - 37)) | (1 << (PlayScriptParser.FUNCTION - 37)) | (1 << (PlayScriptParser.STRING - 37)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 37)) | (1 << (PlayScriptParser.HEX_LITERAL - 37)) | (1 << (PlayScriptParser.OCT_LITERAL - 37)) | (1 << (PlayScriptParser.BINARY_LITERAL - 37)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 37)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 37)) | (1 << (PlayScriptParser.BOOL_LITERAL - 37)) | (1 << (PlayScriptParser.CHAR_LITERAL - 37)) | (1 << (PlayScriptParser.STRING_LITERAL - 37)) | (1 << (PlayScriptParser.NULL_LITERAL - 37)) | (1 << (PlayScriptParser.LPAREN - 37)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 397;
                this.forInit();
            }

            this.state = 400;
            this.match(PlayScriptParser.SEMI);
            this.state = 402;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 401;
                this.expression(0);
            }

            this.state = 404;
            this.match(PlayScriptParser.SEMI);
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 405;
                localctx.forUpdate = this.expressionList();
            }

            break;

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


function ForInitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_forInit;
    return this;
}

ForInitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForInitContext.prototype.constructor = ForInitContext;

ForInitContext.prototype.variableDeclarators = function() {
    return this.getTypedRuleContext(VariableDeclaratorsContext,0);
};

ForInitContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForInitContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterForInit(this);
	}
};

ForInitContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitForInit(this);
	}
};

ForInitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitForInit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ForInitContext = ForInitContext;

PlayScriptParser.prototype.forInit = function() {

    var localctx = new ForInitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, PlayScriptParser.RULE_forInit);
    try {
        this.state = 412;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 410;
            this.variableDeclarators();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 411;
            this.expressionList();
            break;

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


function EnhancedForControlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_enhancedForControl;
    return this;
}

EnhancedForControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnhancedForControlContext.prototype.constructor = EnhancedForControlContext;

EnhancedForControlContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

EnhancedForControlContext.prototype.variableDeclaratorId = function() {
    return this.getTypedRuleContext(VariableDeclaratorIdContext,0);
};

EnhancedForControlContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

EnhancedForControlContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EnhancedForControlContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterEnhancedForControl(this);
	}
};

EnhancedForControlContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitEnhancedForControl(this);
	}
};

EnhancedForControlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitEnhancedForControl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.EnhancedForControlContext = EnhancedForControlContext;

PlayScriptParser.prototype.enhancedForControl = function() {

    var localctx = new EnhancedForControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, PlayScriptParser.RULE_enhancedForControl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414;
        this.typeType();
        this.state = 415;
        this.variableDeclaratorId();
        this.state = 416;
        this.match(PlayScriptParser.COLON);
        this.state = 417;
        this.expression(0);
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


function ParExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_parExpression;
    return this;
}

ParExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParExpressionContext.prototype.constructor = ParExpressionContext;

ParExpressionContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

ParExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParExpressionContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

ParExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterParExpression(this);
	}
};

ParExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitParExpression(this);
	}
};

ParExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitParExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ParExpressionContext = ParExpressionContext;

PlayScriptParser.prototype.parExpression = function() {

    var localctx = new ParExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, PlayScriptParser.RULE_parExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this.match(PlayScriptParser.LPAREN);
        this.state = 420;
        this.expression(0);
        this.state = 421;
        this.match(PlayScriptParser.RPAREN);
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
    this.ruleIndex = PlayScriptParser.RULE_expressionList;
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

ExpressionListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitExpressionList(this);
	}
};

ExpressionListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitExpressionList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ExpressionListContext = ExpressionListContext;

PlayScriptParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, PlayScriptParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.expression(0);
        this.state = 428;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.COMMA) {
            this.state = 424;
            this.match(PlayScriptParser.COMMA);
            this.state = 425;
            this.expression(0);
            this.state = 430;
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


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

FunctionCallContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

FunctionCallContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

FunctionCallContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallContext.prototype.THIS = function() {
    return this.getToken(PlayScriptParser.THIS, 0);
};

FunctionCallContext.prototype.SUPER = function() {
    return this.getToken(PlayScriptParser.SUPER, 0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FunctionCallContext = FunctionCallContext;

PlayScriptParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, PlayScriptParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.state = 449;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 431;
            this.match(PlayScriptParser.IDENTIFIER);
            this.state = 432;
            this.match(PlayScriptParser.LPAREN);
            this.state = 434;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 433;
                this.expressionList();
            }

            this.state = 436;
            this.match(PlayScriptParser.RPAREN);
            break;
        case PlayScriptParser.THIS:
            this.enterOuterAlt(localctx, 2);
            this.state = 437;
            this.match(PlayScriptParser.THIS);
            this.state = 438;
            this.match(PlayScriptParser.LPAREN);
            this.state = 440;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 439;
                this.expressionList();
            }

            this.state = 442;
            this.match(PlayScriptParser.RPAREN);
            break;
        case PlayScriptParser.SUPER:
            this.enterOuterAlt(localctx, 3);
            this.state = 443;
            this.match(PlayScriptParser.SUPER);
            this.state = 444;
            this.match(PlayScriptParser.LPAREN);
            this.state = 446;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
                this.state = 445;
                this.expressionList();
            }

            this.state = 448;
            this.match(PlayScriptParser.RPAREN);
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_expression;
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

ExpressionContext.prototype.ADD = function() {
    return this.getToken(PlayScriptParser.ADD, 0);
};

ExpressionContext.prototype.SUB = function() {
    return this.getToken(PlayScriptParser.SUB, 0);
};

ExpressionContext.prototype.INC = function() {
    return this.getToken(PlayScriptParser.INC, 0);
};

ExpressionContext.prototype.DEC = function() {
    return this.getToken(PlayScriptParser.DEC, 0);
};

ExpressionContext.prototype.TILDE = function() {
    return this.getToken(PlayScriptParser.TILDE, 0);
};

ExpressionContext.prototype.BANG = function() {
    return this.getToken(PlayScriptParser.BANG, 0);
};

ExpressionContext.prototype.MUL = function() {
    return this.getToken(PlayScriptParser.MUL, 0);
};

ExpressionContext.prototype.DIV = function() {
    return this.getToken(PlayScriptParser.DIV, 0);
};

ExpressionContext.prototype.MOD = function() {
    return this.getToken(PlayScriptParser.MOD, 0);
};

ExpressionContext.prototype.LT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LT);
    } else {
        return this.getToken(PlayScriptParser.LT, i);
    }
};


ExpressionContext.prototype.GT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.GT);
    } else {
        return this.getToken(PlayScriptParser.GT, i);
    }
};


ExpressionContext.prototype.LE = function() {
    return this.getToken(PlayScriptParser.LE, 0);
};

ExpressionContext.prototype.GE = function() {
    return this.getToken(PlayScriptParser.GE, 0);
};

ExpressionContext.prototype.EQUAL = function() {
    return this.getToken(PlayScriptParser.EQUAL, 0);
};

ExpressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(PlayScriptParser.NOTEQUAL, 0);
};

ExpressionContext.prototype.BITAND = function() {
    return this.getToken(PlayScriptParser.BITAND, 0);
};

ExpressionContext.prototype.CARET = function() {
    return this.getToken(PlayScriptParser.CARET, 0);
};

ExpressionContext.prototype.BITOR = function() {
    return this.getToken(PlayScriptParser.BITOR, 0);
};

ExpressionContext.prototype.AND = function() {
    return this.getToken(PlayScriptParser.AND, 0);
};

ExpressionContext.prototype.OR = function() {
    return this.getToken(PlayScriptParser.OR, 0);
};

ExpressionContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

ExpressionContext.prototype.QUESTION = function() {
    return this.getToken(PlayScriptParser.QUESTION, 0);
};

ExpressionContext.prototype.ASSIGN = function() {
    return this.getToken(PlayScriptParser.ASSIGN, 0);
};

ExpressionContext.prototype.ADD_ASSIGN = function() {
    return this.getToken(PlayScriptParser.ADD_ASSIGN, 0);
};

ExpressionContext.prototype.SUB_ASSIGN = function() {
    return this.getToken(PlayScriptParser.SUB_ASSIGN, 0);
};

ExpressionContext.prototype.MUL_ASSIGN = function() {
    return this.getToken(PlayScriptParser.MUL_ASSIGN, 0);
};

ExpressionContext.prototype.DIV_ASSIGN = function() {
    return this.getToken(PlayScriptParser.DIV_ASSIGN, 0);
};

ExpressionContext.prototype.AND_ASSIGN = function() {
    return this.getToken(PlayScriptParser.AND_ASSIGN, 0);
};

ExpressionContext.prototype.OR_ASSIGN = function() {
    return this.getToken(PlayScriptParser.OR_ASSIGN, 0);
};

ExpressionContext.prototype.XOR_ASSIGN = function() {
    return this.getToken(PlayScriptParser.XOR_ASSIGN, 0);
};

ExpressionContext.prototype.RSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.RSHIFT_ASSIGN, 0);
};

ExpressionContext.prototype.URSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.URSHIFT_ASSIGN, 0);
};

ExpressionContext.prototype.LSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.LSHIFT_ASSIGN, 0);
};

ExpressionContext.prototype.MOD_ASSIGN = function() {
    return this.getToken(PlayScriptParser.MOD_ASSIGN, 0);
};

ExpressionContext.prototype.DOT = function() {
    return this.getToken(PlayScriptParser.DOT, 0);
};

ExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

ExpressionContext.prototype.THIS = function() {
    return this.getToken(PlayScriptParser.THIS, 0);
};

ExpressionContext.prototype.LBRACK = function() {
    return this.getToken(PlayScriptParser.LBRACK, 0);
};

ExpressionContext.prototype.RBRACK = function() {
    return this.getToken(PlayScriptParser.RBRACK, 0);
};

ExpressionContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

ExpressionContext.prototype.INSTANCEOF = function() {
    return this.getToken(PlayScriptParser.INSTANCEOF, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlayScriptParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 78;
    this.enterRecursionRule(localctx, 78, PlayScriptParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
        switch(la_) {
        case 1:
            this.state = 452;
            this.primary();
            break;

        case 2:
            this.state = 453;
            this.functionCall();
            break;

        case 3:
            this.state = 454;
            localctx.prefix = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 85)) & ~0x1f) == 0 && ((1 << (_la - 85)) & ((1 << (PlayScriptParser.INC - 85)) | (1 << (PlayScriptParser.DEC - 85)) | (1 << (PlayScriptParser.ADD - 85)) | (1 << (PlayScriptParser.SUB - 85)))) !== 0))) {
                localctx.prefix = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 455;
            this.expression(15);
            break;

        case 4:
            this.state = 456;
            localctx.prefix = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===PlayScriptParser.BANG || _la===PlayScriptParser.TILDE)) {
                localctx.prefix = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 457;
            this.expression(14);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 526;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 524;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 460;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 461;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (PlayScriptParser.MUL - 89)) | (1 << (PlayScriptParser.DIV - 89)) | (1 << (PlayScriptParser.MOD - 89)))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 462;
                    this.expression(14);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 463;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 464;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.ADD || _la===PlayScriptParser.SUB)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 465;
                    this.expression(13);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 466;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 474;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 467;
                        this.match(PlayScriptParser.LT);
                        this.state = 468;
                        this.match(PlayScriptParser.LT);
                        break;

                    case 2:
                        this.state = 469;
                        this.match(PlayScriptParser.GT);
                        this.state = 470;
                        this.match(PlayScriptParser.GT);
                        this.state = 471;
                        this.match(PlayScriptParser.GT);
                        break;

                    case 3:
                        this.state = 472;
                        this.match(PlayScriptParser.GT);
                        this.state = 473;
                        this.match(PlayScriptParser.GT);
                        break;

                    }
                    this.state = 476;
                    this.expression(12);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 477;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 478;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (PlayScriptParser.GT - 73)) | (1 << (PlayScriptParser.LT - 73)) | (1 << (PlayScriptParser.LE - 73)) | (1 << (PlayScriptParser.GE - 73)))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 479;
                    this.expression(11);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 480;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 481;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.EQUAL || _la===PlayScriptParser.NOTEQUAL)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 482;
                    this.expression(9);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 483;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 484;
                    localctx.bop = this.match(PlayScriptParser.BITAND);
                    this.state = 485;
                    this.expression(8);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 486;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 487;
                    localctx.bop = this.match(PlayScriptParser.CARET);
                    this.state = 488;
                    this.expression(7);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 489;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 490;
                    localctx.bop = this.match(PlayScriptParser.BITOR);
                    this.state = 491;
                    this.expression(6);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 492;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 493;
                    localctx.bop = this.match(PlayScriptParser.AND);
                    this.state = 494;
                    this.expression(5);
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 495;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 496;
                    localctx.bop = this.match(PlayScriptParser.OR);
                    this.state = 497;
                    this.expression(4);
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 498;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 499;
                    localctx.bop = this.match(PlayScriptParser.QUESTION);
                    this.state = 500;
                    this.expression(0);
                    this.state = 501;
                    this.match(PlayScriptParser.COLON);
                    this.state = 502;
                    this.expression(3);
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 504;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 505;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (PlayScriptParser.ASSIGN - 72)) | (1 << (PlayScriptParser.ADD_ASSIGN - 72)) | (1 << (PlayScriptParser.SUB_ASSIGN - 72)) | (1 << (PlayScriptParser.MUL_ASSIGN - 72)) | (1 << (PlayScriptParser.DIV_ASSIGN - 72)) | (1 << (PlayScriptParser.AND_ASSIGN - 72)) | (1 << (PlayScriptParser.OR_ASSIGN - 72)) | (1 << (PlayScriptParser.XOR_ASSIGN - 72)) | (1 << (PlayScriptParser.MOD_ASSIGN - 72)) | (1 << (PlayScriptParser.LSHIFT_ASSIGN - 72)))) !== 0) || _la===PlayScriptParser.RSHIFT_ASSIGN || _la===PlayScriptParser.URSHIFT_ASSIGN)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 506;
                    this.expression(1);
                    break;

                case 13:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 507;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 508;
                    localctx.bop = this.match(PlayScriptParser.DOT);
                    this.state = 512;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 509;
                        this.match(PlayScriptParser.IDENTIFIER);
                        break;

                    case 2:
                        this.state = 510;
                        this.functionCall();
                        break;

                    case 3:
                        this.state = 511;
                        this.match(PlayScriptParser.THIS);
                        break;

                    }
                    break;

                case 14:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 514;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 515;
                    this.match(PlayScriptParser.LBRACK);
                    this.state = 516;
                    this.expression(0);
                    this.state = 517;
                    this.match(PlayScriptParser.RBRACK);
                    break;

                case 15:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 519;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 520;
                    localctx.postfix = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.INC || _la===PlayScriptParser.DEC)) {
                        localctx.postfix = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    break;

                case 16:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 521;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 522;
                    localctx.bop = this.match(PlayScriptParser.INSTANCEOF);
                    this.state = 523;
                    this.typeType();
                    break;

                } 
            }
            this.state = 528;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
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
    this.ruleIndex = PlayScriptParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

PrimaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

PrimaryContext.prototype.THIS = function() {
    return this.getToken(PlayScriptParser.THIS, 0);
};

PrimaryContext.prototype.SUPER = function() {
    return this.getToken(PlayScriptParser.SUPER, 0);
};

PrimaryContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.PrimaryContext = PrimaryContext;

PlayScriptParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, PlayScriptParser.RULE_primary);
    try {
        this.state = 537;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 529;
            this.match(PlayScriptParser.LPAREN);
            this.state = 530;
            this.expression(0);
            this.state = 531;
            this.match(PlayScriptParser.RPAREN);
            break;
        case PlayScriptParser.THIS:
            this.enterOuterAlt(localctx, 2);
            this.state = 533;
            this.match(PlayScriptParser.THIS);
            break;
        case PlayScriptParser.SUPER:
            this.enterOuterAlt(localctx, 3);
            this.state = 534;
            this.match(PlayScriptParser.SUPER);
            break;
        case PlayScriptParser.DECIMAL_LITERAL:
        case PlayScriptParser.HEX_LITERAL:
        case PlayScriptParser.OCT_LITERAL:
        case PlayScriptParser.BINARY_LITERAL:
        case PlayScriptParser.FLOAT_LITERAL:
        case PlayScriptParser.HEX_FLOAT_LITERAL:
        case PlayScriptParser.BOOL_LITERAL:
        case PlayScriptParser.CHAR_LITERAL:
        case PlayScriptParser.STRING_LITERAL:
        case PlayScriptParser.NULL_LITERAL:
            this.enterOuterAlt(localctx, 4);
            this.state = 535;
            this.literal();
            break;
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 5);
            this.state = 536;
            this.match(PlayScriptParser.IDENTIFIER);
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


function TypeListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_typeList;
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

TypeListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


TypeListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterTypeList(this);
	}
};

TypeListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitTypeList(this);
	}
};

TypeListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitTypeList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.TypeListContext = TypeListContext;

PlayScriptParser.prototype.typeList = function() {

    var localctx = new TypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, PlayScriptParser.RULE_typeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 539;
        this.typeType();
        this.state = 544;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.COMMA) {
            this.state = 540;
            this.match(PlayScriptParser.COMMA);
            this.state = 541;
            this.typeType();
            this.state = 546;
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
    this.ruleIndex = PlayScriptParser.RULE_typeType;
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

TypeTypeContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LBRACK);
    } else {
        return this.getToken(PlayScriptParser.LBRACK, i);
    }
};


TypeTypeContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.RBRACK);
    } else {
        return this.getToken(PlayScriptParser.RBRACK, i);
    }
};


TypeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterTypeType(this);
	}
};

TypeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitTypeType(this);
	}
};

TypeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitTypeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.TypeTypeContext = TypeTypeContext;

PlayScriptParser.prototype.typeType = function() {

    var localctx = new TypeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, PlayScriptParser.RULE_typeType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 550;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.IDENTIFIER:
            this.state = 547;
            this.classOrInterfaceType();
            break;
        case PlayScriptParser.FUNCTION:
            this.state = 548;
            this.functionType();
            break;
        case PlayScriptParser.BOOLEAN:
        case PlayScriptParser.BYTE:
        case PlayScriptParser.CHAR:
        case PlayScriptParser.DOUBLE:
        case PlayScriptParser.FLOAT:
        case PlayScriptParser.INT:
        case PlayScriptParser.LONG:
        case PlayScriptParser.SHORT:
        case PlayScriptParser.STRING:
            this.state = 549;
            this.primitiveType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 556;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 552;
                this.match(PlayScriptParser.LBRACK);
                this.state = 553;
                this.match(PlayScriptParser.RBRACK); 
            }
            this.state = 558;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,61,this._ctx);
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
    this.ruleIndex = PlayScriptParser.RULE_functionType;
    return this;
}

FunctionTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionTypeContext.prototype.constructor = FunctionTypeContext;

FunctionTypeContext.prototype.FUNCTION = function() {
    return this.getToken(PlayScriptParser.FUNCTION, 0);
};

FunctionTypeContext.prototype.typeTypeOrVoid = function() {
    return this.getTypedRuleContext(TypeTypeOrVoidContext,0);
};

FunctionTypeContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

FunctionTypeContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

FunctionTypeContext.prototype.typeList = function() {
    return this.getTypedRuleContext(TypeListContext,0);
};

FunctionTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterFunctionType(this);
	}
};

FunctionTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitFunctionType(this);
	}
};

FunctionTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitFunctionType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.FunctionTypeContext = FunctionTypeContext;

PlayScriptParser.prototype.functionType = function() {

    var localctx = new FunctionTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, PlayScriptParser.RULE_functionType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 559;
        this.match(PlayScriptParser.FUNCTION);
        this.state = 560;
        this.typeTypeOrVoid();
        this.state = 561;
        this.match(PlayScriptParser.LPAREN);
        this.state = 563;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlayScriptParser.SHORT - 37)) | (1 << (PlayScriptParser.FUNCTION - 37)) | (1 << (PlayScriptParser.STRING - 37)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
            this.state = 562;
            this.typeList();
        }

        this.state = 565;
        this.match(PlayScriptParser.RPAREN);
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
    this.ruleIndex = PlayScriptParser.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;

PrimitiveTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(PlayScriptParser.BOOLEAN, 0);
};

PrimitiveTypeContext.prototype.CHAR = function() {
    return this.getToken(PlayScriptParser.CHAR, 0);
};

PrimitiveTypeContext.prototype.BYTE = function() {
    return this.getToken(PlayScriptParser.BYTE, 0);
};

PrimitiveTypeContext.prototype.SHORT = function() {
    return this.getToken(PlayScriptParser.SHORT, 0);
};

PrimitiveTypeContext.prototype.INT = function() {
    return this.getToken(PlayScriptParser.INT, 0);
};

PrimitiveTypeContext.prototype.LONG = function() {
    return this.getToken(PlayScriptParser.LONG, 0);
};

PrimitiveTypeContext.prototype.FLOAT = function() {
    return this.getToken(PlayScriptParser.FLOAT, 0);
};

PrimitiveTypeContext.prototype.DOUBLE = function() {
    return this.getToken(PlayScriptParser.DOUBLE, 0);
};

PrimitiveTypeContext.prototype.STRING = function() {
    return this.getToken(PlayScriptParser.STRING, 0);
};

PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitPrimitiveType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.PrimitiveTypeContext = PrimitiveTypeContext;

PlayScriptParser.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, PlayScriptParser.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 567;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.BOOLEAN) | (1 << PlayScriptParser.BYTE) | (1 << PlayScriptParser.CHAR) | (1 << PlayScriptParser.DOUBLE) | (1 << PlayScriptParser.FLOAT) | (1 << PlayScriptParser.INT) | (1 << PlayScriptParser.LONG))) !== 0) || _la===PlayScriptParser.SHORT || _la===PlayScriptParser.STRING)) {
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


function CreatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_creator;
    return this;
}

CreatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreatorContext.prototype.constructor = CreatorContext;

CreatorContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

CreatorContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

CreatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterCreator(this);
	}
};

CreatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitCreator(this);
	}
};

CreatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitCreator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.CreatorContext = CreatorContext;

PlayScriptParser.prototype.creator = function() {

    var localctx = new CreatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, PlayScriptParser.RULE_creator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 569;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 570;
        this.arguments();
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


function SuperSuffixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_superSuffix;
    return this;
}

SuperSuffixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuperSuffixContext.prototype.constructor = SuperSuffixContext;

SuperSuffixContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

SuperSuffixContext.prototype.DOT = function() {
    return this.getToken(PlayScriptParser.DOT, 0);
};

SuperSuffixContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

SuperSuffixContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterSuperSuffix(this);
	}
};

SuperSuffixContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitSuperSuffix(this);
	}
};

SuperSuffixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitSuperSuffix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.SuperSuffixContext = SuperSuffixContext;

PlayScriptParser.prototype.superSuffix = function() {

    var localctx = new SuperSuffixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, PlayScriptParser.RULE_superSuffix);
    var _la = 0; // Token type
    try {
        this.state = 578;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 572;
            this.arguments();
            break;
        case PlayScriptParser.DOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 573;
            this.match(PlayScriptParser.DOT);
            this.state = 574;
            this.match(PlayScriptParser.IDENTIFIER);
            this.state = 576;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.LPAREN) {
                this.state = 575;
                this.arguments();
            }

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


function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

ArgumentsContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

ArgumentsContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ArgumentsContext = ArgumentsContext;

PlayScriptParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, PlayScriptParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 580;
        this.match(PlayScriptParser.LPAREN);
        this.state = 582;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (PlayScriptParser.SUPER - 40)) | (1 << (PlayScriptParser.THIS - 40)) | (1 << (PlayScriptParser.DECIMAL_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_LITERAL - 40)) | (1 << (PlayScriptParser.OCT_LITERAL - 40)) | (1 << (PlayScriptParser.BINARY_LITERAL - 40)) | (1 << (PlayScriptParser.FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.HEX_FLOAT_LITERAL - 40)) | (1 << (PlayScriptParser.BOOL_LITERAL - 40)) | (1 << (PlayScriptParser.CHAR_LITERAL - 40)) | (1 << (PlayScriptParser.STRING_LITERAL - 40)) | (1 << (PlayScriptParser.NULL_LITERAL - 40)) | (1 << (PlayScriptParser.LPAREN - 40)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.BANG - 75)) | (1 << (PlayScriptParser.TILDE - 75)) | (1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0) || _la===PlayScriptParser.IDENTIFIER) {
            this.state = 581;
            this.expressionList();
        }

        this.state = 584;
        this.match(PlayScriptParser.RPAREN);
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


PlayScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 39:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PlayScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		case 11:
			return this.precpred(this._ctx, 1);
		case 12:
			return this.precpred(this._ctx, 19);
		case 13:
			return this.precpred(this._ctx, 18);
		case 14:
			return this.precpred(this._ctx, 16);
		case 15:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PlayScriptParser = PlayScriptParser;
