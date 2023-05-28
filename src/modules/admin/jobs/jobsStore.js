import { defineStore } from "pinia";
import { ref } from "vue";

import { getJobs } from "@/shared";

export const useJobsStore = defineStore("jobsStore", () => {
    const jobsList = ref([]);
    const listLoading = ref(true);

    async function fetchJobs() {
        listLoading.value = true;
        const data = await getJobs();

        jobsList.value = data;
        listLoading.value = false;
    }

    return { jobsList, listLoading, fetchJobs };
});
