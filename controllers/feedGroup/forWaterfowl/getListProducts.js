const { HttpError } = require("../../../helpers");
const { Waterfowl } = require("../../../models/feedGroupModels");
const getListProducts = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const data = await Waterfowl.find().skip(skip).limit(limit);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
