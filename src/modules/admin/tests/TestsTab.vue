<script setup>
import { ref, onMounted } from "vue";

import { ListHeader } from "@/components";
import { getTests } from "@/shared";

import TestCard from "./TestCard.vue";
import TestModal from "./TestModal.vue";
import TestViewModal from "./TestViewModal.vue";

const tests = ref([]);

const isModalOpened = ref(false);
const isViewModalOpened = ref(false);
const isLoading = ref(false);

const pickedTest = ref(null);

const openViewModal = (test) => {
    pickedTest.value = test;
    isViewModalOpened.value = true;
};

const reloadList = async () => {
    isLoading.value = true;
    tests.value = await getTests();
    isLoading.value = false;
};

onMounted(() => {
    reloadList();
});
</script>

<template>
    <ListHeader @create="isModalOpened = true">
        <template #button-text> Создать тест </template>
    </ListHeader>

    <div :class="isLoading ? classes.loaderWrapper : classes.list">
        <NSpin v-if="isLoading" :show="isLoading" />
        <template v-else>
            <TestCard
                v-for="test in tests"
                :key="test.id"
                :test="test"
                @click="openViewModal(test)"
            />
        </template>
    </div>

    <TestModal v-model:is-opened="isModalOpened" @save="reloadList" />
    <TestViewModal :test="pickedTest" v-model:is-opened="isViewModalOpened" />
</template>

<style module="classes">
.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);
}

.loaderWrapper {
    display: flex;

    align-items: center;
    justify-content: center;
}
</style>
