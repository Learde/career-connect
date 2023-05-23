<script setup>
import { BaseLogo } from "@/components";
</script>

<template>
<header :class="classes.header">
  <div :class="classes.headerContent">
    <BaseLogo />
  </div>
</header>
</template>

<style module="classes">
.header {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
}

.headerContent {
  max-width: var(--container-width);
  width: 100%;
}
</style>