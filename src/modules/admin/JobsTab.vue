<script setup>
import JobCard from "./JobCard.vue";
</script>

<template>
    <div :class="classes.menu">
        <NButton type="primary">Создать вакансию</NButton>
    </div>
    <div :class="classes.list">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
    </div>
</template>

<style module="classes">
.menu {
    display: flex;

    justify-content: center;

    margin: 20px 0 30px;
}

.list {
    display: grid;

    grid-template-columns: 1fr;

    gap: 20px;
}
</style>
