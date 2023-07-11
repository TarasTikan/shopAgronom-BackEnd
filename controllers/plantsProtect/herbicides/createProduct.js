const Herbicides = require("../../../models/plantsProtectModels/herbicides");
const createProduct = async (req, res) => {
    const result = await Herbicides.create(req.body);
    res.status(201).json(result);
};

module.exports = createProduct;
