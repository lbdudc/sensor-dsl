import SensorGrammarVisitor from "./lib/SensorGrammarVisitor.js";
import Product from "./spl/Product.js";
import {
  TileLayer,
  GeoJSONLayer,
  Map,
  GeoJSONLayerStyle,
  StaticIntervalsStyle,
} from "./spl/Map.js";
import { getPropertyParams } from "./GISVisitorHelper.js";

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

    // CREATE BASE STYLES
    const baseStyles = [
      new GeoJSONLayerStyle("redPoint", "#FF0000", 0.5, 1, 1),
      new GeoJSONLayerStyle("greenPoint", "#008000", 0.5, 1, 1),
      new GeoJSONLayerStyle("orangePoint", "#FFA500", 0.5, 1, 1),
      new GeoJSONLayerStyle("redPolygon", "#FF0000", 0.5, 1, 1),
      new GeoJSONLayerStyle("greenPolygon", "#008000", 0.5, 1, 1),
      new GeoJSONLayerStyle("orangePolygon", "#FFA500", 0.5, 1, 1),
    ];
    baseStyles.forEach((style) => this.store.getProduct().addStyle(style));
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

    // Adds to dimension and to entities
    this.store.addSpatialDimension(dimensionName, parsedGemType);
    this.store.setCurrentDimension(dimensionName);

    super.visitCreateSpatialDimension(ctx);
    this.store.setCurrentDimension(null);
    this.store.setCurrentEntity(null);
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

  visitDimPropertyDefinition(ctx) {
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

    this.store.getCurrentEntity().addProperty(
      propertyName,
      propertyType,
      getPropertyParams(
        ctx.children
          .slice(2)
          .filter((s) => s.getSymbol)
          .map((s) => s.getSymbol().text.toLowerCase())
      )
    );

    this.store.getCurrentDimension().properties.push(dimProps);
    super.visitDimPropertyDefinition(ctx);
  }

  // PARENT DIMENSION
  visitCreateParentDimension(ctx) {
    const dimensionName = ctx.getChild(3).getText();

    const parentDim = this.store.getDimension(dimensionName);

    if (parentDim == null) {
      throw `Dimension ${dimensionName} not found!`;
    }

    // Create relationship between current entity and parent dimension
    const sourceOpts = {
      label: "belongs",
      multiplicity: "0..1",
    };
    const targetOpts = {
      label: "contains",
      multiplicity: "0..*",
    };
    const rSource = this.store.getCurrentEntity().name;
    const rTarget = parentDim.id;

    this.store
      .getProduct()
      .addRelationship(rSource, rTarget, sourceOpts, targetOpts);

    super.visitCreateParentDimension(ctx);
    this.store.setCurrentDimension(null);
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
    const range = this.store.getCurrentRange();
    const hasToSymbol = ctx.getChild(1).getText() == "TO";

    if (hasToSymbol) {
      const hasColor = ctx.getChildCount() == 7;
      const color = hasColor ? ctx.getChild(6).getText() : "#808080";
      rangeProps = {
        minValue: ctx.getChild(0).getText(),
        maxValue: ctx.getChild(2).getText(),
        label: ctx.getChild(4).getText().replace(/['"]+/g, ""),
        color: hasColor ? ctx.getChild(6).getText() : null,
        style: new GeoJSONLayerStyle(
          range.id +
            "-" +
            ctx.getChild(4).getText().replace(/['"]+/g, "") +
            "Style",
          color,
          color,
          1,
          1
        ),
      };
    } else {
      // Does not have TO symbol
      const hasColor = ctx.getChildCount() == 5;
      const color = hasColor ? ctx.getChild(4).getText() : "#808080";
      rangeProps = {
        value: ctx.getChild(0).getText(),
        label: ctx.getChild(2).getText().replace(/['"]+/g, ""),
        color: hasColor ? ctx.getChild(4).getText() : null,
        style: new GeoJSONLayerStyle(
          range.id +
            "-" +
            ctx.getChild(2).getText().replace(/['"]+/g, "") +
            "Style",
          color,
          color,
          1,
          1
        ),
      };
    }

    if (rangeProps.color == null) {
      delete rangeProps.color;
    }

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

  visitCreateSensorProperties(ctx) {
    const sensor = this.store.getCurrentSensor();

    // ADD ENTITY AND SET ID AND GEOMETRY
    this.store.getProduct().addEntity(sensor.entity);
    this.store.setCurrentEntity(sensor.entity);
    this.store
      .getCurrentEntity()
      .addProperty(
        "id",
        "Long",
        getPropertyParams(["identifier", "required", "unique"])
      );
    this.store.getCurrentEntity().addProperty("geometry", sensor.geom);

    // ADD BASE LAYER AND SENSOR LAYER
    const { id, defaultMap } = sensor;

    const map = new Map(defaultMap, id + " Map");

    const baseLayer = new TileLayer(
      "base",
      "base",
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );

    map.addLayer({
      name: "base",
      baseLayer: true,
      selected: true,
      order: 0,
    });

    this.store.getProduct().addLayer(baseLayer);

    const layer = new GeoJSONLayer(
      sensor.defaultLayer,
      sensor.entity,
      sensor.entity + "-geometry",
      false,
      "grayPoint"
    );
    layer.availableStyles = [
      "greenPoint",
      "redPoint",
      "orangePoint",
      "greenPolygon",
      "redPolygon",
      "orangePolygon",
    ];
    map.addLayer({
      name: sensor.defaultLayer,
      baseLayer: false,
      style: "grayPoint",
      selected: true,
      order: 1,
    });

    this.store.getProduct().addLayer(layer);

    // ADD MAP
    this.store.getProduct().addMap(defaultMap, map);

    super.visitCreateSensorProperties(ctx);

    this.store.setCurrentEntity(null);
  }

  visitSensorPropertyDefinition(ctx) {
    const pName = ctx.getChild(0).getText();
    this.log(`visitPropertyDefinition: ${pName}`);
    const pType = ctx.getChild(1).getText();

    this.store.getCurrentEntity().addProperty(
      pName,
      pType,
      getPropertyParams(
        ctx.children
          .slice(2)
          .filter((s) => s.getSymbol)
          .map((s) => s.getSymbol().text.toLowerCase())
      )
    );
  }

  // --------   SENSOR WITH SPATIAL DIMENIONS  --------
  visitAddSpatialDimensionToSensor(ctx) {
    const sensor = this.store.getCurrentSensor();
    const dimRelName = ctx.getChild(3).getText();

    // iterate all dimensions
    let index = 5;
    while (index < ctx.getChildCount()) {
      const dimName = ctx.getChild(index).getText();
      const dim = this.store.getDimension(dimName);

      if (dim == null) {
        throw `Dimension ${dimName} not found!`;
      }

      // Add to sensor dimensions
      if (sensor.dimensions.find((d) => d.id == dimRelName) == null) {
        sensor.dimensions.push({
          id: dimRelName,
          type: "SPATIAL",
          entities: [dimName],
        });
      } else {
        sensor.dimensions
          .find((d) => d.id == dimRelName)
          .entities.push(dimName);
      }

      // Addd layer to map
      const layer = new GeoJSONLayer(
        dim.id,
        dim.id,
        dim.id + "-geometry",
        false,
        dim.geomType == "Point" ? "grayPoint" : "grayPolygon"
      );

      // ADD styles for each sensor property
      layer.availableStyles = ["grayPolygon"];
      sensor.measureData.forEach((measure) => {
        layer.availableStyles.push(measure.id + "Style");
        if (dim.geomType == "Polygon")
          layer.availableStyles.push(measure.id + "Style_POLYGON");
      });

      const map = this.store.getProduct().getMap(sensor.defaultMap);
      map.addLayer({
        name: dim.id,
        baseLayer: false,
        style: dim.geomType == "Point" ? "grayPoint" : "grayPolygon",
        selected: true,
        order: map.layers.length,
      });

      this.store.getProduct().addLayer(layer);

      index += 2;
    }
  }

  // --------   SENSOR MEASUREMENTS  --------
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

    // Add styles to layer
    const layer = this.store.getProduct().getLayer(sensor.defaultLayer);
    layer.availableStyles.push(sensorName + "Style");

    // ADD STYLES FOR EACH MEASURE DATA
    // IF HAS CUSTOM RANGES, NEED TO ADD TO AVAILABLE STYLES
    const customRange = this.store.getRange(sensorProps.range);
    if (customRange) {
      // ADD TO LAYER AVAILABLE STYLES
      customRange.properties.forEach((range) => {
        this.store.getProduct().addStyle(range.style);
      });

      const styleNames = [
        {
          name: sensorName + "Style",
          property: "data." + sensorName,
          type: "Point",
        },
        {
          name: sensorName + "Style_POLYGON",
          property: "data." + sensorName,
          type: "Polygon",
        },
      ];

      styleNames.forEach((sensorStyle) => {
        this.store.getProduct().addStyle(
          new StaticIntervalsStyle(
            sensorStyle.name,
            sensorStyle.property,
            customRange.properties
              .filter((range) => range.value != "DEFAULT")
              .map((range) => {
                const minValue =
                  range.minValue == "-Infinity"
                    ? range.minValue
                    : parseFloat(range.minValue);
                const maxValue =
                  range.maxValue == "Infinity"
                    ? range.maxValue
                    : parseFloat(range.maxValue);

                if (range.value != null) {
                  return {
                    value: range.value,
                    label: range.label,
                    style: range.style.name,
                  };
                }
                return {
                  minValue: minValue,
                  maxValue: maxValue,
                  label: range.label,
                  style: range.style.name,
                };
              }),
            customRange.properties
              .filter((range) => range.value == "DEFAULT")
              .map((range) => range.style.name)[0]
          )
        );
      });
    } else {
      const styleNames = [
        {
          name: sensorName + "Style",
          property: "data." + sensorName,
          type: "Point",
        },
        {
          name: sensorName + "Style_POLYGON",
          property: "data." + sensorName,
          type: "Polygon",
        },
      ];

      styleNames.forEach((sensorStyle) => {
        this.store.getProduct().addStyle(
          new StaticIntervalsStyle(
            sensorStyle.name,
            sensorStyle.property,
            [
              {
                minValue: "-Infinity",
                maxValue: 20,
                style: "greenPoint",
              },
              {
                minValue: 20,
                maxValue: 40,
                style: "orangePoint",
              },
              {
                minValue: 40,
                maxValue: "Infinity",
                style: "redPoint",
              },
            ],
            sensorStyle.type == "Point" ? "grayPoint" : "grayPolygon"
          )
        );
      });
    }
    super.visitCreateMeasurementProperty(ctx);
  }
}

export default Visitor;
