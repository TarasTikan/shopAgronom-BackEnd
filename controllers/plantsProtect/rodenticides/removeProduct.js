const { HttpError } = require("../../../helpers");
const { Rodenticides } = require("../../../models/plantsProtectModels");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Rodenticides.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
