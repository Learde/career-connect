<script setup>
import { computed } from "vue";

import { BaseModal } from "@/components";

const props = defineProps({ isOpened: { type: Boolean, default: false } });

const emit = defineEmits(["update:isOpened"]);

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
    <BaseModal v-model:is-opened="localIsOpened">
        <div>123</div>
    </BaseModal>
</template>

<style scoped></style>
