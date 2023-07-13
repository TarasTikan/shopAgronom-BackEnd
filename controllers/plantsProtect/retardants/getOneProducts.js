const { HttpError } = require("../../../helpers");
const { Retardants } = require("../../../models/plantsProtectModels");
const getOneProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Retardants.findById(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneProducts;
