const { HttpError } = require("../../../helpers");
const plantsProtectHerbicides = require("../../../models/plantsProtect");

const removeProducts = async (req, res) => {
    const { productId } = req.params;
    const result = await plantsProtectHerbicides.removeProduct(productId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = removeProducts;
