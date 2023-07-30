const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/plantsProtect/stainRemovers");
const {
  validateBody,
  isValidId,
} = require("../../../middlewares");
const { ProductJoiSchemaPlantsProtect } = require("../../../JoiSchemas");

router.get("/", getListProducts);

router.get("/:productId", isValidId, getOneProducts);

router.delete("/:productId", isValidId, removeProduct);

router.post("/", validateBody(ProductJoiSchemaPlantsProtect), createProduct);

router.put(
  "/:productId",
  isValidId,
  validateBody(ProductJoiSchemaPlantsProtect),
  updateProduct
);

module.exports = router;
