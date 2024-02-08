import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore("AlertStore", () => {
  //Datos reactivos
  const show = ref(false);
  const success = ref(true);
  const title = ref("title");
  const message = ref("message");
  //Metodos
  const showAlert = (
    toggleShow, // Boolean: Define si se muestra la alerta o no
    isSuccess, // Boolean: Define si la alerta es de éxito o no ( o sea un error)
    textTittle, // String: Título de la alerta
    textMessage // String: Mensaje de la alerta
  ) => {
    show.value = toggleShow;
    success.value = isSuccess;
    title.value = textTittle;
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
