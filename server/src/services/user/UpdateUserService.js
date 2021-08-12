const db = require("../../models");

exports.updateUsers = async function (data, req, res) {
  try {
    await db.User.update(
      {
        username: data.username,
        password: data.password,
        email: data.email,
      },
      {
        where: { id: data.id },
      }
    )
      .then(() => res.send("user updated successfully"))
      .catch((err) => console.log(err));
  } catch (e) {
    throw Error("Error while updating the current user");
  }
};
