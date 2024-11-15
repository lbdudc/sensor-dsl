grammar SensorGrammar;

parse
  : sentence+
;

sentence
  : createStatement
  | setDeployment
;

createStatement:
  CREATE_SYMBOL (
    createProduct
    | createSensorGroup
    | createRange
    | createDimension
    | createSensor
  )
;

createProduct:
  PRODUCT_SYMBOL identifier USING_SYMBOL srid SCOL_SYMBOL
;

createSensorGroup:
  SENSORGROUP_SYMBOL identifier OPAR_SYMBOL
    identifier (COMMA_SYMBOL identifier)*
  CPAR_SYMBOL SCOL_SYMBOL
;

// RANGES
createRange:
  RANGE_SYMBOL identifier OPAR_SYMBOL
    rangeProperty (COMMA_SYMBOL rangeProperty)*
  CPAR_SYMBOL SCOL_SYMBOL
;

rangeProperty:
  rangeNumber (TO_SYMBOL rangeNumber)? AS_SYMBOL text (COLOR_SYMBOL hexColor)?
  | DEFAULT_SYMBOL AS_SYMBOL text (COLOR_SYMBOL hexColor)?
;

rangeNumber:
  IDENTIFIER
  | FLOAT_NUMBER
  | INT_NUMBER
  | INFINITY_SYMBOL
  | MINUS_INFINITY_SYMBOL
;

// DIMENSIONS
createDimension: createSpatialDimension | createCategoricalDimension;

createSpatialDimension: SPATIAL_SYMBOL DIMENSION_SYMBOL identifier OPAR_SYMBOL
	  GEOMETRY_SYMBOL COLON_SYMBOL (TYPE | GEOMETRY_SYMBOL)
  CPAR_SYMBOL
  createDimensionProperties
  createParentDimension?
  SCOL_SYMBOL
;

createCategoricalDimension: CATEGORICAL_SYMBOL DIMENSION_SYMBOL identifier OPAR_SYMBOL
  FIELD_SYMBOL COLON_SYMBOL identifier
  CPAR_SYMBOL SCOL_SYMBOL
;

createParentDimension: WITH_SYMBOL PARENT_SYMBOL OPAR_SYMBOL
  identifier (COMMA_SYMBOL identifier)*
  CPAR_SYMBOL
;

createDimensionProperties:
  WITH_SYMBOL PROPERTIES_SYMBOL OPAR_SYMBOL
    dimPropertyDefinition (COMMA_SYMBOL dimPropertyDefinition)*
  CPAR_SYMBOL
;

dimPropertyDefinition:
  identifier TYPE ( 
    DISPLAYSTRING_SYMBOL
  )*
;

// SENSORS
createSensor: MOVING_SYMBOL? SENSOR_SYMBOL identifier OPAR_SYMBOL
    INTERVAL_SYMBOL COLON_SYMBOL INT_NUMBER COMMA_SYMBOL
    GEOMETRY_SYMBOL COLON_SYMBOL TYPE
  CPAR_SYMBOL
    createSensorProperties
    createSensorMeasurementData
    addSpatialDimensionToSensor*
    addCategoricalDimensionToSensor*
    addBBXToSensor?
  SCOL_SYMBOL
;

createSensorProperties:
  WITH_SYMBOL PROPERTIES_SYMBOL OPAR_SYMBOL
    sensorPropertyDefinition (COMMA_SYMBOL sensorPropertyDefinition)*
  CPAR_SYMBOL
;

sensorPropertyDefinition:
  identifier TYPE (
     DISPLAYSTRING_SYMBOL
    | REQUIRED_SYMBOL
    | UNIQUE_SYMBOL
  )*
;

createSensorMeasurementData:
  WITH_SYMBOL MEASUREMENT_SYMBOL DATA_SYMBOL OPAR_SYMBOL
    createMeasurementProperty (COMMA_SYMBOL createMeasurementProperty)*
  CPAR_SYMBOL
;

createMeasurementProperty:
  identifier TYPE (UNITS_SYMBOL text)? (ICON_SYMBOL text)? (RANGE_SYMBOL identifier)?
;

addSpatialDimensionToSensor:
  WITH_SYMBOL SPATIAL_SYMBOL GROUP_SYMBOL identifier OPAR_SYMBOL
    identifier (COMMA_SYMBOL identifier)*
  CPAR_SYMBOL
;

addCategoricalDimensionToSensor:
	WITH_SYMBOL CATEGORICAL_SYMBOL GROUP_SYMBOL identifier? OPAR_SYMBOL
    identifier (RANGE_SYMBOL identifier)? (COMMA_SYMBOL identifier (RANGE_SYMBOL identifier)?)*
  CPAR_SYMBOL
;

addBBXToSensor:
  WITH_SYMBOL BBOX_SYMBOL OPAR_SYMBOL
    BRA_SYMBOL? coordinate KET_SYMBOL? COMMA_SYMBOL INT_NUMBER
  CPAR_SYMBOL
;

// DEPLOYMENT
setDeployment:
  SET_SYMBOL DEPLOYMENT_SYMBOL OPAR_SYMBOL
	  deploymentProperty (COMMA_SYMBOL deploymentProperty)*
  CPAR_SYMBOL SCOL_SYMBOL
