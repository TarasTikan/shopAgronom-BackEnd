const { Organic } = require("../../../models/fertilizersModels");
const createProduct = async (req, res) => {
  const result = await Organic.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
