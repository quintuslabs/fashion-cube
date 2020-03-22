import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
              placeholder="Name "
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              autocomplete="false"
            />
            <i className="fa fa-user"></i>
          </div>

          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Email "
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              autocomplete="false"
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
              autocomplete="false"
            />
            <i className="fa fa-lock"></i>
          </div>
          <span className="alert">Invalid Credentials</span>
          <a className="link" href="#">
            Lost your password?
          </a>
          <button type="button" className="log-btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
