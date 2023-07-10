const plantsProtectHerbicides = require("../../../models/plantsProtect");

const createProduct = async (req, res) => {
    const result = await plantsProtectHerbicides.addProduct(req.body);
    res.status(201).json(result);
};

module.exports = createProduct;
