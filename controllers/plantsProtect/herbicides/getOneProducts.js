const { HttpError } = require("../../../helpers");
const { Herbicides } = require("../../../models/plantsProtectModels");
const getOneProducts = async (req, res) => {
    const { productId } = req.params;
    const result = await Herbicides.findById(productId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = getOneProducts;
