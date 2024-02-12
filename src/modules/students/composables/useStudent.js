import {} from "vue";
import { useAlertStore } from "../../../stores/AlertStore";
import { useStudentsStore } from "../store/StudentsStore.js";
const alertStore = useAlertStore();
const studentsStore = useStudentsStore();

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
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "El alumno ya existe",
      textMessage: `El alumno con el name ${newStudent.email} ya se encuentra registrado`,
    });
    return true;
  }
};

const addStudent = (newStudent) => {
  try {
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
  } catch (error) {
    //Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al registrar",
      textMessage: `El intentar agregar al alumno ${newStudent.name} ha ocurrido al siguiente error: ${error}`,
    });
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
  } catch (error) {
    // Alerta
    alertStore.showAlert(true, {
      isSuccess: false,
      textTitle: "Error al editar el alumno!",
      textMessage: `Se produjo un error al intentar editar el alumno ${updatedStudent.name}: ${error}`,
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
