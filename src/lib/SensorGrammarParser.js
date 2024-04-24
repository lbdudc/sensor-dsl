// Generated from grammar/SensorGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SensorGrammarListener from './SensorGrammarListener.js';
import SensorGrammarVisitor from './SensorGrammarVisitor.js';

const serializedATN = [4,1,54,375,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,4,0,66,8,0,11,0,12,0,67,
1,1,1,1,3,1,72,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,80,8,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,94,8,4,10,4,12,4,97,9,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,5,1,5,5,5,108,8,5,10,5,12,5,111,9,5,1,5,1,5,1,5,1,6,1,6,
1,6,3,6,119,8,6,1,6,1,6,1,6,1,6,3,6,125,8,6,1,6,1,6,1,6,1,6,1,6,3,6,132,
8,6,3,6,134,8,6,1,7,1,7,1,8,1,8,3,8,140,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,3,9,152,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,172,8,11,10,11,12,11,175,9,
11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,185,8,12,10,12,12,12,188,
9,12,1,12,1,12,1,13,1,13,1,13,5,13,195,8,13,10,13,12,13,198,9,13,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,5,14,218,8,14,10,14,12,14,221,9,14,1,14,5,14,224,8,14,10,14,12,
14,227,9,14,1,14,3,14,230,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,
15,240,8,15,10,15,12,15,243,9,15,1,15,1,15,1,16,1,16,1,16,5,16,250,8,16,
10,16,12,16,253,9,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,262,8,17,10,
17,12,17,265,9,17,1,17,1,17,1,18,1,18,1,18,1,18,3,18,273,8,18,1,18,1,18,
3,18,277,8,18,1,18,1,18,3,18,281,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,5,19,291,8,19,10,19,12,19,294,9,19,1,19,1,19,1,20,1,20,1,20,1,20,3,
20,302,8,20,1,20,1,20,1,20,1,20,3,20,308,8,20,1,20,1,20,1,20,1,20,3,20,314,
8,20,5,20,316,8,20,10,20,12,20,319,9,20,1,20,1,20,1,21,1,21,1,21,1,21,3,
21,327,8,21,1,21,1,21,3,21,331,8,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,
22,1,22,1,22,5,22,343,8,22,10,22,12,22,346,9,22,1,22,1,22,1,22,1,23,1,23,
1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,3,
30,367,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,0,0,32,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
0,4,3,0,30,31,49,50,53,53,2,0,14,14,37,37,2,0,24,24,28,29,1,0,35,36,377,
0,65,1,0,0,0,2,71,1,0,0,0,4,73,1,0,0,0,6,81,1,0,0,0,8,87,1,0,0,0,10,101,
1,0,0,0,12,133,1,0,0,0,14,135,1,0,0,0,16,139,1,0,0,0,18,141,1,0,0,0,20,155,
1,0,0,0,22,165,1,0,0,0,24,178,1,0,0,0,26,191,1,0,0,0,28,199,1,0,0,0,30,233,
1,0,0,0,32,246,1,0,0,0,34,254,1,0,0,0,36,268,1,0,0,0,38,282,1,0,0,0,40,297,
1,0,0,0,42,322,1,0,0,0,44,336,1,0,0,0,46,350,1,0,0,0,48,353,1,0,0,0,50,355,
1,0,0,0,52,357,1,0,0,0,54,359,1,0,0,0,56,361,1,0,0,0,58,363,1,0,0,0,60,366,
1,0,0,0,62,370,1,0,0,0,64,66,3,2,1,0,65,64,1,0,0,0,66,67,1,0,0,0,67,65,1,
0,0,0,67,68,1,0,0,0,68,1,1,0,0,0,69,72,3,4,2,0,70,72,3,44,22,0,71,69,1,0,
0,0,71,70,1,0,0,0,72,3,1,0,0,0,73,79,5,1,0,0,74,80,3,6,3,0,75,80,3,8,4,0,
76,80,3,10,5,0,77,80,3,16,8,0,78,80,3,28,14,0,79,74,1,0,0,0,79,75,1,0,0,
0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,5,1,0,0,0,81,82,5,4,0,0,82,
83,3,50,25,0,83,84,5,5,0,0,84,85,3,48,24,0,85,86,5,43,0,0,86,7,1,0,0,0,87,
88,5,3,0,0,88,89,3,50,25,0,89,90,5,40,0,0,90,95,3,50,25,0,91,92,5,42,0,0,
92,94,3,50,25,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,
96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,41,0,0,99,100,5,43,0,0,100,9,1,0,0,0,
101,102,5,8,0,0,102,103,3,50,25,0,103,104,5,40,0,0,104,109,3,12,6,0,105,
106,5,42,0,0,106,108,3,12,6,0,107,105,1,0,0,0,108,111,1,0,0,0,109,107,1,
0,0,0,109,110,1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,113,5,41,0,0,113,
114,5,43,0,0,114,11,1,0,0,0,115,118,3,14,7,0,116,117,5,32,0,0,117,119,3,
14,7,0,118,116,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,5,26,0,0,
121,124,3,52,26,0,122,123,5,27,0,0,123,125,3,56,28,0,124,122,1,0,0,0,124,
125,1,0,0,0,125,134,1,0,0,0,126,127,5,23,0,0,127,128,5,26,0,0,128,131,3,
52,26,0,129,130,5,27,0,0,130,132,3,56,28,0,131,129,1,0,0,0,131,132,1,0,0,
0,132,134,1,0,0,0,133,115,1,0,0,0,133,126,1,0,0,0,134,13,1,0,0,0,135,136,
7,0,0,0,136,15,1,0,0,0,137,140,3,18,9,0,138,140,3,20,10,0,139,137,1,0,0,
0,139,138,1,0,0,0,140,17,1,0,0,0,141,142,5,17,0,0,142,143,5,6,0,0,143,144,
3,50,25,0,144,145,5,40,0,0,145,146,5,14,0,0,146,147,5,44,0,0,147,148,7,1,
0,0,148,149,5,41,0,0,149,151,3,24,12,0,150,152,3,22,11,0,151,150,1,0,0,0,
151,152,1,0,0,0,152,153,1,0,0,0,153,154,5,43,0,0,154,19,1,0,0,0,155,156,
5,19,0,0,156,157,5,6,0,0,157,158,3,50,25,0,158,159,5,40,0,0,159,160,5,25,
0,0,160,161,5,44,0,0,161,162,3,50,25,0,162,163,5,41,0,0,163,164,5,43,0,0,
164,21,1,0,0,0,165,166,5,9,0,0,166,167,5,18,0,0,167,168,5,40,0,0,168,173,
3,50,25,0,169,170,5,42,0,0,170,172,3,50,25,0,171,169,1,0,0,0,172,175,1,0,
0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,173,1,0,0,0,176,
177,5,41,0,0,177,23,1,0,0,0,178,179,5,9,0,0,179,180,5,11,0,0,180,181,5,40,
0,0,181,186,3,26,13,0,182,183,5,42,0,0,183,185,3,26,13,0,184,182,1,0,0,0,
185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,189,1,0,0,0,188,186,
1,0,0,0,189,190,5,41,0,0,190,25,1,0,0,0,191,192,3,50,25,0,192,196,5,37,0,
0,193,195,5,24,0,0,194,193,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,
1,0,0,0,197,27,1,0,0,0,198,196,1,0,0,0,199,200,5,2,0,0,200,201,3,50,25,0,
201,202,5,40,0,0,202,203,5,12,0,0,203,204,5,44,0,0,204,205,5,49,0,0,205,
206,5,42,0,0,206,207,5,13,0,0,207,208,5,44,0,0,208,209,3,54,27,0,209,210,
5,42,0,0,210,211,5,14,0,0,211,212,5,44,0,0,212,213,5,37,0,0,213,214,5,41,
0,0,214,215,3,30,15,0,215,219,3,34,17,0,216,218,3,38,19,0,217,216,1,0,0,
0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,225,1,0,0,0,221,219,
1,0,0,0,222,224,3,40,20,0,223,222,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,
0,225,226,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,228,230,3,42,21,0,229,
228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,5,43,0,0,232,29,1,0,
0,0,233,234,5,9,0,0,234,235,5,11,0,0,235,236,5,40,0,0,236,241,3,32,16,0,
237,238,5,42,0,0,238,240,3,32,16,0,239,237,1,0,0,0,240,243,1,0,0,0,241,239,
1,0,0,0,241,242,1,0,0,0,242,244,1,0,0,0,243,241,1,0,0,0,244,245,5,41,0,0,
245,31,1,0,0,0,246,247,3,50,25,0,247,251,5,37,0,0,248,250,7,2,0,0,249,248,
1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,33,1,0,0,0,253,
251,1,0,0,0,254,255,5,9,0,0,255,256,5,15,0,0,256,257,5,16,0,0,257,258,5,
40,0,0,258,263,3,36,18,0,259,260,5,42,0,0,260,262,3,36,18,0,261,259,1,0,
0,0,262,265,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,264,266,1,0,0,0,265,
263,1,0,0,0,266,267,5,41,0,0,267,35,1,0,0,0,268,269,3,50,25,0,269,272,5,
37,0,0,270,271,5,20,0,0,271,273,3,52,26,0,272,270,1,0,0,0,272,273,1,0,0,
0,273,276,1,0,0,0,274,275,5,21,0,0,275,277,3,52,26,0,276,274,1,0,0,0,276,
277,1,0,0,0,277,280,1,0,0,0,278,279,5,8,0,0,279,281,3,50,25,0,280,278,1,
0,0,0,280,281,1,0,0,0,281,37,1,0,0,0,282,283,5,9,0,0,283,284,5,17,0,0,284,
285,5,10,0,0,285,286,3,50,25,0,286,287,5,40,0,0,287,292,3,50,25,0,288,289,
5,42,0,0,289,291,3,50,25,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,
0,292,293,1,0,0,0,293,295,1,0,0,0,294,292,1,0,0,0,295,296,5,41,0,0,296,39,
1,0,0,0,297,298,5,9,0,0,298,299,5,19,0,0,299,301,5,10,0,0,300,302,3,50,25,
0,301,300,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,304,5,40,0,0,304,307,
3,50,25,0,305,306,5,8,0,0,306,308,3,50,25,0,307,305,1,0,0,0,307,308,1,0,
0,0,308,317,1,0,0,0,309,310,5,42,0,0,310,313,3,50,25,0,311,312,5,8,0,0,312,
314,3,50,25,0,313,311,1,0,0,0,313,314,1,0,0,0,314,316,1,0,0,0,315,309,1,
0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,0,0,318,320,1,0,0,0,319,
317,1,0,0,0,320,321,5,41,0,0,321,41,1,0,0,0,322,323,5,9,0,0,323,324,5,22,
0,0,324,326,5,40,0,0,325,327,5,46,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,
328,1,0,0,0,328,330,3,62,31,0,329,331,5,47,0,0,330,329,1,0,0,0,330,331,1,
0,0,0,331,332,1,0,0,0,332,333,5,42,0,0,333,334,5,49,0,0,334,335,5,41,0,0,
335,43,1,0,0,0,336,337,5,33,0,0,337,338,5,34,0,0,338,339,5,40,0,0,339,344,
3,46,23,0,340,341,5,42,0,0,341,343,3,46,23,0,342,340,1,0,0,0,343,346,1,0,
0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,347,1,0,0,0,346,344,1,0,0,0,347,
348,5,41,0,0,348,349,5,43,0,0,349,45,1,0,0,0,350,351,3,52,26,0,351,352,3,
52,26,0,352,47,1,0,0,0,353,354,5,49,0,0,354,49,1,0,0,0,355,356,5,53,0,0,
356,51,1,0,0,0,357,358,5,54,0,0,358,53,1,0,0,0,359,360,7,3,0,0,360,55,1,
0,0,0,361,362,5,48,0,0,362,57,1,0,0,0,363,364,5,50,0,0,364,59,1,0,0,0,365,
367,5,45,0,0,366,365,1,0,0,0,366,367,1,0,0,0,367,368,1,0,0,0,368,369,5,50,
0,0,369,61,1,0,0,0,370,371,3,60,30,0,371,372,5,42,0,0,372,373,3,60,30,0,
373,63,1,0,0,0,32,67,71,79,95,109,118,124,131,133,139,151,173,186,196,219,
225,229,241,251,263,272,276,280,292,301,307,313,317,326,330,344,366];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SensorGrammarParser extends antlr4.Parser {

    static grammarFileName = "SensorGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'#'", "'.'", 
                            "'('", "')'", "','", "';'", "':'", "'-'", "'['", 
                            "']'" ];
    static symbolicNames = [ null, "CREATE_SYMBOL", "SENSOR_SYMBOL", "SENSORGROUP_SYMBOL", 
                             "PRODUCT_SYMBOL", "USING_SYMBOL", "DIMENSION_SYMBOL", 
                             "DIMENSIONS_SYMBOL", "RANGE_SYMBOL", "WITH_SYMBOL", 
                             "GROUP_SYMBOL", "PROPERTIES_SYMBOL", "INTERVAL_SYMBOL", 
                             "DATASOURCE_SYMBOL", "GEOMETRY_SYMBOL", "MEASUREMENT_SYMBOL", 
                             "DATA_SYMBOL", "SPATIAL_SYMBOL", "PARENT_SYMBOL", 
                             "CATEGORICAL_SYMBOL", "UNITS_SYMBOL", "ICON_SYMBOL", 
                             "BBOX_SYMBOL", "DEFAULT_SYMBOL", "DISPLAYSTRING_SYMBOL", 
                             "FIELD_SYMBOL", "AS_SYMBOL", "COLOR_SYMBOL", 
                             "REQUIRED_SYMBOL", "UNIQUE_SYMBOL", "INFINITY_SYMBOL", 
                             "MINUS_INFINITY_SYMBOL", "TO_SYMBOL", "SET_SYMBOL", 
                             "DEPLOYMENT_SYMBOL", "ELASTICSEARCH_SYMBOL", 
                             "POSTGRES_SYMBOL", "TYPE", "POUND_SYMBOL", 
                             "DOT_SYMBOL", "OPAR_SYMBOL", "CPAR_SYMBOL", 
                             "COMMA_SYMBOL", "SCOL_SYMBOL", "COLON_SYMBOL", 
                             "DASH_SYMBOL", "BRA_SYMBOL", "KET_SYMBOL", 
                             "HEX_COLOR", "INT_NUMBER", "FLOAT_NUMBER", 
                             "COMMENT", "WHITESPACE", "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createProduct", 
                         "createSensorGroup", "createRange", "rangeProperty", 
                         "rangeNumber", "createDimension", "createSpatialDimension", 
                         "createCategoricalDimension", "createParentDimension", 
                         "createDimensionProperties", "dimPropertyDefinition", 
                         "createSensor", "createSensorProperties", "sensorPropertyDefinition", 
                         "createSensorMeasurementData", "createMeasurementProperty", 
                         "addSpatialDimensionToSensor", "addCategoricalDimensionToSensor", 
                         "addBBXToSensor", "setDeployment", "deploymentProperty", 
                         "srid", "identifier", "text", "dataSource", "hexColor", 
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
	        this.state = 65; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 64;
	            this.sentence();
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===33);
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
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.createStatement();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
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
	        this.state = 73;
	        this.match(SensorGrammarParser.CREATE_SYMBOL);
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 74;
	            this.createProduct();
	            break;
	        case 3:
	            this.state = 75;
	            this.createSensorGroup();
	            break;
	        case 8:
	            this.state = 76;
	            this.createRange();
	            break;
	        case 17:
	        case 19:
	            this.state = 77;
	            this.createDimension();
	            break;
	        case 2:
	            this.state = 78;
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
	        this.state = 81;
	        this.match(SensorGrammarParser.PRODUCT_SYMBOL);
	        this.state = 82;
	        this.identifier();
	        this.state = 83;
	        this.match(SensorGrammarParser.USING_SYMBOL);
	        this.state = 84;
	        this.srid();
	        this.state = 85;
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



	createSensorGroup() {
	    let localctx = new CreateSensorGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SensorGrammarParser.RULE_createSensorGroup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(SensorGrammarParser.SENSORGROUP_SYMBOL);
	        this.state = 88;
	        this.identifier();
	        this.state = 89;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 90;
	        this.identifier();
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 91;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 92;
	            this.identifier();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 99;
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
	    this.enterRule(localctx, 10, SensorGrammarParser.RULE_createRange);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(SensorGrammarParser.RANGE_SYMBOL);
	        this.state = 102;
	        this.identifier();
	        this.state = 103;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 104;
	        this.rangeProperty();
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 105;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 106;
	            this.rangeProperty();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 113;
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
	    this.enterRule(localctx, 12, SensorGrammarParser.RULE_rangeProperty);
	    var _la = 0;
	    try {
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 31:
	        case 49:
	        case 50:
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.rangeNumber();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 116;
	                this.match(SensorGrammarParser.TO_SYMBOL);
	                this.state = 117;
	                this.rangeNumber();
	            }

	            this.state = 120;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 121;
	            this.text();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 122;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 123;
	                this.hexColor();
	            }

	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(SensorGrammarParser.DEFAULT_SYMBOL);
	            this.state = 127;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 128;
	            this.text();
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 129;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 130;
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
	    this.enterRule(localctx, 14, SensorGrammarParser.RULE_rangeNumber);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 9961475) !== 0))) {
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
	    this.enterRule(localctx, 16, SensorGrammarParser.RULE_createDimension);
	    try {
	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.createSpatialDimension();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
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
	    this.enterRule(localctx, 18, SensorGrammarParser.RULE_createSpatialDimension);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 142;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 143;
	        this.identifier();
	        this.state = 144;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 145;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 146;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 148;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 149;
	        this.createDimensionProperties();
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 150;
	            this.createParentDimension();
	        }

	        this.state = 153;
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
	    this.enterRule(localctx, 20, SensorGrammarParser.RULE_createCategoricalDimension);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 156;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 157;
	        this.identifier();
	        this.state = 158;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 159;
	        this.match(SensorGrammarParser.FIELD_SYMBOL);
	        this.state = 160;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 161;
	        this.identifier();
	        this.state = 162;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 163;
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
	    this.enterRule(localctx, 22, SensorGrammarParser.RULE_createParentDimension);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 166;
	        this.match(SensorGrammarParser.PARENT_SYMBOL);
	        this.state = 167;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 168;
	        this.identifier();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 169;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 170;
	            this.identifier();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 176;
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
	    this.enterRule(localctx, 24, SensorGrammarParser.RULE_createDimensionProperties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 179;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 180;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 181;
	        this.dimPropertyDefinition();
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 182;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 183;
	            this.dimPropertyDefinition();
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 189;
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
	    this.enterRule(localctx, 26, SensorGrammarParser.RULE_dimPropertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.identifier();
	        this.state = 192;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 193;
	            this.match(SensorGrammarParser.DISPLAYSTRING_SYMBOL);
	            this.state = 198;
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
	    this.enterRule(localctx, 28, SensorGrammarParser.RULE_createSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(SensorGrammarParser.SENSOR_SYMBOL);
	        this.state = 200;
	        this.identifier();
	        this.state = 201;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 202;
	        this.match(SensorGrammarParser.INTERVAL_SYMBOL);
	        this.state = 203;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 204;
	        this.match(SensorGrammarParser.INT_NUMBER);
	        this.state = 205;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 206;
	        this.match(SensorGrammarParser.DATASOURCE_SYMBOL);
	        this.state = 207;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 208;
	        this.dataSource();
	        this.state = 209;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 210;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 211;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 212;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 213;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 214;
	        this.createSensorProperties();
	        this.state = 215;
	        this.createSensorMeasurementData();
	        this.state = 219;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 216;
	                this.addSpatialDimensionToSensor(); 
	            }
	            this.state = 221;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 225;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 222;
	                this.addCategoricalDimensionToSensor(); 
	            }
	            this.state = 227;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 228;
	            this.addBBXToSensor();
	        }

	        this.state = 231;
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
	    this.enterRule(localctx, 30, SensorGrammarParser.RULE_createSensorProperties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 234;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 235;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 236;
	        this.sensorPropertyDefinition();
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 237;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 238;
	            this.sensorPropertyDefinition();
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 244;
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
	    this.enterRule(localctx, 32, SensorGrammarParser.RULE_sensorPropertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.identifier();
	        this.state = 247;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 822083584) !== 0)) {
	            this.state = 248;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 822083584) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 253;
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
	    this.enterRule(localctx, 34, SensorGrammarParser.RULE_createSensorMeasurementData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 255;
	        this.match(SensorGrammarParser.MEASUREMENT_SYMBOL);
	        this.state = 256;
	        this.match(SensorGrammarParser.DATA_SYMBOL);
	        this.state = 257;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 258;
	        this.createMeasurementProperty();
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 259;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 260;
	            this.createMeasurementProperty();
	            this.state = 265;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 266;
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
	    this.enterRule(localctx, 36, SensorGrammarParser.RULE_createMeasurementProperty);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.identifier();
	        this.state = 269;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 270;
	            this.match(SensorGrammarParser.UNITS_SYMBOL);
	            this.state = 271;
	            this.text();
	        }

	        this.state = 276;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 274;
	            this.match(SensorGrammarParser.ICON_SYMBOL);
	            this.state = 275;
	            this.text();
	        }

	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 278;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 279;
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
	    this.enterRule(localctx, 38, SensorGrammarParser.RULE_addSpatialDimensionToSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 283;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 284;
	        this.match(SensorGrammarParser.GROUP_SYMBOL);
	        this.state = 285;
	        this.identifier();
	        this.state = 286;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 287;
	        this.identifier();
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 288;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 289;
	            this.identifier();
	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 295;
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
	    this.enterRule(localctx, 40, SensorGrammarParser.RULE_addCategoricalDimensionToSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 298;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 299;
	        this.match(SensorGrammarParser.GROUP_SYMBOL);
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 300;
	            this.identifier();
	        }

	        this.state = 303;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 304;
	        this.identifier();
	        this.state = 307;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 305;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 306;
	            this.identifier();
	        }

	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 309;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 310;
	            this.identifier();
	            this.state = 313;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 311;
	                this.match(SensorGrammarParser.RANGE_SYMBOL);
	                this.state = 312;
	                this.identifier();
	            }

	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 320;
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
	    this.enterRule(localctx, 42, SensorGrammarParser.RULE_addBBXToSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 323;
	        this.match(SensorGrammarParser.BBOX_SYMBOL);
	        this.state = 324;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 325;
	            this.match(SensorGrammarParser.BRA_SYMBOL);
	        }

	        this.state = 328;
	        this.coordinate();
	        this.state = 330;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 329;
	            this.match(SensorGrammarParser.KET_SYMBOL);
	        }

	        this.state = 332;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 333;
	        this.match(SensorGrammarParser.INT_NUMBER);
	        this.state = 334;
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
	    this.enterRule(localctx, 44, SensorGrammarParser.RULE_setDeployment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(SensorGrammarParser.SET_SYMBOL);
	        this.state = 337;
	        this.match(SensorGrammarParser.DEPLOYMENT_SYMBOL);
	        this.state = 338;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 339;
	        this.deploymentProperty();
	        this.state = 344;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 340;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 341;
	            this.deploymentProperty();
	            this.state = 346;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 347;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 348;
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
	    this.enterRule(localctx, 46, SensorGrammarParser.RULE_deploymentProperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.text();
	        this.state = 351;
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
	    this.enterRule(localctx, 48, SensorGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
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
	    this.enterRule(localctx, 50, SensorGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
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
	    this.enterRule(localctx, 52, SensorGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
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
	    this.enterRule(localctx, 54, SensorGrammarParser.RULE_dataSource);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
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
	    this.enterRule(localctx, 56, SensorGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
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
	    this.enterRule(localctx, 58, SensorGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
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
	    this.enterRule(localctx, 60, SensorGrammarParser.RULE_negativeFloat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 365;
	            this.match(SensorGrammarParser.DASH_SYMBOL);
	        }

	        this.state = 368;
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
	    this.enterRule(localctx, 62, SensorGrammarParser.RULE_coordinate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.negativeFloat();
	        this.state = 371;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 372;
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
SensorGrammarParser.SENSORGROUP_SYMBOL = 3;
SensorGrammarParser.PRODUCT_SYMBOL = 4;
SensorGrammarParser.USING_SYMBOL = 5;
SensorGrammarParser.DIMENSION_SYMBOL = 6;
SensorGrammarParser.DIMENSIONS_SYMBOL = 7;
SensorGrammarParser.RANGE_SYMBOL = 8;
SensorGrammarParser.WITH_SYMBOL = 9;
SensorGrammarParser.GROUP_SYMBOL = 10;
SensorGrammarParser.PROPERTIES_SYMBOL = 11;
SensorGrammarParser.INTERVAL_SYMBOL = 12;
SensorGrammarParser.DATASOURCE_SYMBOL = 13;
SensorGrammarParser.GEOMETRY_SYMBOL = 14;
SensorGrammarParser.MEASUREMENT_SYMBOL = 15;
SensorGrammarParser.DATA_SYMBOL = 16;
SensorGrammarParser.SPATIAL_SYMBOL = 17;
SensorGrammarParser.PARENT_SYMBOL = 18;
SensorGrammarParser.CATEGORICAL_SYMBOL = 19;
SensorGrammarParser.UNITS_SYMBOL = 20;
SensorGrammarParser.ICON_SYMBOL = 21;
SensorGrammarParser.BBOX_SYMBOL = 22;
SensorGrammarParser.DEFAULT_SYMBOL = 23;
SensorGrammarParser.DISPLAYSTRING_SYMBOL = 24;
SensorGrammarParser.FIELD_SYMBOL = 25;
SensorGrammarParser.AS_SYMBOL = 26;
SensorGrammarParser.COLOR_SYMBOL = 27;
SensorGrammarParser.REQUIRED_SYMBOL = 28;
SensorGrammarParser.UNIQUE_SYMBOL = 29;
SensorGrammarParser.INFINITY_SYMBOL = 30;
SensorGrammarParser.MINUS_INFINITY_SYMBOL = 31;
SensorGrammarParser.TO_SYMBOL = 32;
SensorGrammarParser.SET_SYMBOL = 33;
SensorGrammarParser.DEPLOYMENT_SYMBOL = 34;
SensorGrammarParser.ELASTICSEARCH_SYMBOL = 35;
SensorGrammarParser.POSTGRES_SYMBOL = 36;
SensorGrammarParser.TYPE = 37;
SensorGrammarParser.POUND_SYMBOL = 38;
SensorGrammarParser.DOT_SYMBOL = 39;
SensorGrammarParser.OPAR_SYMBOL = 40;
SensorGrammarParser.CPAR_SYMBOL = 41;
SensorGrammarParser.COMMA_SYMBOL = 42;
SensorGrammarParser.SCOL_SYMBOL = 43;
SensorGrammarParser.COLON_SYMBOL = 44;
SensorGrammarParser.DASH_SYMBOL = 45;
SensorGrammarParser.BRA_SYMBOL = 46;
SensorGrammarParser.KET_SYMBOL = 47;
SensorGrammarParser.HEX_COLOR = 48;
SensorGrammarParser.INT_NUMBER = 49;
SensorGrammarParser.FLOAT_NUMBER = 50;
SensorGrammarParser.COMMENT = 51;
SensorGrammarParser.WHITESPACE = 52;
SensorGrammarParser.IDENTIFIER = 53;
SensorGrammarParser.QUOTED_TEXT = 54;

SensorGrammarParser.RULE_parse = 0;
SensorGrammarParser.RULE_sentence = 1;
SensorGrammarParser.RULE_createStatement = 2;
SensorGrammarParser.RULE_createProduct = 3;
SensorGrammarParser.RULE_createSensorGroup = 4;
SensorGrammarParser.RULE_createRange = 5;
SensorGrammarParser.RULE_rangeProperty = 6;
SensorGrammarParser.RULE_rangeNumber = 7;
SensorGrammarParser.RULE_createDimension = 8;
SensorGrammarParser.RULE_createSpatialDimension = 9;
SensorGrammarParser.RULE_createCategoricalDimension = 10;
SensorGrammarParser.RULE_createParentDimension = 11;
SensorGrammarParser.RULE_createDimensionProperties = 12;
SensorGrammarParser.RULE_dimPropertyDefinition = 13;
SensorGrammarParser.RULE_createSensor = 14;
SensorGrammarParser.RULE_createSensorProperties = 15;
SensorGrammarParser.RULE_sensorPropertyDefinition = 16;
SensorGrammarParser.RULE_createSensorMeasurementData = 17;
SensorGrammarParser.RULE_createMeasurementProperty = 18;
SensorGrammarParser.RULE_addSpatialDimensionToSensor = 19;
SensorGrammarParser.RULE_addCategoricalDimensionToSensor = 20;
SensorGrammarParser.RULE_addBBXToSensor = 21;
SensorGrammarParser.RULE_setDeployment = 22;
SensorGrammarParser.RULE_deploymentProperty = 23;
SensorGrammarParser.RULE_srid = 24;
SensorGrammarParser.RULE_identifier = 25;
SensorGrammarParser.RULE_text = 26;
SensorGrammarParser.RULE_dataSource = 27;
SensorGrammarParser.RULE_hexColor = 28;
SensorGrammarParser.RULE_floatNumber = 29;
SensorGrammarParser.RULE_negativeFloat = 30;
SensorGrammarParser.RULE_coordinate = 31;

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

	createSensorGroup() {
	    return this.getTypedRuleContext(CreateSensorGroupContext,0);
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



class CreateSensorGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_createSensorGroup;
    }

	SENSORGROUP_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SENSORGROUP_SYMBOL, 0);
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
	        listener.enterCreateSensorGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitCreateSensorGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitCreateSensorGroup(this);
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

	addCategoricalDimensionToSensor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddCategoricalDimensionToSensorContext);
	    } else {
	        return this.getTypedRuleContext(AddCategoricalDimensionToSensorContext,i);
	    }
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

	GROUP_SYMBOL() {
	    return this.getToken(SensorGrammarParser.GROUP_SYMBOL, 0);
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

	GROUP_SYMBOL() {
	    return this.getToken(SensorGrammarParser.GROUP_SYMBOL, 0);
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
SensorGrammarParser.CreateSensorGroupContext = CreateSensorGroupContext; 
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
