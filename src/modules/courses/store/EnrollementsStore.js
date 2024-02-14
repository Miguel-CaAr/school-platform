import { defineStore } from "pinia";
import { ref } from "vue";

export const useEnrollementsStore = defineStore("EnrollmentsStore", () => {
  //Estados
  const modalEnroll = ref(false);
  const enroll = ref({
    course_id: null,
    student_id: null,
  });
  const listEnrolled = ref([]);
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
  function fillListEnrolled(_listado = []) {
    //todo: valdiar que sea un array, como la funcion de arriba
    listEnrolled.value = _listado;
  }

  function pushListEnrollements(_Enroll = {}) {
    if (_Enroll !== Object(_Enroll)) {
      console.warn(
        `pushListEnrollements: No se ingreso un argumento valido, se recibio un ${typeof _Enroll}, con valor ${_Enroll}`
      );
    }
    listEnrolled.value.push(_Enroll);
  }

  function pushStudentInListEnrollements(index, student_id) {
    listEnrolled.value[index].student_id.push(student_id);
  }

  return {
    //Estados
    modalEnroll,
    enroll,
    listEnrolled,
    //Funciones
    showModalEnroll,
    cleanEnrollState,
    fillListEnrolled,
    pushListEnrollements,
    pushStudentInListEnrollements,
  };
});
