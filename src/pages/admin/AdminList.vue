<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
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

watch(currentTab, () => {
    router.push({ name: "JobsList" });
});
</script>

<template>
    <NTabs
        type="line"
        justify-content="center"
        defa
        animated
        :value="currentTab"
        :on-update:value="(val) => (currentTab = val)"
    >
        <NTabPane
            v-for="tab in tabs"
            :key="tab.name"
            :name="tab.name"
            :tab="tab.tab"
        >
            <RouterView></RouterView>
        </NTabPane>
    </NTabs>
</template>

<style scoped></style>
