<script setup>
import { ListCard } from "@/components";
import { IconRubble } from "@/shared";
</script>

<template>
    <ListCard has-close has-delete has-edit>
        <template #title> Python-разработчик </template>
        <template #content>
            <div :class="classes.content">
                <span>Middle</span>
                <span>Python</span>
                <span>Django</span>
            </div>
        </template>
        <template #footer>
            <div :class="classes.footer">
                <NButton type="info"> Откликнувшиеся кандидаты </NButton>
                <div :class="classes.salary">
                    <span>100000-100001</span><IconRubble :size="18" />
                </div>
            </div>
        </template>
    </ListCard>
</template>

<style lang="scss" module="classes">
.footer {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 10px;

    font-size: 16px;
    font-weight: 500;

    color: var(--c-primary);
}

.content {
    span:not(:last-child) {
        display: inline-block;

        margin-right: 5px;

        &::after {
            display: inline-block;

            margin-left: 5px;

            content: "•";
        }
    }
}

.salary {
    display: flex;

    align-items: center;

    svg {
        position: relative;
        top: 1px;
    }
}
</style>
