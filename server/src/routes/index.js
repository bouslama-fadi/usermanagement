const express = require("express");
const loginApi = require("./login");
const userApi = require("./users");

const router = express.Router();

router.use(userApi);
router.use(loginApi);
module.exports = router;
