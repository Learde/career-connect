/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "AdminPanel",
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
            {
                name: "AdminReserve",
                path: "reserve",
                component: () =>
                    import("@/modules/admin/reserves/ReservesTab.vue"),
            },
            {
                name: "AdminStatistics",
                path: "statistics",
                component: () =>
                    import("@/modules/admin/statistics/StatisticsTab.vue"),
            },
            {
                name: "ResponsesList",
                path: "responses",
                component: () =>
                    import("@/modules/admin/responses/ResponsesTab.vue"),
            },
        ],
    },
];
