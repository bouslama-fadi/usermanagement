import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AddUserButton from "../components/Buttons/AddUserButton";
import UsersCard from "../components/Cards/UsersCard";
import Pagination from "../components/Buttons/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, addUser } from "../actions/users";
import UserService from "../services/UserService";

const userListEndpoint = `${process.env.REACT_APP_SERVER_URL}/api/v1/list`;

const Dashboard = (props) => {
  const [users, setUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(1);

  const userslist = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // /////////////////

  const initialUserState = {
    username: "",
    password: "",
    email: "",
  };

  const [myuser, setMyuser] = useState(initialUserState);

  // ////////////////

  // DISPLAY USER LIST
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  //DELETE USER
  // const deleteUser = (id) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_SERVER_URL}/api/v1/deleteuser/${id}`, {})
  //     .then(function (response) {
  //       for (let value of Object.values(users)) {
  //         for (let myv of value) {
  //           var arrayData = Object.entries(myv);
  //           for (var [cle, valeur] of arrayData) {
  //             if (cle == "id" && valeur !== id) {
  //               var returnedTable = valeur;
  //             }
  //           }
  //         }
  //       }

  //       setUsers(returnedTable);
  //       window.location.reload();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const deleteUserById = (id) => {
    dispatch(deleteUser(id))
      .then(() => {
        dispatch(getUsers());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMyuser({ ...myuser, [name]: value });
  };

  const addMyUsers = (user) => {
    const { username, password, email } = myuser;
    dispatch(addUser(username, password, email))
      .then((data) => {
        dispatch(getUsers());
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // UPDATE USER
  const editUser = (body) => {
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/api/v1/updateuser`, body, {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then(function () {
        axios
          .get(userListEndpoint, {})
          .then(function (response) {
            setUsers(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  // GET CURRENT USERS
  // const indexOfLastPost = currentPage * usersPerPage;
  // const indexOfFirstPost = indexOfLastPost - usersPerPage;
  // const currentUsers = Object.values(users).slice(
  //   indexOfFirstPost,
  //   indexOfLastPost
  // );

  // CHANGE PAGE
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Container fluid className="mt-2">
        <Row>
          <div className="col-md-3 mt-3">
            <AddUserButton
              addUser={addMyUsers}
              handleInputChange={handleInputChange}
              text="Add user"
              myuser={myuser}
            />
          </div>
        </Row>
        <Row>
          <UsersCard
            users={userslist}
            deleteUser={deleteUserById}
            editUser={editUser}
          />
        </Row>
        <Row>
          <div className="col-md-3 mt-3">
            {/* <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            /> */}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
