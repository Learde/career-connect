/* eslint-disable node/no-unpublished-import */
import { URL, fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslint({
            include: "**/*.{js,ts,vue}",
            exclude: ["**/node_modules/**"],
        }),
        stylelint({
            dev: true,
            fix: true,
            include: "**/*.{css,scss,sass,vue}",
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
