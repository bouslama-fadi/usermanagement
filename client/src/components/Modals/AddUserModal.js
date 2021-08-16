import React from "react";
import { useForm } from "react-hook-form";
import {
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

const AddUserModal = ({
  addUser,
  toggle,
  modal,
  closeModal,
  handleInputChange,
  myuser,
}) => {
  const { register, handleSubmit, errors } = useForm({
    shouldUseNativeValidation: true,
  });
  const onAddUser = ({ username, password, email }) => {
    // const myuser = {
    //   username,
    //   password,
    //   email,
    // };
    addUser();
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={closeModal}>
      <ModalHeader toggle={toggle}>AddUser</ModalHeader>
      <ModalBody>
        <Form role="form">
          <div className="pl-lg-4">
            <Row>
              <Col lg="11">
                <FormGroup>
                  <label className="form-control-label" htmlFor="username">
                    User username
                  </label>
                  <Input
                    className="form-control-alternative"
                    placeholder="username"
                    name="username"
                    type="text"
                    value={myuser.username}
                    onChange={handleInputChange}
                    // {...register("username", {
                    //   required: "Please enter your username.",
                    // })}
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
                    value={myuser.password}
                    onChange={handleInputChange}
                    // {...register("password", {
                    //   required: "Please enter your password.",
                    // })}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="11">
                <FormGroup>
                  <label className="form-control-label" htmlFor="email">
                    Email
                  </label>
                  <Input
                    className="form-control-alternative"
                    placeholder="email"
                    name="email"
                    type="email"
                    value={myuser.email}
                    onChange={handleInputChange}
                    // {...register("email", {
                    //   required: "Please enter your email.",
                    // })}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit(onAddUser)}>
          confirm
        </Button>
        <Button color="secondary" onClick={toggle}>
          cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddUserModal;
