<script setup>
import { computed } from "vue";

import { BaseModal } from "@/components";

import QuestionView from "./QuestionView.vue";

const props = defineProps({
    test: Object,
    isOpened: { type: Boolean, default: false },
});

const emit = defineEmits(["update:isOpened", "closed"]);

const localIsOpened = computed({
    get() {
        return props.isOpened;
    },
    set(v) {
        emit("update:isOpened", v);
    },
});
</script>

<template>
    <BaseModal v-model:is-opened="localIsOpened" @closed="$emit('closed')">
        <template #title>
            {{ test?.name }}
        </template>
        <template #content>
            <QuestionView
                v-for="(question, index) in test?.questions"
                :key="question.id"
                :question="question"
                :number="index + 1"
            />
        </template>
    </BaseModal>
</template>

<style scoped></style>
