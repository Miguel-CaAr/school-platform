<script setup>
import {
  NInput,
  NModal,
  NCard,
  NForm,
  NFormItem,
  NButton,
  NDatePicker,
  NTable,
} from "naive-ui";
import { useCoursesStore } from "../store/CoursesStore";
import { useEnrollementsStore } from "../store/EnrollementsStore";
import useCourse from "../composables/useCourse";
//Store
const courseStore = useCoursesStore();
//Funciones
const createCourseButton = () => {
  useCourse.addCourse(courseStore.course);
};

const editCourseButton = () => {
  useCourse.updateCourse(courseStore.course);
};

//Validaciones regex
const onlyAllowLetters = (value) => /^[a-zA-Z\s]*$/.test(value);
</script>

<template>
  <NModal v-model:show="courseStore.modalCourse" :title="'Curso'" :mask-closable="true" :preset="'card'" :style="{
    width: '50%',
  }" @after-leave="courseStore.cleanCoursesState">
    <NCard>
      <NForm>
        <div>
          <NFormItem label="Nombre del curso">
            <NInput v-model:value="courseStore.course.name" :disabled="courseStore.disabledInputsModal"
              placeholder="Nombre" :allow-input="onlyAllowLetters" maxlength="50" show-count></NInput>
          </NFormItem>
          <NFormItem label="Descripcion del curso">
            <NInput v-model:value="courseStore.course.description" type="textarea"
              :disabled="courseStore.disabledInputsModal" placeholder="Descripcion" maxlength="270" show-count></NInput>
          </NFormItem>
          <NFormItem label="Fecha de finalizacion del curso">
            <NDatePicker v-model:value="courseStore.course.finished" type="date"
              :disabled="courseStore.disabledInputsModal" placeholder="AAAA/MM/DD"></NDatePicker>
          </NFormItem>
          <n-button v-if="courseStore.buttonCreate" @click="createCourseButton" type="success">
            Crear
          </n-button>
          <n-button v-if="courseStore.buttonEdit" @click="editCourseButton" type="info">
            Realizar edicion
          </n-button>
        </div>
      </NForm>
      <NTable v-if="!courseStore.buttonCreate && !courseStore.buttonEdit" :bordered="false" :single-line="false">
        <thead>
          <tr class="text-center">
            <th colspan="3">
              Alumnos inscritos en {{ courseStore.course.name }}
            </th>
          </tr>
          <tr>
            <th>Nombre</th>
            <th>Calificacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody v-if="useEnrollementsStore.listStudentsEnrolled.length > 0">
          <tr v-for="student in useEnrollementsStore.listStudentsEnrolled" :key="student.id">
            <td>{{ student }}</td>
            <td>grade</td>
            <td>Options</td>
          </tr>
        </tbody>
        <tbody v-if="useEnrollementsStore.listStudentsEnrolled.length < 1">
          <tr class="text-center">
            <td colspan="3">No hay alumnos inscritos</td>
          </tr>
        </tbody>
      </NTable>
    </NCard>
  </NModal>
</template>

<style scoped></style>
