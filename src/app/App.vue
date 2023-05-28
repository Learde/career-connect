<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";

import { TheHeader } from "@/modules";

import { naiveConfig } from "./naiveConfig";
</script>

<template>
    <NConfigProvider :theme-overrides="naiveConfig">
        <TheHeader />
        <RouterView />
    </NConfigProvider>
</template>
