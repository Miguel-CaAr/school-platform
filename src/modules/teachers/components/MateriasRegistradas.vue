<script setup>
import { onMounted } from "vue";
import useCourse from "../../courses/composables/useCourse";
import useEnrollments from "../../courses/composables/useEnrollments";
import { useCoursesStore } from "../../courses/store/CoursesStore";
import { useEnrollementsStore } from "../../courses/store/EnrollementsStore";
import { NButton } from "naive-ui";
import { getNumberOfStudents } from "../../global/utils/utils"
//Stores
const enrollementsStore = useEnrollementsStore();
const courseStore = useCoursesStore();
//Composables
const { getCourses, deleteCourse } = useCourse;
const { getEnrollements, getEnrolledStudents } = useEnrollments
//Data
const allCourses = getCourses();
const allEnrollements = getEnrollements()
courseStore.fillListCourses(allCourses);
enrollementsStore.fillListEnrolled(allEnrollements)
//Functions
const openModal = (course, isSee) => {
  if (isSee) {
    courseStore.fillCoursesData(course);
    courseStore.disabledInputsModal = true;
    courseStore.buttonCreate = false;
    courseStore.buttonEdit = false;
    getEnrolledStudents(course)
    courseStore.showModalCourses(true);
  } else {
    //Entonces isEdit
    courseStore.fillCoursesData(course);
    courseStore.disabledInputsModal = false;
    courseStore.buttonCreate = false;
    courseStore.buttonEdit = true;
    courseStore.showModalCourses(true);
  }
};
</script>

<template>
  <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 w-full shadow-lg rounded">
    <div class="rounded-t mb-0 px-0 border-0">
      <div class="flex flex-wrap items-center px-4 py-2">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-gray-900">Materias</h3>
        </div>
        <div class="relative w-full max-w-full flex-grow flex-1 text-right">
          <button
            class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            Ver todo
          </button>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Materia
              </th>
              <th
                class="px-4 bg-gray-100 text-gray-500 ign-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Alumnos
              </th>
              <th
                class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody v-for="course in courseStore.listCourses" :key="course.id">
            <tr class="text-gray-700">
              <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {{ course.name }}
              </th>
              <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {{ getNumberOfStudents(course.id) }}
                <!-- {{ course.id }} -->
                <!-- {{ course.students.length }} -->
              </td>
              <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-1">
                <NButton @click="openModal(course, true)" strong secondary type="success">Ver</NButton>
                <NButton @click="openModal(course, false)" strong secondary type="info">Editar</NButton>
                <NButton @click="deleteCourse(course)" strong secondary type="error">Eliminar
                </NButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
