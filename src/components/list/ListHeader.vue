<script setup>
import { computed } from "vue";

const props = defineProps({ search: String });

const emit = defineEmits(["create", "update:search"]);

const localSearch = computed({
    get() {
        return props.search;
    },
    set(v) {
        emit("update:search", v);
    },
});
</script>

<template>
    <div :class="classes.header">
        <NButton type="primary" @click="$emit('create')">
            <slot name="button-text">Создать</slot>
        </NButton>
        <NInput
            :class="classes.input"
            placeholder="Поиск"
            v-model:value="localSearch"
        />
    </div>
</template>

<style module="classes">
.header {
    display: flex;

    gap: 30px;

    justify-content: space-between;

    padding: 20px 0 30px;
}

.input {
    max-width: 250px;
}
</style>
