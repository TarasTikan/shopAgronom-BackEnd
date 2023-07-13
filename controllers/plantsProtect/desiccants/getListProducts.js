const { HttpError } = require("../../../helpers");
const { Desiccants } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) => {
  const data = await Desiccants.find();
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = getListProducts;
