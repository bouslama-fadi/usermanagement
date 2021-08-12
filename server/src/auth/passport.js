const passport = require("passport");
const passportJwt = require("passport-jwt");
const bcrypt = require("bcrypt");
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
const db = require("../models");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_KEY;
passport.use(
  new JwtStrategy(opts, function (jwtPayload, done) {
    return db.User.findOne({ where: { id: jwtPayload.id } })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  })
);
