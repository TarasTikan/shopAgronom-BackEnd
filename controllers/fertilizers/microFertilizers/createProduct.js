const { MicroFertilizers } = require("../../../models/fertilizersModels");
const createProduct = async (req, res) => {
  const result = await MicroFertilizers.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
