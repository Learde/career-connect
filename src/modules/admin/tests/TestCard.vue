<script setup>
import { ListCard } from "@/components";

defineProps({ test: Object });

defineEmits(["click", "delete", "edit"]);
</script>

<template>
    <ListCard
        :class="classes.card"
        has-edit
        has-delete
        @click="$emit('click')"
        @edit="$emit('edit')"
        @delete="$emit('delete')"
    >
        <template #title>{{ test.name }}</template>
        <template #content>{{ test.description }}</template>
    </ListCard>
</template>

<style module="classes">
.card {
    cursor: pointer;
}
</style>
