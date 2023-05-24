<script setup>
defineProps({
    backgroundColor: String,
    rotateZ: String,
});
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

    align-items: center;
    justify-content: center;

    width: 100px;
    height: 100px;

    transform: rotateZ(v-bind(rotateZ));

    & svg,
    & img {
        position: relative;

        flex-shrink: 0;

        min-width: 100%;
        min-height: 100%;
    }
}

.glowingIconBackground {
    position: absolute;
    right: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: v-bind(backgroundColor);
    filter: blur(40px);
}
</style>
