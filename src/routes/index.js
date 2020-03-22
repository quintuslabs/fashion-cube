import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { registerNav } from "../modules/Navigation";

import HomeRoutes from "./HomeRoutes";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const browserHistory = createBrowserHistory();
    return (
      <Router
        ref={registerNav}
        basename={process.env.REACT_APP_BASENAME || ""}
        history={browserHistory}
      >
        <Switch>
          {HomeRoutes.map((homeRoutes, index) => {
            return (
              <Route
                key={index}
                path={homeRoutes.path}
                exact={homeRoutes.exact}
                component={props => {
                  return (
                    <homeRoutes.layout {...props}>
                      <homeRoutes.component {...props} />
                    </homeRoutes.layout>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
