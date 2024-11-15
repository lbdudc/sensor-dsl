import TileLayer from "./TileLayer.js";
import WMSLayer from "./WMSLayer.js";
import WMSStyle from "./WMSStyle.js";
import GeoJSONLayer from "./GeoJSONLayer.js";
import GeoJSONLayerStyle from "./GeoJSONLayerStyle.js";
import StaticIntervalsStyle from "./StaticIntervalsStyle.js";

class Map {
  constructor(id, label, sortable = false, center) {
    this.name = id;
    this.label = label;
    this.center = center || { lat: 40.42, lng: -3.7, zoom: 12 };
    this.sortable = sortable;
    this.layers = [];
  }

  getId() {
    return this.name;
  }

  addLayer(layer, isBaseLayer, hidden) {
    const newLayer = layer;
    if (isBaseLayer != null) newLayer.baseLayer = isBaseLayer;
    if (hidden != null) newLayer.selected = hidden;
    this.layers.push(layer);
  }

  setCenter(lat, lng, zoom) {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    zoom = parseInt(zoom);
    
    if (isNaN(lat) || isNaN(lng) || isNaN(zoom)) {
      throw new Error(
        "Invalid center coordinates: " + JSON.stringify({ lat, lng, zoom })
      );
    }

    this.center = { lat, lng, zoom };
  }

  toString() {
    return (
      `\n${this.sortable ? "Sortable" : ""}Map(${this.name} as ${
        this.label
      }) - ${this.layers.length} layers:\n\t` +
      `${this.layers
        .map(
          (l) =>
            (l.isBaseLayer ? "BL-" : "") +
            (l.hidden ? "H-" : "") +
            l.layer.toString()
        )
        .join("\n\t")}`
    );
  }
}

export {
  GeoJSONLayer,
  TileLayer,
  WMSStyle,
  WMSLayer,
  Map,
  GeoJSONLayerStyle,
  StaticIntervalsStyle,
};
