const express = require('express')
const { validateBody } = require('../../../middlewares');
const { registerJoiSchema, loginJoiSchema } = require("../../../JoiSchemas");
const { register, login, } = require("../../../controllers/auth");
// const { ctrlWrapper } = require('../../../helpers');

const router = express.Router()

router.post("/register", validateBody(registerJoiSchema), register);
router.post("/login", validateBody(loginJoiSchema), login);
// router.post("/logout", ctrlWrapper(authenticate), logout);
module.exports = router