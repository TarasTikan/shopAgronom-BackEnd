const { HttpError } = require("../../../helpers");
const { Herbicides } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const { page = 1, limit = 15 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Herbicides.find().skip(skip).limit(limit);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
