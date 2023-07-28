const { HttpError } = require("../../../helpers");
const { Rabbit } = require("../../../models/feedGroupModels");
const getOneProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Rabbit.findById(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneProducts;
