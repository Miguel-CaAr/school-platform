<script setup>
import { NModal, NCard, NForm, NButton, NSpace, NSelect } from "naive-ui";
import { onMounted, ref, watch, computed } from "vue";
import { useEnrollementsStore } from "../store/EnrollementsStore";
import { useCoursesStore } from "../store/CoursesStore";
import { useStudentsStore } from "../../students/store/StudentsStore";
import useEnrollments from "../composables/useEnrollments";
const { getEnrollements } = useEnrollments;
//STORES
const enrollementsStore = useEnrollementsStore();
const coursesStore = useCoursesStore();
const studentsStore = useStudentsStore();
const allEnrollements = getEnrollements();
//FUNCIONES
const coursesOptions = computed(() => {
  return coursesStore.listCourses.map((_curso) => {
    return {
      value: _curso.id,
      label: _curso.name,
    };
  });
});

const studentsOptions = computed(() => {
  return studentsStore.listStudents.map((_alumno) => {
    return {
      value: _alumno.id,
      label: _alumno.name,
    };
  });
});

const createEnrollButton = () => {
  useEnrollments.addEnroll(enrollementsStore.enroll);
};
onMounted(() => {
  enrollementsStore.fillListEnrolled(allEnrollements);
});
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
              placeholder="Seleccione curso"
              :clearable="true"
              :filterable="true"
              :options="coursesOptions"
            />
            <NSelect
              v-model:value="enrollementsStore.enroll.student_id"
              placeholder="Seleccione alumno(s)"
              :disabled="enrollementsStore.enroll.course_id === null"
              :options="studentsOptions"
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
