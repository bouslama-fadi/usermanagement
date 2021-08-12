import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteUserModal from "../Modals/DeleteUserModal";

const DeleteUserButton = ({ deleteUser, user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="col-sm-5 col-md-12 col-lg-6 col-12 ml-1 mt-1"
        variant="secondary"
        onClick={handleShow}
      >
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <DeleteUserModal
          handleClose={handleClose}
          deleteUser={deleteUser}
          user={user}
        />
      </Modal>
    </>
  );
};

export default DeleteUserButton;
