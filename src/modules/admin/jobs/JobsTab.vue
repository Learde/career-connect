<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

import { ListHeader } from "@/components";
import { deleteJob, closeJob } from "@/shared";

import JobCard from "./JobCard.vue";
import JobModal from "./JobModal.vue";
import { useJobsStore } from "./jobsStore";

const modal = ref({
    open: false,
    job: null,
});

const store = useJobsStore();

const { jobsList, listLoading } = storeToRefs(store);

const openCreate = () => {
    modal.value = {
        open: true,
        job: null,
    };
};

const changeJob = () => {
    modal.value.open = false;
    store.fetchJobs();
};

const close = async (id) => {
    listLoading.value = true;
    await closeJob(id);

    store.fetchJobs();
};

const removeJob = async (id) => {
    listLoading.value = true;
    await deleteJob(id);

    store.fetchJobs();
};

onMounted(async () => {
    await store.fetchJobs();
});
</script>

<template>
    <ListHeader @create="openCreate">
        <template #button-text> Создать вакансию </template>
    </ListHeader>
    <div v-if="listLoading" :class="classes.center">
        <NSpin size="large" />
    </div>
    <div v-if="!listLoading && jobsList.length" :class="classes.list">
        <JobCard
            v-for="job in jobsList"
            :key="job.id"
            :job="job"
            @change="(val) => (modal = { open: true, job: val })"
            @close="(val) => close(val)"
            @delete="(val) => removeJob(val)"
        />
    </div>
    <div v-if="!listLoading && !jobsList.length" :class="classes.center">
        <h3>Нет открытых вакансий</h3>
    </div>
    <JobModal
        v-model:is-opened="modal.open"
        :job="modal.job"
        @changeJob="changeJob"
    />
</template>

<style module="classes" lang="scss">
.center {
    display: flex;

    align-items: center;
    justify-content: center;

    margin-top: 10vh;
}

.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);

    max-height: 60vh;
    padding: 10px;

    overflow: auto;
}

@media (max-width: 900px) {
    .list {
        grid-template-columns: 1fr;
    }
}
</style>
