const { HttpError } = require("../../../helpers");
const { Adjuvants } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await Adjuvants.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
