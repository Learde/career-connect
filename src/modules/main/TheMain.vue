<script setup>
import MainIcons from "./MainIcons.vue";
</script>

<template>
  <main :class="classes.main">
    <MainIcons />
    <slot />
  </main>
</template>

<style module="classes">
.main {
  background-color: var(--c-background);
  min-height: calc(100vh - var(--header-height));
  position: relative;
  z-index: var(--z-main);
  overflow: hidden;
}
</style>