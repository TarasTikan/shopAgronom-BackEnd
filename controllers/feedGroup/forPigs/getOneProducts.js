const { HttpError } = require("../../../helpers");
const { Pig } = require("../../../models/feedGroupModels");
const getOneProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Pig.findById(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneProducts;
