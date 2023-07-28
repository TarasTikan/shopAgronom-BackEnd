const { Rabbit } = require("../../../models/feedGroupModels");
const createProduct = async (req, res) => {
  const result = await Rabbit.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
