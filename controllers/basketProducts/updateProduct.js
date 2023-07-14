const { HttpError } = require("../../helpers");
const BasketProducts = require("../../models/basketProductsModels/basketProducts");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await BasketProducts.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
