const { updateUserById } = require("../../services/userServices");

const logout = async (req, res) => {
  const { _id } = req.user;
  await updateUserById(_id, { token: "" });

  res.json({ message: "logout success" });
};

module.exports = logout;
