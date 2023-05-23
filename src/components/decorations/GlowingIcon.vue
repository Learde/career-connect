<script setup>
defineProps({
  backgroundColor: String,
  rotateZ: String,
})
</script>

<template>
<div :class="classes.glowingIcon">
  <div :class="classes.glowingIconBackground"></div>
  <slot />
</div>
</template>

<style lang="scss" module="classes">
.glowingIcon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transform: rotateZ(v-bind(rotateZ));

  & svg, & img {
    min-width: 100%;
    min-height: 100%;
    flex-shrink: 0;
    position: relative;
  }
}

.glowingIconBackground {
  background-color: v-bind(backgroundColor);
  width: 100%;
  height: 100%;
  filter: blur(40px);
  position: absolute;
  left: 0;
  right: 0;
}
</style>