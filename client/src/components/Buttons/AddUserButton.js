import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import AddUserModal from "../Modals/AddUserModal";

const AddUserButton = ({ addUser, closeModal, text }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Button onClick={toggle}>{text}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <AddUserModal
          addUser={addUser}
          closeModal={closeModal}
          modal={modal}
          toggle={toggle}
        />
      </Modal>
    </>
  );
};

export default AddUserButton;
