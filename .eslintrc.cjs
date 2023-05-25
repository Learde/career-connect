/* eslint-env node */
/* eslint-disable node/no-unpublished-require */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: "2021",
        sourceType: "module",
    },
    env: {
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
        "stylelint",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:boundaries/recommended",
    ],
    settings: {
        "import/resolver": {
            alias: {
                map: [["@", "./src"]],
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },
        },
        "boundaries/elements": [
            { type: "app", pattern: "app/*" },
            { type: "pages", pattern: "pages/*" },
            { type: "modules", pattern: "modules/*" },
            { type: "components", pattern: "components/*" },
            { type: "shared", pattern: "shared/*" },
        ],
    },
    overrides: [
        {
            files: ["**/*.cjs"],
            globals: {
                require: false,
                module: false,
            },
        },
    ],
    rules: {
        "no-console": 0,
        "no-debugger": 0,
        "sort-imports": 0,
        "node/no-missing-import": 0,
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                endOfLine: "auto",
            },
        ],
        "node/no-unpublished-import": [
            "error",
            {
                allowModules: ["msw", "@faker-js/faker", "@mswjs/data"],
            },
        ],
        "import/order": [
            "error",
            {
                alphabetize: { order: "asc", caseInsensitive: true },
                "newlines-between": "always",
                pathGroups: [
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/pages/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/modules/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/components/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/shared/**",
                    },
                ],
                pathGroupsExcludedImportTypes: ["builtin"],
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
            },
        ],
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["@/app/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["@/pages/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["@/modules/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["@/components/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["@/shared/*/**"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/app"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/pages"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/modules"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/components"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/shared"],
                    },
                ],
            },
        ],
        "boundaries/element-types": [
            "warn",
            {
                default: "disallow",
                rules: [
                    {
                        from: "app",
                        allow: ["pages", "modules", "components", "shared"],
                    },
                    {
                        from: "pages",
                        allow: ["modules", "components", "shared"],
                    },
                    {
                        from: "modules",
                        allow: ["components", "shared"],
                    },
                    {
                        from: "components",
                        allow: ["shared"],
                    },
                    { from: "shared", allow: ["shared"] },
                ],
            },
        ],
    },
};
