import axios from "axios";

// const userListEndpoint = `${process.env.REACT_APP_SERVER_URL}/api/v1`;

export default axios.create({
  baseURL: "http://localhost:3335/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
