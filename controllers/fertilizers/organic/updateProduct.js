const { HttpError } = require("../../../helpers");
const { Organic } = require("../../../models/fertilizersModels");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Organic.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
