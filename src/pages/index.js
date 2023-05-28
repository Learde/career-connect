import { adminRoutes } from "./admin";
import { mainRoutes } from "./main";
import { userRoutes } from "./user";
import { welcomeRoutes } from "./welcome";

export const routes = [
    ...welcomeRoutes,
    ...adminRoutes,
    ...mainRoutes,
    ...userRoutes,
];
