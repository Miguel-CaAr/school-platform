import { useAlertStore } from "@/stores/AlertStore";
const alertStore = useAlertStore();

const getTeachers = () => {
  try {
    //Obtener el valor del localStorage
    const teachersString = localStorage.getItem("teachers") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const teachers = teachersString ? JSON.parse(teachersString) : [];
    return teachers;
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
  //Obtener todos los profes
  const teachers = getTeachers();
  if (teachers.length === 0) {
    return 1; //No hay profesores, primer ID es 1
  } else {
    //Obtener el ultimo ID de los profes y sumarle 1
    return teachers[teachers.length - 1].id + 1;
  }
};

const preventDuplicate = (newTeacher, allTeachers) => {
  //Se evita que se agregue un email ya registrado
  if (allTeachers.some((teacher) => teacher.email === newTeacher.email)) {
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Correo electronico registrado",
      textMessage: `El profesor con el email ${newTeacher.email} ya se encuentra registrado`,
    });
    return true;
  }
};

const addTeacher = (newTeacher) => {
  try {
    //Se obtienen los profesores del localStorage
    const teachers = getTeachers();
    //Se evita que se agregue un email ya registrado
    if (preventDuplicate(newTeacher, teachers)) return;
    //Asignar el nuevo ID al profesor
    newTeacher.id = generateId();
    //Se agrega el nuevo profe
    teachers.push(newTeacher);
    //Se guarda el arreglo actualizado (con el nuevo profe) en el localStorage
    localStorage.setItem("teachers", JSON.stringify(teachers));
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: true,
      textTitle: "Registrado!",
      textMessage: `El profesor ${newTeacher.name} ha sido registrado con exito`,
    });
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al registrar",
      textMessage: `El intentar agregar al profesor ${newTeacher.name} ha ocurrido al siguiente error: ${error}`,
    });
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
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Eliminado!",
        textMessage: `El profesor ${teacherToDelete.name} ha sido eliminado con exito`,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "No existe el profesor",
        textMessage: `El profesor ${teacherToDelete.name} aun no ha sido registrado`,
      });
    }
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al eliminar el profesor!",
      textMessage: `El error al eliminar a ${teacherToDelete.name} es el siguiente: ${error}`,
    });
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
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Actualizado!",
        textMessage: `El profesor ${updatedTeacher.name} ha sido actualizado con exito`,
      });
    } else {
      //Alerta
      alertStore.showAlert(
        true,
        // false,
        // "No existe el profesor!",
        // `El profesor ${newTeacher.name} aun no ha sido registrado`
        {
          isSuccess: false,
          textTitle: "No existe el profesor!",
          textMessage: `El profesor ${updatedTeacher.name} aun no ha sido registrado`,
        }
      );
    }
  } catch (error) {
    alertStore.showAlert(
      true,
      // false,
      // "Error al actualizar!",
      // `Ha ocurrido un error al actualizar al profesor ${newTeacher.name} error: ${error}`
      {
        isSuccess: false,
        textTitle: "Error al actualizar!",
        textMessage: `Ha ocurrido un error al actualizar al profesor ${newTeacher.name} error: ${error}`,
      }
    );
  }
};

export default {
  getTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
};
