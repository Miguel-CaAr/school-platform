<script setup>
import { onMounted } from "vue";
import useStudent from "../../students/composables/useStudent";
import { useStudentsStore } from "../../students/store/StudentsStore";
import { NButton } from "naive-ui";

const studentStore = useStudentsStore();
const { getStudents, deleteStudent } = useStudent;
const allStudents = getStudents();

onMounted(() => {
  studentStore.fillListStudents(allStudents);
});

const openModal = (students, isSee) => {
  // if (isSee) {
  //   studentStore.fillStudentsData(students);
  //   studentStore.disabledInputsModal = true;
  //   studentStore.buttonCreate = false;
  //   studentStore.showModalStudents(true);
  // }
};
</script>

<template>
  <div
    class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 w-full shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-0 border-0">
      <div class="flex flex-wrap items-center px-4 py-2">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-gray-900">Alumnos</h3>
        </div>
        <div
          class="relative w-full max-w-full flex-grow flex-1 text-right"
        >
          <button
            class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Nombre
              </th>
              <th
                class="px-4 bg-gray-100 text-gray-500 ign-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Correo
              </th>
              <th
                class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                ????
              </th>
            </tr>
          </thead>
          <tbody
            v-for="student in studentStore.listStudents"
            :key="student.id"
          >
            <tr class="text-gray-700">
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                {{ student.name }}
              </th>
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                {{ student.email }}
              </th>
              <!-- BOTONES DE OPCIONES -->
              <!-- <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-1"
              >
                <NButton
                  @click="openModal()"
                  strong
                  secondary
                  type="success"
                  >Ver</NButton
                >
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
