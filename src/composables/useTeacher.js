import { useAlertStore } from "@/stores/AlertStore";
import { useTeachersStore } from "@/stores/TeachersStore";
const alertStore = useAlertStore();
const useTeachers = useTeachersStore();

const getTeachers = () => {
  try {
    //Obtener el valor del localStorage
    const teachersString = localStorage.getItem("teachers") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const teachers = teachersString ? JSON.parse(teachersString) : [];
    return teachers;
  } catch (error) {
    //Alerta
    alertStore.showAlert(
      true,
      false,
      "Error al obtener datos!",
      `Se produjo el siguiente error: ${error}`
    );
    return [];
  }
};

const generateId = () => {
  //Obtener todos los profes
  const teachers = getTeachers();
  if (teachers.length === 0) {
    return 1; //No hay profesores, primer ID es 1
  } else {
    //Obtener el ultimo ID de los profes y sumarle 1
    return teachers[teachers.length - 1].id + 1;
  }
};

const addTeacher = (newTeacher) => {
  try {
    //Se obtienen los profesores del localStorage
    const teachers = getTeachers();
    //Asignar el nuevo ID al profesor
    newTeacher.id = generateId();
    //Se agrega el nuevo profe
    teachers.push(newTeacher);
    //Se guarda el arreglo actualizado (con el nuevo profe) en el localStorage
    localStorage.setItem("teachers", JSON.stringify(teachers));
    //Guardar tambien en el store
    useTeachers.updateTeachersStore(teachers);
    //Alerta
    alertStore.showAlert(
      true,
      true,
      "Registrado!",
      `El profesor ${newTeacher.name} ha sido registrado con exito`
    );
  } catch (error) {
    //Alerta
    alertStore.showAlert(
      true,
      false,
      "Error al registrar!",
      `El intentar agregar al profesor ${newTeacher.name} ha ocurrido al siguiente error: ${error}`
    );
  }
};

const deleteTeacher = (teacherToDelete) => {
  try {
    //Obtener profes
    const teachers = getTeachers();
    //Encontrar el indice del profe
    const index = teachers.findIndex(
      (teacher) => teacher.id === teacherToDelete.id
    );
    //Verificar si el profe existe
    if (index !== -1) {
      //Eliminar el profe
      teachers.splice(index, 1);
      //Actualzar localStorage
      localStorage.setItem("teachers", JSON.stringify(teachers));
      //Actualizar tambien en el store
      useTeachers.updateTeachersStore(teachers);
      //Alerta
      alertStore.showAlert(
        true,
        true,
        "Eliminado!",
        `El profesor ${teacherToDelete.name} ha sido eliminado con exito`
      );
    } else {
      //Alerta
      alertStore.showAlert(
        true,
        false,
        "No existe el profesor!",
        `El profesor ${newTeacher.name} aun no ha sido registrado`
      );
    }
  } catch (error) {
    //Alerta
    alertStore.showAlert(
      true,
      false,
      "Error al eliminar profesor!",
      `El error al eliminar a ${teacherToDelete.name} es el siguiente: ${error}`
    );
  }
};

const updateTeacher = (updatedTeacher) => {
  try {
    //Obtener teachers
    const teachers = getTeachers();
    //Encontrar indice de teacher
    const index = teachers.findIndex(
      (teacher) => teacher.id === updatedTeacher.id
    );
    //Verificar si existe el profe
    if (index != -1) {
      teachers[index] = updatedTeacher;
      //Actualizar teachers con el profe actualizado
      localStorage.setItem("teachers", JSON.stringify(teachers));
      //Actualizar tambien en el store
      useTeachers.updateTeachersStore(teachers);
      //Alerta
      alertStore.showAlert(
        true,
        true,
        "Actualizado!",
        `El profesor ${newTeacher.name} ha sido actualizado con exito`
      );
    } else {
      //Alerta
      alertStore.showAlert(
        true,
        false,
        "No existe el profesor!",
        `El profesor ${newTeacher.name} aun no ha sido registrado`
      );
    }
  } catch (error) {
    alertStore.showAlert(
      true,
      false,
      "Error al actualizar!",
      `Ha ocurrido un error al actualizar al profesor ${newTeacher.name} error: ${error}`
    );
  }
};

export default {
  getTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
};
