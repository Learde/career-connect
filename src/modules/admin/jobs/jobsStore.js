import { defineStore } from "pinia";
import { ref } from "vue";

import { getJobs } from "@/shared";

export const useJobsStore = defineStore("counter", () => {
    const jobsList = ref([]);

    async function fetchJobs() {
        const data = await getJobs();

        jobsList.value = data;
    }

    return { jobsList, fetchJobs };
});
