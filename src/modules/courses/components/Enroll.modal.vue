<script setup>
import { NModal, NCard, NForm, NButton, NSpace, NSelect } from "naive-ui";
import { ref, watch } from "vue";
import { useEnrollementsStore } from "../store/EnrollementsStore";
import { useCoursesStore } from "../store/CoursesStore";
import { useStudentsStore } from "../../students/store/StudentsStore";
import useEnrollments from "../composables/useEnrollments";
//STORES
const enrollementsStore = useEnrollementsStore();
const coursesStore = useCoursesStore();
const studentsStore = useStudentsStore();
//ESTADOS
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
      value: studentsStore.listStudents[key].email,
      // disabled: true,
    })
  );
};
watch([coursesStore.listCourses, studentsStore.listStudents], () => {
  getSelectOption();
});
getSelectOption();

const createEnrollButton = () => {
  useEnrollments.addEnroll(enrollementsStore.enroll);
};
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
    @after-leave="enrollementsStore.cleanEnrollState"
  >
    <NCard>
      <NForm>
        <div>
          <NSpace vertical>
            <NSelect
              v-model:value="enrollementsStore.enroll.course_id"
              :options="coursesSelect"
            />
            <NSelect
              v-model:value="enrollementsStore.enroll.student_id"
              :disabled="enrollementsStore.enroll.course_id === null"
              :options="studentsSelect"
              :multiple="true"
            />
          </NSpace>
          <NButton
            :disabled="enrollementsStore.enroll.student_id === null"
            class="mt-4"
            type="success"
            @click="createEnrollButton"
            >Realizar inscripcion
          </NButton>
        </div>
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
