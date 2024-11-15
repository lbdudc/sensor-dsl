export default class GeoJSONLayerStyle {
  constructor(id, fillColor, strokeColor, fillOpacity, strokeOpacity, radius) {
    this.name = id;
    this.type = "GeoJSONLayerStyle";
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.fillOpacity = fillOpacity;
    this.strokeOpacity = strokeOpacity;
    this.radius = radius || 3;
  }

  getId() {
    return this.name;
  }
}
