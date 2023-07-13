const { HttpError } = require("../../../helpers");
const { Desiccants } = require("../../../models/plantsProtectModels");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Desiccants.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
