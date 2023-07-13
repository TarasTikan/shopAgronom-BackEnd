const { Rodenticides } = require("../../../models/plantsProtectModels");
const createProduct = async (req, res) => {
  const result = await Rodenticides.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
