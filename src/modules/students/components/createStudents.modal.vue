<script setup>
import {
  NInput,
  NModal,
  NCard,
  NForm,
  NFormItem,
  NButton,
} from "naive-ui";
import { useStudentsStore } from "../store/StudentsStore";
import useStudent from "../composables/useStudent";
//Store
const studentsStore = useStudentsStore();
//Funciones
const createStudentButton = () => {
  useStudent.addStudent(studentsStore.student);
  studentsStore.showModalStudents(false);
};
</script>

<template>
  <NModal
    v-model:show="studentsStore.modalStudent"
    :title="'Alumno'"
    :mask-closable="true"
    :preset="'card'"
    :style="{
      width: '50%',
    }"
    @after-leave="studentsStore.cleanStudentState"
  >
    <NCard>
      <NForm>
        <div>
          <NFormItem label="Nombre del alumno">
            <NInput
              v-model:value="studentsStore.student.name"
              :disabled="studentsStore.disabledInputsModal"
            ></NInput>
          </NFormItem>
          <NFormItem label="Correo del alumno">
            <NInput
              v-model:value="studentsStore.student.email"
              type="email"
              :disabled="studentsStore.disabledInputsModal"
            ></NInput>
          </NFormItem>
          <NFormItem label="Contraseña del alumno">
            <NInput
              v-model:value="studentsStore.student.password"
              :disabled="studentsStore.disabledInputsModal"
            ></NInput>
          </NFormItem>
          <n-button
            v-if="studentsStore.buttonCreate"
            @click="createStudentButton"
            type="primary"
          >
            Crear
          </n-button>
          <n-button v-if="studentsStore.buttonEdit" @click="" type="Info">
            Crear
          </n-button>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
