const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/fertilizers/сomplex");
const { validateBody, isValidId } = require("../../../middlewares");
const { ProductJoiSchemaFertilizers } = require("../../../JoiSchemas");

router.get("/", getListProducts);

router.get("/:productId", isValidId, getOneProducts);

router.delete("/:productId", isValidId, removeProduct);

router.post("/", validateBody(ProductJoiSchemaFertilizers), createProduct);
router.put(
  "/:productId",
  isValidId,
  validateBody(ProductJoiSchemaFertilizers),
  updateProduct
);

module.exports = router;
