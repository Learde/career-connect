<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import { TheMainAdmin } from "@/modules";

const router = useRouter();
const currentRoute = useRoute();

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
const getRouteByName = (n) => tabs.find(({ name }) => name === n).route;
const getNameByRoute = (r) => tabs.find(({ route }) => route === r).name;

const currentTab = ref(getNameByRoute(currentRoute.name));

watch(currentTab, (value) => {
    router.push({ name: getRouteByName(value) });
});
</script>

<template>
    <TheMainAdmin>
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
    </TheMainAdmin>
</template>

<style module="classes">
.tabsWrapper {
    overflow: initial !important;
}
</style>
