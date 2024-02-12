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
import { createDiscreteApi } from "naive-ui";
//Alerta del naive-ui
const { notification } = createDiscreteApi(["notification"], {
  notificationProviderProps: { max: 10, keepAliveOnHover: true },
});
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
    notification.create({
      title: "Correo invalido",
      content: "Ingrese un correo valido",
      type: "warning",
      duration: 5000,
    });
  }
};

const editStudentButton = () => {
  if (_status.value === "success") {
    useStudent.updateStudent(studentsStore.student);
  } else {
    notification.create({
      title: "Correo invalido",
      content: "Ingrese un correo valido",
      type: "warning",
      duration: 5000,
    });
  }
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
              maxlength="80"
              show-count
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
              maxlength="60"
              show-count
            ></NInput>
          </NFormItem>
          <NFormItem label="Contraseña del alumno">
            <NInput
              v-model:value="studentsStore.student.password"
              :disabled="studentsStore.disabledInputsModal"
              placeholder="Contraseña"
              maxlength="50"
              show-count
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
