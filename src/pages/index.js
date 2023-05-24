import { adminRoutes } from "./admin";
import { welcomeRoutes } from "./welcome";

export const routes = [...welcomeRoutes, ...adminRoutes];
