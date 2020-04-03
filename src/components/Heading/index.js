/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

function Heading(props) {
  return (
    <div className="col text-center">
      <div className="section_title new_arrivals_title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Heading;
