<script setup>
import { GlowingIcon } from "@/components";
import { IconBookmarkTabs, IconBriefcase } from "@/shared";

const options1 = [
    {
        label: "Как я могу разместить резюме?",
        key: "1",
        children: [
            {
                label: "Вам необходимо зарегестрироваться на платформе, указать данные о себе, своих навыкиах и достижениях. Затем пройти тестирование и дождаться ответа на ваш отклик.",
                key: "1",
            },
        ],
    },
];

const options2 = [
    {
        label: "Как я могу разместить резюме?",
        key: "1",
        children: [
            {
                label: "Мы предоставляем возможность проведения проверочных тестов для кандидатов прямо на платформе.  Результаты тестирования помогают нам более точно оценить навыки и компетенции.",
                key: "1",
            },
        ],
    },
];
</script>

<template>
    <main :class="classes.main">
        <div :class="classes.sloganBlock">
            <div :class="classes.iconBlock">
                <GlowingIcon
                    :class="[classes.mainIcon, classes.mainIconCase]"
                    background-color="rgb(125, 78, 89)"
                    rotate-z="12deg"
                >
                    <IconBriefcase />
                </GlowingIcon>
                <GlowingIcon
                    :class="[classes.mainIcon, classes.mainIconMarkTabs]"
                    background-color="rgb(223, 67, 119)"
                    rotate-z="-40deg"
                >
                    <IconBookmarkTabs />
                </GlowingIcon>
            </div>
            <span :class="classes.slogan">
                Ваша связь с
                <span :style="{ color: '#FF4B5F', margin: '0 5px' }"
                    >успешной</span
                >
                карьерой
            </span>
        </div>
        <span :class="classes.mainText">
            Совкомбанк
            <span :style="{ color: '#FF4B5F', margin: '0 3px' }">
                CareerConnect
            </span>
            - надежный партнер в поиске и отборе талантливых сотрудников.
        </span>
        <span :class="classes.mainText">
            Наша уникальная платформа связывает HR-менеджеров с
            высококвалифицированными кандидатами, чтобы обеспечить успешное
            развитие компании.
        </span>

        <NMenu
            :class="classes.accordion"
            class="accordion"
            :options="options1"
            accordion
            :value="null"
        />

        <NMenu
            :class="classes.accordion"
            class="accordion"
            :options="options2"
            accordion
            :value="null"
        />
    </main>
</template>

<style module="classes" lang="scss">
.main {
    display: flex;

    flex-direction: column;

    align-items: center;

    min-height: calc(100vh - var(--header-height));

    padding: 20px 0;
}

.sloganBlock {
    display: flex;

    align-items: center;
    justify-content: center;
}

.slogan {
    font-size: 24px;
    font-weight: 500px;
}

.iconBlock {
    position: relative;

    width: 200px;

    height: 250px;
}

.mainIcon {
    position: absolute;

    display: flex;
}

.mainIconCase {
    top: 40px;
    left: 80px;
}

.mainIconMarkTabs {
    top: 115px;
    left: 25px;
}

.mainText {
    display: inline-block;

    width: 50%;

    margin-top: 5px;
    margin-bottom: 10px;

    font-size: 20px;
}

.accordion {
    width: 600px;
    margin: 10px 0;
}

@media (max-width: 730px) {
    .sloganBlock {
        display: flex;

        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    .slogan {
        font-size: 20px;
        font-weight: 500px;
    }

    .mainText {
        display: inline-block;

        width: 80%;

        margin-top: 5px;

        margin-top: 25px;

        font-size: 18px;
    }

    .accordion {
        width: 400px;
    }
}
</style>

<style scoped>
/* stylelint-disable selector-class-pattern */
:global(.accordion .n-submenu-children .n-menu-item-content::before) {
    cursor: default !important;

    background-color: #fff !important;
}

:global(.accordion .n-submenu-children .n-menu-item-content) {
    padding-left: 34px !important;
}

:global(.accordion .n-submenu-children .n-menu-item) {
    height: 100px;
}

:global(.accordion .n-menu-item-content::before) {
    background-color: #ff4b5f0d;
}

:global(
        .accordion
            .n-menu-item-content:not(
                .n-menu-item-content--disabled
            ):hover::before
    ) {
    background-color: #ff052220;
}

:global(.accordion .n-submenu-children) {
    overflow: unset !important;
}

@media (max-width: 730px) {
    :global(
            .accordion
                .n-submenu-children
                .n-menu-item-content
                .n-menu-item-content-header
        ) {
        overflow: inherit !important;

        white-space: normal !important;
    }
}

@media (min-width: 730px) {
    :global(
            .accordion
                .n-submenu-children
                .n-menu-item-content
                .n-menu-item-content-header
        ) {
        overflow: unset;

        white-space: normal;
    }
}

/* stylelint-enable selector-class-pattern */
</style>
