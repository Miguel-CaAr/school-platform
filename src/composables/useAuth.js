/**
 * Autenticacion del usuario con la BD para permitir o denegar acceso.
 * @param {String} email Email del usuario de tipo cadena
 * @param {Boolean} type Determina si el usuario es de tipo profesor
 */
export const useAuthenticate = (_user, isTeacher = true) => {
  let users = [];

  if (isTeacher) {
    //Obtener profesores valor del localStorage
    users = localStorage.getItem("teachers") ?? [];
  } else {
    //Obtener alumnos valor del localStorage
    users = localStorage.getItem("students") ?? [];
  }
  users = JSON.parse(users);
  const user = users.filter(
    (user) =>
      user.email === _user.email && user.password == _user.password
  );
  if (user.length <= 0) {
    alert("No existe");
    return false;
  }

  const userAuth = {
    user,
    isValid: true,
  };
  return userAuth;
};
