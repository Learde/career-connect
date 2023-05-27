<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

import { ListHeader } from "@/components";

import JobCard from "./JobCard.vue";
import JobModal from "./JobModal.vue";
import { useJobsStore } from "./jobsStore";

const modalOpen = ref(false);

const store = useJobsStore();

const { jobsList } = storeToRefs(store);

onMounted(() => {
    store.fetchJobs();
});
</script>

<template>
    <ListHeader @create="modalOpen = true">
        <template #button-text> Создать вакансию </template>
    </ListHeader>
    <div :class="classes.list">
        <JobCard v-for="job in jobsList" :key="job.id" :job="job" />
    </div>
    <JobModal v-model:is-opened="modalOpen" />
</template>

<style module="classes">
.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);
}
</style>
