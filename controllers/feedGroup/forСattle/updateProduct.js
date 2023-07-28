const { HttpError } = require("../../../helpers");
const { Cattle } = require("../../../models/feedGroupModels");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Cattle.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
