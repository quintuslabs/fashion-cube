/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container error-container">
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="big-text">Oops!</h1>
            <h2 className="small-text">404 - PAGE NOT FOUND</h2>
          </div>
          <div className="col-md-6  text-center">
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>

            <a
              href="/fashion-cube"
              className="home-page-button button-dark-blue iq-mt-15 text-center"
            >
              GOTO HOME PAGE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
