const { Fish } = require("../../../models/feedGroupModels");
const createProduct = async (req, res) => {
  const result = await Fish.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
