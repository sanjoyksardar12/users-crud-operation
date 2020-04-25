import React from "react";
import loginRoutes from "./login/login-routes.js";
// import AppLayout from "./app-layout/app-layout-page.js";
const AppLayout = React.lazy(() => import(/*webpackChunkname:"app-layout" */ "./app-layout/app-layout-page.js"));
const indexRoutes = [
  ...loginRoutes,
  {
    path: "/",
    isRequiredAuth: true,
    component: AppLayout
  }
]
export default indexRoutes;
