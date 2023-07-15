const { HttpError } = require("../../helpers");
const BasketProducts = require("../../models/basketProductsModels/basketProducts");
const getListProducts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 15 } = req.query;
  const skip = (page - 1) * limit;
  const data = await BasketProducts.find({ owner }, "-cretedAt -updatedAt")
    .skip(skip)
    .limit(limit);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
