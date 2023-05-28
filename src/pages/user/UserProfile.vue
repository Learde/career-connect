<script setup>
import { useRoute } from "vue-router";

import { ProfileForm } from "@/modules/user";

const currentRoute = useRoute();
</script>

<template>
    <div :class="classes.main">
        <ProfileForm :user="Number(currentRoute.params.id)" />
    </div>
</template>

<style module="classes" lang="scss">
.main {
    display: flex;

    flex-direction: column;

    align-items: center;

    min-height: calc(100vh - var(--header-height));

    padding: 20px 0;
}
</style>
