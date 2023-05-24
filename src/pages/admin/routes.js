/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "AdminList",
        path: "/admin",
        component: import("./AdminList.vue"),
        // children: [
        //     {
        //       path: 'profile',
        //       component: UserProfile,
        //     },
        //     {
        //       path: 'posts',
        //       component: UserPosts,
        //     }
        // ]
    },
];
