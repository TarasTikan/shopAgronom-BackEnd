const { HttpError } = require("../../../helpers");
const { Organic } = require("../../../models/fertilizersModels");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Organic.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
