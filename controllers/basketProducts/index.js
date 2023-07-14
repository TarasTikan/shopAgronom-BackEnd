const createProduct = require("./createProduct");
const removeProduct = require("./removeProduct");
const updateProduct = require("./updateProduct");
const getListProducts = require("./getListProducts");
const getOneProducts = require("./getOneProducts");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  createProduct: ctrlWrapper(createProduct),
  removeProduct: ctrlWrapper(removeProduct),
  updateProduct: ctrlWrapper(updateProduct),
  getListProducts: ctrlWrapper(getListProducts),
  getOneProducts: ctrlWrapper(getOneProducts),
};
