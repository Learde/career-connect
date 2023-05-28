import { defineStore } from "pinia";
import { ref } from "vue";

import { getProfile, changeProfile } from "@/shared";

export const useProfileStore = defineStore("userStore", () => {
    const profile = ref([]);
    const loading = ref(true);

    async function fetchProfile() {
        loading.value = true;
        const data = await getProfile();

        profile.value = data;
        loading.value = false;
    }

    async function setProfile(params) {
        loading.value = true;
        await changeProfile(params);

        loading.value = false;
    }

    return { profile, loading, fetchProfile, setProfile };
});
