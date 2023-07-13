const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/plantsProtect/stainRemovers");
const { validateBody, isValidId } = require("../../../middlewares");
const { addSchema } = require("../../../schemas/products");

router.get("/", getListProducts);

router.get("/:productId", isValidId, getOneProducts);

router.delete("/:productId", isValidId, removeProduct);

router.post("/", validateBody(addSchema), createProduct);

router.put("/:productId", isValidId, validateBody(addSchema), updateProduct);

module.exports = router;
