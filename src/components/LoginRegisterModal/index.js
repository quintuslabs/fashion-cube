/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";
import PropTypes from "prop-types";
class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showlogin: this.props.showlogin
    };
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="loginModal"
        className="modal fade login"
      >
        <Modal.Body>
          <div className="modal--close--button" onClick={this.props.onHide}>
            <i className="fas fa-times"></i>
          </div>
          {this.props.login ? (
            <LoginForm registerClicked={() => this.props.registerClicked()} />
          ) : (
            <RegisterForm loginClicked={() => this.props.loginClicked()} />
          )}
        </Modal.Body>
      </Modal>
    );
  }
}
LoginRegister.propTypes = {
  login: PropTypes.bool,
  registerClicked: PropTypes.func,
  loginClicked: PropTypes.func
};
export default LoginRegister;
