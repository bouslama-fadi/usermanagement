const db = require("../../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const myuserList = await db.User.findAll();
      return myuserList;
    } catch (e) {
      throw error("Error while retrieving user list");
    }
  },
};
