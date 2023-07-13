const { HttpError } = require("../../../helpers");
const { Adjuvants } = require("../../../models/plantsProtectModels");
const updateProducts = async (req, res) => {
  const { productId } = req.params;
  const result = await Adjuvants.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateProducts;
