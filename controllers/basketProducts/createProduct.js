const BasketProducts = require("../../models/basketProductsModels/basketProducts");
const createProduct = async (req, res) => {
  const {_id: owner} = req.user
  const result = await BasketProducts.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = createProduct;
