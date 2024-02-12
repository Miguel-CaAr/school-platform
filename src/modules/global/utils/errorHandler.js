/**
 * Crea un objeto de error personalizado.
 * @param {{mensaje:string, nombreError:string,naiveDesc: string ,array:Array, naiveDuration: number}} objEsperado - Objeto de error personalizado.
 * @returns {Error}  Objeto de error personalizado.
 */
export const CrearObjError = ({
  mensaje,
  nombreError,
  naiveDesc,
  array = null,
  type = null,
  naiveDuration = null,
}) => {
  const error = new Error(mensaje);
  error.name = nombreError;
  error.array = array;
  error.naiveDesc = naiveDesc;
  error.type = type;
  error.naiveDuration = naiveDuration;
  return error;
};
