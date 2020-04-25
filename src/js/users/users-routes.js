import React, { lazy, Suspense } from 'react';

const UsersPage = lazy(() => import("./users-page.js"));

const usersRoutes = [
  {
    path: "/users",
    name: "users",
    component: UsersPage,
    isRequiredAuth: true
  }
]
export default usersRoutes;
