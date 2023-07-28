const { HttpError } = require("../../../helpers");
const { Pig } = require("../../../models/feedGroupModels");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Pig.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
