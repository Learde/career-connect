<script setup>
import { RouterView } from 'vue-router'
import { TheHeader } from "@/modules";
import { NConfigProvider } from "naive-ui";

import { naiveConfig } from "./naiveConfig";
</script>

<template>
  <NConfigProvider :theme-overrides="naiveConfig">
    <TheHeader />
    <main>
        <RouterView />
    </main>
  </NConfigProvider>
</template>

<style scoped>

</style>
