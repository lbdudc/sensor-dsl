import Sensor from "./Sensor.js";

class Product {
  constructor(name, srid) {
    this.name = name;
    this.srid = parseInt(srid);
    if (srid != 4326) {
      console.warn("Only SRID 4326 supported!");
    }
    this.entities = [];
    this.relationships = [];
    this.dataWarehouse = {
      sensors: [],
    };
    this.enums = [];
    this.layers = [];
    this.styles = [];
    this.maps = [];
  }

  addEntity(name) {
    if (this.getEntity(name)) {
      throw `Entity ${name} already exists!!!`;
    }
    this.entities.push(new Entity(name));
  }

  getEntity(name) {
    return this.entities.find((e) => e.name == name);
  }

  addSensor(name, interval, datasource, geom) {
    if (this.getSensor(name)) {
      throw `Sensor ${name} already exists!!!`;
    }
    this.dataWarehouse.sensors.push(
      new Sensor(name, interval, datasource, geom)
    );
  }

  getSensor(id) {
    return this.dataWarehouse.sensors.find((s) => s.id == id);
  }

  /**
   * Only for things that cannot be validated earlier
   */
  validate() {
    this.relationships.forEach((r) => {
      if (!this._entityExists(r.source)) {
        throw `ERROR: entity ${r.source} required by relationship does not exists!!`;
      }
      if (!this._entityExists(r.target)) {
        throw `ERROR: entity ${r.target} required by relationship does not exists!!`;
      }
    });

    this.layers.forEach((layer) => {
      if (layer.type == "GeoJSONLayer") {
        if (!this._entityExists(layer.entityId)) {
          throw `ERROR: entity ${layer.entityId} required by layer ${layer.id} does not exists!!`;
        }
      }
    });
  }
}

class Entity {
  constructor(name) {
    this.name = name;
    this.properties = [];
  }

  addProperty(name, type, params) {
    if (this.getProperty(name)) {
      throw `Property ${name} already exists in entity ${this.name}!!!`;
    }
    this.properties.push(new Property(name, type, params));
  }

  getProperty(name) {
    return this.properties.find((p) => p.name == name);
  }

  validate() {
    let pk = false;
    let displayString = false;
    this.properties.forEach((prop) => {
      if (prop.pk) {
        if (pk) throw "ERROR: already has a primary key";
        pk = true;
      }
      if (prop.displayString) {
        if (displayString) throw "ERROR: already has a displayString";
        this.displayString = "$" + prop.name;
        delete prop.displayString;
        displayString = true;
      }
    });
  }

  toString() {
    return `Entity ${this.name}: ${this.properties
      .map((e) => e.toString())
      .join(", ")}`;
  }
}

class Property {
  constructor(name, type, params) {
    this.name = name;
    this.class = type;
    if (params) {
      if (params.pk) {
        this.pk = true;
        this.required = true;
        this.unique = true;
        if (this.class == "Long") {
          this.class = "Long (autoinc)";
        }
      }
      if (params.required) {
        this.required = true;
      }
      if (params.unique) {
        this.unique = true;
      }
      if (params.displayString) {
        this.displayString = true;
      }
    }
  }

  toString() {
    return (
      this.name +
      ":" +
      this.class +
      (this.params ? "(" + Object.keys(this.params).join(", ") + ")" : "")
    );
  }
}

export default Product;