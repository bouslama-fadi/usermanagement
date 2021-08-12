const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// LOGIN API
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const usernameExist = await db.User.findOne({
    where: { username },
  }).catch((err) => {
    console.log(err);
  });

  if (usernameExist) {
    const validPassword = await bcrypt.compare(
      password,
      usernameExist.password
    );
    if (validPassword) {
      return res.json({
        message: "valid cridentials",
        ctrl: 1,
      });
    }
  }

  if (!usernameExist) {
    return res.json({
      message: "Verify your cridentials and try again",
      ctrl: 0,
    });
  }
  if (usernameExist.password !== password) {
    return res.json({
      message: "Verify your cridentials and try again",
      ctrl: 0,
    });
  }

  const jwtToken = jwt.sign(
    {
      username: usernameExist.username,
      id: usernameExist.id,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.json({ message: "welcome", token: jwtToken, ctrl: 1 });
});

module.exports = router;
