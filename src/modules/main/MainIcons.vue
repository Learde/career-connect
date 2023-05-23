<script setup>

import { IconBriefcase, IconBarChart, IconClipboard, IconBookmarkTabs, IconBooks, IconLaptop } from "@/shared";
import { GlowingIcon } from "@/components";
</script>

<template>
  <GlowingIcon :class="[classes.mainIcon, classes.mainIcon1]" background-color="rgb(125, 78, 89)" rotate-z="12deg">
    <IconBriefcase />
  </GlowingIcon>

  <GlowingIcon :class="[classes.mainIcon, classes.mainIcon2]" background-color="rgb(69, 163, 236)" rotate-z="-28deg">
    <IconBarChart />
  </GlowingIcon>

  <GlowingIcon :class="[classes.mainIcon, classes.mainIcon3]" background-color="rgb(232, 167, 115)" rotate-z="20deg">
    <IconClipboard />
  </GlowingIcon>

  <GlowingIcon :class="[classes.mainIcon, classes.mainIcon4]" background-color="rgb(223, 67, 119)" rotate-z="-40deg">
    <IconBookmarkTabs />
  </GlowingIcon>

  <GlowingIcon :class="[classes.mainIcon, classes.mainIcon5]" background-color="rgb(130, 218, 127)" rotate-z="-40deg">
    <IconBooks />
  </GlowingIcon>

  <GlowingIcon :class="[classes.mainIcon, classes.mainIcon6]" background-color="rgb(89, 232, 255)" rotate-z="20deg">
    <IconLaptop />
  </GlowingIcon>
</template>

<style module="classes">
.mainIcon {
  position: absolute;
}

.mainIcon1 {
  top: 6%;
  left: -1%;
}

.mainIcon2 {
  top: 45%;
  left: 4%;
}

.mainIcon3 {
  top: calc(100% - 85px);
  left: 0;
}

.mainIcon4 {
  top: 11%;
  right: 4%;
}

.mainIcon5 {
  top: 44%;
  right: -3.8%;
}

.mainIcon6 {
  top: calc(100% - 90px);
  right: 3.8%;
}
</style>
