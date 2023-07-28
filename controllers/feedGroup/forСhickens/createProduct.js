const { Chicken } = require("../../../models/feedGroupModels");
const createProduct = async (req, res) => {
  const result = await Chicken.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
