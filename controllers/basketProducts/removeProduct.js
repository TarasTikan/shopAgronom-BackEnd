const { HttpError } = require("../../helpers");
const BasketProducts = require("../../models/basketProductsModels/basketProducts");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await BasketProducts.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
