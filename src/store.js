const store = {
  product: {},
  currentEntity: null,
  currentDimension: null,
  currentRange: null,
  currentSensor: null,
  dimensions: [],
  ranges: [],
  lastGeneratedProduct: null,
};

function getProduct() {
  return store.product;
}

function setProduct(product) {
  store.product = product;
}

// TEMPORAL DIMENSIONS ARRAY TO BE ADDED TO SENSOR
function addSpatialDimension(dimensionName, geomType) {
  store.dimensions.push({
    id: dimensionName,
    type: "SPATIAL",
    geomType: geomType,
    properties: [],
  });
}

function addCategoricalDimension(dimensionName, fieldProp) {
  store.dimensions.push({
    id: dimensionName,
    type: "CATEGORICAL",
    field: fieldProp,
  });
}

function getDimension(dimensionName) {
  return store.dimensions.find((d) => d.id == dimensionName);
}

function getCurrentDimension() {
  return store.currentDimension;
}

function setCurrentDimension(dimensionName) {
  if (!dimensionName) {
    store.currentDimension = null;
  } else {
    store.currentDimension = getDimension(dimensionName);
    if (!store.currentDimension) {
      throw `Dimension ${dimensionName} does not exist in current product!!!`;
    }
  }
}

// RANGES ARRAY TO BE ADDED TO SENSOR PROPERTIES OR DIMENSIONS
function addRange(name, props = []) {
  store.ranges.push({
    id: name,
    properties: props,
  });
}

function getRange(name) {
  return store.ranges.find((r) => r.id == name);
}

function setCurrentRange(rangeName) {
  if (!rangeName) {
    store.currentRange = null;
  } else {
    store.currentRange = getRange(rangeName);
    if (!store.currentRange) {
      throw `Range ${rangeName} does not exist in current product!!!`;
    }
  }
}

function getCurrentRange() {
  return store.currentRange;
}

// SENSOR ARRAY TO BE ADDED TO PRODUCT
function getCurrentSensor() {
  return store.currentSensor;
}

function setCurrentSensor(sensorName) {
  if (!sensorName) {
    store.currentSensor = null;
  } else {
    store.currentSensor = getProduct().getSensor(sensorName);
    if (!store.currentSensor) {
      throw `Sensor ${sensorName} does not exist in current product!!!`;
    }
  }
}

// ENTITIES ARRAY TO BE ADDED TO SENSOR
function getCurrentEntity() {
  return store.currentEntity;
}

function setCurrentEntity(entityName) {
  if (!entityName) {
    store.currentEntity = null;
  } else {
    store.currentEntity = getProduct().getEntity(entityName);
    if (!store.currentEntity) {
      throw `Entity ${entityName} does not exist in current product!!!`;
    }
  }
}

function reset() {
  store.product = {};
}

export default {
  getCurrentEntity,
  setCurrentEntity,
  getCurrentDimension,
  setCurrentDimension,
  getCurrentSensor,
  setCurrentSensor,
  getCurrentRange,
  setCurrentRange,
  addSpatialDimension,
  addCategoricalDimension,
  getDimension,
  addRange,
  getRange,
  setProduct,
  getProduct,
  reset,
};
