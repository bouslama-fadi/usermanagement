import { GET_USERS, DELETE_USER, ADD_USER } from "./types";
import UsersDataService from "../services/UserService";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await UsersDataService.getUsers();
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await UsersDataService.deleteUser(id);
    dispatch({
      type: DELETE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const addUser = (username, password, email) => async (dispatch) => {
  try {
    const res = await UsersDataService.addUser({ username, password, email });
    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
