// Generated from grammar/SensorGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SensorGrammarListener from './SensorGrammarListener.js';
import SensorGrammarVisitor from './SensorGrammarVisitor.js';

const serializedATN = [4,1,49,247,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,1,1,
1,1,2,1,2,1,2,1,2,1,2,3,2,61,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,
1,4,1,4,5,4,75,8,4,10,4,12,4,78,9,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,86,8,5,1,
5,1,5,1,5,1,5,3,5,92,8,5,1,5,1,5,1,5,1,5,1,5,3,5,99,8,5,3,5,101,8,5,1,6,
1,6,1,7,1,7,3,7,107,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,119,
8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
1,10,1,10,5,10,139,8,10,10,10,12,10,142,9,10,1,10,1,10,1,11,1,11,1,11,1,
11,1,11,1,11,5,11,152,8,11,10,11,12,11,155,9,11,1,11,1,11,1,12,1,12,1,12,
5,12,162,8,12,10,12,12,12,165,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
1,14,1,14,1,14,5,14,192,8,14,10,14,12,14,195,9,14,1,14,1,14,1,15,1,15,1,
15,5,15,202,8,15,10,15,12,15,205,9,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
5,16,214,8,16,10,16,12,16,217,9,16,1,16,1,16,1,17,1,17,1,17,1,17,3,17,225,
8,17,1,17,1,17,3,17,229,8,17,1,17,1,17,3,17,233,8,17,1,18,1,18,1,19,1,19,
1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,23,0,0,24,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,3,3,0,27,28,44,45,48,48,2,
0,21,21,25,26,1,0,30,31,242,0,49,1,0,0,0,2,53,1,0,0,0,4,55,1,0,0,0,6,62,
1,0,0,0,8,68,1,0,0,0,10,100,1,0,0,0,12,102,1,0,0,0,14,106,1,0,0,0,16,108,
1,0,0,0,18,122,1,0,0,0,20,132,1,0,0,0,22,145,1,0,0,0,24,158,1,0,0,0,26,166,
1,0,0,0,28,185,1,0,0,0,30,198,1,0,0,0,32,206,1,0,0,0,34,220,1,0,0,0,36,234,
1,0,0,0,38,236,1,0,0,0,40,238,1,0,0,0,42,240,1,0,0,0,44,242,1,0,0,0,46,244,
1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,
0,0,0,52,1,1,0,0,0,53,54,3,4,2,0,54,3,1,0,0,0,55,60,5,1,0,0,56,61,3,6,3,
0,57,61,3,8,4,0,58,61,3,14,7,0,59,61,3,26,13,0,60,56,1,0,0,0,60,57,1,0,0,
0,60,58,1,0,0,0,60,59,1,0,0,0,61,5,1,0,0,0,62,63,5,3,0,0,63,64,3,38,19,0,
64,65,5,4,0,0,65,66,3,36,18,0,66,67,5,38,0,0,67,7,1,0,0,0,68,69,5,6,0,0,
69,70,3,38,19,0,70,71,5,35,0,0,71,76,3,10,5,0,72,73,5,37,0,0,73,75,3,10,
5,0,74,72,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,
0,78,76,1,0,0,0,79,80,5,36,0,0,80,81,5,38,0,0,81,9,1,0,0,0,82,85,3,12,6,
0,83,84,5,29,0,0,84,86,3,12,6,0,85,83,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,
0,87,88,5,23,0,0,88,91,3,40,20,0,89,90,5,24,0,0,90,92,3,44,22,0,91,89,1,
0,0,0,91,92,1,0,0,0,92,101,1,0,0,0,93,94,5,20,0,0,94,95,5,23,0,0,95,98,3,
40,20,0,96,97,5,24,0,0,97,99,3,44,22,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,
1,0,0,0,100,82,1,0,0,0,100,93,1,0,0,0,101,11,1,0,0,0,102,103,7,0,0,0,103,
13,1,0,0,0,104,107,3,16,8,0,105,107,3,18,9,0,106,104,1,0,0,0,106,105,1,0,
0,0,107,15,1,0,0,0,108,109,5,14,0,0,109,110,5,5,0,0,110,111,3,38,19,0,111,
112,5,35,0,0,112,113,5,11,0,0,113,114,5,39,0,0,114,115,5,32,0,0,115,116,
5,36,0,0,116,118,3,22,11,0,117,119,3,20,10,0,118,117,1,0,0,0,118,119,1,0,
0,0,119,120,1,0,0,0,120,121,5,38,0,0,121,17,1,0,0,0,122,123,5,16,0,0,123,
124,5,5,0,0,124,125,3,38,19,0,125,126,5,35,0,0,126,127,5,22,0,0,127,128,
5,39,0,0,128,129,3,38,19,0,129,130,5,36,0,0,130,131,5,38,0,0,131,19,1,0,
0,0,132,133,5,7,0,0,133,134,5,15,0,0,134,135,5,35,0,0,135,140,3,38,19,0,
136,137,5,37,0,0,137,139,3,38,19,0,138,136,1,0,0,0,139,142,1,0,0,0,140,138,
1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,140,1,0,0,0,143,144,5,36,0,0,
144,21,1,0,0,0,145,146,5,7,0,0,146,147,5,8,0,0,147,148,5,35,0,0,148,153,
3,24,12,0,149,150,5,37,0,0,150,152,3,24,12,0,151,149,1,0,0,0,152,155,1,0,
0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,156,1,0,0,0,155,153,1,0,0,0,156,
157,5,36,0,0,157,23,1,0,0,0,158,159,3,38,19,0,159,163,5,32,0,0,160,162,5,
21,0,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,
25,1,0,0,0,165,163,1,0,0,0,166,167,5,2,0,0,167,168,3,38,19,0,168,169,5,35,
0,0,169,170,5,9,0,0,170,171,5,39,0,0,171,172,5,44,0,0,172,173,5,37,0,0,173,
174,5,10,0,0,174,175,5,39,0,0,175,176,3,42,21,0,176,177,5,37,0,0,177,178,
5,11,0,0,178,179,5,39,0,0,179,180,5,32,0,0,180,181,5,36,0,0,181,182,3,28,
14,0,182,183,3,32,16,0,183,184,5,38,0,0,184,27,1,0,0,0,185,186,5,7,0,0,186,
187,5,8,0,0,187,188,5,35,0,0,188,193,3,30,15,0,189,190,5,37,0,0,190,192,
3,30,15,0,191,189,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,
0,194,196,1,0,0,0,195,193,1,0,0,0,196,197,5,36,0,0,197,29,1,0,0,0,198,199,
3,38,19,0,199,203,5,32,0,0,200,202,7,1,0,0,201,200,1,0,0,0,202,205,1,0,0,
0,203,201,1,0,0,0,203,204,1,0,0,0,204,31,1,0,0,0,205,203,1,0,0,0,206,207,
5,7,0,0,207,208,5,12,0,0,208,209,5,13,0,0,209,210,5,35,0,0,210,215,3,34,
17,0,211,212,5,37,0,0,212,214,3,34,17,0,213,211,1,0,0,0,214,217,1,0,0,0,
215,213,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,215,1,0,0,0,218,219,
5,36,0,0,219,33,1,0,0,0,220,221,3,38,19,0,221,224,5,32,0,0,222,223,5,17,
0,0,223,225,3,40,20,0,224,222,1,0,0,0,224,225,1,0,0,0,225,228,1,0,0,0,226,
227,5,18,0,0,227,229,3,40,20,0,228,226,1,0,0,0,228,229,1,0,0,0,229,232,1,
0,0,0,230,231,5,6,0,0,231,233,3,38,19,0,232,230,1,0,0,0,232,233,1,0,0,0,
233,35,1,0,0,0,234,235,5,44,0,0,235,37,1,0,0,0,236,237,5,48,0,0,237,39,1,
0,0,0,238,239,5,49,0,0,239,41,1,0,0,0,240,241,7,2,0,0,241,43,1,0,0,0,242,
243,5,43,0,0,243,45,1,0,0,0,244,245,5,45,0,0,245,47,1,0,0,0,18,51,60,76,
85,91,98,100,106,118,140,153,163,193,203,215,224,228,232];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SensorGrammarParser extends antlr4.Parser {

    static grammarFileName = "SensorGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'#'", "'.'", "'('", "')'", "','", "';'", 
                            "':'", "'-'", "'['", "']'" ];
    static symbolicNames = [ null, "CREATE_SYMBOL", "SENSOR_SYMBOL", "PRODUCT_SYMBOL", 
                             "USING_SYMBOL", "DIMENSION_SYMBOL", "RANGE_SYMBOL", 
                             "WITH_SYMBOL", "PROPERTIES_SYMBOL", "INTERVAL_SYMBOL", 
                             "DATASOURCE_SYMBOL", "GEOMETRY_SYMBOL", "MEASUREMENT_SYMBOL", 
                             "DATA_SYMBOL", "SPATIAL_SYMBOL", "PARENT_SYMBOL", 
                             "CATEGORICAL_SYMBOL", "UNITS_SYMBOL", "ICON_SYMBOL", 
                             "BBOX_SYMBOL", "DEFAULT_SYMBOL", "DISPLAYSTRING_SYMBOL", 
                             "FIELD_SYMBOL", "AS_SYMBOL", "COLOR_SYMBOL", 
                             "REQUIRED_SYMBOL", "UNIQUE_SYMBOL", "INFINITY_SYMBOL", 
                             "MINUS_INFINITY_SYMBOL", "TO_SYMBOL", "ELASTICSEARCH_SYMBOL", 
                             "POSTGRES_SYMBOL", "TYPE", "POUND_SYMBOL", 
                             "DOT_SYMBOL", "OPAR_SYMBOL", "CPAR_SYMBOL", 
                             "COMMA_SYMBOL", "SCOL_SYMBOL", "COLON_SYMBOL", 
                             "DASH_SYMBOL", "BRA_SYMBOL", "KET_SYMBOL", 
                             "HEX_COLOR", "INT_NUMBER", "FLOAT_NUMBER", 
                             "COMMENT", "WHITESPACE", "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createProduct", 
                         "createRange", "rangeProperty", "rangeNumber", 
                         "createDimension", "createSpatialDimension", "createCategoricalDimension", 
                         "createParentDimension", "createDimensionProperties", 
                         "dimPropertyDefinition", "createSensor", "createSensorProperties", 
                         "sensorPropertyDefinition", "createSensorMeasurementData", 
                         "createMeasurementProperty", "srid", "identifier", 
                         "text", "dataSource", "hexColor", "floatNumber" ];

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
	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this.sentence();
	            this.state = 51; 
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
	        this.state = 53;
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
	        this.state = 55;
	        this.match(SensorGrammarParser.CREATE_SYMBOL);
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 56;
	            this.createProduct();
	            break;
	        case 6:
	            this.state = 57;
	            this.createRange();
	            break;
	        case 14:
	        case 16:
	            this.state = 58;
	            this.createDimension();
	            break;
	        case 2:
	            this.state = 59;
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
	        this.state = 62;
	        this.match(SensorGrammarParser.PRODUCT_SYMBOL);
	        this.state = 63;
	        this.identifier();
	        this.state = 64;
	        this.match(SensorGrammarParser.USING_SYMBOL);
	        this.state = 65;
	        this.srid();
	        this.state = 66;
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
	        this.state = 68;
	        this.match(SensorGrammarParser.RANGE_SYMBOL);
	        this.state = 69;
	        this.identifier();
	        this.state = 70;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 71;
	        this.rangeProperty();
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 72;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 73;
	            this.rangeProperty();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 80;
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
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 44:
	        case 45:
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.rangeNumber();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 83;
	                this.match(SensorGrammarParser.TO_SYMBOL);
	                this.state = 84;
	                this.rangeNumber();
	            }

	            this.state = 87;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 88;
	            this.text();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 89;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 90;
	                this.hexColor();
	            }

	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.match(SensorGrammarParser.DEFAULT_SYMBOL);
	            this.state = 94;
	            this.match(SensorGrammarParser.AS_SYMBOL);
	            this.state = 95;
	            this.text();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 96;
	                this.match(SensorGrammarParser.COLOR_SYMBOL);
	                this.state = 97;
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
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!(((((_la - 27)) & ~0x1f) === 0 && ((1 << (_la - 27)) & 2490371) !== 0))) {
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
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.createSpatialDimension();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
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
	        this.state = 108;
	        this.match(SensorGrammarParser.SPATIAL_SYMBOL);
	        this.state = 109;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 110;
	        this.identifier();
	        this.state = 111;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 112;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 113;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 114;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 115;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 116;
	        this.createDimensionProperties();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 117;
	            this.createParentDimension();
	        }

	        this.state = 120;
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
	        this.state = 122;
	        this.match(SensorGrammarParser.CATEGORICAL_SYMBOL);
	        this.state = 123;
	        this.match(SensorGrammarParser.DIMENSION_SYMBOL);
	        this.state = 124;
	        this.identifier();
	        this.state = 125;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 126;
	        this.match(SensorGrammarParser.FIELD_SYMBOL);
	        this.state = 127;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 128;
	        this.identifier();
	        this.state = 129;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 130;
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
	        this.state = 132;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 133;
	        this.match(SensorGrammarParser.PARENT_SYMBOL);
	        this.state = 134;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 135;
	        this.identifier();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 136;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 137;
	            this.identifier();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
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
	        this.state = 145;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 146;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 147;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 148;
	        this.dimPropertyDefinition();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 149;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 150;
	            this.dimPropertyDefinition();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
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
	        this.state = 158;
	        this.identifier();
	        this.state = 159;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 160;
	            this.match(SensorGrammarParser.DISPLAYSTRING_SYMBOL);
	            this.state = 165;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(SensorGrammarParser.SENSOR_SYMBOL);
	        this.state = 167;
	        this.identifier();
	        this.state = 168;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 169;
	        this.match(SensorGrammarParser.INTERVAL_SYMBOL);
	        this.state = 170;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 171;
	        this.match(SensorGrammarParser.INT_NUMBER);
	        this.state = 172;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 173;
	        this.match(SensorGrammarParser.DATASOURCE_SYMBOL);
	        this.state = 174;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 175;
	        this.dataSource();
	        this.state = 176;
	        this.match(SensorGrammarParser.COMMA_SYMBOL);
	        this.state = 177;
	        this.match(SensorGrammarParser.GEOMETRY_SYMBOL);
	        this.state = 178;
	        this.match(SensorGrammarParser.COLON_SYMBOL);
	        this.state = 179;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 180;
	        this.match(SensorGrammarParser.CPAR_SYMBOL);
	        this.state = 181;
	        this.createSensorProperties();
	        this.state = 182;
	        this.createSensorMeasurementData();
	        this.state = 183;
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
	        this.state = 185;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 186;
	        this.match(SensorGrammarParser.PROPERTIES_SYMBOL);
	        this.state = 187;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 188;
	        this.sensorPropertyDefinition();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 189;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 190;
	            this.sensorPropertyDefinition();
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 196;
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
	        this.state = 198;
	        this.identifier();
	        this.state = 199;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 102760448) !== 0)) {
	            this.state = 200;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 102760448) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 205;
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
	        this.state = 206;
	        this.match(SensorGrammarParser.WITH_SYMBOL);
	        this.state = 207;
	        this.match(SensorGrammarParser.MEASUREMENT_SYMBOL);
	        this.state = 208;
	        this.match(SensorGrammarParser.DATA_SYMBOL);
	        this.state = 209;
	        this.match(SensorGrammarParser.OPAR_SYMBOL);
	        this.state = 210;
	        this.createMeasurementProperty();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 211;
	            this.match(SensorGrammarParser.COMMA_SYMBOL);
	            this.state = 212;
	            this.createMeasurementProperty();
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 218;
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
	        this.state = 220;
	        this.identifier();
	        this.state = 221;
	        this.match(SensorGrammarParser.TYPE);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 222;
	            this.match(SensorGrammarParser.UNITS_SYMBOL);
	            this.state = 223;
	            this.text();
	        }

	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 226;
	            this.match(SensorGrammarParser.ICON_SYMBOL);
	            this.state = 227;
	            this.text();
	        }

	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 230;
	            this.match(SensorGrammarParser.RANGE_SYMBOL);
	            this.state = 231;
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



	srid() {
	    let localctx = new SridContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SensorGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
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
	    this.enterRule(localctx, 38, SensorGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
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
	    this.enterRule(localctx, 40, SensorGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
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
	    this.enterRule(localctx, 42, SensorGrammarParser.RULE_dataSource);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
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
	    this.enterRule(localctx, 44, SensorGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
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
	    this.enterRule(localctx, 46, SensorGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
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
SensorGrammarParser.RANGE_SYMBOL = 6;
SensorGrammarParser.WITH_SYMBOL = 7;
SensorGrammarParser.PROPERTIES_SYMBOL = 8;
SensorGrammarParser.INTERVAL_SYMBOL = 9;
SensorGrammarParser.DATASOURCE_SYMBOL = 10;
SensorGrammarParser.GEOMETRY_SYMBOL = 11;
SensorGrammarParser.MEASUREMENT_SYMBOL = 12;
SensorGrammarParser.DATA_SYMBOL = 13;
SensorGrammarParser.SPATIAL_SYMBOL = 14;
SensorGrammarParser.PARENT_SYMBOL = 15;
SensorGrammarParser.CATEGORICAL_SYMBOL = 16;
SensorGrammarParser.UNITS_SYMBOL = 17;
SensorGrammarParser.ICON_SYMBOL = 18;
SensorGrammarParser.BBOX_SYMBOL = 19;
SensorGrammarParser.DEFAULT_SYMBOL = 20;
SensorGrammarParser.DISPLAYSTRING_SYMBOL = 21;
SensorGrammarParser.FIELD_SYMBOL = 22;
SensorGrammarParser.AS_SYMBOL = 23;
SensorGrammarParser.COLOR_SYMBOL = 24;
SensorGrammarParser.REQUIRED_SYMBOL = 25;
SensorGrammarParser.UNIQUE_SYMBOL = 26;
SensorGrammarParser.INFINITY_SYMBOL = 27;
SensorGrammarParser.MINUS_INFINITY_SYMBOL = 28;
SensorGrammarParser.TO_SYMBOL = 29;
SensorGrammarParser.ELASTICSEARCH_SYMBOL = 30;
SensorGrammarParser.POSTGRES_SYMBOL = 31;
SensorGrammarParser.TYPE = 32;
SensorGrammarParser.POUND_SYMBOL = 33;
SensorGrammarParser.DOT_SYMBOL = 34;
SensorGrammarParser.OPAR_SYMBOL = 35;
SensorGrammarParser.CPAR_SYMBOL = 36;
SensorGrammarParser.COMMA_SYMBOL = 37;
SensorGrammarParser.SCOL_SYMBOL = 38;
SensorGrammarParser.COLON_SYMBOL = 39;
SensorGrammarParser.DASH_SYMBOL = 40;
SensorGrammarParser.BRA_SYMBOL = 41;
SensorGrammarParser.KET_SYMBOL = 42;
SensorGrammarParser.HEX_COLOR = 43;
SensorGrammarParser.INT_NUMBER = 44;
SensorGrammarParser.FLOAT_NUMBER = 45;
SensorGrammarParser.COMMENT = 46;
SensorGrammarParser.WHITESPACE = 47;
SensorGrammarParser.IDENTIFIER = 48;
SensorGrammarParser.QUOTED_TEXT = 49;

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
SensorGrammarParser.RULE_srid = 18;
SensorGrammarParser.RULE_identifier = 19;
SensorGrammarParser.RULE_text = 20;
SensorGrammarParser.RULE_dataSource = 21;
SensorGrammarParser.RULE_hexColor = 22;
SensorGrammarParser.RULE_floatNumber = 23;

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
SensorGrammarParser.SridContext = SridContext; 
SensorGrammarParser.IdentifierContext = IdentifierContext; 
SensorGrammarParser.TextContext = TextContext; 
SensorGrammarParser.DataSourceContext = DataSourceContext; 
SensorGrammarParser.HexColorContext = HexColorContext; 
SensorGrammarParser.FloatNumberContext = FloatNumberContext; 
