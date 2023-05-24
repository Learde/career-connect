<script setup>
import { ref } from "vue";
const tabs = [
    {
        name: "jobs",
        tab: "Вакансии",
    },
    {
        name: "reserve",
        tab: "Резерв",
    },
    {
        name: "stats",
        tab: "Статистика",
    },
    {
        name: "responses",
        tab: "Отклики",
    },
    {
        name: "tests",
        tab: "Тесты",
    },
];
const currentTab = ref("jobs");
</script>

<template>
    <n-tabs type="line" justify-content="center" defa animated>
        <n-tab-pane
            v-for="tab in tabs"
            :key="tab.name"
            :name="tab.name"
            :tab="tab.tab"
            :value="currentTab"
            :on-update:value="(val) => (current = val)"
        >
            {{ tab.tab }}
        </n-tab-pane>
    </n-tabs>
</template>

<style scoped></style>
