/**
 *  Funcion para obtener a todos los usuarios en la BD
 * @returns {Array} Retorna el arreglo con todos los usuarios
 */
export const getAllUsers = () => {
  //Obtener el valor del localStorage
  const teachersString = localStorage.getItem("teachers") ?? "";
  const studentsString = localStorage.getItem("students") ?? "";
  // Parsear
  const teachers = teachersString ? JSON.parse(teachersString) : [];
  const students = studentsString ? JSON.parse(studentsString) : [];
  //Concatenar
  const allUsers = teachers.concat(students);
  //Retornar a los Users
  return allUsers;
};
