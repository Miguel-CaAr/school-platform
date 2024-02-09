<script setup>
import {
  NInput,
  NModal,
  NCard,
  NForm,
  NFormItem,
  NButton,
  NDatePicker,
} from "naive-ui";
import { useCoursesStore } from "../store/CoursesStore";
import createCourse from "../composables/createCourse";

//Store
const courseStore = useCoursesStore();
</script>

<template>
  <NModal
    v-model:show="courseStore.modalCourse"
    :title="'Crear curso'"
    :mask-closable="true"
    :preset="'card'"
    :style="{
      width: '50%',
    }"
    @after-leave="courseStore.cleanCoursesState"
  >
    <NCard>
      <NForm>
        <div>
          <NFormItem label="name">
            <NInput v-model:value="courseStore.course.name"></NInput>
          </NFormItem>
          <NFormItem label="description">
            <NInput
              v-model:value="courseStore.course.description"
              type="textarea"
            ></NInput>
          </NFormItem>
          <NFormItem label="finished">
            <NDatePicker
              v-model:value="courseStore.course.finished"
              type="date"
            ></NDatePicker>
          </NFormItem>
          <n-button
            @click="createCourse.addCourse(courseStore.course)"
            type="primary"
          >
            Crear
          </n-button>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
