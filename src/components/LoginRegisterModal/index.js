import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";

function LoginRegister(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="loginModal"
      className="modal fade login"
    >
      <Modal.Body>
        <div className="modal--close--button" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </div>
        <LoginForm />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default LoginRegister;
