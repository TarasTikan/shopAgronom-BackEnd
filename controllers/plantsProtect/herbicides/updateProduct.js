const { HttpError } = require("../../../helpers");
const plantsProtectHerbicides = require("../../../models/plantsProtect");
const updateProducts = async (req, res) => {
    const { productId } = req.params;
    const result = await plantsProtectHerbicides.updateProduct(
      productId,
      req.body
    );
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateProducts;
