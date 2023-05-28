<script setup>
import { computed } from "vue";

import { ListCard } from "@/components";
import { IconRubble } from "@/shared";

const props = defineProps({
    job: Object,
});

const emit = defineEmits(["change", "delete", "close"]);

const salaryText = computed(() => {
    const job = props.job;

    if (job.maxSalary && job.minSalary) {
        return `${job.minSalary} - ${job.maxSalary}`;
    }

    if (job.minSalary && !job.maxSalary) {
        return `От ${job.minSalary}`;
    }

    if (job.maxSalary && !job.minSalary) {
        return `До ${job.maxSalary}`;
    }

    return "";
});

const changeJob = () => {
    emit("change", props.job);
};

const closeJob = () => {
    emit("close", props.job.id);
};

const deleteJob = () => {
    emit("delete", props.job.id);
};
</script>

<template>
    <ListCard
        has-close
        has-delete
        has-edit
        @edit="changeJob"
        @close="closeJob"
        @delete="deleteJob"
    >
        <template #title> {{ job.name }} </template>
        <template #content>
            <div :class="classes.content">
                <span v-for="(tag, idx) in job.tags" :key="idx"
                    >{{ tag }}
                </span>
            </div>
        </template>
        <template #footer>
            <div :class="classes.footer">
                <NButton type="info"> Откликнувшиеся кандидаты </NButton>
                <div
                    v-if="job.maxSalary || job.minSalary"
                    :class="classes.salary"
                >
                    <span>{{ salaryText }} </span>

                    <IconRubble :size="18" />
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

@media (max-width: 900px) {
    .footer {
        button {
            width: 50%;

            span {
                white-space: normal;
            }
        }
    }
}
</style>
