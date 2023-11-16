export default class GeoJSONLayerStyle {
  constructor(id, fillColor, strokeColor, fillOpacity, strokeOpacity) {
    this.name = id;
    this.type = "GeoJSONLayerStyle";
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.fillOpacity = fillOpacity;
    this.strokeOpacity = strokeOpacity;
  }

  getId() {
    return this.name;
  }
}
