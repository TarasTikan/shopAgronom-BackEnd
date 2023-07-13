const { HttpError } = require("../../../helpers");
const { Retardants } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await Retardants.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
