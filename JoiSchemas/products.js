const Joi = require("joi");
const ProductJoiSchemaPlantsProtect = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  producer: Joi.string().required(),
  culture: Joi.string().required(),
  number: Joi.string().required(),
  activeSubstance: Joi.string().required(),
  preparativeForm: Joi.string().required(),
  rateOfUser: Joi.string().required(),
  toxicityClass: Joi.string().required(),
  storagePeriod: Joi.string().required(),
  recommendations: Joi.string().required(),
  characteristics: Joi.string().required(),
});

const ProductJoiSchemaFeedGroup = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  producer: Joi.string().required(),
  number: Joi.string().required(),
  targetGroup: Joi.string().required(),
  type: Joi.string().required(),
  storage: Joi.string().required(),
  packaging: Joi.string().required(),
  characteristics: Joi.string().required(),
});

const ProductJoiSchemaFertilizers = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  producer: Joi.string().required(),
  number: Joi.string().required(),
  culture: Joi.string().required(),
  compatibility: Joi.string().required(),
  mechanismAction: Joi.string().required(),
  spectrumAction: Joi.string().required(),
  toxicity: Joi.string().required(),
  characteristics: Joi.string().required(),
});

const ProductJoiSchemaBasket = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  producer: Joi.string().required(),
  number: Joi.string().required(),
  characteristics: Joi.string().required(),
  culture: Joi.string(),
  compatibility: Joi.string(),
  mechanismAction: Joi.string(),
  spectrumAction: Joi.string(),
  toxicity: Joi.string(),
  targetGroup: Joi.string(),
  type: Joi.string(),
  storage: Joi.string(),
  packaging: Joi.string(),
  activeSubstance: Joi.string(),
  preparativeForm: Joi.string(),
  rateOfUser: Joi.string(),
  toxicityClass: Joi.string(),
  storagePeriod: Joi.string(),
  recommendations: Joi.string(),
});
module.exports = {
  ProductJoiSchemaPlantsProtect,
  ProductJoiSchemaFeedGroup,
  ProductJoiSchemaFertilizers,
  ProductJoiSchemaBasket,
};
