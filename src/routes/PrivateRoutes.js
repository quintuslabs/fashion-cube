// Route Views
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

import CartContainer from "../views/Cart";

var PrivateRoutes = [
  {
    path: "/cart",
    layout: BaseLayout,
    component: CartContainer
  }
];

export default PrivateRoutes;
