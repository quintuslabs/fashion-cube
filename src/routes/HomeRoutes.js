import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";

var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: Home
  },
  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/" />
  },
  {
    path: "/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer
  }
];

export default routes;
