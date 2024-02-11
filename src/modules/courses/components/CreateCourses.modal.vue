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
import useCourse from "../composables/useCourse";
//Store
const courseStore = useCoursesStore();
//Funciones
const createCourseButton = () => {
  useCourse.addCourse(courseStore.course);
  courseStore.pushListcourses(courseStore.course); //Para pushear la lista de cursos el nuevo curso
};
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
          <n-button @click="createCourseButton" type="primary">
            Crear
          </n-button>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
