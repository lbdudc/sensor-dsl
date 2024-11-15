class SpatialDimension {
  constructor(id, type, properties) {
    this.id = id;
    this.type = type;
    this.properties = properties;
  }

  getId() {
    return this.id;
  }

  addProperty(name, type, displayString) {
    this.properties.push(new DimensionProperty(name, type, displayString));
  }

  getProperty(name) {
    return this.properties.find((p) => p.name == name);
  }

  validate() {
    let displayString = false;
    this.properties.forEach((prop) => {
      if (prop.displayString) {
        if (displayString) throw "ERROR: already has a displayString";
        this.displayString = "$" + prop.name;
        delete prop.displayString;
        displayString = true;
      }
    });
  }

  toString() {
    return `Dimension ${this.id}: ${this.properties
      .map((e) => e.toString())
      .join(", ")}`;
  }
}

class DimensionProperty {
  constructor(name, type, displayString) {
    this.name = name;
    this.class = type;
    this.displayString = displayString;
  }

  toString() {
    return `${this.name}: ${this.class} ${
      this.displayString ? "(displayString)" : ""
    }`;
  }
}

export default SpatialDimension;
