const express = require("express");
const passport = require("passport");

const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

var userController = require("../controller/UserController");

// GET USERS LIST FROM DATABASE
router.get(
  "/list",
  // passport.authenticate("jwt", { session: false }),
  userController.getUsers
);

// SUBMIT A NEW USER
router.post(
  "/new",
  // passport.authenticate("jwt", { session: false }),
  userController.addUsers
);

// DELETE EXISTING USER
router.delete(
  "/deleteuser/:id",
  // passport.authenticate("jwt", { session: false }),
  userController.deleteUsers
);

// UPDATE EXISTING USER
router.put(
  "/updateuser",
  // passport.authenticate("jwt", { session: false }),
  userController.updateUsers
);

module.exports = router;
