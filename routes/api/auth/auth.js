const express = require('express')
const { validateBody } = require('../../../middlewares');
const { registerJoiSchema, loginJoiSchema } = require("../../../JoiSchemas");
const { register, login } = require('../../../controllers/auth/auth');

const router = express.Router()

router.post("/register", validateBody(registerJoiSchema), register);
router.post("/login", validateBody(loginJoiSchema), login);

module.exports = router