<script setup>
import { ref } from "vue";

import { ListHeader } from "@/components";

import TestCard from "./TestCard.vue";
import TestModal from "./TestModal.vue";

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

const isModalOpened = ref(false);
</script>

<template>
    <ListHeader @create="isModalOpened = true">
        <template #button-text> Создать тест </template>
    </ListHeader>
    <div :class="classes.list">
        <TestCard v-for="test in tests" :key="test.id" :test="test" />
    </div>
    <TestModal v-model:is-opened="isModalOpened" />
</template>

<style module="classes">
.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);
}
</style>
