/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="sidebar_section">
        <div class="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul class="sidebar_categories">
          <li>
            <a href="#">Men</a>
          </li>
          <li class="active">
            <a href="#">
              <span>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </span>
              Women
            </a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
