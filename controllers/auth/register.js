const bcrypt = require("bcrypt");
const {
  verifyUser,
  createUser,
  createToken,
  updateUserById,
} = require("../../services/userServices");
const register = async (req, res) => {
  const { email, password } = req.body;
  await verifyUser({ email });
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser({ ...req.body, password: hashPassword });
  const token = await createToken({ id: newUser._id });
  const updateById = await updateUserById(newUser._id, { token });
  res.status(201).json({
    email: updateById.email,
    name: updateById.name,
    surname: updateById.surname,
    phone: updateById.phone,
    token: updateById.token,
  });
};

module.exports = register;
