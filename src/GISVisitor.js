import GISGrammarVisitor from "./lib/GISGrammarVisitor.js";
import GIS from "./spl/GIS.js";
import {
  TileLayer,
  GeoJSONLayer,
  WMSStyle,
  WMSLayer,
  Map,
  GeoJSONLayerStyle,
} from "./spl/Map.js";
import { transformation, getPropertyParams } from "./GISVisitorHelper.js";
// import { generateProduct } from "./project-generator.js";

class Visitor extends GISGrammarVisitor {
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

  visitCreateGIS(ctx) {
    const gisName = ctx.getChild(1).getText();
    const srid = ctx.getChild(3).getText();
    this.log(`visitCreateGIS: ${gisName}`);
    if (this.store.getProduct(gisName)) {
      throw `GIS ${gisName} already exists!`;
    }

    this.store.addProduct(gisName, new GIS(gisName, srid));
  }

  visitUseGIS(ctx) {
    const gisName = ctx.getChild(2).getText();
    this.log(`visitUseGIS: ${gisName}`);
    this.store.setCurrentProduct(gisName);
  }

  visitGenerateGIS(ctx) {
    const gisName = ctx.getChild(2).getText();
    this.log(`visitGenerateGIS: ${gisName}`);
    this.store.setCurrentProduct(gisName);
    this.store.getCurrentProduct().validate();
    this.store.setLastGeneratedProduct(
      transformation(this.store.getCurrentProduct())
    );
  }

  visitCreateEntity(ctx) {
    const entityName = ctx.getChild(1).getText();
    this.log(`visitCreateEntity: ${entityName}`);

    this.store.getCurrentProduct().addEntity(entityName);
    this.store.setCurrentEntity(entityName);

    super.visitCreateEntity(ctx);

    this.store.getCurrentEntity().validate();
    this.store.setCurrentEntity(null);
  }

