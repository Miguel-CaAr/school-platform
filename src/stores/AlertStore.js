import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore("AlertStore", () => {
  //Datos reactivos
  const show = ref(false);
  const success = ref(true);
  const title = ref("title");
  const message = ref("message");
  //Metodos
  /**
   * @typedef {Object} OptionsAlert Opciones de la alerta
   * @property {Boolean} isSuccess Define si la alerta es de éxito o no (o sea un error)
   * @property {String} textTitle Título de la alerta
   * @property {String} textMessage Mensaje de la alerta
   */
  /**
   * Muestra una alerta.
   * @param {Boolean} toggleShow Define si se muestra la alerta o no.
   * @param {OptionsAlert} optionsAlert Opciones de la alerta.
   */
  const showAlert = (
    toggleShow,
    { isSuccess, textTitle, textMessage }
  ) => {
    show.value = toggleShow;
    success.value = isSuccess;
    title.value = textTitle;
    message.value = textMessage;
  };
  //Metodos computados

  //Retorno
  return {
    showAlert,
    success,
    show,
    title,
    message,
  };
});
