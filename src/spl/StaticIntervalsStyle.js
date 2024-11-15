export default class StaticIntervalsStyle {
  constructor(id, property, intervals, defaultStyle) {
    this.name = id;
    this.type = "StaticIntervalsStyle";
    this.property = property;
    this.intervals = intervals || [];
    if (defaultStyle) {
      this.defaultStyle = defaultStyle;
    }
  }

  getId() {
    return this.name;
  }
}
