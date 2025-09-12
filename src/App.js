/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useEffect } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./routes";

function App() {

  // Using useEffect to initialize AOS on component mount
  useEffect(
    () => {
      AOS.init();
    }, []
  )

  return (
    <div>
        <Routes />
      </div>
  );
};

export default App;
