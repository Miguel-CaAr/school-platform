const getTeachers = () => {
  try {
    //Obtener el valor del localStorage
    const teachersString = localStorage.getItem("teachers") ?? null;
    //Verificar si hay algo almacenado y parsearlo a un array
    const teachers = teachersString ? JSON.parse(teachersString) : [];
    //Retornar el array de teachers
    console.log(teachers);
    return teachers;
  } catch (error) {
    console.warn("Error al obtener del localStorage: ", error);
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
    console.log("Profesor agregado con exito");
  } catch (error) {
    console.warn("Error al agregar el profesor: ", error);
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
      console.log("Profesor eliminado con exito");
    } else {
      console.warn("El profesor a eliminar no existe");
    }
  } catch (error) {
    console.warn("Error al eliminar un profesor: ", error);
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
      console.log("Se actualizo el profesor con exito");
    } else {
      console.warn("El profesor no existe");
    }
  } catch (error) {
    console.warn("Error al actualizar el profesor:", error);
  }
};

export default {
  getTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
};
