const Sequelize = require("sequelize");

const sequelize = new Sequelize("user_management", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
  // operatorsAliases: false,
});

module.exports = sequelize;
global.sequelize = sequelize;
