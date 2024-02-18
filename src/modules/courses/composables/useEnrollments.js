import { useAlertStore } from "../../../stores/AlertStore";
import { useEnrollementsStore } from "../store/EnrollementsStore";
import useStudent from "../../students/composables/useStudent";
import { createDiscreteApi } from "naive-ui";
//STORES
const enrollementsStore = useEnrollementsStore();
const alertStore = useAlertStore();
//GLOBAL CONFIG
const { notification } = createDiscreteApi(["notification"], {
  notificationProviderProps: { max: 10, keepAliveOnHover: true },
});
//FUNCIONES
const getEnrollements = () => {
  try {
    //Obtener el valor del localStorage
    const enrollementsString = localStorage.getItem("enrollements") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const enrollements = enrollementsString ? JSON.parse(enrollementsString) : [];
    return enrollements;
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
  //Obtener todos las inscripciones
  const enrollements = getEnrollements();
  if (enrollements.length === 0) {
    return 1; //No hay inscripciones, primer ID es 1
  } else {
    //Obtener el ultimo ID de las inscripciones y sumarle 1
    return enrollements[enrollements.length - 1].id + 1;
  }
};

const preventDuplicate = (newEnroll, allEnrollements) => {
  //Se verifica el curso existe en la tabla "inscripciones"
  if (allEnrollements.some((enroll) => enroll.course_id === newEnroll.course_id)) {
    //Incscribimos al alumno
    enrollStudent(newEnroll.student_id, newEnroll.course_id);
    return true;
  }
};

const enrollStudent = (newStudent, course) => {
  //Se obtienen las inscripciones del localStorage
  const enrollements = getEnrollements();
  //Encontrar el índice del curso
  const index = enrollements.findIndex((enroll) => enroll.course_id === course);
  // Verificar si los alumnos ya están inscritos
  newStudent.forEach((studentId) => {
    const isAlreadyEnrolled = enrollements[index].student_id.includes(studentId);
    if (isAlreadyEnrolled) {
      notification.create({
        title: `No es posible inscribir al alumno`,
        content: `El alumno con ID ${studentId} ya se encuentra inscrito en el curso`,
        description: `Intente con otro alumno`,
        type: "warning",
        duration: 5000,
      });
      return; // Salir del bucle si el estudiante ya está inscrito
    } else {
      // Si el estudiante no está inscrito, agregarlo a la lista de estudiantes inscritos
      enrollements[index].student_id.push(studentId);
      //Pushea al estudiante dentro de la lista de inscripciones en el curso inscrito.
      enrollementsStore.pushStudentInListEnrollements(index, studentId);
      notification.create({
        title: `Se inscribio al alumno`,
        content: `El alumno con ID ${studentId} se ha inscrito en el curso ${course}`,
        description: `Intente con otro alumno`,
        type: "success",
        duration: 5000,
      });
    }
  });
  //Actualizar el localStorage
  localStorage.setItem("enrollements", JSON.stringify(enrollements));
  enrollementsStore.cleanEnrollState();
  return;
};

const addEnroll = (newEnroll) => {
  try {
    //Se obtienen las inscripciones del localStorage
    const enrollements = getEnrollements();
    //Se evita que se agregue una nueva inscripcion ya registrado
    if (preventDuplicate(newEnroll, enrollements)) return;
    //Asignar el nuevo ID a la inscripcion
    newEnroll.id = generateId();
    //Se agrega la nueva inscripcion
    enrollements.push(newEnroll);
    //Para pushear la lista de inscripciones con la nueva inscripcion
    enrollementsStore.pushListEnrollements(enrollementsStore.enroll);
    //Se guarda el arreglo actualizado (con la nueva inscripcion) en el localStorage
    localStorage.setItem("enrollements", JSON.stringify(enrollements));
    //Alerta
    notification.create({
      title: "Inscripcion hecha!",
      content: `El alumno ${newEnroll.student_id} ha sido inscrito a ${newEnroll.course_id}`,
      description: `Alumno inscrito`,
      type: "success",
      duration: 5000,
    });
    enrollementsStore.cleanEnrollState();
  } catch (error) {
    enrollementsStore.showModalEnroll(false);
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al inscribir",
      textMessage: `El intentar inscribir al alumno ${newEnroll.student_id} en ${newEnroll.course_id}, ha ocurrido al siguiente error: ${error}`,
    });
  }
};

const deleteEnroll = (enrollToDelete) => {
  try {
    //Obtener cursos
    const enrollements = getEnrollements();
    //Encontrar el indice de la inscripcion
    const index = enrollements.findIndex((enroll) => enroll.id === enrollToDelete.id);
    //Verificar si la inscripcion existe
    if (index !== -1) {
      //Eliminar la inscripcion de localStorage
      enrollements.splice(index, 1);
      //* Eliminar de la lista de inscripciones
      //* enrollementsStore.listEnrollements.splice(index, 1);
      //Actualzar localStorage
      localStorage.setItem("enrollements", JSON.stringify(enrollements));
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Alumno desinscrito del curso!",
        textMessage: `El alumno ${enrollToDelete.student_id} ha sido eliminado desinscrito de ${enrollToDelete.course_id}`,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "No existe la inscripcion",
        textMessage: `El alumno ${enrollToDelete.student_id} aun no se ha inscrito en ${enrollToDelete.course_id}`,
      });
    }
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al intentar desinscribir!",
      textMessage: `El desincribir a ${enrollToDelete.student_id} de ${enrollToDelete.course_id} ha ocurrido el siguiente error: ${error}`,
    });
  }
};

const getEnrolledStudents = (course) => {
  let studentsEnrolled = [];
  const allStudents = useStudent.getStudents();
  const allEnrollements = getEnrollements();

  allStudents.forEach((student) => {
    allEnrollements.forEach((enroll) => {
      enroll.student_id.find((id) => {
        if (id === student.id) {
          if (enroll.course_id === course.id) {
            studentsEnrolled.push(student.name);
          }
        }
      });
    });
  });
  useEnrollementsStore.listStudentsEnrolled = studentsEnrolled;
};

export default {
  addEnroll,
  getEnrollements,
  preventDuplicate,
  deleteEnroll,
  getEnrolledStudents,
};
