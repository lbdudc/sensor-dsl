// Generated from grammar/SensorGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SensorGrammarListener from './SensorGrammarListener.js';
import SensorGrammarVisitor from './SensorGrammarVisitor.js';

const serializedATN = [4,1,52,352,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,4,0,64,8,0,11,0,12,0,65,1,1,1,1,3,
1,70,8,1,1,2,1,2,1,2,1,2,1,2,3,2,77,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,4,5,4,91,8,4,10,4,12,4,94,9,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,
102,8,5,1,5,1,5,1,5,1,5,3,5,108,8,5,1,5,1,5,1,5,1,5,1,5,3,5,115,8,5,3,5,
117,8,5,1,6,1,6,1,7,1,7,3,7,123,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,3,8,135,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,5,10,155,8,10,10,10,12,10,158,9,10,1,10,1,10,1,11,1,
11,1,11,1,11,1,11,1,11,5,11,168,8,11,10,11,12,11,171,9,11,1,11,1,11,1,12,
1,12,1,12,5,12,178,8,12,10,12,12,12,181,9,12,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,201,
8,13,10,13,12,13,204,9,13,1,13,3,13,207,8,13,1,13,3,13,210,8,13,1,13,1,13,
1,14,1,14,1,14,1,14,1,14,1,14,5,14,220,8,14,10,14,12,14,223,9,14,1,14,1,
14,1,15,1,15,1,15,5,15,230,8,15,10,15,12,15,233,9,15,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,5,16,242,8,16,10,16,12,16,245,9,16,1,16,1,16,1,17,1,17,1,
17,1,17,3,17,253,8,17,1,17,1,17,3,17,257,8,17,1,17,1,17,3,17,261,8,17,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,271,8,18,10,18,12,18,274,9,18,
1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,285,8,19,1,19,1,19,1,19,
1,19,3,19,291,8,19,5,19,293,8,19,10,19,12,19,296,9,19,1,19,1,19,1,20,1,20,
1,20,1,20,3,20,304,8,20,1,20,1,20,3,20,308,8,20,1,20,1,20,1,20,1,20,1,21,
1,21,1,21,1,21,1,21,1,21,5,21,320,8,21,10,21,12,21,323,9,21,1,21,1,21,1,
21,1,22,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,
1,28,1,29,3,29,344,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,0,0,31,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,0,4,3,0,28,29,47,48,51,51,2,0,12,12,35,35,2,0,22,22,26,27,1,0,33,
34,352,0,63,1,0,0,0,2,69,1,0,0,0,4,71,1,0,0,0,6,78,1,0,0,0,8,84,1,0,0,0,
10,116,1,0,0,0,12,118,1,0,0,0,14,122,1,0,0,0,16,124,1,0,0,0,18,138,1,0,0,
0,20,148,1,0,0,0,22,161,1,0,0,0,24,174,1,0,0,0,26,182,1,0,0,0,28,213,1,0,
0,0,30,226,1,0,0,0,32,234,1,0,0,0,34,248,1,0,0,0,36,262,1,0,0,0,38,277,1,
0,0,0,40,299,1,0,0,0,42,313,1,0,0,0,44,327,1,0,0,0,46,330,1,0,0,0,48,332,
1,0,0,0,50,334,1,0,0,0,52,336,1,0,0,0,54,338,1,0,0,0,56,340,1,0,0,0,58,343,
1,0,0,0,60,347,1,0,0,0,62,64,3,2,1,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,
0,0,0,65,66,1,0,0,0,66,1,1,0,0,0,67,70,3,4,2,0,68,70,3,42,21,0,69,67,1,0,
0,0,69,68,1,0,0,0,70,3,1,0,0,0,71,76,5,1,0,0,72,77,3,6,3,0,73,77,3,8,4,0,
74,77,3,14,7,0,75,77,3,26,13,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,0,0,
76,75,1,0,0,0,77,5,1,0,0,0,78,79,5,3,0,0,79,80,3,48,24,0,80,81,5,4,0,0,81,
82,3,46,23,0,82,83,5,41,0,0,83,7,1,0,0,0,84,85,5,7,0,0,85,86,3,48,24,0,86,
87,5,38,0,0,87,92,3,10,5,0,88,89,5,40,0,0,89,91,3,10,5,0,90,88,1,0,0,0,91,
94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,92,1,0,0,0,95,96,
5,39,0,0,96,97,5,41,0,0,97,9,1,0,0,0,98,101,3,12,6,0,99,100,5,30,0,0,100,
102,3,12,6,0,101,99,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,104,5,24,
0,0,104,107,3,50,25,0,105,106,5,25,0,0,106,108,3,54,27,0,107,105,1,0,0,0,
107,108,1,0,0,0,108,117,1,0,0,0,109,110,5,21,0,0,110,111,5,24,0,0,111,114,
3,50,25,0,112,113,5,25,0,0,113,115,3,54,27,0,114,112,1,0,0,0,114,115,1,0,
0,0,115,117,1,0,0,0,116,98,1,0,0,0,116,109,1,0,0,0,117,11,1,0,0,0,118,119,
7,0,0,0,119,13,1,0,0,0,120,123,3,16,8,0,121,123,3,18,9,0,122,120,1,0,0,0,
122,121,1,0,0,0,123,15,1,0,0,0,124,125,5,15,0,0,125,126,5,5,0,0,126,127,
3,48,24,0,127,128,5,38,0,0,128,129,5,12,0,0,129,130,5,42,0,0,130,131,7,1,
0,0,131,132,5,39,0,0,132,134,3,22,11,0,133,135,3,20,10,0,134,133,1,0,0,0,
134,135,1,0,0,0,135,136,1,0,0,0,136,137,5,41,0,0,137,17,1,0,0,0,138,139,
5,17,0,0,139,140,5,5,0,0,140,141,3,48,24,0,141,142,5,38,0,0,142,143,5,23,
0,0,143,144,5,42,0,0,144,145,3,48,24,0,145,146,5,39,0,0,146,147,5,41,0,0,
147,19,1,0,0,0,148,149,5,8,0,0,149,150,5,16,0,0,150,151,5,38,0,0,151,156,
3,48,24,0,152,153,5,40,0,0,153,155,3,48,24,0,154,152,1,0,0,0,155,158,1,0,
0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,
160,5,39,0,0,160,21,1,0,0,0,161,162,5,8,0,0,162,163,5,9,0,0,163,164,5,38,
0,0,164,169,3,24,12,0,165,166,5,40,0,0,166,168,3,24,12,0,167,165,1,0,0,0,
168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,172,1,0,0,0,171,169,
1,0,0,0,172,173,5,39,0,0,173,23,1,0,0,0,174,175,3,48,24,0,175,179,5,35,0,
0,176,178,5,22,0,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,
1,0,0,0,180,25,1,0,0,0,181,179,1,0,0,0,182,183,5,2,0,0,183,184,3,48,24,0,
184,185,5,38,0,0,185,186,5,10,0,0,186,187,5,42,0,0,187,188,5,47,0,0,188,
189,5,40,0,0,189,190,5,11,0,0,190,191,5,42,0,0,191,192,3,52,26,0,192,193,
5,40,0,0,193,194,5,12,0,0,194,195,5,42,0,0,195,196,5,35,0,0,196,197,5,39,
0,0,197,198,3,28,14,0,198,202,3,32,16,0,199,201,3,36,18,0,200,199,1,0,0,
0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,206,1,0,0,0,204,202,
1,0,0,0,205,207,3,38,19,0,206,205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,
0,208,210,3,40,20,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,
212,5,41,0,0,212,27,1,0,0,0,213,214,5,8,0,0,214,215,5,9,0,0,215,216,5,38,
0,0,216,221,3,30,15,0,217,218,5,40,0,0,218,220,3,30,15,0,219,217,1,0,0,0,
220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,223,221,
1,0,0,0,224,225,5,39,0,0,225,29,1,0,0,0,226,227,3,48,24,0,227,231,5,35,0,
0,228,230,7,2,0,0,229,228,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,
1,0,0,0,232,31,1,0,0,0,233,231,1,0,0,0,234,235,5,8,0,0,235,236,5,13,0,0,
236,237,5,14,0,0,237,238,5,38,0,0,238,243,3,34,17,0,239,240,5,40,0,0,240,
242,3,34,17,0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,
0,0,0,244,246,1,0,0,0,245,243,1,0,0,0,246,247,5,39,0,0,247,33,1,0,0,0,248,
249,3,48,24,0,249,252,5,35,0,0,250,251,5,18,0,0,251,253,3,50,25,0,252,250,
1,0,0,0,252,253,1,0,0,0,253,256,1,0,0,0,254,255,5,19,0,0,255,257,3,50,25,
0,256,254,1,0,0,0,256,257,1,0,0,0,257,260,1,0,0,0,258,259,5,7,0,0,259,261,
3,48,24,0,260,258,1,0,0,0,260,261,1,0,0,0,261,35,1,0,0,0,262,263,5,8,0,0,
263,264,5,15,0,0,264,265,5,6,0,0,265,266,3,48,24,0,266,267,5,38,0,0,267,
272,3,48,24,0,268,269,5,40,0,0,269,271,3,48,24,0,270,268,1,0,0,0,271,274,
1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,275,1,0,0,0,274,272,1,0,0,0,
275,276,5,39,0,0,276,37,1,0,0,0,277,278,5,8,0,0,278,279,5,17,0,0,279,280,
5,6,0,0,280,281,5,38,0,0,281,284,3,48,24,0,282,283,5,7,0,0,283,285,3,48,
24,0,284,282,1,0,0,0,284,285,1,0,0,0,285,294,1,0,0,0,286,287,5,40,0,0,287,
290,3,48,24,0,288,289,5,7,0,0,289,291,3,48,24,0,290,288,1,0,0,0,290,291,
1,0,0,0,291,293,1,0,0,0,292,286,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,
294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,5,39,0,0,298,39,
1,0,0,0,299,300,5,8,0,0,300,301,5,20,0,0,301,303,5,38,0,0,302,304,5,44,0,
0,303,302,1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,307,3,60,30,0,306,
308,5,45,0,0,307,306,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,310,5,40,
0,0,310,311,5,47,0,0,311,312,5,39,0,0,312,41,1,0,0,0,313,314,5,31,0,0,314,
315,5,32,0,0,315,316,5,38,0,0,316,321,3,44,22,0,317,318,5,40,0,0,318,320,
3,44,22,0,319,317,1,0,0,0,320,323,1,0,0,0,321,319,1,0,0,0,321,322,1,0,0,
0,322,324,1,0,0,0,323,321,1,0,0,0,324,325,5,39,0,0,325,326,5,41,0,0,326,
43,1,0,0,0,327,328,3,50,25,0,328,329,3,50,25,0,329,45,1,0,0,0,330,331,5,
47,0,0,331,47,1,0,0,0,332,333,5,51,0,0,333,49,1,0,0,0,334,335,5,52,0,0,335,
51,1,0,0,0,336,337,7,3,0,0,337,53,1,0,0,0,338,339,5,46,0,0,339,55,1,0,0,
0,340,341,5,48,0,0,341,57,1,0,0,0,342,344,5,43,0,0,343,342,1,0,0,0,343,344,
1,0,0,0,344,345,1,0,0,0,345,346,5,48,0,0,346,59,1,0,0,0,347,348,3,58,29,
0,348,349,5,40,0,0,349,350,3,58,29,0,350,61,1,0,0,0,30,65,69,76,92,101,107,
114,116,122,134,156,169,179,202,206,209,221,231,243,252,256,260,272,284,
290,294,303,307,321,343];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SensorGrammarParser extends antlr4.Parser {

    static grammarFileName = "SensorGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'#'", "'.'", "'('", 
                            "')'", "','", "';'", "':'", "'-'", "'['", "']'" ];
    static symbolicNames = [ null, "CREATE_SYMBOL", "SENSOR_SYMBOL", "PRODUCT_SYMBOL", 
                             "USING_SYMBOL", "DIMENSION_SYMBOL", "DIMENSIONS_SYMBOL", 
                             "RANGE_SYMBOL", "WITH_SYMBOL", "PROPERTIES_SYMBOL", 
                             "INTERVAL_SYMBOL", "DATASOURCE_SYMBOL", "GEOMETRY_SYMBOL", 
                             "MEASUREMENT_SYMBOL", "DATA_SYMBOL", "SPATIAL_SYMBOL", 
                             "PARENT_SYMBOL", "CATEGORICAL_SYMBOL", "UNITS_SYMBOL", 
                             "ICON_SYMBOL", "BBOX_SYMBOL", "DEFAULT_SYMBOL", 
                             "DISPLAYSTRING_SYMBOL", "FIELD_SYMBOL", "AS_SYMBOL", 
                             "COLOR_SYMBOL", "REQUIRED_SYMBOL", "UNIQUE_SYMBOL", 
                             "INFINITY_SYMBOL", "MINUS_INFINITY_SYMBOL", 
                             "TO_SYMBOL", "SET_SYMBOL", "DEPLOYMENT_SYMBOL", 
                             "ELASTICSEARCH_SYMBOL", "POSTGRES_SYMBOL", 
                             "TYPE", "POUND_SYMBOL", "DOT_SYMBOL", "OPAR_SYMBOL", 
                             "CPAR_SYMBOL", "COMMA_SYMBOL", "SCOL_SYMBOL", 
                             "COLON_SYMBOL", "DASH_SYMBOL", "BRA_SYMBOL", 
                             "KET_SYMBOL", "HEX_COLOR", "INT_NUMBER", "FLOAT_NUMBER", 
                             "COMMENT", "WHITESPACE", "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createProduct", 
                         "createRange", "rangeProperty", "rangeNumber", 
                         "createDimension", "createSpatialDimension", "createCategoricalDimension", 
                         "createParentDimension", "createDimensionProperties", 
                         "dimPropertyDefinition", "createSensor", "createSensorProperties", 
                         "sensorPropertyDefinition", "createSensorMeasurementData", 
                         "createMeasurementProperty", "addSpatialDimensionToSensor", 
                         "addCategoricalDimensionToSensor", "addBBXToSensor", 
                         "setDeployment", "deploymentProperty", "srid", 
                         "identifier", "text", "dataSource", "hexColor", 
                         "floatNumber", "negativeFloat", "coordinate" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SensorGrammarParser.ruleNames;
        this.literalNames = SensorGrammarParser.literalNames;
        this.symbolicNames = SensorGrammarParser.symbolicNames;
    }



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SensorGrammarParser.RULE_parse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.sentence();
	            this.state = 65; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===31);
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
	}



	sentence() {
	    let localctx = new SentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SensorGrammarParser.RULE_sentence);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.createStatement();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.setDeployment();
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
	}



	createStatement() {
	    let localctx = new CreateStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SensorGrammarParser.RULE_createStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(SensorGrammarParser.CREATE_SYMBOL);
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 72;
	            this.createProduct();
	            break;
	        case 7:
	            this.state = 73;
	            this.createRange();
	            break;
	        case 15:
	        case 17:
	            this.state = 74;
	            this.createDimension();
	            break;
	        case 2:
	            this.state = 75;
	            this.createSensor();
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
	}



	createProduct() {
	    let localctx = new CreateProductContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SensorGrammarParser.RULE_createProduct);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(SensorGrammarParser.PRODUCT_SYMBOL);
	        this.state = 79;
	        this.identifier();
	        this.state = 80;
	        this.match(SensorGrammarParser.USING_SYMBOL);
	        this.state = 81;
	        this.srid();
	        this.state = 82;
	        this.match(SensorGrammarParser.SCOL_SYMBOL);
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
	}



	createRange() {
	    let localctx = new CreateRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SensorGrammarParser.RULE_createRange);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(SensorGrammarParser.RANGE_SYMBOL);
	        this.state = 85;
	        this.identifier();
	        this.state = 86;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 87;
	        this.rangeProperty();
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 88;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 89;
	            this.rangeProperty();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 96;
	        this.match(SensorGrammarParser.SCOL_SYMBOL);
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
	}



	rangeProperty() {
	    let localctx = new RangePropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SensorGrammarParser.RULE_rangeProperty);
	    var _la = 0;
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 29:
	        case 47:
	        case 48:
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.rangeNumber();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 99;
	                this.match(SensorGrammarParser.TO_SYMBOL);
	                this.state = 100;
	                this.rangeNumber();
	            }

	            this.state = 103;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 104;
	            this.text();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 105;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 106;
	                this.hexColor();
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.match(SensorGrammarParser.DEFAULT_SYMBOL);
	            this.state = 110;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 111;
	            this.text();
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 112;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 113;
	                this.hexColor();
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
	}



	rangeNumber() {
	    let localctx = new RangeNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SensorGrammarParser.RULE_rangeNumber);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 9961475) !== 0))) {
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
	}



	createDimension() {
	    let localctx = new CreateDimensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SensorGrammarParser.RULE_createDimension);
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.createSpatialDimension();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.createCategoricalDimension();
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
	}



	createSpatialDimension() {
	    let localctx = new CreateSpatialDimensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SensorGrammarParser.RULE_createSpatialDimension);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 125;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 126;
	        this.identifier();
	        this.state = 127;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 128;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 129;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===35)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 131;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 132;
	        this.createDimensionProperties();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 133;
	            this.createParentDimension();
	        }

	        this.state = 136;
	        this.match(SensorGrammarParser.SCOL_SYMBOL);
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
	}



	createCategoricalDimension() {
	    let localctx = new CreateCategoricalDimensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SensorGrammarParser.RULE_createCategoricalDimension);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 139;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 140;
	        this.identifier();
	        this.state = 141;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 142;
	        this.match(SensorGrammarParser.FIELD_SYMBOL);
	        this.state = 143;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 144;
	        this.identifier();
	        this.state = 145;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 146;
	        this.match(SensorGrammarParser.SCOL_SYMBOL);
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
	}



	createParentDimension() {
	    let localctx = new CreateParentDimensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SensorGrammarParser.RULE_createParentDimension);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 149;
	        this.match(SensorGrammarParser.PARENT_SYMBOL);
	        this.state = 150;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 151;
	        this.identifier();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 152;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 153;
	            this.identifier();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	createDimensionProperties() {
	    let localctx = new CreateDimensionPropertiesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SensorGrammarParser.RULE_createDimensionProperties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 162;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 163;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 164;
	        this.dimPropertyDefinition();
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 165;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 166;
	            this.dimPropertyDefinition();
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 172;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	dimPropertyDefinition() {
	    let localctx = new DimPropertyDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SensorGrammarParser.RULE_dimPropertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.identifier();
	        this.state = 175;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 176;
	            this.match(SensorGrammarParser.DISPLAYSTRING_SYMBOL);
	            this.state = 181;
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
	}



	createSensor() {
	    let localctx = new CreateSensorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SensorGrammarParser.RULE_createSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(SensorGrammarParser.SENSOR_SYMBOL);
	        this.state = 183;
	        this.identifier();
	        this.state = 184;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 185;
	        this.match(SensorGrammarParser.INTERVAL_SYMBOL);
	        this.state = 186;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 187;
	        this.match(SensorGrammarParser.INT_NUMBER);
	        this.state = 188;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 189;
	        this.match(SensorGrammarParser.DATASOURCE_SYMBOL);
	        this.state = 190;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 191;
	        this.dataSource();
	        this.state = 192;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 193;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 194;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 195;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 196;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 197;
	        this.createSensorProperties();
	        this.state = 198;
	        this.createSensorMeasurementData();
	        this.state = 202;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 199;
	                this.addSpatialDimensionToSensor(); 
	            }
	            this.state = 204;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 205;
	            this.addCategoricalDimensionToSensor();

	        }
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 208;
	            this.addBBXToSensor();
	        }

	        this.state = 211;
	        this.match(SensorGrammarParser.SCOL_SYMBOL);
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
	}



	createSensorProperties() {
	    let localctx = new CreateSensorPropertiesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SensorGrammarParser.RULE_createSensorProperties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 214;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 215;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 216;
	        this.sensorPropertyDefinition();
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 217;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 218;
	            this.sensorPropertyDefinition();
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 224;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	sensorPropertyDefinition() {
	    let localctx = new SensorPropertyDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SensorGrammarParser.RULE_sensorPropertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.identifier();
	        this.state = 227;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 205520896) !== 0)) {
	            this.state = 228;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 205520896) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 233;
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
	}



	createSensorMeasurementData() {
	    let localctx = new CreateSensorMeasurementDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SensorGrammarParser.RULE_createSensorMeasurementData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 235;
	        this.match(SensorGrammarParser.MEASUREMENT_SYMBOL);
	        this.state = 236;
	        this.match(SensorGrammarParser.DATA_SYMBOL);
	        this.state = 237;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 238;
	        this.createMeasurementProperty();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 239;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 240;
	            this.createMeasurementProperty();
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 246;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	createMeasurementProperty() {
	    let localctx = new CreateMeasurementPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SensorGrammarParser.RULE_createMeasurementProperty);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.identifier();
	        this.state = 249;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 250;
	            this.match(SensorGrammarParser.UNITS_SYMBOL);
	            this.state = 251;
	            this.text();
	        }

	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 254;
	            this.match(SensorGrammarParser.ICON_SYMBOL);
	            this.state = 255;
	            this.text();
	        }

	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 258;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 259;
	            this.identifier();
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
	}



	addSpatialDimensionToSensor() {
	    let localctx = new AddSpatialDimensionToSensorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SensorGrammarParser.RULE_addSpatialDimensionToSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 263;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 264;
	        this.match(SensorGrammarParser.DIMENSIONS_SYMBOL);
	        this.state = 265;
	        this.identifier();
	        this.state = 266;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 267;
	        this.identifier();
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 268;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 269;
	            this.identifier();
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 275;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	addCategoricalDimensionToSensor() {
	    let localctx = new AddCategoricalDimensionToSensorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SensorGrammarParser.RULE_addCategoricalDimensionToSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 278;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 279;
	        this.match(SensorGrammarParser.DIMENSIONS_SYMBOL);
	        this.state = 280;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 281;
	        this.identifier();
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 282;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 283;
	            this.identifier();
	        }

	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 286;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 287;
	            this.identifier();
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 288;
	                this.match(SensorGrammarParser.RANGE_SYMBOL);
	                this.state = 289;
	                this.identifier();
	            }

	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 297;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	addBBXToSensor() {
	    let localctx = new AddBBXToSensorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SensorGrammarParser.RULE_addBBXToSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 300;
	        this.match(SensorGrammarParser.BBOX_SYMBOL);
	        this.state = 301;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 302;
	            this.match(SensorGrammarParser.BRA_SYMBOL);
	        }

	        this.state = 305;
	        this.coordinate();
	        this.state = 307;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 306;
	            this.match(SensorGrammarParser.KET_SYMBOL);
	        }

	        this.state = 309;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 310;
	        this.match(SensorGrammarParser.INT_NUMBER);
	        this.state = 311;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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
	}



	setDeployment() {
	    let localctx = new SetDeploymentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SensorGrammarParser.RULE_setDeployment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(SensorGrammarParser.SET_SYMBOL);
	        this.state = 314;
	        this.match(SensorGrammarParser.DEPLOYMENT_SYMBOL);
	        this.state = 315;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 316;
	        this.deploymentProperty();
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 317;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 318;
	            this.deploymentProperty();
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 324;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 325;
	        this.match(SensorGrammarParser.SCOL_SYMBOL);
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
	}



	deploymentProperty() {
	    let localctx = new DeploymentPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SensorGrammarParser.RULE_deploymentProperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.text();
	        this.state = 328;
	        this.text();
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
	}



	srid() {
	    let localctx = new SridContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SensorGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(SensorGrammarParser.INT_NUMBER);
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
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SensorGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.match(SensorGrammarParser.IDENTIFIER);
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
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SensorGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(SensorGrammarParser.QUOTED_TEXT);
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
	}



	dataSource() {
	    let localctx = new DataSourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SensorGrammarParser.RULE_dataSource);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
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
	}



	hexColor() {
	    let localctx = new HexColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SensorGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(SensorGrammarParser.HEX_COLOR);
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
	}



	floatNumber() {
	    let localctx = new FloatNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SensorGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(SensorGrammarParser.FLOAT_NUMBER);
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
	}



	negativeFloat() {
	    let localctx = new NegativeFloatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SensorGrammarParser.RULE_negativeFloat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 342;
	            this.match(SensorGrammarParser.DASH_SYMBOL);
	        }

	        this.state = 345;
	        this.match(SensorGrammarParser.FLOAT_NUMBER);
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
	}



	coordinate() {
	    let localctx = new CoordinateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SensorGrammarParser.RULE_coordinate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.negativeFloat();
	        this.state = 348;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 349;
	        this.negativeFloat();
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
	}


}

