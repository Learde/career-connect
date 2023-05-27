<script setup>
defineEmits(["create", "search"]);
</script>

<template>
    <div :class="classes.header">
        <NButton type="primary" @click="$emit('create')">
            <slot name="button-text">Создать</slot>
        </NButton>
        <NInput
            :class="classes.input"
            placeholder="Поиск"
            @input="(v) => $emit('search', v)"
        />
    </div>
</template>

<style module="classes">
.header {
    display: flex;

    gap: 30px;

    justify-content: space-between;

    padding: 20px 0 30px;
}

.input {
    max-width: 250px;
}
</style>
