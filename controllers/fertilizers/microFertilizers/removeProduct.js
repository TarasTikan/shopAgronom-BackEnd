const { HttpError } = require("../../../helpers");
const { MicroFertilizers } = require("../../../models/fertilizersModels");
const removeProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await MicroFertilizers.findByIdAndRemove(productId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = removeProducts;