SensorGrammarParser.EOF = antlr4.Token.EOF;
SensorGrammarParser.CREATE_SYMBOL = 1;
SensorGrammarParser.SENSOR_SYMBOL = 2;
SensorGrammarParser.PRODUCT_SYMBOL = 3;
SensorGrammarParser.USING_SYMBOL = 4;
SensorGrammarParser.DIMENSION_SYMBOL = 5;
SensorGrammarParser.DIMENSIONS_SYMBOL = 6;
SensorGrammarParser.RANGE_SYMBOL = 7;
SensorGrammarParser.WITH_SYMBOL = 8;
SensorGrammarParser.PROPERTIES_SYMBOL = 9;
SensorGrammarParser.INTERVAL_SYMBOL = 10;
SensorGrammarParser.DATASOURCE_SYMBOL = 11;
SensorGrammarParser.GEOMETRY_SYMBOL = 12;
SensorGrammarParser.MEASUREMENT_SYMBOL = 13;
SensorGrammarParser.DATA_SYMBOL = 14;
SensorGrammarParser.SPATIAL_SYMBOL = 15;
SensorGrammarParser.PARENT_SYMBOL = 16;
SensorGrammarParser.CATEGORICAL_SYMBOL = 17;
SensorGrammarParser.UNITS_SYMBOL = 18;
SensorGrammarParser.ICON_SYMBOL = 19;
SensorGrammarParser.BBOX_SYMBOL = 20;
SensorGrammarParser.DEFAULT_SYMBOL = 21;
SensorGrammarParser.DISPLAYSTRING_SYMBOL = 22;
SensorGrammarParser.FIELD_SYMBOL = 23;
SensorGrammarParser.AS_SYMBOL = 24;
SensorGrammarParser.COLOR_SYMBOL = 25;
SensorGrammarParser.REQUIRED_SYMBOL = 26;
SensorGrammarParser.UNIQUE_SYMBOL = 27;
SensorGrammarParser.INFINITY_SYMBOL = 28;
SensorGrammarParser.MINUS_INFINITY_SYMBOL = 29;
SensorGrammarParser.TO_SYMBOL = 30;
SensorGrammarParser.SET_SYMBOL = 31;
SensorGrammarParser.DEPLOYMENT_SYMBOL = 32;
SensorGrammarParser.ELASTICSEARCH_SYMBOL = 33;
SensorGrammarParser.POSTGRES_SYMBOL = 34;
SensorGrammarParser.TYPE = 35;
SensorGrammarParser.POUND_SYMBOL = 36;
SensorGrammarParser.DOT_SYMBOL = 37;
SensorGrammarParser.OPAR_SYMBOL = 38;
SensorGrammarParser.CPAR_SYMBOL = 39;
SensorGrammarParser.COMMA_SYMBOL = 40;
SensorGrammarParser.SCOL_SYMBOL = 41;
SensorGrammarParser.COLON_SYMBOL = 42;
SensorGrammarParser.DASH_SYMBOL = 43;
SensorGrammarParser.BRA_SYMBOL = 44;
SensorGrammarParser.KET_SYMBOL = 45;
SensorGrammarParser.HEX_COLOR = 46;
SensorGrammarParser.INT_NUMBER = 47;
SensorGrammarParser.FLOAT_NUMBER = 48;
SensorGrammarParser.COMMENT = 49;
SensorGrammarParser.WHITESPACE = 50;
SensorGrammarParser.IDENTIFIER = 51;
SensorGrammarParser.QUOTED_TEXT = 52;

