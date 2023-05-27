<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    title: String,
    hasMultipleAnswers: Boolean,
    answers: Array,
});
const emit = defineEmits([
    "update:title",
    "update:hasMultipleAnswers",
    "update:answers",
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
</script>

<template>
    <NForm>
        <NFormItem label="Название вопроса" path="title">
            <NInput
                v-model:value="questionTitle"
                placeholder="Введите название"
            />
        </NFormItem>
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
                    v-model:checked="answer.isCorrect"
                >
                    Верный
                </NCheckbox>
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

.checkbox {
    margin-bottom: 24px;
}

.rightCheckbox {
    display: flex;

    flex-direction: column-reverse;

    align-items: center;

    & > span {
        padding: 0 !important;
        margin-bottom: 5px;

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

    gap: 30px;

    align-items: flex-start;
}
</style>
