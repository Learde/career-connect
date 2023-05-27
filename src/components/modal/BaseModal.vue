<script setup>
import { computed } from "vue";

import { IconClose } from "@/shared";

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
    <NModal v-model:show="localIsOpened">
        <div :class="classes.modalContent">
            <div :class="classes.modalHeader">
                <IconClose :class="classes.closeIcon" />
            </div>
        </div>
    </NModal>
</template>

<style module="classes">
.modalContent {
    width: 100%;
    max-width: 600px;

    background: var(--c-foreground);
    border-radius: var(--border-radius);
}

.modalHeader {
    display: flex;

    align-items: center;
    justify-content: space-between;
}

.closeIcon {
    color: var(--c-gray);

    cursor: pointer;

    transition: var(--base-transition);

    &:hover {
        color: var(--c-secondary);
    }
}
</style>
