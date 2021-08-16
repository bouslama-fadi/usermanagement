import http from "../http-common";

const getUsers = () => {
  return http.get("/list");
};

const deleteUser = (id) => {
  return http.delete(`/deleteuser/${id}`);
};

const addUser = (data) => {
  return http.post("/new", data);
};

const UserService = {
  getUsers,
  deleteUser,
  addUser,
};

export default UserService;
