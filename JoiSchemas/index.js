const {
  ProductJoiSchemaBasket,
  ProductJoiSchemaFertilizers,
  ProductJoiSchemaFeedGroup,
  ProductJoiSchemaPlantsProtect,
} = require("./products");
const { registerJoiSchema, loginJoiSchema } = require("./auth");
module.exports = {
  registerJoiSchema,
  loginJoiSchema,
  ProductJoiSchemaBasket,
  ProductJoiSchemaFertilizers,
  ProductJoiSchemaFeedGroup,
  ProductJoiSchemaPlantsProtect,
};
