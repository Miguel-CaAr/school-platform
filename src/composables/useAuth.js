/**
 * Autenticacion del usuario con la BD para permitir o denegar acceso.
 * @param {String} email Email del usuario de tipo cadena
 * @param {Boolean} type Determina si el usuario es de tipo profesor
 */
export const useAuthenticate = (_user) => {
  console.log("usuario", _user);
  let usersTeachers = [];
  let usersStudents = [];
  let users = [];
  //Obtener profesores valor del localStorage
  usersTeachers = JSON.parse(localStorage.getItem("teachers") ?? []);
  //Obtener alumnos valor del localStorage
  usersStudents = JSON.parse(localStorage.getItem("students") ?? []);

  users = [...usersTeachers, ...usersStudents];

  const user = users.filter(
    (user) => user.email === _user.email && user.password == _user.password
  )[0];
  if (user.length <= 0) {
    return false;
  }

  const userAuth = {
    user,
    isValid: true,
  };
  return userAuth;
};
