const ProductJoiSchema = require('./products')
const { registerJoiSchema, loginJoiSchema } = require("./auth");
module.exports = { ProductJoiSchema, registerJoiSchema, loginJoiSchema };