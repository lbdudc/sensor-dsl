class GIS {
  constructor(name, srid) {
    this.name = name;
    this.srid = parseInt(srid);
    if (srid != 4326) {
      console.warn("Only SRID 4326 supported!");
    }
    this.entities = [];
    this.relationships = [];
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

  addRelationship(source, target, sourceOpts, targetOpts) {
    const existingRelationship = this.getRelationship(
      source,
      target,
      sourceOpts.label
    );
    if (existingRelationship) {
      existingRelationship.update(sourceOpts, targetOpts);
    } else {
      this.relationships.push(
        new Relationship(source, target, sourceOpts, targetOpts)
      );
    }
  }

  getRelationship(source, target, sourceLabel) {
    return this.relationships.find(
      (e) =>
        e.source == source &&
        e.target == target &&
        e.sourceOpts.label == sourceLabel
    );
  }

  _entityExists(name) {
    return this.getEntity(name) != null;
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

  getMaps() {
    return this.maps;
  }

  getLayer(id) {
    return this.layers.find((l) => l.getId() == id);
  }

  addLayer(layer) {
    this.layers.push(layer);
  }

  getStyle(id) {
    return this.styles.find((s) => s.getId() == id);
  }

  addStyle(style) {
    this.styles.push(style);
  }

  getMap(id) {
    return this.maps.find((m) => m.id == id);
  }

  addMap(id, map) {
    this.maps.push(map);
  }

  addDeploymentProperty(key, value) {
    if (!this.extra) {
      this.extra = {};
    }
    this.extra[key] = value;
  }

  toString() {
    return (
      `\nGIS(${this.name} in ${this.srid}) - ${this.entities.length} entities, ${this.relationships.length} relationships:\n\t` +
      `${this.entities.map((e) => e.toString()).join("\n\t")}\n\n\t` +
      `${this.relationships.map((r) => r.toString()).join("\n\t")}` +
      `${this.getMaps()
        .map((m) => m.toString())
        .join("\n\t")}`
    );
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

class Relationship {
  constructor(source, target, sourceOpts, targetOpts) {
    this.source = source;
    this.target = target;
    this.sourceOpts = sourceOpts;
    this.targetOpts = targetOpts;
    if (!this.targetOpts.label) {
      this.targetOpts.label = this.source.toLowerCase();
      if (this.targetOpts.multiplicity.indexOf("*") != -1) {
        this.targetOpts.label += "s";
      }
    }
  }

  update(sourceOpts, targetOpts) {
    if (targetOpts.label) {
      this.targetOpts.label = targetOpts.label;
    }
    if (targetOpts.multiplicity) {
      this.targetOpts.multiplicity = targetOpts.multiplicity;
    }
    if (sourceOpts.multiplicity) {
      this.sourceOpts.multiplicity = sourceOpts.multiplicity;
    }
  }

  toString() {
    return (
      `${this.source}.${this.sourceOpts.label}(${this.sourceOpts.multiplicity})` +
      ` -> ${this.target}.${this.targetOpts.label}(${this.targetOpts.multiplicity})`
    );
  }
}

export default GIS;
