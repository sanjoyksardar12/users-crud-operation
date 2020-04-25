import React, { lazy, Suspense } from 'react';
const LoginPage = lazy(() => import(/* webpackChunkName: "LoginPage" */ "./login-page.js"));

// const LoginPageComp = (<Suspense fallback="loading"><LoginPage /></Suspense>)

// import LoginPageComp from "./login-page.js";
const loginRoutes = [
  {
    path: "/login",
    component: LoginPage
  }
]
export default loginRoutes;
