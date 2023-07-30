const { HttpError } = require("../../../helpers");
const { Complex } = require("../../../models/fertilizersModels");
const getOneProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Complex.findById(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneProducts;
