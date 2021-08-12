var UserService = require("../services/user/GetUserService");
var AddUserService = require("../services/user/AddUserService");
var DeleteUserService = require("../services/user/DeleteUserService");
var UpdateUserService = require("../services/user/UpdateUserService");

const getUsers = async function (req, res, next) {
  try {
    var users = await UserService.getUsers();
    // return res.status(200).json({
    //   status: 200,
    //   data: users,
    //   message: "User list retrieved successfully",
    // });
    return res.status(200).json({
      data: users,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

const addUsers = async function (req, res) {
  try {
    await AddUserService.addUsers(req.body);
    return res.status(200).json({
      status: 200,
      message: "User added successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

const deleteUsers = async function (req, res) {
  try {
    await DeleteUserService.deleteUsers(req.params);
    return res.status(200).json({
      status: 200,
      message: "User deleted successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

const updateUsers = async function (req, res) {
  try {
    await UpdateUserService.updateUsers(req.body);
    return res.status(200).json({
      status: 200,
      message: "User updated successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

module.exports = {
  getUsers,
  addUsers,
  deleteUsers,
  updateUsers,
};