SensorGrammarParser.RULE_parse = 0;
SensorGrammarParser.RULE_sentence = 1;
SensorGrammarParser.RULE_createStatement = 2;
SensorGrammarParser.RULE_createProduct = 3;
SensorGrammarParser.RULE_createRange = 4;
SensorGrammarParser.RULE_rangeProperty = 5;
SensorGrammarParser.RULE_rangeNumber = 6;
SensorGrammarParser.RULE_createDimension = 7;
SensorGrammarParser.RULE_createSpatialDimension = 8;
SensorGrammarParser.RULE_createCategoricalDimension = 9;
SensorGrammarParser.RULE_createParentDimension = 10;
SensorGrammarParser.RULE_createDimensionProperties = 11;
SensorGrammarParser.RULE_dimPropertyDefinition = 12;
SensorGrammarParser.RULE_createSensor = 13;
SensorGrammarParser.RULE_createSensorProperties = 14;
SensorGrammarParser.RULE_sensorPropertyDefinition = 15;
SensorGrammarParser.RULE_createSensorMeasurementData = 16;
SensorGrammarParser.RULE_createMeasurementProperty = 17;
SensorGrammarParser.RULE_addSpatialDimensionToSensor = 18;
SensorGrammarParser.RULE_addCategoricalDimensionToSensor = 19;
SensorGrammarParser.RULE_addBBXToSensor = 20;
SensorGrammarParser.RULE_setDeployment = 21;
SensorGrammarParser.RULE_deploymentProperty = 22;
SensorGrammarParser.RULE_srid = 23;
SensorGrammarParser.RULE_identifier = 24;
SensorGrammarParser.RULE_text = 25;
SensorGrammarParser.RULE_dataSource = 26;
SensorGrammarParser.RULE_hexColor = 27;
SensorGrammarParser.RULE_floatNumber = 28;
SensorGrammarParser.RULE_negativeFloat = 29;
SensorGrammarParser.RULE_coordinate = 30;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_parse;
    }

	sentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenceContext);
	    } else {
	        return this.getTypedRuleContext(SentenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_sentence;
    }

	createStatement() {
	    return this.getTypedRuleContext(CreateStatementContext,0);
	};

	setDeployment() {
	    return this.getTypedRuleContext(SetDeploymentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createStatement;
    }

	CREATE_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CREATE_SYMBOL, 0);
	};

	createProduct() {
	    return this.getTypedRuleContext(CreateProductContext,0);
	};

	createRange() {
	    return this.getTypedRuleContext(CreateRangeContext,0);
	};

	createDimension() {
	    return this.getTypedRuleContext(CreateDimensionContext,0);
	};

	createSensor() {
	    return this.getTypedRuleContext(CreateSensorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateProductContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createProduct;
    }

	PRODUCT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PRODUCT_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	USING_SYMBOL() {
	    return this.getToken(SensorGrammarParser.USING_SYMBOL, 0);
	};

	srid() {
	    return this.getTypedRuleContext(SridContext,0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateProduct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateProduct(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateProduct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createRange;
    }

	RANGE_SYMBOL() {
	    return this.getToken(SensorGrammarParser.RANGE_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	rangeProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangePropertyContext);
	    } else {
	        return this.getTypedRuleContext(RangePropertyContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangePropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_rangeProperty;
    }

	rangeNumber = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeNumberContext);
	    } else {
	        return this.getTypedRuleContext(RangeNumberContext,i);
	    }
	};

	AS_SYMBOL() {
	    return this.getToken(SensorGrammarParser.AS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	TO_SYMBOL() {
	    return this.getToken(SensorGrammarParser.TO_SYMBOL, 0);
	};

	COLOR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COLOR_SYMBOL, 0);
	};

	hexColor() {
	    return this.getTypedRuleContext(HexColorContext,0);
	};

	DEFAULT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DEFAULT_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterRangeProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitRangeProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitRangeProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_rangeNumber;
    }

	IDENTIFIER() {
	    return this.getToken(SensorGrammarParser.IDENTIFIER, 0);
	};

	FLOAT_NUMBER() {
	    return this.getToken(SensorGrammarParser.FLOAT_NUMBER, 0);
	};

	INT_NUMBER() {
	    return this.getToken(SensorGrammarParser.INT_NUMBER, 0);
	};

	INFINITY_SYMBOL() {
	    return this.getToken(SensorGrammarParser.INFINITY_SYMBOL, 0);
	};

	MINUS_INFINITY_SYMBOL() {
	    return this.getToken(SensorGrammarParser.MINUS_INFINITY_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterRangeNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitRangeNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitRangeNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateDimensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createDimension;
    }

	createSpatialDimension() {
	    return this.getTypedRuleContext(CreateSpatialDimensionContext,0);
	};

	createCategoricalDimension() {
	    return this.getTypedRuleContext(CreateCategoricalDimensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateDimension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateDimension(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateDimension(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateSpatialDimensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createSpatialDimension;
    }

	SPATIAL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SPATIAL_SYMBOL, 0);
	};

	DIMENSION_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DIMENSION_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	GEOMETRY_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.GEOMETRY_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.GEOMETRY_SYMBOL, i);
	    }
	};


	COLON_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COLON_SYMBOL, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	createDimensionProperties() {
	    return this.getTypedRuleContext(CreateDimensionPropertiesContext,0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	TYPE() {
	    return this.getToken(SensorGrammarParser.TYPE, 0);
	};

	createParentDimension() {
	    return this.getTypedRuleContext(CreateParentDimensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateSpatialDimension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateSpatialDimension(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateSpatialDimension(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateCategoricalDimensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createCategoricalDimension;
    }

	CATEGORICAL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CATEGORICAL_SYMBOL, 0);
	};

	DIMENSION_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DIMENSION_SYMBOL, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	FIELD_SYMBOL() {
	    return this.getToken(SensorGrammarParser.FIELD_SYMBOL, 0);
	};

	COLON_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COLON_SYMBOL, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateCategoricalDimension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateCategoricalDimension(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateCategoricalDimension(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateParentDimensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createParentDimension;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	PARENT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PARENT_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateParentDimension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateParentDimension(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateParentDimension(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateDimensionPropertiesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createDimensionProperties;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	PROPERTIES_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PROPERTIES_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	dimPropertyDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DimPropertyDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DimPropertyDefinitionContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateDimensionProperties(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateDimensionProperties(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateDimensionProperties(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DimPropertyDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_dimPropertyDefinition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	TYPE() {
	    return this.getToken(SensorGrammarParser.TYPE, 0);
	};

	DISPLAYSTRING_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.DISPLAYSTRING_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.DISPLAYSTRING_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterDimPropertyDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitDimPropertyDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitDimPropertyDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateSensorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createSensor;
    }

	SENSOR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SENSOR_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	INTERVAL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.INTERVAL_SYMBOL, 0);
	};

	COLON_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COLON_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COLON_SYMBOL, i);
	    }
	};


	INT_NUMBER() {
	    return this.getToken(SensorGrammarParser.INT_NUMBER, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	DATASOURCE_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DATASOURCE_SYMBOL, 0);
	};

	dataSource() {
	    return this.getTypedRuleContext(DataSourceContext,0);
	};

	GEOMETRY_SYMBOL() {
	    return this.getToken(SensorGrammarParser.GEOMETRY_SYMBOL, 0);
	};

	TYPE() {
	    return this.getToken(SensorGrammarParser.TYPE, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	createSensorProperties() {
	    return this.getTypedRuleContext(CreateSensorPropertiesContext,0);
	};

	createSensorMeasurementData() {
	    return this.getTypedRuleContext(CreateSensorMeasurementDataContext,0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	addSpatialDimensionToSensor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddSpatialDimensionToSensorContext);
	    } else {
	        return this.getTypedRuleContext(AddSpatialDimensionToSensorContext,i);
	    }
	};

	addCategoricalDimensionToSensor() {
	    return this.getTypedRuleContext(AddCategoricalDimensionToSensorContext,0);
	};

	addBBXToSensor() {
	    return this.getTypedRuleContext(AddBBXToSensorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateSensor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateSensor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateSensor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateSensorPropertiesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createSensorProperties;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	PROPERTIES_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PROPERTIES_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	sensorPropertyDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SensorPropertyDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(SensorPropertyDefinitionContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateSensorProperties(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateSensorProperties(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateSensorProperties(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SensorPropertyDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_sensorPropertyDefinition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	TYPE() {
	    return this.getToken(SensorGrammarParser.TYPE, 0);
	};

	DISPLAYSTRING_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.DISPLAYSTRING_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.DISPLAYSTRING_SYMBOL, i);
	    }
	};


	REQUIRED_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.REQUIRED_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.REQUIRED_SYMBOL, i);
	    }
	};


	UNIQUE_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.UNIQUE_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.UNIQUE_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterSensorPropertyDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitSensorPropertyDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitSensorPropertyDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateSensorMeasurementDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createSensorMeasurementData;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	MEASUREMENT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.MEASUREMENT_SYMBOL, 0);
	};

	DATA_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DATA_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	createMeasurementProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CreateMeasurementPropertyContext);
	    } else {
	        return this.getTypedRuleContext(CreateMeasurementPropertyContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateSensorMeasurementData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateSensorMeasurementData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateSensorMeasurementData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateMeasurementPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createMeasurementProperty;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	TYPE() {
	    return this.getToken(SensorGrammarParser.TYPE, 0);
	};

	UNITS_SYMBOL() {
	    return this.getToken(SensorGrammarParser.UNITS_SYMBOL, 0);
	};

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	ICON_SYMBOL() {
	    return this.getToken(SensorGrammarParser.ICON_SYMBOL, 0);
	};

	RANGE_SYMBOL() {
	    return this.getToken(SensorGrammarParser.RANGE_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCreateMeasurementProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateMeasurementProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateMeasurementProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddSpatialDimensionToSensorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_addSpatialDimensionToSensor;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	SPATIAL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SPATIAL_SYMBOL, 0);
	};

	DIMENSIONS_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DIMENSIONS_SYMBOL, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterAddSpatialDimensionToSensor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitAddSpatialDimensionToSensor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitAddSpatialDimensionToSensor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddCategoricalDimensionToSensorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_addCategoricalDimensionToSensor;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	CATEGORICAL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CATEGORICAL_SYMBOL, 0);
	};

	DIMENSIONS_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DIMENSIONS_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	RANGE_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.RANGE_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.RANGE_SYMBOL, i);
	    }
	};


	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterAddCategoricalDimensionToSensor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitAddCategoricalDimensionToSensor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitAddCategoricalDimensionToSensor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddBBXToSensorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_addBBXToSensor;
    }

	WITH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.WITH_SYMBOL, 0);
	};

	BBOX_SYMBOL() {
	    return this.getToken(SensorGrammarParser.BBOX_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	coordinate() {
	    return this.getTypedRuleContext(CoordinateContext,0);
	};

	COMMA_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COMMA_SYMBOL, 0);
	};

	INT_NUMBER() {
	    return this.getToken(SensorGrammarParser.INT_NUMBER, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	BRA_SYMBOL() {
	    return this.getToken(SensorGrammarParser.BRA_SYMBOL, 0);
	};

	KET_SYMBOL() {
	    return this.getToken(SensorGrammarParser.KET_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterAddBBXToSensor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitAddBBXToSensor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitAddBBXToSensor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDeploymentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_setDeployment;
    }

	SET_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SET_SYMBOL, 0);
	};

	DEPLOYMENT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DEPLOYMENT_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.OPAR_SYMBOL, 0);
	};

	deploymentProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeploymentPropertyContext);
	    } else {
	        return this.getTypedRuleContext(DeploymentPropertyContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(SensorGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterSetDeployment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitSetDeployment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitSetDeployment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeploymentPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_deploymentProperty;
    }

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterDeploymentProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitDeploymentProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitDeploymentProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SridContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_srid;
    }

	INT_NUMBER() {
	    return this.getToken(SensorGrammarParser.INT_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterSrid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitSrid(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitSrid(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(SensorGrammarParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_text;
    }

	QUOTED_TEXT() {
	    return this.getToken(SensorGrammarParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DataSourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_dataSource;
    }

	POSTGRES_SYMBOL() {
	    return this.getToken(SensorGrammarParser.POSTGRES_SYMBOL, 0);
	};

	ELASTICSEARCH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.ELASTICSEARCH_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterDataSource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitDataSource(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitDataSource(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HexColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_hexColor;
    }

	HEX_COLOR() {
	    return this.getToken(SensorGrammarParser.HEX_COLOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterHexColor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitHexColor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitHexColor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FloatNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_floatNumber;
    }

	FLOAT_NUMBER() {
	    return this.getToken(SensorGrammarParser.FLOAT_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterFloatNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitFloatNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitFloatNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegativeFloatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_negativeFloat;
    }

	FLOAT_NUMBER() {
	    return this.getToken(SensorGrammarParser.FLOAT_NUMBER, 0);
	};

	DASH_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DASH_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterNegativeFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitNegativeFloat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitNegativeFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CoordinateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_coordinate;
    }

	negativeFloat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegativeFloatContext);
	    } else {
	        return this.getTypedRuleContext(NegativeFloatContext,i);
	    }
	};

	COMMA_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COMMA_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterCoordinate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCoordinate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCoordinate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SensorGrammarParser.ParseContext = ParseContext; 
SensorGrammarParser.SentenceContext = SentenceContext; 
SensorGrammarParser.CreateStatementContext = CreateStatementContext; 
SensorGrammarParser.CreateProductContext = CreateProductContext; 
SensorGrammarParser.CreateRangeContext = CreateRangeContext; 
SensorGrammarParser.RangePropertyContext = RangePropertyContext; 
SensorGrammarParser.RangeNumberContext = RangeNumberContext; 
SensorGrammarParser.CreateDimensionContext = CreateDimensionContext; 
SensorGrammarParser.CreateSpatialDimensionContext = CreateSpatialDimensionContext; 
SensorGrammarParser.CreateCategoricalDimensionContext = CreateCategoricalDimensionContext; 
SensorGrammarParser.CreateParentDimensionContext = CreateParentDimensionContext; 
SensorGrammarParser.CreateDimensionPropertiesContext = CreateDimensionPropertiesContext; 
SensorGrammarParser.DimPropertyDefinitionContext = DimPropertyDefinitionContext; 
SensorGrammarParser.CreateSensorContext = CreateSensorContext; 
SensorGrammarParser.CreateSensorPropertiesContext = CreateSensorPropertiesContext; 
SensorGrammarParser.SensorPropertyDefinitionContext = SensorPropertyDefinitionContext; 
SensorGrammarParser.CreateSensorMeasurementDataContext = CreateSensorMeasurementDataContext; 
SensorGrammarParser.CreateMeasurementPropertyContext = CreateMeasurementPropertyContext; 
SensorGrammarParser.AddSpatialDimensionToSensorContext = AddSpatialDimensionToSensorContext; 
SensorGrammarParser.AddCategoricalDimensionToSensorContext = AddCategoricalDimensionToSensorContext; 
SensorGrammarParser.AddBBXToSensorContext = AddBBXToSensorContext; 
SensorGrammarParser.SetDeploymentContext = SetDeploymentContext; 
SensorGrammarParser.DeploymentPropertyContext = DeploymentPropertyContext; 
SensorGrammarParser.SridContext = SridContext; 
SensorGrammarParser.IdentifierContext = IdentifierContext; 
SensorGrammarParser.TextContext = TextContext; 
SensorGrammarParser.DataSourceContext = DataSourceContext; 
SensorGrammarParser.HexColorContext = HexColorContext; 
SensorGrammarParser.FloatNumberContext = FloatNumberContext; 
SensorGrammarParser.NegativeFloatContext = NegativeFloatContext; 
SensorGrammarParser.CoordinateContext = CoordinateContext; 
