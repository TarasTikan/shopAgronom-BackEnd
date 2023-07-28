const { HttpError } = require("../../../helpers");
const { Waterfowl } = require("../../../models/feedGroupModels");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Waterfowl.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
