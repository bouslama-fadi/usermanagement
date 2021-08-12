const db = require("../../models");

exports.deleteUsers = async function (data, req, res) {
  try {
    await db.User.destroy({
      where: {
        id: data.id,
      },
    })
      .then(() => res.send("user deleted successfully"))
      .catch((err) => console.log(err));
  } catch (e) {
    throw Error("Error while deleting the current user");
  }
};
