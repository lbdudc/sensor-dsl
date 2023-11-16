// Generated from grammar/SensorGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SensorGrammarListener from './SensorGrammarListener.js';
import SensorGrammarVisitor from './SensorGrammarVisitor.js';

const serializedATN = [4,1,44,208,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,2,1,2,1,2,1,2,
3,2,42,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,5,3,65,8,3,10,3,12,3,68,9,3,1,3,1,3,3,3,72,8,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,5,3,81,8,3,10,3,12,3,84,9,3,1,3,1,3,3,3,88,8,3,1,
3,1,3,1,4,1,4,3,4,94,8,4,1,5,1,5,1,5,1,5,3,5,100,8,5,1,5,1,5,3,5,104,8,5,
1,5,1,5,3,5,108,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,5,6,124,8,6,10,6,12,6,127,9,6,1,6,1,6,3,6,131,8,6,1,6,1,6,1,6,1,6,1,
6,1,6,3,6,139,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,161,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,169,8,
8,3,8,171,8,8,1,8,1,8,1,8,1,8,3,8,177,8,8,1,8,3,8,180,8,8,5,8,182,8,8,10,
8,12,8,185,9,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,5,10,195,8,10,10,10,12,
10,198,9,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,0,0,15,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,0,0,219,0,31,1,0,0,0,2,35,1,0,0,0,4,37,1,
0,0,0,6,43,1,0,0,0,8,93,1,0,0,0,10,95,1,0,0,0,12,109,1,0,0,0,14,142,1,0,
0,0,16,152,1,0,0,0,18,189,1,0,0,0,20,191,1,0,0,0,22,199,1,0,0,0,24,201,1,
0,0,0,26,203,1,0,0,0,28,205,1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,
0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,1,1,0,0,0,35,36,3,4,2,0,36,3,1,0,0,
0,37,41,5,2,0,0,38,42,3,6,3,0,39,42,3,8,4,0,40,42,3,16,8,0,41,38,1,0,0,0,
41,39,1,0,0,0,41,40,1,0,0,0,42,5,1,0,0,0,43,44,5,3,0,0,44,45,3,22,11,0,45,
46,5,32,0,0,46,47,5,8,0,0,47,48,5,36,0,0,48,49,5,34,0,0,49,50,5,9,0,0,50,
51,5,36,0,0,51,52,5,9,0,0,52,53,5,34,0,0,53,54,5,10,0,0,54,55,5,36,0,0,55,
56,5,29,0,0,56,57,5,34,0,0,57,71,5,33,0,0,58,59,5,6,0,0,59,60,5,7,0,0,60,
61,5,32,0,0,61,66,3,18,9,0,62,63,5,34,0,0,63,65,3,18,9,0,64,62,1,0,0,0,65,
68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,66,1,0,0,0,69,70,
5,33,0,0,70,72,1,0,0,0,71,58,1,0,0,0,71,72,1,0,0,0,72,87,1,0,0,0,73,74,5,
6,0,0,74,75,5,11,0,0,75,76,5,12,0,0,76,77,5,32,0,0,77,82,3,10,5,0,78,79,
5,34,0,0,79,81,3,10,5,0,80,78,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,
1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,33,0,0,86,88,1,0,0,0,87,73,1,
0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,35,0,0,90,7,1,0,0,0,91,94,3,14,
7,0,92,94,3,12,6,0,93,91,1,0,0,0,93,92,1,0,0,0,94,9,1,0,0,0,95,96,3,22,11,
0,96,99,5,28,0,0,97,98,5,16,0,0,98,100,3,24,12,0,99,97,1,0,0,0,99,100,1,
0,0,0,100,103,1,0,0,0,101,102,5,17,0,0,102,104,3,24,12,0,103,101,1,0,0,0,
103,104,1,0,0,0,104,107,1,0,0,0,105,106,5,5,0,0,106,108,3,22,11,0,107,105,
1,0,0,0,107,108,1,0,0,0,108,11,1,0,0,0,109,110,5,13,0,0,110,111,5,4,0,0,
111,112,3,22,11,0,112,113,5,32,0,0,113,114,5,10,0,0,114,115,5,36,0,0,115,
116,5,29,0,0,116,130,5,33,0,0,117,118,5,6,0,0,118,119,5,7,0,0,119,120,5,
32,0,0,120,125,3,18,9,0,121,122,5,34,0,0,122,124,3,18,9,0,123,121,1,0,0,
0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,125,
1,0,0,0,128,129,5,33,0,0,129,131,1,0,0,0,130,117,1,0,0,0,130,131,1,0,0,0,
131,138,1,0,0,0,132,133,5,6,0,0,133,134,5,14,0,0,134,135,5,32,0,0,135,136,
3,22,11,0,136,137,5,33,0,0,137,139,1,0,0,0,138,132,1,0,0,0,138,139,1,0,0,
0,139,140,1,0,0,0,140,141,5,35,0,0,141,13,1,0,0,0,142,143,5,15,0,0,143,144,
5,4,0,0,144,145,3,22,11,0,145,146,5,32,0,0,146,147,5,20,0,0,147,148,5,36,
0,0,148,149,3,18,9,0,149,150,5,33,0,0,150,151,5,35,0,0,151,15,1,0,0,0,152,
153,5,5,0,0,153,154,3,22,11,0,154,183,5,32,0,0,155,161,3,22,11,0,156,161,
3,28,14,0,157,161,5,39,0,0,158,161,5,23,0,0,159,161,5,24,0,0,160,155,1,0,
0,0,160,156,1,0,0,0,160,157,1,0,0,0,160,158,1,0,0,0,160,159,1,0,0,0,161,
170,1,0,0,0,162,168,5,25,0,0,163,169,3,22,11,0,164,169,3,28,14,0,165,169,
5,39,0,0,166,169,5,23,0,0,167,169,5,24,0,0,168,163,1,0,0,0,168,164,1,0,0,
0,168,165,1,0,0,0,168,166,1,0,0,0,168,167,1,0,0,0,169,171,1,0,0,0,170,162,
1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,173,5,21,0,0,173,176,3,24,12,
0,174,175,5,22,0,0,175,177,3,26,13,0,176,174,1,0,0,0,176,177,1,0,0,0,177,
179,1,0,0,0,178,180,5,34,0,0,179,178,1,0,0,0,179,180,1,0,0,0,180,182,1,0,
0,0,181,160,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,
186,1,0,0,0,185,183,1,0,0,0,186,187,5,33,0,0,187,188,5,35,0,0,188,17,1,0,
0,0,189,190,3,20,10,0,190,19,1,0,0,0,191,192,3,22,11,0,192,196,5,28,0,0,
193,195,5,19,0,0,194,193,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,
1,0,0,0,197,21,1,0,0,0,198,196,1,0,0,0,199,200,5,43,0,0,200,23,1,0,0,0,201,
202,5,44,0,0,202,25,1,0,0,0,203,204,5,38,0,0,204,27,1,0,0,0,205,206,5,40,
0,0,206,29,1,0,0,0,20,33,41,66,71,82,87,93,99,103,107,125,130,138,160,168,
170,176,179,183,196];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SensorGrammarParser extends antlr4.Parser {

    static grammarFileName = "SensorGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'#'", "'.'", 
                            "'('", "')'", "','", "';'", "':'", "'-'" ];
    static symbolicNames = [ null, "DATASOURCE_TYPE", "CREATE_SYMBOL", "SENSOR_SYMBOL", 
                             "DIMENSION_SYMBOL", "RANGE_SYMBOL", "WITH_SYMBOL", 
                             "PROPERTIES_SYMBOL", "INTERVAL_SYMBOL", "DATASOURCE_SYMBOL", 
                             "GEOMETRY_SYMBOL", "MEASUREMENT_SYMBOL", "DATA_SYMBOL", 
                             "SPATIAL_SYMBOL", "PARENT_SYMBOL", "CATEGORICAL_SYMBOL", 
                             "UNITS_SYMBOL", "ICON_SYMBOL", "BBOX_SYMBOL", 
                             "DISPLAYSTRING_SYMBOL", "FIELD_SYMBOL", "AS_SYMBOL", 
                             "COLOR_SYMBOL", "INFINITY_SYMBOL", "MINUS_INFINITY_SYMBOL", 
                             "TO_SYMBOL", "ELASTICSEARCH_SYMBOL", "POSTGRES_SYMBOL", 
                             "TYPE", "GEOMETRY_TYPE", "POUND_SYMBOL", "DOT_SYMBOL", 
                             "OPAR_SYMBOL", "CPAR_SYMBOL", "COMMA_SYMBOL", 
                             "SCOL_SYMBOL", "COLON_SYMBOL", "DASH_SYMBOL", 
                             "HEX_COLOR", "INT_NUMBER", "FLOAT_NUMBER", 
                             "COMMENT", "WHITESPACE", "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createSensor", 
                         "createDimension", "measurementData", "createSpatialDimension", 
                         "createCategoricalDimension", "createRange", "property", 
                         "propertyDefinition", "identifier", "text", "hexColor", 
                         "floatNumber" ];

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
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.sentence();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.createStatement();
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
	        this.state = 37;
	        this.match(SensorGrammarParser.CREATE_SYMBOL);
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 38;
	            this.createSensor();
	            break;
	        case 13:
	        case 15:
	            this.state = 39;
	            this.createDimension();
	            break;
	        case 5:
	            this.state = 40;
	            this.createRange();
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



	createSensor() {
	    let localctx = new CreateSensorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SensorGrammarParser.RULE_createSensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(SensorGrammarParser.SENSOR_SYMBOL);
	        this.state = 44;
	        this.identifier();
	        this.state = 45;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 46;
	        this.match(SensorGrammarParser.INTERVAL_SYMBOL);
	        this.state = 47;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 48;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 49;
	        this.match(SensorGrammarParser.DATASOURCE_SYMBOL);
	        this.state = 50;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 51;
	        this.match(SensorGrammarParser.DATASOURCE_SYMBOL);
	        this.state = 52;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 53;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 54;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 55;
	        this.match(SensorGrammarParser.GEOMETRY_TYPE);
	        this.state = 56;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 57;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 58;
	            this.match(SensorGrammarParser.WITH_SYMBOL);
	            this.state = 59;
	            this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	            this.state = 60;
	            this.match(SensorGrammarParser.OPAR_SYMBOL);
	            this.state = 61;
	            this.property();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===34) {
	                this.state = 62;
	                this.match(SensorGrammarParser.COMMA_SYMBOL);
	                this.state = 63;
	                this.property();
	                this.state = 68;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 69;
	            this.match(SensorGrammarParser.CPAR_SYMBOL);

	        }
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 73;
	            this.match(SensorGrammarParser.WITH_SYMBOL);
	            this.state = 74;
	            this.match(SensorGrammarParser.MEASUREMENT_SYMBOL);
	            this.state = 75;
	            this.match(SensorGrammarParser.DATA_SYMBOL);
	            this.state = 76;
	            this.match(SensorGrammarParser.OPAR_SYMBOL);
	            this.state = 77;
	            this.measurementData();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===34) {
	                this.state = 78;
	                this.match(SensorGrammarParser.COMMA_SYMBOL);
	                this.state = 79;
	                this.measurementData();
	                this.state = 84;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 85;
	            this.match(SensorGrammarParser.CPAR_SYMBOL);
	        }

	        this.state = 89;
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



	createDimension() {
	    let localctx = new CreateDimensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SensorGrammarParser.RULE_createDimension);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
	            this.createCategoricalDimension();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.createSpatialDimension();
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



	measurementData() {
	    let localctx = new MeasurementDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SensorGrammarParser.RULE_measurementData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.identifier();
	        this.state = 96;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 97;
	            this.match(SensorGrammarParser.UNITS_SYMBOL);
	            this.state = 98;
	            this.text();
	        }

	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 101;
	            this.match(SensorGrammarParser.ICON_SYMBOL);
	            this.state = 102;
	            this.text();
	        }

	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 105;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 106;
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



	createSpatialDimension() {
	    let localctx = new CreateSpatialDimensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SensorGrammarParser.RULE_createSpatialDimension);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 110;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 111;
	        this.identifier();
	        this.state = 112;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 113;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 114;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 115;
	        this.match(SensorGrammarParser.GEOMETRY_TYPE);
	        this.state = 116;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 117;
	            this.match(SensorGrammarParser.WITH_SYMBOL);
	            this.state = 118;
	            this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	            this.state = 119;
	            this.match(SensorGrammarParser.OPAR_SYMBOL);
	            this.state = 120;
	            this.property();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===34) {
	                this.state = 121;
	                this.match(SensorGrammarParser.COMMA_SYMBOL);
	                this.state = 122;
	                this.property();
	                this.state = 127;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 128;
	            this.match(SensorGrammarParser.CPAR_SYMBOL);

	        }
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 132;
	            this.match(SensorGrammarParser.WITH_SYMBOL);
	            this.state = 133;
	            this.match(SensorGrammarParser.PARENT_SYMBOL);
	            this.state = 134;
	            this.match(SensorGrammarParser.OPAR_SYMBOL);
	            this.state = 135;
	            this.identifier();
	            this.state = 136;
	            this.match(SensorGrammarParser.CPAR_SYMBOL);
	        }

	        this.state = 140;
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
	    this.enterRule(localctx, 14, SensorGrammarParser.RULE_createCategoricalDimension);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 143;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 144;
	        this.identifier();
	        this.state = 145;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 146;
	        this.match(SensorGrammarParser.FIELD_SYMBOL);
	        this.state = 147;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 148;
	        this.property();
	        this.state = 149;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 150;
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
	    this.enterRule(localctx, 16, SensorGrammarParser.RULE_createRange);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(SensorGrammarParser.RANGE_SYMBOL);
	        this.state = 153;
	        this.identifier();
	        this.state = 154;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 1245187) !== 0)) {
	            this.state = 160;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 43:
	                this.state = 155;
	                this.identifier();
	                break;
	            case 40:
	                this.state = 156;
	                this.floatNumber();
	                break;
	            case 39:
	                this.state = 157;
	                this.match(SensorGrammarParser.INT_NUMBER);
	                break;
	            case 23:
	                this.state = 158;
	                this.match(SensorGrammarParser.INFINITY_SYMBOL);
	                break;
	            case 24:
	                this.state = 159;
	                this.match(SensorGrammarParser.MINUS_INFINITY_SYMBOL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 162;
	                this.match(SensorGrammarParser.TO_SYMBOL);
	                this.state = 168;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 43:
	                    this.state = 163;
	                    this.identifier();
	                    break;
	                case 40:
	                    this.state = 164;
	                    this.floatNumber();
	                    break;
	                case 39:
	                    this.state = 165;
	                    this.match(SensorGrammarParser.INT_NUMBER);
	                    break;
	                case 23:
	                    this.state = 166;
	                    this.match(SensorGrammarParser.INFINITY_SYMBOL);
	                    break;
	                case 24:
	                    this.state = 167;
	                    this.match(SensorGrammarParser.MINUS_INFINITY_SYMBOL);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	            }

	            this.state = 172;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 173;
	            this.text();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 174;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 175;
	                this.hexColor();
	            }

	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 178;
	                this.match(SensorGrammarParser.COMMA_SYMBOL);
	            }

	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 186;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 187;
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



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SensorGrammarParser.RULE_property);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.propertyDefinition();
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



	propertyDefinition() {
	    let localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SensorGrammarParser.RULE_propertyDefinition);
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
	        while(_la===19) {
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SensorGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
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
	    this.enterRule(localctx, 24, SensorGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
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



	hexColor() {
	    let localctx = new HexColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SensorGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
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
	    this.enterRule(localctx, 28, SensorGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
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


}

SensorGrammarParser.EOF = antlr4.Token.EOF;
SensorGrammarParser.DATASOURCE_TYPE = 1;
SensorGrammarParser.CREATE_SYMBOL = 2;
SensorGrammarParser.SENSOR_SYMBOL = 3;
SensorGrammarParser.DIMENSION_SYMBOL = 4;
SensorGrammarParser.RANGE_SYMBOL = 5;
SensorGrammarParser.WITH_SYMBOL = 6;
SensorGrammarParser.PROPERTIES_SYMBOL = 7;
SensorGrammarParser.INTERVAL_SYMBOL = 8;
SensorGrammarParser.DATASOURCE_SYMBOL = 9;
SensorGrammarParser.GEOMETRY_SYMBOL = 10;
SensorGrammarParser.MEASUREMENT_SYMBOL = 11;
SensorGrammarParser.DATA_SYMBOL = 12;
SensorGrammarParser.SPATIAL_SYMBOL = 13;
SensorGrammarParser.PARENT_SYMBOL = 14;
SensorGrammarParser.CATEGORICAL_SYMBOL = 15;
SensorGrammarParser.UNITS_SYMBOL = 16;
SensorGrammarParser.ICON_SYMBOL = 17;
SensorGrammarParser.BBOX_SYMBOL = 18;
SensorGrammarParser.DISPLAYSTRING_SYMBOL = 19;
SensorGrammarParser.FIELD_SYMBOL = 20;
SensorGrammarParser.AS_SYMBOL = 21;
SensorGrammarParser.COLOR_SYMBOL = 22;
SensorGrammarParser.INFINITY_SYMBOL = 23;
SensorGrammarParser.MINUS_INFINITY_SYMBOL = 24;
SensorGrammarParser.TO_SYMBOL = 25;
SensorGrammarParser.ELASTICSEARCH_SYMBOL = 26;
SensorGrammarParser.POSTGRES_SYMBOL = 27;
SensorGrammarParser.TYPE = 28;
SensorGrammarParser.GEOMETRY_TYPE = 29;
SensorGrammarParser.POUND_SYMBOL = 30;
SensorGrammarParser.DOT_SYMBOL = 31;
SensorGrammarParser.OPAR_SYMBOL = 32;
SensorGrammarParser.CPAR_SYMBOL = 33;
SensorGrammarParser.COMMA_SYMBOL = 34;
SensorGrammarParser.SCOL_SYMBOL = 35;
SensorGrammarParser.COLON_SYMBOL = 36;
SensorGrammarParser.DASH_SYMBOL = 37;
SensorGrammarParser.HEX_COLOR = 38;
SensorGrammarParser.INT_NUMBER = 39;
SensorGrammarParser.FLOAT_NUMBER = 40;
SensorGrammarParser.COMMENT = 41;
SensorGrammarParser.WHITESPACE = 42;
SensorGrammarParser.IDENTIFIER = 43;
SensorGrammarParser.QUOTED_TEXT = 44;

SensorGrammarParser.RULE_parse = 0;
SensorGrammarParser.RULE_sentence = 1;
SensorGrammarParser.RULE_createStatement = 2;
SensorGrammarParser.RULE_createSensor = 3;
SensorGrammarParser.RULE_createDimension = 4;
SensorGrammarParser.RULE_measurementData = 5;
SensorGrammarParser.RULE_createSpatialDimension = 6;
SensorGrammarParser.RULE_createCategoricalDimension = 7;
SensorGrammarParser.RULE_createRange = 8;
SensorGrammarParser.RULE_property = 9;
SensorGrammarParser.RULE_propertyDefinition = 10;
SensorGrammarParser.RULE_identifier = 11;
SensorGrammarParser.RULE_text = 12;
SensorGrammarParser.RULE_hexColor = 13;
SensorGrammarParser.RULE_floatNumber = 14;

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

	createSensor() {
	    return this.getTypedRuleContext(CreateSensorContext,0);
	};

	createDimension() {
	    return this.getTypedRuleContext(CreateDimensionContext,0);
	};

	createRange() {
	    return this.getTypedRuleContext(CreateRangeContext,0);
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

	OPAR_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.OPAR_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.OPAR_SYMBOL, i);
	    }
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


	DATASOURCE_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.DATASOURCE_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.DATASOURCE_SYMBOL, i);
	    }
	};


	GEOMETRY_SYMBOL() {
	    return this.getToken(SensorGrammarParser.GEOMETRY_SYMBOL, 0);
	};

	GEOMETRY_TYPE() {
	    return this.getToken(SensorGrammarParser.GEOMETRY_TYPE, 0);
	};

	CPAR_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.CPAR_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.CPAR_SYMBOL, i);
	    }
	};


	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	WITH_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.WITH_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.WITH_SYMBOL, i);
	    }
	};


	PROPERTIES_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PROPERTIES_SYMBOL, 0);
	};

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	MEASUREMENT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.MEASUREMENT_SYMBOL, 0);
	};

	DATA_SYMBOL() {
	    return this.getToken(SensorGrammarParser.DATA_SYMBOL, 0);
	};

	measurementData = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MeasurementDataContext);
	    } else {
	        return this.getTypedRuleContext(MeasurementDataContext,i);
	    }
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

	createCategoricalDimension() {
	    return this.getTypedRuleContext(CreateCategoricalDimensionContext,0);
	};

	createSpatialDimension() {
	    return this.getTypedRuleContext(CreateSpatialDimensionContext,0);
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



class MeasurementDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_measurementData;
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
	        listener.enterMeasurementData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitMeasurementData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitMeasurementData(this);
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

	OPAR_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.OPAR_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.OPAR_SYMBOL, i);
	    }
	};


	GEOMETRY_SYMBOL() {
	    return this.getToken(SensorGrammarParser.GEOMETRY_SYMBOL, 0);
	};

	COLON_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COLON_SYMBOL, 0);
	};

	GEOMETRY_TYPE() {
	    return this.getToken(SensorGrammarParser.GEOMETRY_TYPE, 0);
	};

	CPAR_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.CPAR_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.CPAR_SYMBOL, i);
	    }
	};


	SCOL_SYMBOL() {
	    return this.getToken(SensorGrammarParser.SCOL_SYMBOL, 0);
	};

	WITH_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.WITH_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.WITH_SYMBOL, i);
	    }
	};


	PROPERTIES_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PROPERTIES_SYMBOL, 0);
	};

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	PARENT_SYMBOL() {
	    return this.getToken(SensorGrammarParser.PARENT_SYMBOL, 0);
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

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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

	property() {
	    return this.getTypedRuleContext(PropertyContext,0);
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

	AS_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.AS_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.AS_SYMBOL, i);
	    }
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

	floatNumber = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FloatNumberContext);
	    } else {
	        return this.getTypedRuleContext(FloatNumberContext,i);
	    }
	};

	INT_NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.INT_NUMBER);
	    } else {
	        return this.getToken(SensorGrammarParser.INT_NUMBER, i);
	    }
	};


	INFINITY_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.INFINITY_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.INFINITY_SYMBOL, i);
	    }
	};


	MINUS_INFINITY_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.MINUS_INFINITY_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.MINUS_INFINITY_SYMBOL, i);
	    }
	};


	TO_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.TO_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.TO_SYMBOL, i);
	    }
	};


	COLOR_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SensorGrammarParser.COLOR_SYMBOL);
	    } else {
	        return this.getToken(SensorGrammarParser.COLOR_SYMBOL, i);
	    }
	};


	hexColor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexColorContext);
	    } else {
	        return this.getTypedRuleContext(HexColorContext,i);
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



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_property;
    }

	propertyDefinition() {
	    return this.getTypedRuleContext(PropertyDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SensorGrammarParser.RULE_propertyDefinition;
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
	        listener.enterPropertyDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SensorGrammarListener ) {
	        listener.exitPropertyDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SensorGrammarVisitor ) {
	        return visitor.visitPropertyDefinition(this);
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




SensorGrammarParser.ParseContext = ParseContext; 
SensorGrammarParser.SentenceContext = SentenceContext; 
SensorGrammarParser.CreateStatementContext = CreateStatementContext; 
SensorGrammarParser.CreateSensorContext = CreateSensorContext; 
SensorGrammarParser.CreateDimensionContext = CreateDimensionContext; 
SensorGrammarParser.MeasurementDataContext = MeasurementDataContext; 
SensorGrammarParser.CreateSpatialDimensionContext = CreateSpatialDimensionContext; 
SensorGrammarParser.CreateCategoricalDimensionContext = CreateCategoricalDimensionContext; 
SensorGrammarParser.CreateRangeContext = CreateRangeContext; 
SensorGrammarParser.PropertyContext = PropertyContext; 
SensorGrammarParser.PropertyDefinitionContext = PropertyDefinitionContext; 
SensorGrammarParser.IdentifierContext = IdentifierContext; 
SensorGrammarParser.TextContext = TextContext; 
SensorGrammarParser.HexColorContext = HexColorContext; 
SensorGrammarParser.FloatNumberContext = FloatNumberContext; 
