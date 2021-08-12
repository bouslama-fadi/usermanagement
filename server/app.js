const express = require("express");
const app = express();

const db = require("./src/models");
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("./src/auth/passport");

const bodyParser = require("body-parser");

// REQUEST PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const userRouter = require("./src/routes");
app.use("/api/v1", userRouter);

// DB CONNECTION
require("./src/database/connection");

// require("./src/test")();

db.sequelize.sync().then(() => {
  app.listen(port, (err) => {
    if (err) {
      return console.log(`cannot lister on  port : ${port}`);
    }
    console.log(`Running application at http://localhost:${port}`);
  });
});
