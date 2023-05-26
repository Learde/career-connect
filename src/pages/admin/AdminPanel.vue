<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const tabs = [
    {
        name: "jobs",
        tab: "Вакансии",
        route: "JobsList",
    },
    {
        name: "reserves",
        tab: "Резерв",
        route: "AdminReserve",
    },
    {
        name: "statistics",
        tab: "Статистика",
        route: "AdminStatistics",
    },
    {
        name: "responses",
        tab: "Отклики",
        route: "ResponsesList",
    },
    {
        name: "tests",
        tab: "Тесты",
        route: "TestsList",
    },
];
const currentTab = ref("jobs");

watch(currentTab, (v) => {
    router.push({ name: tabs.find(({ name }) => name === v).route });
});
</script>

<template>
    <NTabs
        type="line"
        justify-content="center"
        defa
        animated
        :pane-wrapper-class="classes.tabsWrapper"
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

<style module="classes">
.tabsWrapper {
    overflow: initial !important;
}
</style>
