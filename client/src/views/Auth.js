import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Modal,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
  FormFeedback,
} from "reactstrap";
import AddUserButton from "../components/Buttons/AddUserButton";

const Auth = ({ setMylogin, mystore }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/v1/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.ctrl != 0) {
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: response.data,
            })
          );
          mystore();
        }
      });
  };

  const registerUser = (user) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/v1/new`, user, {})
      .then(function () {
        console.log("USER ADDED SUCCESSFULLY");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Container
        fluid
        className="mt-5"
        style={{ width: "40%", border: "1px solid #e8f0fe" }}
      >
        <Form role="form" style={{ margin: "2em" }}>
          <div className="pl-lg-4">
            <Row>
              <Col lg="11">
                <FormGroup>
                  <label className="form-control-label" htmlFor="username">
                    username
                  </label>
                  <Input
                    className="form-control-alternative"
                    placeholder="username"
                    name="username"
                    type="text"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="11">
                <FormGroup>
                  <label className="form-control-label" htmlFor="password">
                    Password
                  </label>
                  <Input
                    className="form-control-alternative"
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <Button color="primary" onClick={login}>
              Submit
            </Button>

            <AddUserButton addUser={registerUser} text="Register" />
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Auth;
