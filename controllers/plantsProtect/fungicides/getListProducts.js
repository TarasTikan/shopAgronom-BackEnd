const { HttpError } = require("../../../helpers");
const { Fungicides } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await Fungicides.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
