import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";

var routes = [
  {
    path: "/home",
    exact: true,
    layout: BaseLayout,
    component: () => <Redirect to="/" />
  },
  {
    path: "/",
    layout: BaseLayout,
    component: Home
  }
];

export default routes;
