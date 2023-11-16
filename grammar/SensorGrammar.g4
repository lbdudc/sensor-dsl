grammar SensorGrammar;

parse
  : sentence+
;

sentence
  : createStatement
;

createStatement:
  CREATE_SYMBOL (
    createSensor
    | createDimension
    | createRange
  )
;

createSensor:
  SENSOR_SYMBOL identifier OPAR_SYMBOL
    INTERVAL_SYMBOL COLON_SYMBOL COMMA_SYMBOL
    DATASOURCE_SYMBOL COLON_SYMBOL DATASOURCE_SYMBOL COMMA_SYMBOL
    GEOMETRY_SYMBOL COLON_SYMBOL GEOMETRY_TYPE COMMA_SYMBOL
  CPAR_SYMBOL 
  (WITH_SYMBOL PROPERTIES_SYMBOL OPAR_SYMBOL
    property (COMMA_SYMBOL property)*
  CPAR_SYMBOL)?
  (WITH_SYMBOL MEASUREMENT_SYMBOL DATA_SYMBOL OPAR_SYMBOL
    measurementData (COMMA_SYMBOL measurementData)*
  CPAR_SYMBOL)?
  






  /// TODO
  SCOL_SYMBOL
;

createDimension: createCategoricalDimension | createSpatialDimension;

measurementData:
  identifier TYPE (UNITS_SYMBOL text)? (ICON_SYMBOL text)? (RANGE_SYMBOL identifier)?
;

createSpatialDimension:
  SPATIAL_SYMBOL DIMENSION_SYMBOL identifier OPAR_SYMBOL
    GEOMETRY_SYMBOL COLON_SYMBOL GEOMETRY_TYPE
  CPAR_SYMBOL 
  (WITH_SYMBOL PROPERTIES_SYMBOL OPAR_SYMBOL
    property (COMMA_SYMBOL property)*
  CPAR_SYMBOL)?
  (WITH_SYMBOL PARENT_SYMBOL OPAR_SYMBOL
    identifier
  CPAR_SYMBOL)?
  SCOL_SYMBOL
;

createCategoricalDimension:
  CATEGORICAL_SYMBOL DIMENSION_SYMBOL identifier OPAR_SYMBOL
    FIELD_SYMBOL COLON_SYMBOL property
  CPAR_SYMBOL
  SCOL_SYMBOL
;

createRange:
  RANGE_SYMBOL identifier OPAR_SYMBOL
    ((identifier | floatNumber | INT_NUMBER | INFINITY_SYMBOL | MINUS_INFINITY_SYMBOL) (TO_SYMBOL (identifier | floatNumber | INT_NUMBER | INFINITY_SYMBOL | MINUS_INFINITY_SYMBOL))? AS_SYMBOL text (COLOR_SYMBOL hexColor)? COMMA_SYMBOL? )*
  CPAR_SYMBOL
  SCOL_SYMBOL
;


property: propertyDefinition;

propertyDefinition:
  identifier TYPE ( 
    DISPLAYSTRING_SYMBOL
  )*
;

DATASOURCE_TYPE 
  : ELASTICSEARCH_SYMBOL
  | POSTGRES_SYMBOL
;


identifier: IDENTIFIER;
text: QUOTED_TEXT;

hexColor: HEX_COLOR;
floatNumber: FLOAT_NUMBER;

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
fragment QUOTE_SYMBOL: '"';

CREATE_SYMBOL: C R E A T E;
SENSOR_SYMBOL: S E N S O R;
DIMENSION_SYMBOL: D I M E N S I O N;
RANGE_SYMBOL: R A N G E;
WITH_SYMBOL: W I T H;
PROPERTIES_SYMBOL: P R O P E R T I E S;
INTERVAL_SYMBOL: I N T E R V A L;
DATASOURCE_SYMBOL: D A T A S O U R C E;
GEOMETRY_SYMBOL: G E O M E T R Y;
MEASUREMENT_SYMBOL: M E A S U R E M E N T;
DATA_SYMBOL: D A T A;
SPATIAL_SYMBOL: S P A T I A L;
PARENT_SYMBOL: P A R E N T;
CATEGORICAL_SYMBOL: C A T E G O R I C A L;
UNITS_SYMBOL: U N I T S;
ICON_SYMBOL: I C O N;
BBOX_SYMBOL: B B O X;
DISPLAYSTRING_SYMBOL: D I S P L A Y UNDERLINE_SYMBOL S T R I N G;
FIELD_SYMBOL: F I E L D;
AS_SYMBOL: A S;
COLOR_SYMBOL: C O L O R;
INFINITY_SYMBOL: I N F I N I T Y;
MINUS_INFINITY_SYMBOL: DASH_SYMBOL I N F I N I T Y;
TO_SYMBOL: T O;

ELASTICSEARCH_SYMBOL: QUOTE_SYMBOL E L A S T I C S E A R C H QUOTE_SYMBOL;
POSTGRES_SYMBOL: QUOTE_SYMBOL P O S T G R E S QUOTE_SYMBOL;

TYPE
  : L O N G
  | B O O L E A N
  | I N T E G E R
  | D O U B L E
  | L O C A L D A T E
  | S T R I N G
  | L I N E S T R I N G
  | M U L T I L I N E S T R I N G
  | P O L Y G O N
  | M U L T I P O L Y G O N
  | P O I N T
  | M U L T I P O I N T
;

GEOMETRY_TYPE
  : P O L Y G O N
  | P O I N T
;

POUND_SYMBOL : '#';
DOT_SYMBOL   : '.';
OPAR_SYMBOL  : '(';
CPAR_SYMBOL  : ')';
COMMA_SYMBOL : ',';
SCOL_SYMBOL  : ';';
COLON_SYMBOL : ':';
DASH_SYMBOL  : '-';

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

QUOTED_TEXT: QUOTE_SYMBOL (~[\r\n"])* QUOTE_SYMBOL;
