import { useAlertStore } from "../../../stores/AlertStore";
import { useEnrollementsStore } from "../store/EnrollementsStore";
//STORES
const enrollementsStore = useEnrollementsStore();
const alertStore = useAlertStore();
//FUNCIONES
const getEnrollements = () => {
  try {
    //Obtener el valor del localStorage
    const enrollementsString =
      localStorage.getItem("enrollements") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const enrollements = enrollementsString
      ? JSON.parse(enrollementsString)
      : [];
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
  //Se evita que se agregue una inscripcion ya registrada
  if (allEnrollements.some((enroll) => enroll.name === newEnroll.name)) {
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "El alumno ya esta inscrito",
      textMessage: `El alumno ${newEnroll.student_id} ya se encuentra inscrito en ${newEnroll.course_id}`,
    });
    enrollementsStore.showModalEnroll(false);
    return true;
  }
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
    //* Para pushear la lista de inscripciones con la nueva inscripcion
    //* enrollementsStore.pushListEnrollements(enrollementsStore.enroll);
    //Se guarda el arreglo actualizado (con la nueva inscripcion) en el localStorage
    localStorage.setItem("enrollements", JSON.stringify(enrollements));
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: true,
      textTitle: "Inscripcion hecha!",
      textMessage: `El alumno ${newEnroll.student_id} ha sido inscrito a ${newEnroll.course_id}`,
    });
    enrollementsStore.showModalEnroll(false);
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
    const index = enrollements.findIndex(
      (enroll) => enroll.id === enrollToDelete.id
    );
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

export default {
  addEnroll,
  getEnrollements,
  preventDuplicate,
  deleteEnroll,
};
