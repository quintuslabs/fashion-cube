import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import { createBrowserHistory } from "history";

import HomeRoutes from "./HomeRoutes";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const browserHistory = createBrowserHistory();

    return (
      <div>
        <Router ref={registerNav}>
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
      </div>
    );
  }
}

export default Routes;
