const express = require('express')
const { validateBody, authenticate } = require('../../../middlewares');
const { registerJoiSchema, loginJoiSchema } = require("../../../JoiSchemas");
const {
  register,
  login,
  logout,
  getCurrentUser,
} = require("../../../controllers/auth");

const router = express.Router()

router.post("/register", validateBody(registerJoiSchema), register);
router.post("/login", validateBody(loginJoiSchema), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrentUser)
module.exports = router