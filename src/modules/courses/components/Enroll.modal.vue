<script setup>
import { NModal, NCard, NForm, NButton, NSpace, NSelect } from "naive-ui";
import { ref, watch } from "vue";
import { useEnrollementsStore } from "../store/EnrollementsStore";
import { useCoursesStore } from "../store/CoursesStore";
import { useStudentsStore } from "../../students/store/StudentsStore";
//STORES
const enrollementsStore = useEnrollementsStore();
const coursesStore = useCoursesStore();
const studentsStore = useStudentsStore();
//ESTADOS
const student = ref(null);
const course = ref(null);
const coursesSelect = ref([]);
const studentsSelect = ref([]);
//FUNCIONES
const getSelectOption = () => {
  coursesSelect.value = Object.keys(coursesStore.listCourses).map(
    (key) => ({
      label: coursesStore.listCourses[key].name,
      value: coursesStore.listCourses[key].name,
      // disabled: true,
    })
  );
  studentsSelect.value = Object.keys(studentsStore.listStudents).map(
    (key) => ({
      label: studentsStore.listStudents[key].name,
      value: studentsStore.listStudents[key].name,
      // disabled: true,
    })
  );
};
watch([coursesStore.listCourses, studentsStore.listStudents], () => {
  getSelectOption();
});
getSelectOption();
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
          <NSpace vertical>
            <NSelect v-model:value="course" :options="coursesSelect" />
            <NSelect
              v-model:value="student"
              :disabled="course === null"
              :options="studentsSelect"
              :multiple="true"
            />
          </NSpace>
          <NButton class="mt-4" type="success"
            >Realizar inscripcion
          </NButton>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
