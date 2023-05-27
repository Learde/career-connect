<script setup>
import { ListCard } from "@/components";

defineProps({ test: Object });

defineEmits(["click"]);
</script>

<template>
    <ListCard :class="classes.card" has-edit has-delete @click="$emit('click')">
        <template #title>{{ test.title }}</template>
        <template #content>{{ test.description }}</template>
    </ListCard>
</template>

<style module="classes">
.card {
    cursor: pointer;
}
</style>
