const getCurrentUser = async (req, res) => {
  const { email, name, surname, phone, password } = req.user;

  res.json({ email, name, surname, phone,password });
};
module.exports = getCurrentUser;
