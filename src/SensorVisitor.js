import SensorGrammarVisitor from "./lib/SensorGrammarVisitor.js";
import Product from "./spl/Product.js";

class Visitor extends SensorGrammarVisitor {
  constructor(store, debug) {
    super();
    this.store = store;
    this.debug = debug || false;
  }

  log(msg) {
    if (this.debug) {
      console.log(msg);
    }
  }

  start(ctx) {
    return this.visitParse(ctx);
  }

  visitParse(ctx) {
    this.log(`visitParse: ${ctx.getText()}`);
    return super.visitParse(ctx);
  }

  // --------   PRODUCT  --------
  visitCreateProduct(ctx) {
    const gisName = ctx.getChild(1).getText();
    const srid = ctx.getChild(3).getText();
    this.log(`visitCreateGIS: ${gisName}`);
    this.store.setProduct(new Product(gisName, srid));
  }

  // --------   DIMENSIONS  --------
  visitCreateSpatialDimension(ctx) {
    const dimensionName = ctx.getChild(2).getText();

    if (this.store.getDimension(dimensionName) != null) {
      throw `Dimension ${dimensionName} already exists!`;
    }

    if (ctx.getChild(4).getText().toUpperCase() != "GEOMETRY") {
      throw `Dimension ${dimensionName} is not a spatial dimension!`;
    }

    const dimGeomType = ctx.getChild(6).getText();
    const parsedGemType =
      dimGeomType.charAt(0).toUpperCase() + dimGeomType.slice(1).toLowerCase();

    this.store.addSpatialDimension(dimensionName, parsedGemType);
    this.store.setCurrentDimension(dimensionName);

    super.visitCreateSpatialDimension(ctx);

    this.store.setCurrentDimension(null);
  }

  visitCreateDimensionProperties(ctx) {
    super.visitCreateDimensionProperties(ctx);
  }

  visitCreateCategoricalDimension(ctx) {
    const dimensionName = ctx.getChild(2).getText();

    if (this.store.getDimension(dimensionName) != null) {
      throw `Dimension ${dimensionName} already exists!`;
    }

    if (ctx.getChild(0).getText().toUpperCase() != "CATEGORICAL") {
      throw `Dimension ${dimensionName} is not a categorical dimension!`;
    }

    const propField = ctx.getChild(6).getText();
    this.store.addCategoricalDimension(dimensionName, propField);
    this.store.setCurrentDimension(dimensionName);

    super.visitCreateCategoricalDimension(ctx);

    this.store.setCurrentDimension(null);
  }

  visitPropertyDefinition(ctx) {
    const propertyName = ctx.getChild(0).getText();
    const propertyType = ctx.getChild(1).getText();
    const hasDisplayString = ctx.getChildCount() == 3;

    const dimProps = {
      id: propertyName,
      type: propertyType,
      displayString: hasDisplayString ? ctx.getChild(2).getText() : null,
    };

    if (dimProps.displayString == null) {
      delete dimProps.displayString;
    }

    this.store.getCurrentDimension().properties.push(dimProps);
    super.visitPropertyDefinition(ctx);
  }

  // --------   RANGES  --------
  visitCreateRange(ctx) {
    const rangeName = ctx.getChild(1).getText();

    this.store.addRange(rangeName);
    this.store.setCurrentRange(rangeName);
    super.visitCreateRange(ctx);

    this.store.setCurrentRange(null);
  }

  visitRangeProperty(ctx) {
    let rangeProps = {};
    const hasToSymbol = ctx.getChild(1).getText() == "TO";

    if (hasToSymbol) {
      const hasColor = ctx.getChildCount() == 7;
      rangeProps = {
        fromValue: ctx.getChild(0).getText(),
        toValue: ctx.getChild(2).getText(),
        label: ctx.getChild(4).getText().replace(/['"]+/g, ""),
        color: hasColor ? ctx.getChild(6).getText() : null,
      };
    } else {
      // Does not have TO symbol
      const hasColor = ctx.getChildCount() == 5;
      rangeProps = {
        value: ctx.getChild(0).getText(),
        label: ctx.getChild(2).getText().replace(/['"]+/g, ""),
        color: hasColor ? ctx.getChild(4).getText() : null,
      };
    }

    if (rangeProps.color == null) {
      delete rangeProps.color;
    }

    const range = this.store.getCurrentRange();
    range.properties.push(rangeProps);

    super.visitRangeProperty(ctx);
  }

  // --------   SENSORS  --------
  visitCreateSensor(ctx) {
    const sensorName = ctx.getChild(1).getText();
    const sensorInterval = parseInt(ctx.getChild(5).getText());
    const sensorDatasource = ctx.getChild(9).getText();
    const sensorGeom = ctx.getChild(13).getText();

    this.store
      .getProduct()
      .addSensor(sensorName, sensorInterval, sensorDatasource, sensorGeom);

    this.store.setCurrentSensor(sensorName);
    super.visitCreateSensor(ctx);

    this.store.setCurrentSensor(null);
  }

  visitCreateSensorMeasurementData(ctx) {
    super.visitCreateSensorMeasurementData(ctx);
  }

  visitCreateMeasurementProperty(ctx) {
    const sensor = this.store.getCurrentSensor();

    const sensorProps = {};
    const sensorName = ctx.getChild(0).getText();
    const sensorType = ctx.getChild(1).getText();

    if (ctx.getChildCount() > 2) {
      let index = 2;
      while (index < ctx.getChildCount()) {
        const property = ctx.getChild(index).getText();
        const value = ctx.getChild(index + 1).getText();

        if (property === "UNITS") {
          sensorProps.units = value.replace(/"/g, "");
          index += 2;
        } else if (property === "ICON") {
          sensorProps.icon = value.replace(/"/g, "");
          index += 2;
        } else if (property === "RANGE") {
          sensorProps.range = value.replace(/"/g, "");
          index += 2;
        } else {
          index += 2;
        }
      }

      sensor.addMeasureData({
        id: sensorName,
        type: sensorType,
        ...sensorProps,
      });
    } else {
      sensorProps.id = sensorName;
      sensorProps.type = sensorType;
      sensor.addMeasureData(sensorProps);
    }

    super.visitCreateMeasurementProperty(ctx);
  }
}

export default Visitor;
