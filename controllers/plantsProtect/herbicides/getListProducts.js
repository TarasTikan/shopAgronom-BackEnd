const { HttpError } = require('../../../helpers');
const { Herbicides } = require("../../../models/plantsProtectModels");
const getListProducts = async (req, res) =>{
    const data = await Herbicides.find()
        if (!data) {
          throw HttpError(404, "Not found");
        }
    res.json(data);
}

module.exports = getListProducts;