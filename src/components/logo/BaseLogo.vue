<script setup></script>

<template>
    <div :class="classes.logoWrapper">
        <img src="/src/shared/images/scb_logo.svg" alt="Совкомбанк" />
        <span>CareerConnect</span>
    </div>
</template>

<style module="classes">
.logoWrapper {
    display: flex;

    flex-direction: column;

    row-gap: 6px;

    padding-left: 20px;
}

.logoWrapper img {
    width: 200px;
    height: auto;
}

.logoWrapper span {
    font-size: 16px;
    font-weight: 300;
    color: var(--c-secondary);
}
</style>
