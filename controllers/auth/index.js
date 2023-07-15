const register = require('./register')
const login = require("./login");
const logout = require("./logout");
const { ctrlWrapper } = require('../../helpers');
const getCurrentUser = require('./getCurrentUser')
module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
};