  visitPropertyDefinition(ctx) {
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

  visitOwnedRelationshipDefinition(ctx) {
    const sourceOpts = {
      label: ctx.getChild(0).getText(),
      multiplicity: ctx.getChild(6).getText(),
    };
    const targetOpts = {
      label: null,
      multiplicity: ctx.getChild(4).getText(),
    };
    const rSource = this.store.getCurrentEntity().name;
    const rTarget = ctx.getChild(1).getText();

    this.store
      .getCurrentProduct()
      .addRelationship(rSource, rTarget, sourceOpts, targetOpts);
  }

  visitMappedRelationshipDefinition(ctx) {
    const sourceOpts = {
      label: ctx.getChild(4).getText(),
      multiplicity: null,
    };
    const targetOpts = {
      label: ctx.getChild(0).getText(),
      multiplicity: null,
    };
    const rTarget = this.store.getCurrentEntity().name;
    const rSource = ctx.getChild(1).getText();

    this.store
      .getCurrentProduct()
      .addRelationship(rSource, rTarget, sourceOpts, targetOpts);
  }

  /* ****************** Map & layers stuff ************************ */

  visitCreateTileLayer(ctx) {
    const id = ctx.getChild(2).getText();
    let label, url;
    if (ctx.getChildCount() != 10) {
      label = id;
      url = ctx.getChild(5).getText().slice(1, -1);
    } else {
      // tiene AS label
      label = ctx.getChild(4).getText().slice(1, -1);
      url = ctx.getChild(7).getText().slice(1, -1);
    }
    this.log(`visitCreateTileLayer ${id} - ${label} (url: ${url})`);
    this.store.getCurrentProduct().addLayer(new TileLayer(id, label, url));
  }

  visitCreateGeoJSONLayer(ctx) {
    const id = ctx.getChild(2).getText();
    let label,
      entityId,
      editable,
      offset = 0,
      style = {
        fillColor: null,
        strokeColor: null,
        fillOpacity: null,
        strokeOpacity: null,
      };
    const childCound = ctx.getChildCount();
    if (childCound == 21 || childCound == 19) {
      // no editable
      editable = false;
      offset += 1;
    } else {
      editable = true;
    }
    if (childCound == 20 || childCound == 19) {
      // no label
      label = id;
      entityId = ctx.getChild(4).getText();
      offset += 2;
    } else {
      label = ctx.getChild(4).getText().slice(1, -1);
      entityId = ctx.getChild(6).getText();
    }

    // to check if the entity exists
    this.store.getCurrentProduct().getEntity(entityId);

    style.fillColor = ctx.getChild(10 - offset).getText();
    style.strokeColor = ctx.getChild(13 - offset).getText();
    style.fillOpacity = ctx.getChild(16 - offset).getText();
    style.strokeOpacity = ctx.getChild(19 - offset).getText();
    this.log(
      `visitCreateGeoJSONLayer ${id} - ${label} (entityId: ${entityId} - ${style.fillColor}, ${style.strokeColor}, ${style.fillOpacity}, ${style.strokeOpacity})`
    );
    this.store
      .getCurrentProduct()
      .addStyle(
        new GeoJSONLayerStyle(
          id + "Style",
          style.fillColor,
          style.strokeColor,
          style.fillOpacity,
          style.strokeOpacity
        )
      );
    this.store
      .getCurrentProduct()
      .addLayer(new GeoJSONLayer(id, label, entityId, editable, id + "Style"));
  }

  visitCreateWmsStyle(ctx) {
    const id = ctx.getChild(2).getText();
    const sld = ctx.getChild(5).getText().slice(1, -1);
    this.log(`visitCreateWmsStyle ${id} with ${sld}`);
    this.store.getCurrentProduct().addStyle(new WMSStyle(id, sld));
  }

  visitCreateWmsLayer(ctx) {
    const id = ctx.getChild(2).getText();
    let label = id,
      from = 4,
      i,
      aux,
      entity,
      auxEntityName,
      style,
      styleName;
    if (ctx.getChild(3).getText() != ")") {
      // tiene label
      label = ctx.getChild(4).getText().slice(1, -1);
      from = 6;
    }

    const layer = new WMSLayer(id, label);

    for (i = from; i < ctx.getChildCount() - 2; i = i + 2) {
      aux = ctx.getChild(i);
      auxEntityName = aux.getChild(0).getText();
      entity = this.store.getCurrentProduct().getEntity(auxEntityName);

      if (!entity) {
        throw `ERROR: entity ${auxEntityName} required by layer ${id} does not exists!!`;
      }

      styleName = aux.getChild(1).getText();
      style = this.store.getCurrentProduct().getStyle(styleName);
      if (!style) {
        throw `Style ${aux.getChild(1).getText()} does not exist!!!`;
      }
      layer.addSubLayer(entity.name, styleName);
    }
    this.log(`visitCreateWmsLayer ${id} - ${label}`);

    this.store.getCurrentProduct().addLayer(layer);
  }

  visitCreateMap(ctx, sortable) {
    const id = ctx.getChild(1).getText();
    let label,
      from,
      i,
      auxLayer,
      layers = [];
    if (ctx.getChild(4).getText() == "(") {
      // tiene label
      label = ctx.getChild(3).getText().slice(1, -1);
      from = 5;
    } else {
      // no tiene label
      label = id;
      from = 3;
    }
    for (i = from; i < ctx.getChildCount() - 2; i = i + 2) {
      layers.push(this.visitMapLayer(ctx.getChild(i)));
    }
    this.log(
      `visitCreateMap ${id} - ${label} with ${layers.length} layers: ${layers
        .map((e) => e.id)
        .join(", ")}`
    );
    const map = new Map(id, label, sortable);
    layers.forEach((l) => {
      auxLayer = this.store.getCurrentProduct().getLayer(l.id);
      if (!auxLayer) {
        throw `Layer ${l.id} does not exists!!!`;
      }
      map.addLayer(l.id, l.baseLayer, l.hidden);
    });
    this.store.getCurrentProduct().addMap(id, map);
  }

  visitMapLayer(ctx) {
    const ret = {
      id: ctx.getChild(0).getText(),
    };
    if (ctx.getChildCount() == 3) {
      // las dos opciones
      ret.hidden = ret.baseLayer = true;
    } else if (ctx.getChildCount() == 2) {
      if (ctx.getChild(1).getSymbol().text.toLowerCase() == "is_base_layer") {
        // base layer
        ret.baseLayer = true;
      } else {
        // capa oculta
        ret.hidden = true;
      }
    }
    return ret;
  }

  visitCreateSortableMap(ctx) {
    this.log(`visitCreateSortableMap`);
    this.visitCreateMap(ctx.getChild(1), true);
  }

  /* ****************** Deployment ************************ */

  visitDeploymentProperty(ctx) {
    this.log(`visitDeploymentProperty`);
    this.store
      .getCurrentProduct()
      .addDeploymentProperty(
        ctx.getChild(0).getText().slice(1, -1),
        ctx.getChild(1).getText().slice(1, -1)
      );
  }
}

export default Visitor;
