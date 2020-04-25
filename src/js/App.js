import React, { PureComponent, Fragment, Suspense } from "react";
import { hot } from "react-hot-loader";
import { Router, Switch, Route } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import appRoutes from "./app-routes.js";
import PrivateRoute from "./app-layout/views/private-route.js";
import WaitingComponent from "./app-layout/components/waiting-component.js";
import "./App.css";

const history = createBrowserHistory();
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            {
              appRoutes.map(({ isRequiredAuth, path, component: Component }, key) => {
                if (isRequiredAuth) {
                  return (<PrivateRoute
                    path={path}
                    component={Component}
                    key={key}
                  />)
                }
                return (<Route
                  path={path}
                  component={WaitingComponent(Component)}
                  key={key}
                />)
              })
            }
          </Switch>

        </Router>
      </Fragment>
    );
  }
}

export default hot(module)(App);
