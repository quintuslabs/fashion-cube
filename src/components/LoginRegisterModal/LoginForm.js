/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/LoginAction";
import jumpTo from "../../modules/Navigation";
import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import PropTypes from "prop-types";
import LoadingButton from "../LoadingButton";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    // let email = "bob@bob.com";
    // let password = "Ab123123";
    const { email, password } = this.state;
    if (!Validator(email, EMAIL_RULE)) {
      console.log("email Error");
      return;
    }
    if (!Validator(password, DEFAULT_RULE)) {
      console.log("Password Error");
      return;
    }
    this.setState({ loading: true });
    this.props
      .userLogin(email, password)
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        window.location.reload();
      })
      .catch(error => {
        // console.log('loginsignin error')
        console.log(error.response);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        <div className="login-form">
          <h2>Login</h2>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Email "
              id="UserName"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="form-group log-status">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="Passwod"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-lock"></i>
          </div>
          <span className="alert">Invalid Credentials</span>
          <a
            className="link"
            href="#"
            onClick={this.props.forgotPasswordClicked}
          >
            Lost your password?
          </a>
          <LoadingButton
            type="button"
            className="log-btn"
            loading={this.state.loading}
            onClick={() => this.handleSubmit()}
          >
            Log in
          </LoadingButton>
          <div
            onClick={this.props.registerClicked}
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#c4c4c4",
              cursor: "pointer"
            }}
          >
            New user ? Please Register
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  forgotPasswordClicked: PropTypes.func,
  registerClicked: PropTypes.func
};

const mapDispatchToProps = {
  userLogin
};
const mapStoreToProps = state => ({
  login_loading: state.login.login_loading,
  login_error: state.login.error
});

export default connect(mapStoreToProps, mapDispatchToProps)(LoginForm);
