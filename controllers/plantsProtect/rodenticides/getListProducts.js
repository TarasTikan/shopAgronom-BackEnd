const { HttpError } = require("../../../helpers");
const { Rodenticides } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await Rodenticides.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
