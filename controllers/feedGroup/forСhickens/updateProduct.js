const { HttpError } = require("../../../helpers");
const { Chicken } = require("../../../models/feedGroupModels");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Chicken.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
