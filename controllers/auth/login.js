const { HttpError } = require("../../helpers");
const User = require("../../models/authModels/user");
const bcrypt = require("bcrypt");
const { createToken, updateUserById } = require("../../services/userServices");
require("dotenv").config();
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email of password invalid");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email of password invalid");
  }

  const token = await createToken({ id: user._id });
  await updateUserById(user._id, { token });
  res.json({ token });
};

module.exports = login;
