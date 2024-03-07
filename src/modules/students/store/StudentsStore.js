import { defineStore } from "pinia";
import { ref } from "vue";

export const useStudentsStore = defineStore("StudentsStore", () => {
  //Estados
  const student = ref({
    id: null,
    name: null,
    email: null,
    password: null,
    enrolledCourses: [],
  });

  const listStudents = ref([]); //La lista de alumnos que se renderizara con un for in en AlumnosRegistrados.vue
  const modalStudent = ref(false);
  const disabledInputsModal = ref(false);
  const buttonCreate = ref(false);
  const buttonEdit = ref(false);

  //Funciones
  function fillStudentsData(_student) {
    student.value = {
      id: _student.id,
      name: _student.name,
      email: _student.email,
      password: _student.password,
      enrolledCourses: null,
    };
  }

  function cleanStudentState() {
    student.value = {
      id: null,
      name: null,
      email: null,
      password: null,
      enrolledCourses: null
    };
  }

  function showModalStudents(show = true) {
    if (show !== Boolean(show)) {
      console.warn(
        `showModalCourse: No se ingreso un argumento valido, se recibio un ${typeof show}, con valor ${show}`
      );
      show = true;
    }
    modalStudent.value = show;
  }
  /**
   * Funcion para llenar el listado de alumnos que se renderizaran
   * @param {Array} _listado Listado de alumnos
   */
  function fillListStudents(_listado = []) {
    //todo: valdiar que sea un array, como la funcion de arriba
    listStudents.value = _listado;
  }
  /**
   * Funcion para pushear la lista de alumnos con el nuevo alumnos
   * Es utilizada para evitar la llamada a la BD para añadir el ultimo alumno agregado
   * @param {object} _student Objeto del nuevo curso
   */
  function pushListStudents(_student = {}) {
    if (_student !== Object(_student)) {
      console.warn(
        `pushListcourses: No se ingreso un argumento valido, se recibio un ${typeof _student}, con valor ${_student}`
      );
    }
    listStudents.value.push(_student);
  }

  return {
    //Estados
    student,
    modalStudent,
    listStudents,
    disabledInputsModal,
    buttonCreate,
    buttonEdit,
    //Funciones
    fillStudentsData,
    cleanStudentState,
    showModalStudents,
    fillListStudents,
    pushListStudents,
  };
});
