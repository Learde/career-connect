<script setup>
import { RouterView } from 'vue-router'
import { TheHeader } from "@/modules";
import { NConfigProvider } from "naive-ui";

import { naiveConfig } from "./naiveConfig";
</script>

<template>
  <NConfigProvider :theme-overrides="naiveConfig">
    <TheHeader />
    <main :class="classes.main">
        <RouterView />
    </main>
  </NConfigProvider>
</template>

<style module="classes">
.main {
  background-color: var(--c-background);
  min-height: calc(100vh - var(--header-height));
}
</style>
