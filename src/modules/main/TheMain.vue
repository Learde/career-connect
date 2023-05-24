<script setup>
import { BaseBox } from "@/shared";

import MainIcons from "./MainIcons.vue";
</script>

<template>
    <main :class="classes.main">
        <MainIcons />
        <BaseBox :class="classes.mainBox">
            <slot />
        </BaseBox>
    </main>
</template>

<style module="classes">
.main {
    --padding-y: 35px;

    background-color: var(--c-background);
    min-height: calc(100vh - var(--header-height));
    position: relative;
    z-index: var(--z-main);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding-y) 0;
}

.mainBox {
    max-width: var(--container-width);
    min-height: calc(100vh - var(--header-height) - var(--padding-y) * 2);
    width: 100%;
    position: relative;
    padding: 30px 80px;
}
</style>
