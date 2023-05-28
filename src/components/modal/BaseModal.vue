<script setup>
import { computed } from "vue";

import { IconClose } from "@/shared";

const props = defineProps({
    isOpened: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
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
    <NModal v-model:show="localIsOpened" :on-after-leave="$emit('closed')">
        <div :class="classes.modalContent">
            <NSpin :show="loading">
                <div :class="classes.modalHeader">
                    <h2><slot name="title" /></h2>
                    <IconClose
                        :class="classes.closeIcon"
                        @click="localIsOpened = false"
                    />
                </div>
                <div>
                    <slot name="content" />
                </div>
            </NSpin>
        </div>
    </NModal>
</template>

<style lang="scss" module="classes">
.modalContent {
    width: 100%;
    max-width: 800px;
    padding: 10px 20px;
    margin: 20px auto;

    background: var(--c-foreground);
    border-radius: var(--border-radius);
}

.modalHeader {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    h2 {
        font-size: 16px;
        font-weight: 500;
    }
}

.closeIcon {
    margin-left: auto;

    color: var(--c-gray);

    cursor: pointer;

    transition: var(--base-transition);

    &:hover {
        color: var(--c-secondary);
    }
}
</style>
