const { HttpError } = require("../../../helpers");
const { Pig } = require("../../../models/feedGroupModels");
const getListProducts = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const data = await Pig.find().skip(skip).limit(limit);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
