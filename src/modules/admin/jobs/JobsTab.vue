<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted, computed } from "vue";

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

const search = ref("");

const filteredJobs = computed(() => {
    if (!search.value) return jobsList.value;

    return jobsList.value.filter(({ name }) =>
        name.toLowerCase().includes(search.value.toLowerCase())
    );
});

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
    <ListHeader v-model:search="search" @create="openCreate">
        <template #button-text> Создать вакансию </template>
    </ListHeader>
    <div v-if="listLoading" :class="classes.loading">
        <NSpin size="large" />
    </div>
    <div v-else :class="classes.list">
        <JobCard
            v-for="job in filteredJobs"
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
.loading {
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
