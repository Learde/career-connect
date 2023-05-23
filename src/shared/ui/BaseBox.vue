<script setup>

</script>

<template>
<div :class="classes.box">
  <slot />
</div>
</template>

<style module="classes">
.box {
  background-color: var(--c-foreground);
  border-radius: 5px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.05);
}
</style>