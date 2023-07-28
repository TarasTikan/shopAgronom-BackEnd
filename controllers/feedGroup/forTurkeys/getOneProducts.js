const { HttpError } = require("../../../helpers");
const { Turkey } = require("../../../models/feedGroupModels");
const getOneProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Turkey.findById(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneProducts;
