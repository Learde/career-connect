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

const { jobsList } = storeToRefs(store);

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
    await closeJob(id);

    store.fetchJobs();
};

const removeJob = async (id) => {
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
    <div :class="classes.list">
        <JobCard
            v-for="job in jobsList"
            :key="job.id"
            :job="job"
            @change="(val) => (modal = { open: true, job: val })"
            @close="(val) => close(val)"
            @delete="(val) => removeJob(val)"
        />
    </div>
    <JobModal
        v-model:is-opened="modal.open"
        :job="modal.job"
        @changeJob="changeJob"
    />
</template>

<style module="classes">
.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);
}

@media (max-width: 850px) {
    .list {
        grid-template-columns: 1fr;
    }
}
</style>
