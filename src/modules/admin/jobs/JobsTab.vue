<script setup>
import { ListHeader } from "@/components";

import JobCard from "./JobCard.vue";
</script>

<template>
    <ListHeader>
        <template #button-text> Создать вакансию </template>
    </ListHeader>
    <div :class="classes.list">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
    </div>
</template>

<style module="classes">
.list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: var(--list-gap);
}
</style>
