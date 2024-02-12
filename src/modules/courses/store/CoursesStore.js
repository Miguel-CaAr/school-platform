import { defineStore } from "pinia";
import { ref } from "vue";

export const useCoursesStore = defineStore("CoursesStore", () => {
  //Estados
  const course = ref({
    id: null,
    name: null,
    description: null,
    finished: null,
    students: [],
  });

  const listCourses = ref([]); //La lista de cursos que se renderizara con un for in en MateriasRegistradas.vue
  const modalCourse = ref(false);
  const disabledInputsModal = ref(false);
  const buttonCreate = ref(false);
  const buttonEdit = ref(false);

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
      students: [],
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
   * Funcion para llenar el listado de materias que se renderizaran
   * @param {Array} _listado Listado de materias
   */
  function fillListCourses(_listado = []) {
    //todo: valdiar que sea un array, como la funcion de arriba
    listCourses.value = _listado;
  }
  /**
   * Funcion para pushear la lista de cursos con el nuevo curso
   * Es utilizada para evitar la llamada a la BD para añadir el ultimo curso agregado
   * @param {object} _course Objeto del nuevo curso
   */
  function pushListcourses(_course = {}) {
    if (_course !== Object(_course)) {
      console.warn(
        `pushListcourses: No se ingreso un argumento valido, se recibio un ${typeof _course}, con valor ${_course}`
      );
    }
    listCourses.value.push(_course);
  }

  return {
    //Estados
    course,
    modalCourse,
    listCourses,
    disabledInputsModal,
    buttonCreate,
    buttonEdit,
    //Funciones
    fillCoursesData,
    cleanCoursesState,
    showModalCourses,
    fillListCourses,
    pushListcourses,
  };
});
