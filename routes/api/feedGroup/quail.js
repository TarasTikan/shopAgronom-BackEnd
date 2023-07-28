const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/feedGroup/forQuails");
const { validateBody, isValidId } = require("../../../middlewares");
const { ProductJoiSchema } = require("../../../JoiSchemas");

router.get("/", getListProducts);

router.get("/:productId", isValidId, getOneProducts);

router.delete("/:productId", isValidId, removeProduct);

router.post("/", validateBody(ProductJoiSchema), createProduct);
router.put(
  "/:productId",
  isValidId,
  validateBody(ProductJoiSchema),
  updateProduct
);

module.exports = router;
