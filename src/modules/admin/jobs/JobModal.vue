<script setup>
import { ref, computed } from "vue";

import { BaseModal } from "@/components";
import { isNil } from "@/shared";

import JobEditor from "./JobEditor.vue";

const props = defineProps({
    isOpened: { type: Boolean, default: false },
    job: { type: Object, default: null },
});

// v-model
const emit = defineEmits(["update:isOpened"]);

const localIsOpened = computed({
    get() {
        return props.isOpened;
    },
    set(v) {
        emit("update:isOpened", v);
    },
});

// switching title
const title = computed(() => {
    return isNil(props.job) ? "Создание вакансии" : "Редактирование вакансии";
});

// job logic
const form = ref({
    title: "",
    description: "",
    salaryMin: null,
    salaryMax: null,
    tags: [],
});
</script>

<template>
    <BaseModal v-model:is-opened="localIsOpened">
        <template #title> {{ title }} </template>
        <template #content>
            <JobEditor
                v-model:title="form.title"
                v-model:description="form.description"
                v-model:salary-min="form.salaryMin"
                v-model:salary-max="form.salaryMax"
                v-model:tags="form.tags"
            />
            <div :class="classes.actions">
                <NButton type="primary">Сохранить</NButton>
            </div>
        </template>
    </BaseModal>
</template>

<style module="classes">
.actions {
    display: flex;

    justify-content: flex-end;

    margin-top: 10px;
}
</style>
