import { defineStore } from "pinia";
import { ref } from "vue";

export const useEnrollementsStore = defineStore("EnrollmentsStore", () => {
  //Estados
  const enroll = ref({
    course_id: null,
    student_id: null,
  });
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
  function cleanEnrollState() {
    enroll.value = {
      course_id: null,
      student_id: null,
    };
  }

  return {
    //Estados
    modalEnroll,
    enroll,
    //Funciones
    showModalEnroll,
    cleanEnrollState,
  };
});
