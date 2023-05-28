<script setup>
import { ref, computed, watch } from "vue";

import { BaseModal } from "@/components";
import { isNil, createJob, editJob } from "@/shared";

import JobEditor from "./JobEditor.vue";

const props = defineProps({
    isOpened: { type: Boolean, default: false },
    job: { type: Object, default: null },
});

// v-model
const emit = defineEmits(["update:isOpened", "changeJob"]);

const loading = ref(false);

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
const form = ref({});

watch(localIsOpened, (val) => {
    if (val) {
        form.value = {
            title: props.job?.name ?? "",
            description: props.job?.description ?? "",
            salaryMin: props.job?.minSalary ?? null,
            salaryMax: props.job?.maxSalary ?? null,
            type: props.job?.type ?? "VACANCY",
            tags: props.job?.tags ?? [],
        };
    } else {
        form.value = {
            title: "",
            description: "",
            salaryMin: null,
            salaryMax: null,
            type: "VACANCY",
            tags: [],
        };
    }
});

const addJob = async () => {
    const model = form.value;

    loading.value = true;
    await createJob({
        name: model.title,
        description: model.description,
        type: model.type,
        isOpen: true,
        minSalary: model.salaryMin,
        maxSalary: model.salaryMax,
        tests: [],
        tags: model.tags,
        users: [],
    });
    emit("changeJob");
    loading.value = false;
};

const changeJob = async () => {
    const model = form.value;

    loading.value = true;

    await editJob(props.job.id, {
        name: model.title,
        description: model.description,
        type: model.type,
        isOpen: true,
        minSalary: model.salaryMin,
        maxSalary: model.salaryMax,
        tests: [],
        tags: model.tags,
        users: [],
    });

    emit("changeJob");
    loading.value = false;
};
</script>

<template>
    <BaseModal v-model:is-opened="localIsOpened" :loading="loading">
        <template #title> {{ title }} </template>
        <template #content>
            <JobEditor
                v-model:title="form.title"
                v-model:description="form.description"
                v-model:salary-min="form.salaryMin"
                v-model:salary-max="form.salaryMax"
                v-model:tags="form.tags"
                v-model:type="form.type"
            />
            <div :class="classes.actions" class="actions">
                <NButton
                    type="primary"
                    :disabled="loading"
                    @click="isNil(job) ? addJob() : changeJob()"
                >
                    <span> Сохранить </span>
                </NButton>
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
