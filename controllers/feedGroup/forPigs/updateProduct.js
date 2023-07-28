const { HttpError } = require("../../../helpers");
const { Pig } = require("../../../models/feedGroupModels");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Pig.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
