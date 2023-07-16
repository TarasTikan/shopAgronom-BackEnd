const { HttpError } = require("../helpers");
const User = require("../models/authModels/user");
const { SECRET_KEY } = process.env;
require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyUser = async (email) => {
  const user = await User.findOne(email);
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  return user;
};

const createUser = async (data) => {
  const newUser = await User.create(data);
  if (!newUser) {
    throw HttpError(400, "Error create user");
  }

  return newUser;
};

const createToken = async (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  return token;
};

const updateUserById = async (id, data) => {
  const updateUser = await User.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updateUser;
};
module.exports = { verifyUser, createUser, createToken, updateUserById };
