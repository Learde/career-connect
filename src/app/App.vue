<script setup>
import { RouterView } from 'vue-router'
import { TheHeader, TheMain } from "@/modules";
import { NConfigProvider } from "naive-ui";

import { naiveConfig } from "./naiveConfig";
</script>

<template>
  <NConfigProvider :theme-overrides="naiveConfig">
    <TheHeader />
    <TheMain>
        <RouterView />
    </TheMain>
  </NConfigProvider>
</template>
