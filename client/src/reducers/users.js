import { GET_USERS, DELETE_USER, ADD_USER } from "../actions/types";

const initialState = [];
function userReducer(users = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return payload;
    case DELETE_USER:
      return Object.values(users)[0].filter(({ id }) => id !== payload.id);
    case ADD_USER:
      return {
        ...users,
        payload,
      };

    default:
      return users;
  }
}

export default userReducer;
