import React, { useState, useEffect } from "react";
import { Card, Button, Container, Col } from "react-bootstrap";
import DeleteUserButton from "../Buttons/DeleteUserButton";
import EditUserButton from "../Buttons/EditUserButton";

const UsersCard = ({ users, deleteUser, editUser }) => {
  return (
    <>
      {users &&
        Object.values(users).map((user, j) => (
          <div key={j}>
            {Object.values(user).map((el, i) => (
              <div key={i} className="col-md-3 mt-3" style={{ float: "left" }}>
                <Card>
                  <Card.Header>Hello {el.username}</Card.Header>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      id : {el.id}
                      <br />
                      username : {el.username}
                      <br />
                      email : {el.email}
                    </Card.Subtitle>
                    <Card.Text>
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        These informations are for testing purposes
                      </span>
                    </Card.Text>
                    <EditUserButton editUser={editUser} user={el} />
                    <DeleteUserButton
                      deleteUser={deleteUser}
                      user={el}
                    ></DeleteUserButton>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default UsersCard;
