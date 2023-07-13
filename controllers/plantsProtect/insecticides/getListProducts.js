const { HttpError } = require("../../../helpers");
const { Insecticides } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await Insecticides.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
