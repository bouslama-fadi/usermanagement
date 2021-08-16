import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteUserModal = ({ handleClose, deleteUser, user }) => {
  return (
    <>
      <Modal.Dialog style={{ width: "100%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete
          <span className="userSt"> {user.username}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              deleteUser(user.id);
              handleClose();
            }}
          >
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default DeleteUserModal;
