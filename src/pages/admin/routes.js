/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "AdminList",
        path: "/admin",
        component: () => import("./AdminPanel.vue"),
        children: [
            {
                name: "JobsList",
                path: "jobs",
                component: () => import("@/modules/admin/jobs/JobsTab.vue"),
            },
        ],
    },
];
