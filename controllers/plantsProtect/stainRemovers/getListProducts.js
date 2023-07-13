const { HttpError } = require("../../../helpers");
const { StainRemovers } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await StainRemovers.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
