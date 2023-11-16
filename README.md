# Sensor DSL

It parses a DSL instance and generates the spec for the web-based GIS SPL.

## Installation

```
npm install 
```

## Usage

```
import sensordslParser from "sensordsl";

const spec = sensordslParser(inputString);
```

The DSL instance must start with a `CREATE PRODUCT` sentence in order to work. See examples within the tests files.
