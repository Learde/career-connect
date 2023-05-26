/* eslint-disable node/no-unsupported-features/es-syntax */
import { TheJobs } from "@/modules/admin";
export default [
    {
        name: "AdminList",
        path: "/admin",
        component: () => import("./AdminList.vue"),
        children: [
            {
                name: "JobsList",
                path: "jobs",
                component: TheJobs,
            },
        ],
    },
];
