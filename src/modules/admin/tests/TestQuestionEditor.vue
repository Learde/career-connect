<script setup>
import { computed } from "vue";

const props = defineProps({
    title: String,
    number: Number,
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
</script>

<template>
    <h4 :class="classes.heading">Вопрос #{{ number }}</h4>
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
                v-for="(answer, index) in questionAnswers"
                :key="index"
                :class="classes.answer"
            >
                <NFormItem label="Текст ответа">
                    <NInput
                        v-model:value="answer.title"
                        placeholder="Введите текст"
                    />
                </NFormItem>
            </div>
        </div>
    </NForm>
</template>

<style module="classes">
.heading {
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 500;
}

.checkbox {
    margin-bottom: 24px;
}

.answer {
    padding-left: 30px;
}
</style>
