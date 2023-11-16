const store = {
  products: [],
  currentProduct: null,
  currentEntity: null,
  lastGeneratedProduct: null,
};

function getProducts() {
  return store.products;
}

function getCurrentProduct() {
  return store.currentProduct;
}

function setCurrentProduct(productName) {
  if (!productName) {
    store.currentProduct = null;
  } else {
    store.currentProduct = getProduct(productName);
    if (!store.currentProduct) {
      throw `GIS ${productName} does not exist!!!`;
    }
  }
}

function getCurrentEntity() {
  return store.currentEntity;
}

function setCurrentEntity(entityName) {
  if (!entityName) {
    store.currentEntity = null;
  } else {
    store.currentEntity = getCurrentProduct().getEntity(entityName);
    if (!store.currentEntity) {
      throw `Entity ${entityName} does not exist in current product!!!`;
    }
  }
}

function getProduct(name) {
  return store.products.find((e) => e.name == name);
}

function addProduct(id, product) {
  store.products.push(product);
}

function getLastGeneratedProduct() {
  return store.lastGeneratedProduct;
}

function setLastGeneratedProduct(generatedProduct) {
  store.lastGeneratedProduct = generatedProduct;
}

function reset() {
  store.products.splice(0, store.products.length);
  store.lastGeneratedProduct = null;
}

export default {
  getCurrentProduct,
  setCurrentProduct,
  getCurrentEntity,
  setCurrentEntity,
  getProducts,
  getProduct,
  addProduct,
  getLastGeneratedProduct,
  setLastGeneratedProduct,
  reset,
};
