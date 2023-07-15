const Joi = require("joi");
const ProductJoiSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  producer: Joi.string().required(),
  culture: Joi.string().required(),
  number: Joi.string().required(),
  ActiveSubstance: Joi.string().required(),
  PreparativeForm: Joi.string().required(),
  RateOfUser: Joi.string().required(),
  ToxicityClass: Joi.string().required(),
  StoragePeriod: Joi.string().required(),
  Characteristics: Joi.string().required(),
  Recommendations: Joi.string().required(),
});

module.exports = ProductJoiSchema 
