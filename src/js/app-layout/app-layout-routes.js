import usersRoutes from "../users/users-routes.js";
import CampaingsRoutes from "../campaings/campaings-routes.js";

const layoutRoutes = [
  {
    redirect: true,
    path: "/",
    pathTo: "/users",
    name: "Home",
  },
  ...usersRoutes,
  ...CampaingsRoutes,

]

export default layoutRoutes;
