import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/LoginAction";
import jumpTo from "../../modules/Navigation";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let email = "bob@bob.com";
    let password = "Ab123123";
    this.props
      .userLogin(email, password)
      .then(res => {
        console.log(res);

        window.location.reload();
      })
      .catch(error => {
        // console.log('loginsignin error')
        console.log(error.response);
      });
  };

  render() {
    console.log(this.props);
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
          <a className="link" href="#">
            Lost your password?
          </a>
          <button
            type="button"
            className="log-btn"
            onClick={() => this.handleSubmit()}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  userLogin
};
const mapStoreToProps = state => ({
  login_loading: state.login.login_loading,
  login_error: state.login.error
});

export default connect(mapStoreToProps, mapDispatchToProps)(LoginForm);
