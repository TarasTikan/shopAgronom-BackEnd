const { HttpError } = require("../../helpers");
const User = require("../../models/authModels/user");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
    surname: newUser.surname,
    phone: newUser.phone
  });
};

module.exports = register;
