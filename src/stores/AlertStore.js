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
    toggleShow,
    isSuccess,
    textTittle,
    textMessage
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
