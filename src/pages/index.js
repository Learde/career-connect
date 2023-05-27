import { adminRoutes } from "./admin";
import { mainRoutes } from "./main";
import { welcomeRoutes } from "./welcome";

export const routes = [...welcomeRoutes, ...adminRoutes, ...mainRoutes];
