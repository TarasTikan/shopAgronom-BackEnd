const { HttpError } = require("../../../helpers");
const { StainRemovers } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const { page = 1, limit = 15 } = req.query;
  const skip = (page - 1) * limit;
  const data = await StainRemovers.find().skip(skip).limit(limit);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
