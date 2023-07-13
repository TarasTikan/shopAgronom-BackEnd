const { StainRemovers } = require("../../../models/plantsProtectModels");
const createProduct = async (req, res) => {
  const result = await StainRemovers.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
