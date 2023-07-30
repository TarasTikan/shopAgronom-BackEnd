const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/feedGroup/forRabbits");
const { validateBody, isValidId } = require("../../../middlewares");
const { ProductJoiSchemaFeedGroup } = require("../../../JoiSchemas");

router.get("/", getListProducts);

router.get("/:productId", isValidId, getOneProducts);

router.delete("/:productId", isValidId, removeProduct);

router.post("/", validateBody(ProductJoiSchemaFeedGroup), createProduct);
router.put(
  "/:productId",
  isValidId,
  validateBody(ProductJoiSchemaFeedGroup),
  updateProduct
);

module.exports = router;
