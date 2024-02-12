/**
 *
 * @param {Ref} estado Estado de vue objecto ref
 * @param {string[]} camposRequeridos Array de Campos requeridos para validar
 * @param {RegExp} regExp Expresion regular para validar, se remplaza por un espacio
 * @returns  {string[]} Campos requeridos que no estan llenos
 */
export const validarCamposRequeridos = (
  estado,
  camposRequeridos = [],
  regExp = /_/g
) => {
  const campos = camposRequeridos.filter((campo) => !estado[campo]);
  return campos.map((campo) => campo.replace(regExp, " "));
};
