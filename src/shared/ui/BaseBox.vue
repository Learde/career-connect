<script setup></script>

<template>
    <div :class="classes.box">
        <slot />
    </div>
</template>

<style module="classes">
.box {
    background-color: var(--c-foreground);
    border-radius: var(--border-radius);
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 5%);
}
</style>
