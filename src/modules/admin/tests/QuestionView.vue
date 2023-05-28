<script setup>
import { useCssModule } from "vue";

defineProps({ question: Object, number: Number });

const classes = useCssModule("classes");
const getAnswerClasses = (answer) => {
    const answerClasses = [classes.answer];

    if (answer.isCorrect) {
        answerClasses.push(classes.rightAnswer);
    }

    return answerClasses;
};
</script>

<template>
    <div>
        <NDivider> Вопрос #{{ number }} </NDivider>
        <p :class="classes.name">{{ question.data }}</p>
        <div :class="classes.answers">
            <div
                v-for="answer in question.answers"
                :class="getAnswerClasses(answer)"
                :key="answer.id"
            >
                {{ answer.data }}
            </div>
        </div>
    </div>
</template>

<style module="classes">
.name {
    margin-bottom: 10px;
}

.answers {
    display: grid;

    grid-template-columns: 1fr;

    gap: 8px;

    width: 100%;
}

.answer {
    display: block;

    padding: 10px 16px;

    background-color: #eee;
    border-radius: var(--border-radius);
}

.rightAnswer {
    background-color: #bdecb6;
}
</style>
