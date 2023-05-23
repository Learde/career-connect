<script setup>

import { IconBriefcase, IconBarChart, IconClipboard, IconBookmarkTabs, IconBooks, IconLaptop } from "@/shared";
import { GlowingIcon } from "@/components";
</script>

<template>
  <GlowingIcon background-color="rgba(125, 78, 89, 0.5)" rotate-z="12deg">
    <IconBriefcase />
  </GlowingIcon>

  <GlowingIcon background-color="rgba(69, 163, 236, 1)" rotate-z="-28deg">
    <IconBarChart />
  </GlowingIcon>

  <GlowingIcon background-color="rgba(232, 167, 115, 1)" rotate-z="20deg">
    <IconClipboard />
  </GlowingIcon>

  <GlowingIcon background-color="rgba(223, 67, 119, 1)" rotate-z="-50deg">
    <IconBookmarkTabs />
  </GlowingIcon>

  <GlowingIcon background-color="rgba(130, 218, 127, 1)" rotate-z="-50deg">
    <IconBooks />
  </GlowingIcon>

  <GlowingIcon background-color="rgba(89, 232, 255, 1)" rotate-z="20deg">
    <IconLaptop />
  </GlowingIcon>
</template>

<style scoped>
p {
  color: #E8A773;
}
</style>