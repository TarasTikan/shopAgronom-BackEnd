const { Waterfowl } = require("../../../models/feedGroupModels");
const createProduct = async (req, res) => {
  const result = await Waterfowl.create(req.body);
  res.status(201).json(result);
};

module.exports = createProduct;
