<script setup>
import {
  NInput,
  NModal,
  NCard,
  NForm,
  NButton,
  NSpace,
  NSelect,
} from "naive-ui";
//Store
//Funciones
import { ref } from "vue";
import { useEnrollementsStore } from "../store/EnrollementsStore";
const enrollementsStore = useEnrollementsStore();

const value = ref(null);
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: "song0",
    disabled: true,
  },
  {
    label: "Drive My Car",
    value: "song1",
  },
];
</script>

<template>
  <NModal
    v-model:show="enrollementsStore.modalEnroll"
    :title="'Inscribir alumno'"
    :mask-closable="true"
    :preset="'card'"
    :style="{
      width: '40%',
    }"
  >
    <NCard>
      <NForm>
        <div>
          <n-space vertical>
            <n-select v-model:value="value" :options="options" />
            <n-select v-model:value="value" disabled :options="options" />
          </n-space>
          <n-button class="mt-4" type="success"
            >Realizar inscripcion
          </n-button>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
