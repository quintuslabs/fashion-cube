/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import TopNavBar from "../components/TopNavBar";
import NavBarContainer from "../components/NavBar/NavBarContainer";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topHaderClass: "show",
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    if (window.scrollY >= 50) {
      this.setState({ topHaderClass: "hide" });
    } else {
      this.setState({ topHaderClass: "show" });
    }
  };
  render() {
    return (
      <div className="main-wrapper">
        <div className="super_container">
          <header className="header trans_300">
            <TopNavBar className={this.state.topHaderClass} />
            <NavBarContainer />
          </header>
          <div className="layout-Container">{this.props.children}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default BaseLayout;
