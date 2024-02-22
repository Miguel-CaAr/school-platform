import { useEnrollementsStore } from "../../courses/store/EnrollementsStore";
const enrollementsStore = useEnrollementsStore();
/**
 *
 * @param {Ref} estado Estado de vue objecto ref
 * @param {string[]} camposRequeridos Array de Campos requeridos para validar
 * @param {RegExp} regExp Expresion regular para validar, se remplaza por un espacio
 * @returns  {string[]} Campos requeridos que no estan llenos
 */
export const validarCamposRequeridos = (estado, camposRequeridos = [], regExp = /_/g) => {
  const campos = camposRequeridos.filter((campo) => !estado[campo]);
  return campos.map((campo) => campo.replace(regExp, " "));
};
/**
 * Funcion para obtener la longitud/numero de estudiantes inscritos en un curso
 * @param {Number} id Numero ID de el curso
 * @returns El numero de los estudiantes inscritos en el curso.
 */
export const getNumberOfStudents = (id) => {
  const course = enrollementsStore.listEnrolled.filter((enroll) => {
    return enroll.course_id === id;
  });
  return course.length > 0 ? course[0].student_id.length : 0;
};
