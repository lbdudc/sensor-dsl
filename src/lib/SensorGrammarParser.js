// Generated from grammar/SensorGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SensorGrammarListener from './SensorGrammarListener.js';
import SensorGrammarVisitor from './SensorGrammarVisitor.js';

const serializedATN = [4,1,50,270,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,4,0,52,8,0,11,0,12,0,
53,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,63,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,1,4,5,4,77,8,4,10,4,12,4,80,9,4,1,4,1,4,1,4,1,5,1,5,1,5,3,
5,88,8,5,1,5,1,5,1,5,1,5,3,5,94,8,5,1,5,1,5,1,5,1,5,1,5,3,5,101,8,5,3,5,
103,8,5,1,6,1,6,1,7,1,7,3,7,109,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,3,8,121,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,5,10,141,8,10,10,10,12,10,144,9,10,1,10,1,10,1,11,1,
11,1,11,1,11,1,11,1,11,5,11,154,8,11,10,11,12,11,157,9,11,1,11,1,11,1,12,
1,12,1,12,5,12,164,8,12,10,12,12,12,167,9,12,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,187,
8,13,10,13,12,13,190,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,200,
8,14,10,14,12,14,203,9,14,1,14,1,14,1,15,1,15,1,15,5,15,210,8,15,10,15,12,
15,213,9,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,5,16,222,8,16,10,16,12,16,
225,9,16,1,16,1,16,1,17,1,17,1,17,1,17,3,17,233,8,17,1,17,1,17,3,17,237,
8,17,1,17,1,17,3,17,241,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,
251,8,18,10,18,12,18,254,9,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,
22,1,22,1,23,1,23,1,24,1,24,1,24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,0,3,3,0,28,29,45,46,49,49,2,0,22,22,
26,27,1,0,31,32,266,0,51,1,0,0,0,2,55,1,0,0,0,4,57,1,0,0,0,6,64,1,0,0,0,
8,70,1,0,0,0,10,102,1,0,0,0,12,104,1,0,0,0,14,108,1,0,0,0,16,110,1,0,0,0,
18,124,1,0,0,0,20,134,1,0,0,0,22,147,1,0,0,0,24,160,1,0,0,0,26,168,1,0,0,
0,28,193,1,0,0,0,30,206,1,0,0,0,32,214,1,0,0,0,34,228,1,0,0,0,36,242,1,0,
0,0,38,257,1,0,0,0,40,259,1,0,0,0,42,261,1,0,0,0,44,263,1,0,0,0,46,265,1,
0,0,0,48,267,1,0,0,0,50,52,3,2,1,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,
0,0,53,54,1,0,0,0,54,1,1,0,0,0,55,56,3,4,2,0,56,3,1,0,0,0,57,62,5,1,0,0,
58,63,3,6,3,0,59,63,3,8,4,0,60,63,3,14,7,0,61,63,3,26,13,0,62,58,1,0,0,0,
62,59,1,0,0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,5,1,0,0,0,64,65,5,3,0,0,65,
66,3,40,20,0,66,67,5,4,0,0,67,68,3,38,19,0,68,69,5,39,0,0,69,7,1,0,0,0,70,
71,5,7,0,0,71,72,3,40,20,0,72,73,5,36,0,0,73,78,3,10,5,0,74,75,5,38,0,0,
75,77,3,10,5,0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,
81,1,0,0,0,80,78,1,0,0,0,81,82,5,37,0,0,82,83,5,39,0,0,83,9,1,0,0,0,84,87,
3,12,6,0,85,86,5,30,0,0,86,88,3,12,6,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,
1,0,0,0,89,90,5,24,0,0,90,93,3,42,21,0,91,92,5,25,0,0,92,94,3,46,23,0,93,
91,1,0,0,0,93,94,1,0,0,0,94,103,1,0,0,0,95,96,5,21,0,0,96,97,5,24,0,0,97,
100,3,42,21,0,98,99,5,25,0,0,99,101,3,46,23,0,100,98,1,0,0,0,100,101,1,0,
0,0,101,103,1,0,0,0,102,84,1,0,0,0,102,95,1,0,0,0,103,11,1,0,0,0,104,105,
7,0,0,0,105,13,1,0,0,0,106,109,3,16,8,0,107,109,3,18,9,0,108,106,1,0,0,0,
108,107,1,0,0,0,109,15,1,0,0,0,110,111,5,15,0,0,111,112,5,5,0,0,112,113,
3,40,20,0,113,114,5,36,0,0,114,115,5,12,0,0,115,116,5,40,0,0,116,117,5,33,
0,0,117,118,5,37,0,0,118,120,3,22,11,0,119,121,3,20,10,0,120,119,1,0,0,0,
120,121,1,0,0,0,121,122,1,0,0,0,122,123,5,39,0,0,123,17,1,0,0,0,124,125,
5,17,0,0,125,126,5,5,0,0,126,127,3,40,20,0,127,128,5,36,0,0,128,129,5,23,
0,0,129,130,5,40,0,0,130,131,3,40,20,0,131,132,5,37,0,0,132,133,5,39,0,0,
133,19,1,0,0,0,134,135,5,8,0,0,135,136,5,16,0,0,136,137,5,36,0,0,137,142,
3,40,20,0,138,139,5,38,0,0,139,141,3,40,20,0,140,138,1,0,0,0,141,144,1,0,
0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,145,1,0,0,0,144,142,1,0,0,0,145,
146,5,37,0,0,146,21,1,0,0,0,147,148,5,8,0,0,148,149,5,9,0,0,149,150,5,36,
0,0,150,155,3,24,12,0,151,152,5,38,0,0,152,154,3,24,12,0,153,151,1,0,0,0,
154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,155,
1,0,0,0,158,159,5,37,0,0,159,23,1,0,0,0,160,161,3,40,20,0,161,165,5,33,0,
0,162,164,5,22,0,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,
1,0,0,0,166,25,1,0,0,0,167,165,1,0,0,0,168,169,5,2,0,0,169,170,3,40,20,0,
170,171,5,36,0,0,171,172,5,10,0,0,172,173,5,40,0,0,173,174,5,45,0,0,174,
175,5,38,0,0,175,176,5,11,0,0,176,177,5,40,0,0,177,178,3,44,22,0,178,179,
5,38,0,0,179,180,5,12,0,0,180,181,5,40,0,0,181,182,5,33,0,0,182,183,5,37,
0,0,183,184,3,28,14,0,184,188,3,32,16,0,185,187,3,36,18,0,186,185,1,0,0,
0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,191,1,0,0,0,190,188,
1,0,0,0,191,192,5,39,0,0,192,27,1,0,0,0,193,194,5,8,0,0,194,195,5,9,0,0,
195,196,5,36,0,0,196,201,3,30,15,0,197,198,5,38,0,0,198,200,3,30,15,0,199,
197,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,204,1,0,
0,0,203,201,1,0,0,0,204,205,5,37,0,0,205,29,1,0,0,0,206,207,3,40,20,0,207,
211,5,33,0,0,208,210,7,1,0,0,209,208,1,0,0,0,210,213,1,0,0,0,211,209,1,0,
0,0,211,212,1,0,0,0,212,31,1,0,0,0,213,211,1,0,0,0,214,215,5,8,0,0,215,216,
5,13,0,0,216,217,5,14,0,0,217,218,5,36,0,0,218,223,3,34,17,0,219,220,5,38,
0,0,220,222,3,34,17,0,221,219,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,
224,1,0,0,0,224,226,1,0,0,0,225,223,1,0,0,0,226,227,5,37,0,0,227,33,1,0,
0,0,228,229,3,40,20,0,229,232,5,33,0,0,230,231,5,18,0,0,231,233,3,42,21,
0,232,230,1,0,0,0,232,233,1,0,0,0,233,236,1,0,0,0,234,235,5,19,0,0,235,237,
3,42,21,0,236,234,1,0,0,0,236,237,1,0,0,0,237,240,1,0,0,0,238,239,5,7,0,
0,239,241,3,40,20,0,240,238,1,0,0,0,240,241,1,0,0,0,241,35,1,0,0,0,242,243,
5,8,0,0,243,244,5,15,0,0,244,245,5,6,0,0,245,246,3,40,20,0,246,247,5,36,
0,0,247,252,3,40,20,0,248,249,5,38,0,0,249,251,3,40,20,0,250,248,1,0,0,0,
251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,255,1,0,0,0,254,252,
1,0,0,0,255,256,5,37,0,0,256,37,1,0,0,0,257,258,5,45,0,0,258,39,1,0,0,0,
259,260,5,49,0,0,260,41,1,0,0,0,261,262,5,50,0,0,262,43,1,0,0,0,263,264,
7,2,0,0,264,45,1,0,0,0,265,266,5,44,0,0,266,47,1,0,0,0,267,268,5,46,0,0,
268,49,1,0,0,0,20,53,62,78,87,93,100,102,108,120,142,155,165,188,201,211,
223,232,236,240,252];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SensorGrammarParser extends antlr4.Parser {

    static grammarFileName = "SensorGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'#'", "'.'", "'('", "')'", "','", 
                            "';'", "':'", "'-'", "'['", "']'" ];
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
                             "TO_SYMBOL", "ELASTICSEARCH_SYMBOL", "POSTGRES_SYMBOL", 
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
                         "srid", "identifier", "text", "dataSource", "hexColor", 
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
	        this.state = 51; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 50;
	            this.sentence();
	            this.state = 53; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
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
	        this.state = 55;
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
	        this.state = 57;
	        this.match(SensorGrammarParser.CREATE_SYMBOL);
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 58;
	            this.createProduct();
	            break;
	        case 7:
	            this.state = 59;
	            this.createRange();
	            break;
	        case 15:
	        case 17:
	            this.state = 60;
	            this.createDimension();
	            break;
	        case 2:
	            this.state = 61;
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
	        this.state = 64;
	        this.match(SensorGrammarParser.PRODUCT_SYMBOL);
	        this.state = 65;
	        this.identifier();
	        this.state = 66;
	        this.match(SensorGrammarParser.USING_SYMBOL);
	        this.state = 67;
	        this.srid();
	        this.state = 68;
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
	        this.state = 70;
	        this.match(SensorGrammarParser.RANGE_SYMBOL);
	        this.state = 71;
	        this.identifier();
	        this.state = 72;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 73;
	        this.rangeProperty();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 74;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 75;
	            this.rangeProperty();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
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



	rangeProperty() {
	    let localctx = new RangePropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SensorGrammarParser.RULE_rangeProperty);
	    var _la = 0;
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 29:
	        case 45:
	        case 46:
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.rangeNumber();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 85;
	                this.match(SensorGrammarParser.TO_SYMBOL);
	                this.state = 86;
	                this.rangeNumber();
	            }

	            this.state = 89;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 90;
	            this.text();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 91;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 92;
	                this.hexColor();
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.match(SensorGrammarParser.DEFAULT_SYMBOL);
	            this.state = 96;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 97;
	            this.text();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 98;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 99;
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
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 2490371) !== 0))) {
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
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.createSpatialDimension();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
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
	        this.state = 110;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 111;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 112;
	        this.identifier();
	        this.state = 113;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 114;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 115;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 116;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 117;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 118;
	        this.createDimensionProperties();
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 119;
	            this.createParentDimension();
	        }

	        this.state = 122;
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
	        this.state = 124;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 125;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 126;
	        this.identifier();
	        this.state = 127;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 128;
	        this.match(SensorGrammarParser.FIELD_SYMBOL);
	        this.state = 129;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 130;
	        this.identifier();
	        this.state = 131;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 132;
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
	        this.state = 134;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 135;
	        this.match(SensorGrammarParser.PARENT_SYMBOL);
	        this.state = 136;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 137;
	        this.identifier();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 138;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 139;
	            this.identifier();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 145;
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
	        this.state = 147;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 148;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 149;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 150;
	        this.dimPropertyDefinition();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 151;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 152;
	            this.dimPropertyDefinition();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 158;
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
	        this.state = 160;
	        this.identifier();
	        this.state = 161;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 162;
	            this.match(SensorGrammarParser.DISPLAYSTRING_SYMBOL);
	            this.state = 167;
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
	        this.state = 168;
	        this.match(SensorGrammarParser.SENSOR_SYMBOL);
	        this.state = 169;
	        this.identifier();
	        this.state = 170;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 171;
	        this.match(SensorGrammarParser.INTERVAL_SYMBOL);
	        this.state = 172;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 173;
	        this.match(SensorGrammarParser.INT_NUMBER);
	        this.state = 174;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 175;
	        this.match(SensorGrammarParser.DATASOURCE_SYMBOL);
	        this.state = 176;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 177;
	        this.dataSource();
	        this.state = 178;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 179;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 180;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 181;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 182;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 183;
	        this.createSensorProperties();
	        this.state = 184;
	        this.createSensorMeasurementData();
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 185;
	            this.addSpatialDimensionToSensor();
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 191;
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
	        this.state = 193;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 194;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 195;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 196;
	        this.sensorPropertyDefinition();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 197;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 198;
	            this.sensorPropertyDefinition();
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 204;
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
	        this.state = 206;
	        this.identifier();
	        this.state = 207;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 205520896) !== 0)) {
	            this.state = 208;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 205520896) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 213;
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
	        this.state = 214;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 215;
	        this.match(SensorGrammarParser.MEASUREMENT_SYMBOL);
	        this.state = 216;
	        this.match(SensorGrammarParser.DATA_SYMBOL);
	        this.state = 217;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 218;
	        this.createMeasurementProperty();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 219;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 220;
	            this.createMeasurementProperty();
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 226;
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
	        this.state = 228;
	        this.identifier();
	        this.state = 229;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 230;
	            this.match(SensorGrammarParser.UNITS_SYMBOL);
	            this.state = 231;
	            this.text();
	        }

	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 234;
	            this.match(SensorGrammarParser.ICON_SYMBOL);
	            this.state = 235;
	            this.text();
	        }

	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 238;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 239;
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
	        this.state = 242;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 243;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 244;
	        this.match(SensorGrammarParser.DIMENSIONS_SYMBOL);
	        this.state = 245;
	        this.identifier();
	        this.state = 246;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 247;
	        this.identifier();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 248;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 249;
	            this.identifier();
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 255;
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



	srid() {
	    let localctx = new SridContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SensorGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
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
	    this.enterRule(localctx, 40, SensorGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
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
	    this.enterRule(localctx, 42, SensorGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
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
	    this.enterRule(localctx, 44, SensorGrammarParser.RULE_dataSource);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        _la = this._input.LA(1);
	        if(!(_la===31 || _la===32)) {
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
	    this.enterRule(localctx, 46, SensorGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
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
	    this.enterRule(localctx, 48, SensorGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
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
SensorGrammarParser.ELASTICSEARCH_SYMBOL = 31;
SensorGrammarParser.POSTGRES_SYMBOL = 32;
SensorGrammarParser.TYPE = 33;
SensorGrammarParser.POUND_SYMBOL = 34;
SensorGrammarParser.DOT_SYMBOL = 35;
SensorGrammarParser.OPAR_SYMBOL = 36;
SensorGrammarParser.CPAR_SYMBOL = 37;
SensorGrammarParser.COMMA_SYMBOL = 38;
SensorGrammarParser.SCOL_SYMBOL = 39;
SensorGrammarParser.COLON_SYMBOL = 40;
SensorGrammarParser.DASH_SYMBOL = 41;
SensorGrammarParser.BRA_SYMBOL = 42;
SensorGrammarParser.KET_SYMBOL = 43;
SensorGrammarParser.HEX_COLOR = 44;
SensorGrammarParser.INT_NUMBER = 45;
SensorGrammarParser.FLOAT_NUMBER = 46;
SensorGrammarParser.COMMENT = 47;
SensorGrammarParser.WHITESPACE = 48;
SensorGrammarParser.IDENTIFIER = 49;
SensorGrammarParser.QUOTED_TEXT = 50;

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
SensorGrammarParser.RULE_srid = 19;
SensorGrammarParser.RULE_identifier = 20;
SensorGrammarParser.RULE_text = 21;
SensorGrammarParser.RULE_dataSource = 22;
SensorGrammarParser.RULE_hexColor = 23;
SensorGrammarParser.RULE_floatNumber = 24;

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

	GEOMETRY_SYMBOL() {
	    return this.getToken(SensorGrammarParser.GEOMETRY_SYMBOL, 0);
	};

	COLON_SYMBOL() {
	    return this.getToken(SensorGrammarParser.COLON_SYMBOL, 0);
	};

	TYPE() {
	    return this.getToken(SensorGrammarParser.TYPE, 0);
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
SensorGrammarParser.SridContext = SridContext; 
SensorGrammarParser.IdentifierContext = IdentifierContext; 
SensorGrammarParser.TextContext = TextContext; 
SensorGrammarParser.DataSourceContext = DataSourceContext; 
SensorGrammarParser.HexColorContext = HexColorContext; 
SensorGrammarParser.FloatNumberContext = FloatNumberContext; 
