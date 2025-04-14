import { ref } from "vue";
import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", () => {
  const message = ref<string>("");

  function setMessage(msg: string) {
    message.value = msg;

    setTimeout(() => {
      message.value = "";
    }, 2000);
  }

  return { message, setMessage };
});
