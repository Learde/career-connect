<script setup>
import { ListHeader } from "@/components";

import JobCard from "./JobCard.vue";
</script>

<template>
    <ListHeader :class="classes.menu">
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
.menu {
    margin: 20px 0 30px;
}

.list {
    display: grid;

    grid-template-columns: 1fr;

    gap: 20px;
}
</style>
