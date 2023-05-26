<script setup></script>

<template>
    <div :class="classes.header">
        <NButton type="primary"
            ><slot name="button-text">Создать</slot></NButton
        >
        <NInput :class="classes.input" placeholder="Поиск" />
    </div>
</template>

<style module="classes">
.header {
    display: flex;

    gap: 30px;

    justify-content: space-between;
}

.input {
    max-width: 250px;
}
</style>
