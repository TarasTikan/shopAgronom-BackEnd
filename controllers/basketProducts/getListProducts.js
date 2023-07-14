const { HttpError } = require("../../helpers");
const BasketProducts = require("../../models/basketProductsModels/basketProducts");
const getListProducts = async (req, res) => {
    const { _id: owner } = req.user;
  const data = await BasketProducts.find({owner},"-cretedAt -updatedAt");
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
