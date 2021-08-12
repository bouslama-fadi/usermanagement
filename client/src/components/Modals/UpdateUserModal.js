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
  CardBody,
} from "reactstrap";

const UpdateUserModal = ({ editUser, toggle, modal, closeModal, user }) => {
  const { register, handleSubmit, errors } = useForm({
    shouldUseNativeValidation: false,
  });

  const onEditUser = ({ username, password, email, id }) => {
    const body = {
      username,
      password,
      email,
      id,
    };
    editUser(body);
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
                    defaultValue={`${user.username}`}
                    {...register("username", {
                      required: "Please enter your username.",
                    })}
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
                    defaultValue={`${user.password}`}
                    {...register("password", {
                      required: "Please enter your password.",
                    })}
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
                    type="text"
                    defaultValue={`${user.email}`}
                    {...register("email", {
                      required: "Please enter your email.",
                    })}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ display: "none" }}>
              <Col lg="11">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    name="id"
                    type="text"
                    defaultValue={`${user.id}`}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit(onEditUser)}>
          confirm
        </Button>
        <Button color="secondary" onClick={toggle}>
          cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateUserModal;
