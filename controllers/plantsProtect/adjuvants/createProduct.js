const { Adjuvants } = require("../../../models/plantsProtectModels");
const createProduct = async (req, res) => {
  const result = await Adjuvants.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
