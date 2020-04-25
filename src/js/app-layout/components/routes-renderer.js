import React, { Fragment } from 'react';
import { Redirect } from "react-router-dom";
import PrivateRoute from "../views/private-route.js";

function RouteRenderer({ layoutRoutes }) {
  return (
    <Fragment>
      {
        layoutRoutes.map(({ path, component, redirect, pathTo }, key) => {
          if (redirect) {
            return <Redirect from={path} to={pathTo} key={key} />;
          }

          return <PrivateRoute exact
            key={key}
            path={path}
            component={component}
          />
        })
      }
    </Fragment>
  )
}
export default RouteRenderer;
