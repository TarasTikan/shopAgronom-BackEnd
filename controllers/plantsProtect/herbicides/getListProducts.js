const { HttpError } = require('../../../helpers');
const plantsProtectHerbicides = require('../../../models/plantsProtect')

const getListProducts = async (req, res) =>{
    const data = await plantsProtectHerbicides.listProducts();
        if (!data) {
          throw HttpError(404, "Not found");
        }
    res.json(data);
}

module.exports = getListProducts;