import { defineStore } from "pinia";
import { ref } from "vue";

export const useTeachersStore = defineStore("TeachersStore", () => {
  //Datos reactivos
  const allTeachers = ref([]);
  //Metodos
  const updateTeachersStore = (teachers) => {
    allTeachers.value = teachers;
  };
  //Metodos computados
  //Retorno
  return {
    allTeachers,
    updateTeachersStore,
  };
});
