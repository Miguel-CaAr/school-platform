import {} from "vue";
import { useAlertStore } from "../../../stores/AlertStore";
import { useStudentsStore } from "../store/StudentsStore.js";
import { CrearObjError } from "../../global/utils/errorHandler";
import { validarCamposRequeridos } from "../../global/utils/utils";
import { createDiscreteApi } from "naive-ui";
//Store
const alertStore = useAlertStore();
const studentsStore = useStudentsStore();
//Global configs
const { notification } = createDiscreteApi(["notification"], {
  notificationProviderProps: { max: 10, keepAliveOnHover: true },
});

const getStudents = () => {
  try {
    //Obtener el valor del localStorage
    const studentsString = localStorage.getItem("students") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const students = studentsString ? JSON.parse(studentsString) : [];
    return students;
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
  //Obtener todos los alumno
  const students = getStudents();
  if (students.length === 0) {
    return 1; //No hay alumnos, primer ID es 1
  } else {
    //Obtener el ultimo ID de los alumnos y sumarle 1
    return students[students.length - 1].id + 1;
  }
};

const preventDuplicate = (newStudent, allStudents) => {
  //Se evita que se agregue un alumno ya registrado
  if (allStudents.some((student) => student.email === newStudent.email)) {
    notification.create({
      title: "Datos invalidos",
      content: `Intente con otro correo`,
      description: `El correo ya pertenece a otro usuario`,
      type: "warning",
      duration: 5000,
    });
    return true;
  }
};

const addStudent = (newStudent) => {
  try {
    validarEstudiante(newStudent);
    //Se obtienen los alumnos del localStorage
    const students = getStudents();
    //Se evita que se agregue un alumnos ya registrado
    if (preventDuplicate(newStudent, students)) return;
    //Asignar el nuevo ID al alumno
    newStudent.id = generateId();
    //Se agrega el nuevo alumno
    students.push(newStudent);
    //Para pushear la lista de alumnos con el nuevo alumno
    studentsStore.pushListStudents(studentsStore.student);
    //Se guarda el arreglo actualizado (con el nuevo alumno) en el localStorage
    localStorage.setItem("students", JSON.stringify(students));
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: true,
      textTitle: "Registrado!",
      textMessage: `El alumno ${newStudent.name} ha sido registrado con exito`,
    });
    studentsStore.showModalStudents(false);
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
      //Alerta hecha por mi, de mi, pa mi
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "Error al registrar",
        textMessage: `El intentar agregar al alumno ${newStudent.name} ha ocurrido al siguiente error: ${error}`,
      });
    }
  }
};

const deleteStudent = (studentToDelete) => {
  try {
    //Obtener alumnos
    const students = getStudents();
    //Encontrar el indice del alumno
    const index = students.findIndex(
      (student) => student.id === studentToDelete.id
    );
    //Verificar si el alumno existe
    if (index !== -1) {
      //Eliminar el profe de localStorage
      students.splice(index, 1);
      //Eliminar de la lista de cursos
      studentsStore.listStudents.splice(index, 1);
      //Actualzar localStorage
      localStorage.setItem("students", JSON.stringify(students));
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Eliminado!",
        textMessage: `El alumno ${studentToDelete.name} ha sido eliminado con exito`,
      });
    } else {
      //Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "No existe el alumno",
        textMessage: `El alumno ${studentToDelete.name} aun no ha sido creado`,
      });
    }
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al eliminar el alumno!",
      textMessage: `El error al eliminar a ${studentToDelete.name} es el siguiente: ${error}`,
    });
  }
};

const updateStudent = (updatedStudent) => {
  try {
    validarEstudiante(updatedStudent);
    // Obtener alumnos
    const students = getStudents();
    // Encontrar el indice del alumno
    const index = students.findIndex(
      (student) => student.id === updatedStudent.id
    );
    // Verificar si el alumno existe
    if (index !== -1) {
      // Actualizar el alumno en el arreglo de alumnos
      students[index] = updatedStudent;
      // Actualizar la lista de alumnos en studentsStore
      studentsStore.listStudents = students;
      // Actualizar el localStorage
      localStorage.setItem("students", JSON.stringify(students));
      // Alerta
      alertStore.showAlert(true, {
        isSuccess: true,
        textTitle: "Alumno editado!",
        textMessage: `El alumno ${updatedStudent.name} ha sido editado con éxito`,
      });
    } else {
      // Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "No existe el alumno",
        textMessage: `El alumno ${updatedStudent.name} no ha sido encontrado`,
      });
    }
    studentsStore.showModalStudents(false);
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
      // Alerta
      alertStore.showAlert(true, {
        isSuccess: false,
        textTitle: "Error al editar el alumno!",
        textMessage: `Se produjo un error al intentar editar el alumno ${updatedStudent.name}: ${error}`,
      });
    }
  }
};

const validarEstudiante = (newStudent) => {
  const camposRequeridos = ["name", "email", "password"];
  const objCampos = {
    name: newStudent.name,
    email: newStudent.email,
    password: newStudent.password,
  };
  const faltantes = validarCamposRequeridos(objCampos, camposRequeridos);
  const listFormat = new Intl.ListFormat("es", {
    style: "long",
    type: "conjunction",
  }).format(faltantes);

  if (faltantes.length > 0) {
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
  addStudent,
  getStudents,
  preventDuplicate,
  deleteStudent,
  updateStudent,
};
