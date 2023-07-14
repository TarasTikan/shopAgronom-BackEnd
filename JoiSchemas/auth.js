/* eslint-disable no-useless-escape */
const Joi = require("joi");
const emailRegext =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const registerJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegext).required(),
  password: Joi.string().min(6).required(),
});
const loginJoiSchema = Joi.object({
  email: Joi.string().pattern(emailRegext).required(),
  password: Joi.string().min(6).required(),
});
module.exports = { registerJoiSchema, loginJoiSchema };
