<script setup>
import { IconClose, IconDelete, IconEdit } from "@/shared";

defineProps({
    hasEdit: { type: Boolean, default: false },
    hasClose: { type: Boolean, default: false },
    hasDelete: { type: Boolean, default: false },
});

defineEmits(["edit", "close", "delete", "click"]);
</script>

<template>
    <div :class="classes.card" @click="$emit('click')">
        <div :class="classes.header">
            <h4><slot name="title" /></h4>
            <div :class="classes.icons">
                <IconEdit
                    v-if="hasEdit"
                    :class="classes.icon"
                    @click.stop="$emit('edit')"
                />
                <IconClose
                    v-if="hasClose"
                    :class="classes.icon"
                    @click.stop="$emit('close')"
                />
                <IconDelete
                    v-if="hasDelete"
                    :class="classes.icon"
                    @click.stop="$emit('delete')"
                />
            </div>
        </div>
        <div :class="classes.content">
            <slot name="content" />
        </div>
        <div :class="classes.footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<style lang="scss" module="classes">
.card {
    width: 100%;
    min-height: 105px;
    padding: 12px 35px;

    background: var(--c-foreground);
    border-radius: 8px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 4%);
}

.header {
    display: flex;

    justify-content: space-between;

    margin-bottom: 10px;

    font-size: 15px;

    font-weight: 500;
}

.icons {
    display: flex;

    gap: 15px;
}

.icon {
    color: #7a7a7a;

    cursor: pointer;

    transition: all 0.2s;

    &:hover {
        color: var(--c-secondary);
    }
}

.content {
    margin-bottom: 20px;

    font-size: 15px;
}
</style>
