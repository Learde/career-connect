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
    position: relative;
    z-index: var(--z-header);

    display: flex;

    align-items: center;
    justify-content: center;

    height: var(--header-height);

    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 10%);
}

.headerContent {
    width: 100%;
    max-width: var(--container-width);
}
</style>
