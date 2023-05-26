/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "AdminList",
        path: "/admin",
        redirect: "/admin/jobs",
        component: () => import("./AdminPanel.vue"),
        children: [
            {
                name: "JobsList",
                path: "jobs",
                component: () => import("@/modules/admin/jobs/JobsTab.vue"),
            },
            {
                name: "TestsList",
                path: "tests",
                component: () => import("@/modules/admin/tests/TestsTab.vue"),
            },
        ],
    },
];
