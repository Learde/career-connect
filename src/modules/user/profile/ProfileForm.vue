<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { component as CKEditor } from "@ckeditor/ckeditor5-vue";
import { onMounted, ref } from "vue";

import { IconRubble } from "@/shared";

import { useProfileStore } from "./profileStore";

const props = defineProps({
    user: Number,
});

const store = useProfileStore();

const form = ref({
    firstName: "",
    secondName: "",
    thirdName: "",
    description: "",
    expectedSalary: 0,
    tags: [],
    phone: "",
    email: "",
    hhLink: "",
});

const editorConfig = ref({
    toolbar: {
        items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
        ],
        shouldNotGroupWhenFull: true,
    },
    heading: {
        options: [
            {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
            },
            {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
            },
            {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
            },
        ],
    },
});

onMounted(async () => {
    await store.fetchProfile();
    form.value = {
        firstName: store.profile.firstName ?? "",
        secondName: store.profile.secondName ?? "",
        thirdName: store.profile.thirdName ?? "",
        description: store.profile.description ?? "",
        expectedSalary: store.profile.expectedSalary ?? 0,
        tags: store.profile.tags ?? [],
        phone: store.profile.phone ?? "",
        email: store.profile.email ?? "",
        hhLink: store.profile.hhLink ?? "",
    };
});

const save = () => {
    console.log(form.value);
    store.setProfile(form.value);
};

console.log(props);
</script>

<template>
    <NSpin :show="store.loading">
        <NForm :class="classes.main">
            <div :class="classes.forms">
                <NFormItem label="Фамилия" path="title" :class="classes.item">
                    <NInput
                        v-model:value="form.secondName"
                        placeholder="Введите фамилию"
                    />
                </NFormItem>
                <NFormItem label="Имя" path="title" :class="classes.item">
                    <NInput
                        v-model:value="form.firstName"
                        placeholder="Введите имя"
                    />
                </NFormItem>
                <NFormItem label="Отчество" path="title" :class="classes.item">
                    <NInput
                        v-model:value="form.thirdName"
                        placeholder="Введите отчество"
                    />
                </NFormItem>
            </div>
            <div :class="classes.forms">
                <NFormItem label="Email" path="title" :class="classes.item">
                    <NInput
                        v-model:value="form.email"
                        placeholder="Введите email"
                    />
                </NFormItem>
                <NFormItem label="Телефон" path="title" :class="classes.item">
                    <NInput
                        v-model:value="form.phone"
                        placeholder="Введите телефон"
                    />
                </NFormItem>
                <NFormItem
                    label="Ссылка на HeadHunter"
                    path="title"
                    :class="classes.item"
                >
                    <NInput
                        v-model:value="form.hhLink"
                        placeholder="Введите ссылку на hh"
                    />
                </NFormItem>
            </div>
            <NFormItem
                label="Ожидаемая зарплата"
                :class="[classes.salary, classes.item]"
            >
                <div>
                    <NInputNumber
                        v-model:value="form.expectedSalary"
                        :show-button="false"
                        :style="{ minWidth: '200px' }"
                        placeholder="Введите ожидаемую ЗП"
                    />
                    <IconRubble :size="18" />
                </div>
            </NFormItem>
            <NFormItem label="Навыки" :class="classes.item">
                <NDynamicTags v-model:value="form.tags" />
            </NFormItem>
            <div :class="classes.item">
                <span :class="classes.discTitle">О себе</span>
                <CKEditor
                    :editor="ClassicEditor"
                    :config="editorConfig"
                    v-model="form.description"
                />
            </div>
            <div :class="classes.actions" class="actions">
                <NButton type="primary" :disabled="loading" @click="save">
                    <span> Сохранить </span>
                </NButton>
            </div>
        </NForm>
    </NSpin>
</template>

<style module="classes" lang="scss">
.main {
    padding: 20px;

    input {
        width: 100%;
    }
}

.forms {
    display: flex;

    flex-wrap: wrap;
}

.item {
    padding: 0 10px;
}

.salary {
    display: flex;

    flex-direction: column;

    div {
        display: flex;

        align-items: center;

        span {
            margin-top: 3px;
            margin-left: 10px;
        }
    }
}

.discTitle {
    display: inline-block;

    margin: 0 0 8px 2px;
}

.actions {
    display: flex;

    justify-content: flex-end;

    width: 100%;

    margin-top: 20px;
}

@media (max-width: 500px) {
    .item {
        width: 100%;
    }
}
</style>
