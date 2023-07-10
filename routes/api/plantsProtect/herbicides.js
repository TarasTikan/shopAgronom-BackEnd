const express = require("express");
const router = express.Router();
const {
  createProduct,
  removeProduct,
  updateProduct,
  getListProducts,
  getOneProducts,
} = require("../../../controllers/plantsProtect/herbicides");
const { validateBody } = require("../../../middlewares");
const { addSchema } = require("../../../schemas/products");

router.get("/", getListProducts);

router.get("/:productId", getOneProducts);

router.delete("/:productId", removeProduct);

router.post("/", validateBody(addSchema), createProduct);

router.put("/:productId", validateBody(addSchema), updateProduct);

module.exports = router;
