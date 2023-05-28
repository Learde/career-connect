<script setup>
import { computed, ref, watch } from "vue";

import { BaseModal } from "@/components";
import { isNil, createTest } from "@/shared";

import TestQuestionEditor from "./TestQuestionEditor.vue";

const props = defineProps({
    isOpened: { type: Boolean, default: false },
    test: { type: Object, default: null },
});

// v-model
const emit = defineEmits(["update:isOpened", "save", "closed"]);

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
    data: "",
    hasMultipleAnswers: false,
    answers: [{ id: 1, data: "", isCorrect: false }],
};

const questions = ref([]);
const testTitle = ref("");

const createQuestion = () => {
    const copyQuestion = JSON.parse(JSON.stringify(questionPattern));

    copyQuestion.id = questionId.value++;

    questions.value.push(copyQuestion);
};

const deleteQuestion = (question) => {
    const ind = questions.value.findIndex((q) => q === question);

    if (ind >= 0) {
        questions.value.splice(ind, 1);
    }
};

watch(localIsOpened, () => {
    questions.value = [];
    testTitle.value = "";

    if (props.test === null) {
        // Create first question
        createQuestion();
    } else {
        questions.value = props.test.questions;
        testTitle.value = props.test.name;
    }
});

// api
const isLoading = ref(false);
const saveTest = async () => {
    const test = {
        name: testTitle.value,
        questions: questions.value,
    };

    isLoading.value = true;

    if (props.test === null) await createTest(test);

    isLoading.value = false;
    localIsOpened.value = false;

    emit("save");
};
</script>

<template>
    <BaseModal
        v-model:is-opened="localIsOpened"
        :loading="isLoading"
        @closed="$emit('closed')"
    >
        <template #title> {{ title }} </template>
        <template #content>
            <NFormItem label="Название теста">
                <NInput
                    v-model:value="testTitle"
                    placeholder="Введите название"
                />
            </NFormItem>

            <template v-for="(question, index) in questions" :key="question.id">
                <NDivider> Вопрос #{{ index + 1 }} </NDivider>
                <TestQuestionEditor
                    v-model:title="question.data"
                    v-model:has-multiple-answers="question.hasMultipleAnswers"
                    v-model:answers="question.answers"
                    :has-delete="questions.length > 1"
                    @delete="deleteQuestion(question)"
                />
            </template>

            <div :class="classes.questionAction">
                <NButton type="primary" @click="createQuestion">
                    Добавить вопрос
                </NButton>
            </div>

            <div :class="classes.actions" @click="saveTest">
                <NButton type="primary">Сохранить</NButton>
            </div>
        </template>
    </BaseModal>
</template>

<style module="classes">
.questionAction {
    display: flex;

    justify-content: center;

    margin-top: 30px;
}

.actions {
    display: flex;

    justify-content: flex-end;

    margin-top: 10px;
}
</style>
