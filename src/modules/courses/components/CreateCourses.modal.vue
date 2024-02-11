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
  courseStore.showModalCourses(false);
};
</script>

<template>
  <NModal
    v-model:show="courseStore.modalCourse"
    :title="'Curso'"
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
          <NFormItem label="Nombre del curso">
            <NInput
              v-model:value="courseStore.course.name"
              :disabled="courseStore.disabledInputsModal"
            ></NInput>
          </NFormItem>
          <NFormItem label="Descripcion del curso">
            <NInput
              v-model:value="courseStore.course.description"
              type="textarea"
              :disabled="courseStore.disabledInputsModal"
            ></NInput>
          </NFormItem>
          <NFormItem label="Fecha de finalizacion del curso">
            <NDatePicker
              v-model:value="courseStore.course.finished"
              type="date"
              :disabled="courseStore.disabledInputsModal"
            ></NDatePicker>
          </NFormItem>
          <n-button
            v-if="courseStore.buttonCreate"
            @click="createCourseButton"
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
