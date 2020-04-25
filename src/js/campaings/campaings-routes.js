import React, { lazy, Suspense } from 'react';

const CampaingsPage = lazy(() => import("./campaings-page.js"));

const CampaingsRoutes = [
  {
    path: "/campaings",
    name: "campaings",
    component: CampaingsPage,
    isRequiredAuth: true
  }
]
export default CampaingsRoutes;
