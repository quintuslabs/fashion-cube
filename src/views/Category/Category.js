import React, { Component } from "react";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container product_section_container">
        <div class="row">
          <div class="col product_section clearfix">
            <div class="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li class="active">
                  <a href="index.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Men's
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
