<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { component as CKEditor } from "@ckeditor/ckeditor5-vue";
import { computed, ref } from "vue";

const props = defineProps({
    title: String,
    description: String,
    salaryMin: Number,
    salaryMax: Number,
    salary: Boolean,
    tags: Array,
    type: String,
});
const emit = defineEmits([
    "update:title",
    "update:description",
    "update:salaryMin",
    "update:salaryMax",
    "update:tags",
    "update:type",
]);

const jobTitle = computed({
    get() {
        return props.title;
    },
    set(v) {
        emit("update:title", v);
    },
});

const jobDescription = computed({
    get() {
        return props.description;
    },
    set(v) {
        emit("update:description", v);
    },
});

const jobSalaryMin = computed({
    get() {
        return props.salaryMin;
    },
    set(v) {
        emit("update:salaryMin", v);
    },
});

const jobSalaryMax = computed({
    get() {
        return props.salaryMax;
    },
    set(v) {
        emit("update:salaryMax", v);
    },
});

const jobTags = computed({
    get() {
        return props.tags;
    },
    set(v) {
        emit("update:tags", v);
    },
});

const jobType = computed({
    get() {
        return props.type;
    },
    set(v) {
        emit("update:type", v);
    },
});

const editorConfig = ref({
    toolbar: {
        items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
        ],
        shouldNotGroupWhenFull: true,
    },
    heading: {
        options: [
            {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
            },
            {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
            },
            {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
            },
        ],
    },
});
</script>

<template>
    <NForm>
        <NFormItem label="Заголовок" path="title">
            <NInput v-model:value="jobTitle" placeholder="Введите название" />
        </NFormItem>
        <div :class="classes.radios">
            <NRadio
                :checked="jobType === 'VACANCY'"
                value="VACANCY"
                name="Вакансия"
                @change="(val) => (jobType = val)"
            >
                Вакансия
            </NRadio>
            <NRadio
                :checked="jobType === 'Be Here Now'"
                value="INTERNSHIP"
                name="Стажировка"
                @change="(val) => (jobType = val)"
            >
                Стажировка
            </NRadio>
        </div>
        <NFormItem label="Зарплата">
            <div :class="classes.salary">
                <NInputNumber
                    v-model:value="jobSalaryMin"
                    :show-button="false"
                    :style="{ minWidth: '200px' }"
                    placeholder="Введите минимальную ЗП"
                />
                <span>-</span>
                <NInputNumber
                    v-model:value="jobSalaryMax"
                    :show-button="false"
                    :style="{ minWidth: '200px' }"
                    placeholder="Введите максимальную ЗП"
                />
            </div>
        </NFormItem>
        <NFormItem label="Требования">
            <NDynamicTags v-model:value="jobTags" />
        </NFormItem>
        <span :class="classes.discTitle">Описание</span>
        <CKEditor
            :editor="ClassicEditor"
            :config="editorConfig"
            v-model="jobDescription"
        />
    </NForm>
</template>

<style module="classes" lang="scss">
.salary {
    display: flex;

    gap: 20px;

    align-items: center;

    width: 100%;
}

.discTitle {
    display: inline-block;

    margin: 0 0 8px 2px;
}

.radios {
    margin: 0 0 15px;
}
</style>
