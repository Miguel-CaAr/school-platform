import { defineStore } from "pinia";
import { ref } from "vue";

export const useEnrollementsStore = defineStore("EnrollmentsStore", () => {
  //Estados
  const modalEnroll = ref(false);
  //Funciones
  function showModalEnroll(show = true) {
    if (show !== Boolean(show)) {
      console.warn(
        `showModalCourse: No se ingreso un argumento valido, se recibio un ${typeof show}, con valor ${show}`
      );
      show = true;
    }
    modalEnroll.value = show;
  }

  return {
    //Estados
    modalEnroll,
    //Funciones
    showModalEnroll,
  };
});
