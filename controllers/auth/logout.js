const logout = (req,res) => {
  req.headers.authorization = "";
  res.status(204).json();
}

module.exports = logout