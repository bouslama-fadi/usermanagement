module.exports = async () => {
  const User = require("./models/User");

  const errHandler = (err) => {
    console.log("THIS IS ERROR", err);
  };

  const user = await User.create({
    username: "Fedy",
    email: "fedy.bouslama@gmail.com",
  }).catch(errHandler);

  const users = await User.findAll({ where: { username: "Fedy" } }).catch(
    errHandler
  );

  console.log("this is one user", users);
};
