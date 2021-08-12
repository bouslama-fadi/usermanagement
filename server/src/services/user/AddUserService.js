const db = require("../../models");
const bcrypt = require("bcrypt");

exports.addUsers = async function (data, req, res) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await db.User.create({
      username: data.username,
      password: hashedPassword,
      email: data.email,
    })
      .then((mynewUsers) => res.send(mynewUsers))
      .catch((err) => console.log(err));
  } catch (e) {
    throw Error("Error while adding the new user");
  }
};
