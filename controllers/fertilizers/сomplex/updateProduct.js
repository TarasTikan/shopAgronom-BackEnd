const { HttpError } = require("../../../helpers");
const { Complex } = require("../../../models/fertilizersModels");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Complex.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
