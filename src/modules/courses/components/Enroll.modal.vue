<script setup>
import { NModal, NCard, NForm, NButton, NSpace, NSelect } from "naive-ui";
import { ref } from "vue";
import { useEnrollementsStore } from "../store/EnrollementsStore";
import useCourse from "../composables/useCourse";
import useStudent from "../../students/composables/useStudent";
const enrollementsStore = useEnrollementsStore();
const allCourses = useCourse.getCourses();
const allStudents = useStudent.getStudents();
//ESTADOS
const student = ref(null);
const course = ref(null);
// Object.keys(allCourses).map((key) => console.log(allCourses[key]));
const coursesSelect = Object.keys(allCourses).map((key) => ({
  label: allCourses[key].name,
  value: allCourses[key].name,
  // disabled: true,
}));

const studentsSelect = Object.keys(allStudents).map((key) => ({
  label: allStudents[key].name,
  value: allStudents[key].name,
  // disabled: true,
}));
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
            <n-select v-model:value="course" :options="coursesSelect" />
            <n-select
              v-model:value="student"
              :disabled="course === null"
              :options="studentsSelect"
            />
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
