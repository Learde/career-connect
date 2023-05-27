<script setup>
import { ListHeader } from "@/components";

import TestCard from "./TestCard.vue";

const tests = [
    {
        id: 1,
        title: "Название теста",
        description: "Краткое описание теста",
    },
    {
        id: 2,
        title: "Название теста",
        description: "Краткое описание теста",
    },
    {
        id: 3,
        title: "Название теста",
        description: "Краткое описание теста",
    },
    {
        id: 4,
        title: "Название теста",
        description: "Краткое описание теста",
    },
];
</script>

<template>
    <ListHeader>
        <template #button-text> Создать тест </template>
    </ListHeader>
    <div :class="classes.list">
        <TestCard v-for="test in tests" :key="test.id" :test="test" />
    </div>
</template>

<style module="classes">
.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);
}
</style>
