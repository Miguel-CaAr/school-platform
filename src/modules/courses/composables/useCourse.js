import {} from "vue";
import { useAlertStore } from "../../../stores/AlertStore";
import { useCoursesStore } from "../store/CoursesStore.js";
import { CrearObjError } from "../../global/utils/errorHandler";
import { validarCamposRequeridos } from "../../global/utils/utils";
import { createDiscreteApi } from "naive-ui";
//Store
const alertStore = useAlertStore();
const courseStore = useCoursesStore();
//Global configs
const { notification } = createDiscreteApi(["notification"], {
  notificationProviderProps: { max: 10, keepAliveOnHover: true },
});
//Funciones
const getCourses = () => {
  try {
    //Obtener el valor del localStorage
    const coursesString = localStorage.getItem("courses") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const courses = coursesString ? JSON.parse(coursesString) : [];
    return courses;
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al obtener datos!",
      textMessage: `Se produjo el siguiente error: ${error}`,
    });
    return [];
  }
};

const generateId = () => {
  //Obtener todos los courses
  const courses = getCourses();
  if (courses.length === 0) {
    return 1; //No hay cursos, primer ID es 1
  } else {
    //Obtener el ultimo ID de los cursos y sumarle 1
    return courses[courses.length - 1].id + 1;
  }
};

const preventDuplicate = (newCourse, allCourses) => {
  //Se evita que se agregue un curso ya registrado
  if (allCourses.some((course) => course.name === newCourse.name)) {
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "El curso ya existe",
      textMessage: `El curso con el name ${newCourse.name} ya se encuentra registrado`,
    });
    return true;
  }
};

const addCourse = (newCourse) => {
  try {
    validateCourseFields(newCourse);
    //Se obtienen los cursos del localStorage
    const courses = getCourses();
    //Se evita que se agregue un curso ya registrado
    if (preventDuplicate(newCourse, courses)) return;
    //Asignar el nuevo ID al profesor
    newCourse.id = generateId();
    //Se agrega el nuevo profe
    courses.push(newCourse);
    //Para pushear la lista de cursos con el nuevo curso
    courseStore.pushListcourses(courseStore.course);
    //Se guarda el arreglo actualizado (con el nuevo profe) en el localStorage
    localStorage.setItem("courses", JSON.stringify(courses));
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: true,
      textTitle: "Registrado!",
      textMessage: `El curso ${newCourse.name} ha sido registrado con exito`,
    });
    courseStore.showModalCourses(false);
  } catch (error) {
    if (error.type) {
      notification.create({
        title: error.name,
        content: error.message,
        description: error.naiveDesc,
        type: error.type,
        duration: error.naiveDuration,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "Error al registrar",
        textMessage: `El intentar agregar al curso ${newCourse.name} ha ocurrido al siguiente error: ${error}`,
      });
    }
  }
};

const deleteCourse = (courseToDelete) => {
  try {
    //Obtener cursos
    const courses = getCourses();
    //Encontrar el indice del curso
    const index = courses.findIndex(
      (course) => course.id === courseToDelete.id
    );
    //Verificar si el profe existe
    if (index !== -1) {
      //Eliminar el profe de localStorage
      courses.splice(index, 1);
      //Eliminar de la lista de cursos
      courseStore.listCourses.splice(index, 1);
      //Actualzar localStorage
      localStorage.setItem("courses", JSON.stringify(courses));
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Eliminado!",
        textMessage: `El curso ${courseToDelete.name} ha sido eliminado con exito`,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "No existe el curso",
        textMessage: `El curso ${courseToDelete.name} aun no ha sido creado`,
      });
    }
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al eliminar el curso!",
      textMessage: `El error al eliminar a ${courseToDelete.name} es el siguiente: ${error}`,
    });
  }
};

const updateCourse = (updatedCourse) => {
  try {
    validateCourseFields(updatedCourse);
    //Obtener cursos
    const courses = getCourses();
    //Encontrar el índice del curso
    const index = courses.findIndex(
      (course) => course.id === updatedCourse.id
    );
    //Verificar si el curso existe
    if (index !== -1) {
      //Actualizar el curso en el arreglo de cursos
      courses[index] = updatedCourse;
      // Actualizar la lista de cursos en courseStore
      courseStore.listCourses = courses;
      //Actualizar el localStorage
      localStorage.setItem("courses", JSON.stringify(courses));
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Curso editado!",
        textMessage: `El curso ${updatedCourse.name} ha sido editado con éxito`,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "No existe el curso",
        textMessage: `El curso ${updatedCourse.name} no ha sido encontrado`,
      });
    }
    courseStore.showModalCourses(false);
  } catch (error) {
    if (error.type) {
      notification.create({
        title: error.name,
        content: error.message,
        description: error.naiveDesc,
        type: error.type,
        duration: error.naiveDuration,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "Error al editar el curso!",
        textMessage: `Se produjo un error al intentar editar el curso ${updatedCourse.name}: ${error}`,
      });
    }
  }
};

const validateCourseFields = (newCourse) => {
  const requireFields = ["name", "description", "finished"];
  const objFields = {
    name: newCourse.name,
    description: newCourse.description,
    finished: newCourse.finished,
  };
  const omissions = validarCamposRequeridos(objFields, requireFields);
  const listFormat = new Intl.ListFormat("es", {
    style: "long",
    type: "conjunction",
  }).format(omissions);
  if (omissions.length > 0) {
    throw CrearObjError({
      mensaje: `${listFormat} son requeridos!`,
      type: "warning",
      nombreError: "Campos requeridos",
      naiveDesc: "Favor de llenar los campos requeridos",
      naiveDuration: 5000,
    });
  }
};

export default {
  addCourse,
  getCourses,
  preventDuplicate,
  deleteCourse,
  updateCourse,
};
