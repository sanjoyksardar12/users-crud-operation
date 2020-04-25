import React, { PureComponent, Fragment } from "react";

import Header from "../app-containers/Header/header.js";
import Sidebar from "../app-containers/Sidebar/sidebar.js";
import RoutesRenderer from "./components/routes-renderer.js";

import layoutRoutes from "./app-layout-routes.js";

class AppLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>
          <Sidebar layoutRoutes={layoutRoutes} />
          <div id="mainPanel">
            <Header />
            <div className="content">
              <div className="container">
                {
                  <RoutesRenderer layoutRoutes={layoutRoutes} />
                }
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AppLayout;