;

deploymentProperty: text text;

srid: INT_NUMBER;
identifier: IDENTIFIER;
text: QUOTED_TEXT;
hexColor: HEX_COLOR;
floatNumber: FLOAT_NUMBER;

negativeFloat:
  DASH_SYMBOL? FLOAT_NUMBER
;

coordinate:
  negativeFloat COMMA_SYMBOL negativeFloat;

//-----------------------------------------------------------------------

fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];

fragment DIGIT:    [0-9];
fragment DIGITS:   DIGIT+;
fragment HEXDIGIT: [0-9a-fA-F];



fragment LETTER_WHEN_UNQUOTED_NO_DIGIT: [a-zA-Z_$\u0080-\uffff];
fragment LETTER_WHEN_UNQUOTED: DIGIT | LETTER_WHEN_UNQUOTED_NO_DIGIT;
// Any letter but without e/E and digits (which are used to match a decimal number).
fragment LETTER_WITHOUT_FLOAT_PART: [a-df-zA-DF-Z_$\u0080-\uffff];

fragment UNDERLINE_SYMBOL: '_';
fragment QUOTE_SYMBOL: '"' | '\'';

CREATE_SYMBOL: C R E A T E;
SENSOR_SYMBOL: S E N S O R;
MOVING_SYMBOL: M O V I N G;
SENSORGROUP_SYMBOL: S E N S O R G R O U P;
PRODUCT_SYMBOL: P R O D U C T;
USING_SYMBOL: U S I N G;
DIMENSION_SYMBOL: D I M E N S I O N;
DIMENSIONS_SYMBOL: D I M E N S I O N S;
RANGE_SYMBOL: R A N G E;
WITH_SYMBOL: W I T H;
GROUP_SYMBOL: G R O U P;
PROPERTIES_SYMBOL: P R O P E R T I E S;
INTERVAL_SYMBOL: I N T E R V A L;
GEOMETRY_SYMBOL: G E O M E T R Y;
MEASUREMENT_SYMBOL: M E A S U R E M E N T;
DATA_SYMBOL: D A T A;
SPATIAL_SYMBOL: S P A T I A L;
PARENT_SYMBOL: P A R E N T;
CATEGORICAL_SYMBOL: C A T E G O R I C A L;
UNITS_SYMBOL: U N I T S;
ICON_SYMBOL: I C O N;
BBOX_SYMBOL: B B O X;
DEFAULT_SYMBOL: D E F A U L T;
DISPLAYSTRING_SYMBOL: D I S P L A Y UNDERLINE_SYMBOL S T R I N G;
FIELD_SYMBOL: F I E L D;
AS_SYMBOL: A S;
COLOR_SYMBOL: C O L O R;
REQUIRED_SYMBOL: R E Q U I R E D;
UNIQUE_SYMBOL: U N I Q U E;
INFINITY_SYMBOL: I N F I N I T Y;
MINUS_INFINITY_SYMBOL: DASH_SYMBOL I N F I N I T Y;
TO_SYMBOL: T O;
SET_SYMBOL: S E T;
DEPLOYMENT_SYMBOL: D E P L O Y M E N T;


TYPE
  : L O N G
  | B O O L E A N
  | F L O A T
  | I N T E G E R
  | D O U B L E
  | L O C A L D A T E
  | S T R I N G
  | D A T E T I M E
  | L I N E S T R I N G
  | M U L T I L I N E S T R I N G
  | P O L Y G O N
  | M U L T I P O L Y G O N
  | P O I N T
  | M U L T I P O I N T
;

POUND_SYMBOL : '#';
DOT_SYMBOL   : '.';
OPAR_SYMBOL  : '(';
CPAR_SYMBOL  : ')';
COMMA_SYMBOL : ',';
SCOL_SYMBOL  : ';';
COLON_SYMBOL : ':';
DASH_SYMBOL  : '-';
BRA_SYMBOL   : '[';
KET_SYMBOL   : ']';


HEX_COLOR: POUND_SYMBOL HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT;
INT_NUMBER: DIGITS;
FLOAT_NUMBER: (DIGITS? DOT_SYMBOL)? DIGITS;

COMMENT: '//' ~[\r\n]* -> skip;
//SPACE: [ \t]+ -> skip;
//EOFS: [\r\n] -> skip;
WHITESPACE: [ \t\f\r\n] -> channel(HIDDEN); // Ignore whitespaces.

IDENTIFIER:
    DIGITS+ [eE] (LETTER_WHEN_UNQUOTED_NO_DIGIT LETTER_WHEN_UNQUOTED*)? // Have to exclude float pattern, as this rule matches more.
    | DIGITS+ LETTER_WITHOUT_FLOAT_PART LETTER_WHEN_UNQUOTED*
    | LETTER_WHEN_UNQUOTED_NO_DIGIT LETTER_WHEN_UNQUOTED* // INT_NUMBER matches first if there are only digits.
;

QUOTED_TEXT: QUOTE_SYMBOL (~[\r\n"'])* QUOTE_SYMBOL;
