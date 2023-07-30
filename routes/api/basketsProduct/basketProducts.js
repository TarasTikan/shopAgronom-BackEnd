const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/basketProducts");
const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../../middlewares");
const { ProductJoiSchemaBasket } = require("../../../JoiSchemas");

router.get("/", authenticate, getListProducts);

router.get("/:productId", authenticate, isValidId, getOneProducts);

router.delete("/:productId", authenticate, isValidId, removeProduct);

router.post(
  "/",
  authenticate,
  validateBody(ProductJoiSchemaBasket),
  createProduct
);
router.put(
  "/:productId",
  authenticate,
  isValidId,
  validateBody(ProductJoiSchemaBasket),
  updateProduct
);
module.exports = router;