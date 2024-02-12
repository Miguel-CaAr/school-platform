<script setup>
import { ref } from "vue";
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
//Estados
const _status = ref("");
//Validaciones regex
const onlyAllowLetters = (value) => /^[a-zA-Z\s]*$/.test(value);
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//Funciones
const createStudentButton = () => {
  if (_status.value === "success") {
    useStudent.addStudent(studentsStore.student);
  } else {
    console.log(
      _status.value,
      "Se ingreso un correo invalido, implementar alerta con naive-ui"
    );
  }
};

const editStudentButton = () => {
  useStudent.updateStudent(studentsStore.student);
};

const onlyAllowEmail = (value) => {
  if (!regexEmail.test(value)) {
    _status.value = "error"; //Email invalido
  } else {
    _status.value = "success"; //Email valido
  }
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
              :allow-input="onlyAllowLetters"
            ></NInput>
          </NFormItem>
          <NFormItem label="Correo del alumno">
            <NInput
              v-model:value="studentsStore.student.email"
              type="email"
              :disabled="studentsStore.disabledInputsModal"
              placeholder="ejemplo@dominio.com"
              :status="_status"
              @update:value="onlyAllowEmail"
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
