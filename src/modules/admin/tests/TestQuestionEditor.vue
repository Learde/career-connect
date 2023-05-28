<script setup>
import { computed, ref, watch } from "vue";

import { IconDelete } from "@/shared";

const props = defineProps({
    title: String,
    hasMultipleAnswers: Boolean,
    hasDelete: Boolean,
    answers: Array,
});
const emit = defineEmits([
    "update:title",
    "update:hasMultipleAnswers",
    "update:answers",
    "delete",
]);

const questionTitle = computed({
    get() {
        return props.title;
    },
    set(v) {
        emit("update:title", v);
    },
});

const questionHasMultipleAnswers = computed({
    get() {
        return props.hasMultipleAnswers;
    },
    set(v) {
        emit("update:hasMultipleAnswers", v);
    },
});

const questionAnswers = computed({
    get() {
        return props.answers;
    },
    set(v) {
        emit("update:answers", v);
    },
});

// answers
const answerPattern = { title: "", isCorrect: false };
const answerId = ref(2);

const createAnswer = () => {
    const copyAnswer = JSON.parse(JSON.stringify(answerPattern));

    copyAnswer.id = answerId.value++;

    questionAnswers.value.push(copyAnswer);
};

const deleteAnswer = (answer) => {
    const ind = questionAnswers.value.findIndex((a) => a === answer);

    if (ind >= 0) {
        questionAnswers.value.splice(ind, 1);
    }
};

const clearRightAnswers = () => {
    if (!questionHasMultipleAnswers.value) {
        questionAnswers.value.forEach((x) => (x.isCorrect = false));
    }
};

watch(questionHasMultipleAnswers, () => {
    clearRightAnswers();
});

const handleSelectCorrect = (value, answer) => {
    clearRightAnswers();

    answer.isCorrect = value;
};
</script>

<template>
    <NForm>
        <div :class="classes.headingRow">
            <NFormItem label="Название вопроса" path="title">
                <NInput
                    v-model:value="questionTitle"
                    placeholder="Введите название"
                />
            </NFormItem>
            <NButton
                v-if="hasDelete"
                :class="classes.deleteButton"
                type="default"
                secondary
            >
                <IconDelete @click="$emit('delete')" />
            </NButton>
        </div>
        <NCheckbox
            :class="classes.checkbox"
            v-model:checked="questionHasMultipleAnswers"
        >
            Несколько верных ответов
        </NCheckbox>
        <div>
            <h5 :class="classes.heading">Ответы:</h5>
            <div
                v-for="answer in questionAnswers"
                :key="answer.id"
                :class="classes.answer"
            >
                <NFormItem label="Текст ответа" :class="classes.answerInput">
                    <NInput
                        v-model:value="answer.title"
                        placeholder="Введите текст"
                    />
                </NFormItem>
                <NCheckbox
                    :class="classes.rightCheckbox"
                    :checked="answer.isCorrect"
                    @update:checked="(v) => handleSelectCorrect(v, answer)"
                >
                    Верный
                </NCheckbox>
                <NButton
                    v-if="questionAnswers.length > 1"
                    :class="classes.deleteButton"
                    type="default"
                    secondary
                >
                    <IconDelete @click="deleteAnswer(answer)" />
                </NButton>
            </div>
            <div :class="classes.answerAction">
                <NButton @click="createAnswer" type="info">
                    Добавить ответ
                </NButton>
            </div>
        </div>
    </NForm>
</template>

<style lang="scss" module="classes">
.heading {
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 500;
}

.headingRow {
    display: flex;

    gap: 15px;

    & > div {
        width: 100%;
    }
}

.deleteButton {
    margin-top: 26px;
}

.checkbox {
    margin-bottom: 24px;
}

.rightCheckbox {
    display: flex;

    flex-direction: column-reverse;

    align-items: center;

    & > span {
        padding: 0 !important;
        margin-bottom: 8px;

        white-space: nowrap;
    }
}

.answerInput {
    width: 100%;
}

.answerAction {
    display: flex;

    justify-content: center;
}

.answer {
    display: flex;

    gap: 15px;

    align-items: flex-start;
}
</style>
