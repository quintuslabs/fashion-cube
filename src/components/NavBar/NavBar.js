import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { departments } = this.props;

    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/">
                  Fashion<span>Cube</span>
                </Link>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link to="/home">home</Link>
                  </li>
                  <li className="mega-drop-down">
                    <a href="#">
                      shop <i className="fa fa-angle-down"></i>
                    </a>

                    <div className="mega-menu">
                      <div className="mega-menu-wrap">
                        {departments &&
                          departments.map((item, index) => {
                            return (
                              <div className="mega-menu-content" key={index}>
                                <h5>{item.departmentName}</h5>
                                <ul className="stander">
                                  {item.categories.split(",").map((i, idx) => {
                                    return (
                                      <li key={idx}>
                                        <a href="#">{i}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span id="checkout_items" className="checkout_items">
                        2
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
