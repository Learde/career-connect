<script setup>

</script>

<template>
  <main :class="classes.main">
    <slot />
  </main>
</template>

<style module="classes">
.main {
  background-color: var(--c-background);
  min-height: calc(100vh - var(--header-height));
}
</style>