<script setup>

</script>

<template>
<div :class="classes.logoWrapper">
  <img src="/src/shared/images/scb_logo_red_black.svg" alt="Совкомбанк">
  <span>CareerConnect</span>
</div>
</template>

<style module="classes">
.logoWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.logoWrapper img {
  width: 240px;
  height: auto;
}

.logoWrapper span {
  font-size: 16px;
}
</style>