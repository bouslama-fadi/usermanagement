import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import UpdateUserModal from "../Modals/UpdateUserModal";

const EditUserButton = ({ editUser, closeModal, user }) => {
  const [editmodal, seteditModal] = useState(false);
  const toggleEdit = () => seteditModal(!editmodal);
  return (
    <>
      <Button
        className="col-sm-5 col-md-12 col-lg-6 col-12 ml-1 mt-1"
        onClick={toggleEdit}
        color="primary"
      >
        Update
      </Button>
      <Modal isOpen={editmodal} toggle={toggleEdit}>
        <UpdateUserModal
          closeModal={closeModal}
          modal={editmodal}
          toggle={toggleEdit}
          user={user}
          editUser={editUser}
        />
      </Modal>
    </>
  );
};

export default EditUserButton;
