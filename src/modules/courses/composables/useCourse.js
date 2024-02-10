import {} from "vue";
import { useAlertStore } from "../../../stores/AlertStore";
const alertStore = useAlertStore();

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

const addCourse = (newCourse) => {
  console.log("addCourse", newCourse);
  try {
    //Se obtienen los cursos del localStorage
    const courses = getCourses();
    //Se evita que se agregue un curso ya registrado
    // if (preventDuplicate(newTeacher, teachers)) return;
    //Asignar el nuevo ID al profesor
    newCourse.id = generateId();
    //Se agrega el nuevo profe
    courses.push(newCourse);
    //Se guarda el arreglo actualizado (con el nuevo profe) en el localStorage
    localStorage.setItem("courses", JSON.stringify(courses));
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: true,
      textTitle: "Registrado!",
      textMessage: `El curso ${newCourse.name} ha sido registrado con exito`,
    });
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al registrar",
      textMessage: `El intentar agregar al curso ${newCourse.name} ha ocurrido al siguiente error: ${error}`,
    });
  }
};

export default {
  addCourse,
  getCourses,
};