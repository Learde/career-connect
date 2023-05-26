<script setup>
import { IconEdit, IconClose, IconDelete } from "@/shared";
</script>

<template>
    <div :class="classes.main">
        <div :class="classes.header">
            <span>Python-разработчик</span>
            <div :class="classes.icons">
                <IconEdit />
                <IconClose />
                <IconDelete />
            </div>
        </div>
        <div :calss="classes.tags">
            <span>Middle</span>
            <span>Python</span>
            <span>Django</span>
        </div>
        <div :class="classes.footer">
            <n-button text-color="#000" color="#fff">
                Откликнувшиеся кандидаты
            </n-button>
            <div>
                <span>100000-100001 Р</span>
            </div>
        </div>
    </div>
</template>

<style module="classes" lang="scss">
.main {
    width: 100%;
    min-height: 105px;
    padding: 12px 35px;

    background: #ff4b5f1a;
    border-radius: 8px;
}

.header {
    display: flex;

    justify-content: space-between;

    font-size: 15px;

    font-weight: 500;

    .icons {
        display: flex;

        gap: 15px;
    }
}

.tags {
    margin-top: 5px;

    font-size: 15px;
}

.footer {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 10px;

    font-size: 16px;

    font-weight: 700;

    color: #ff4b5f;

    button {
        padding: 6px 20px;

        font-size: 16px;
        font-style: normal;
        font-weight: 400;

        cursor: pointer;

        border: none;
        border-radius: 5px;
    }
}
</style>
