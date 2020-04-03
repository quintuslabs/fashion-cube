/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

function HorizontalFilter(Props) {
  return (
    <div className="row align-items-center" data-aos="fade-up">
      <div className="col text-center">
        <div className="new_arrivals_sorting">
          <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
            <li
              className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
              data-filter="*"
            >
              all
            </li>
            <li
              className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
              data-filter=".women"
            >
              women's
            </li>
            <li
              className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
              data-filter=".accessories"
            >
              accessories
            </li>
            <li
              className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
              data-filter=".men"
            >
              men's
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HorizontalFilter;
