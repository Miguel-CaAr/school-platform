<script setup>
import { onMounted } from "vue";
import createCourse from "../../courses/composables/createCourse";
import { useCoursesStore } from "../../courses/store/CoursesStore";
import { NButton } from "naive-ui";
const courseStore = useCoursesStore();

const { getCourses } = createCourse;

const allCourses = getCourses();

onMounted(() => {
  courseStore.fillListCourses(allCourses);
});

const abrirModal = (course, esVer) => {
  if (esVer) {
    courseStore.fillCoursesData(course);
    courseStore.showModalCourses(true);
  }
};
</script>

<template>
  <div
    class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-0 border-0">
      <div class="flex flex-wrap items-center px-4 py-2">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-base text-gray-900 dark:text-gray-50"
          >
            Materias
          </h3>
        </div>
        <div
          class="relative w-full max-w-full flex-grow flex-1 text-right"
        >
          <button
            class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Ver todo
          </button>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Materia
              </th>
              <th
                class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Alumnos
              </th>
              <th
                class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Cupo
              </th>
              <th
                class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody v-for="course in allCourses" :key="course.id">
            <tr class="text-gray-700 dark:text-gray-100">
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                {{ course.name }}
              </th>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                {{ course.students.length }}
              </td>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <span class="mr-2">0 de 0</span>
                  <div class="relative w-full">
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: 0%"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <NButton @click="abrirModal(course, true)" type="success"
                  >Ver</NButton
                >
                <NButton @click="abrirModal(course, false)" type="info"
                  >Editar</NButton
                >
                <NButton @click="abrirModal(course)" type="error"
                  >Eliminar</NButton
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
