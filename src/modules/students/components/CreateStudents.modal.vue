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
};

const editStudentButton = () => {
  useStudent.updateStudent(studentsStore.student);
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
              placeholder="Nombre"
            ></NInput>
          </NFormItem>
          <NFormItem label="Correo del alumno">
            <NInput
              v-model:value="studentsStore.student.email"
              type="email"
              :disabled="studentsStore.disabledInputsModal"
              placeholder="ejemplo@dominio.com"
            ></NInput>
          </NFormItem>
          <NFormItem label="Contraseña del alumno">
            <NInput
              v-model:value="studentsStore.student.password"
              :disabled="studentsStore.disabledInputsModal"
              placeholder="Contraseña"
            ></NInput>
          </NFormItem>
          <n-button
            v-if="studentsStore.buttonCreate"
            @click="createStudentButton"
            type="primary"
          >
            Crear
          </n-button>
          <n-button
            v-if="studentsStore.buttonEdit"
            @click="editStudentButton"
            type="Info"
          >
            Realizar edicion
          </n-button>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
