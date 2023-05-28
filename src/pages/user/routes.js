/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "UserProfile",
        path: "/user/:id",
        component: () => import("./UserProfile.vue"),
    },
];
