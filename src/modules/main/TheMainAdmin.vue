<script setup>
import { BaseBox } from "@/shared";
</script>

<template>
    <main :class="classes.main">
        <!--        <MainIcons />-->
        <BaseBox :class="classes.mainBox">
            <slot />
        </BaseBox>
    </main>
</template>

<style module="classes">
.main {
    --padding-y: 35px;
    position: relative;
    z-index: var(--z-main);

    display: flex;

    align-items: center;
    justify-content: center;

    min-height: calc(100vh - var(--header-height));
    padding: var(--padding-y) 0;

    background: var(--c-background);
}

.mainBox {
    position: relative;

    width: 100%;
    max-width: var(--container-width);
    min-height: calc(100vh - var(--header-height) - var(--padding-y) * 2);
    padding: 30px 80px;
}

@media (max-width: 850px) {
    .mainBox {
        padding: 20px;
    }
}
</style>
