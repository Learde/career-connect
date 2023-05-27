<script setup>
import { computed, ref } from "vue";

import { BaseModal } from "@/components";
import { isNil } from "@/shared";

import TestQuestionEditor from "./TestQuestionEditor.vue";

const props = defineProps({
    isOpened: { type: Boolean, default: false },
    test: { type: Object, default: null },
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
    return isNil(props.test) ? "Создание теста" : "Редактирование теста";
});

// test logic
const questionId = ref(1);
const questionPattern = {
    id: 1,
    title: "",
    hasMultipleAnswers: false,
    answers: [{ title: "", isRight: false }],
};

const questions = ref([]);

const createQuestion = () => {
    const copyQuestion = JSON.parse(JSON.stringify(questionPattern));

    copyQuestion.id = questionId.value++;

    questions.value.push(copyQuestion);
};

// Create first question
createQuestion();
</script>

<template>
    <BaseModal v-model:is-opened="localIsOpened">
        <template #title> {{ title }} </template>
        <template #content>
            <TestQuestionEditor
                v-for="(question, index) in questions"
                :key="question.id"
                :number="index + 1"
                v-model:title="question.title"
                v-model:has-multiple-answers="question.hasMultipleAnswers"
                v-model:answers="question.answers"
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