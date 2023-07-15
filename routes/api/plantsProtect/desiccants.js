const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/plantsProtect/desiccants");
const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../../middlewares");
const { ProductJoiSchema } = require("../../../JoiSchemas");

router.get("/", authenticate, getListProducts);

router.get("/:productId", authenticate, isValidId, getOneProducts);

router.delete("/:productId", authenticate, isValidId, removeProduct);

router.post("/", authenticate, validateBody(ProductJoiSchema), createProduct);

router.put(
  "/:productId",
  authenticate,
  isValidId,
  validateBody(ProductJoiSchema),
  updateProduct
);

module.exports = router;
