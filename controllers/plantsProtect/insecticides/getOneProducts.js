const { HttpError } = require("../../../helpers");
const { Insecticides } = require("../../../models/plantsProtectModels");
const getOneProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Insecticides.findById(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneProducts;
