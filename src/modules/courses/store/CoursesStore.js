import { defineStore } from "pinia";
import { ref } from "vue";
import useCreateCourse from "../composables/createCourse.js";

export const useCoursesStore = defineStore("CoursesStore", () => {
  //Estados
  const course = ref({
    id: null,
    name: null,
    description: null,
    finished: null,
    students: [],
  });

  const listCourses = ref([]);

  const modalCourse = ref(false);
  //Funciones
  function fillCoursesData(_course) {
    course.value = {
      id: _course.id,
      name: _course.name,
      description: _course.description,
      finished: _course.finished,
      students: _course.students,
    };
  }

  function cleanCoursesState() {
    course.value = {
      id: null,
      name: null,
      description: null,
      finished: null,
      students: null,
    };
  }

  function showModalCourses(show = true) {
    if (show !== Boolean(show)) {
      console.warn(
        `showModalCourse: No se ingreso un argumento valido, se recibio un ${typeof show}, con valor ${show}`
      );
      show = true;
    }
    modalCourse.value = show;
  }
  /**
   * Funcion para llenar el listado de materias
   * @param {Array} _listado Listado de materias
   */
  function fillListCourses(_listado = []) {
    //todo: valdiar que sea un array, como la funcion de arriba
    listCourses.value = _listado;
  }

  return {
    //Estados
    course,
    modalCourse,
    listCourses,
    //Funciones
    fillCoursesData,
    cleanCoursesState,
    showModalCourses,
    fillListCourses,
  };
});
