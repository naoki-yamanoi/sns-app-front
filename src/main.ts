import "@/assets/styles.scss";
import "@/assets/main.css";
import * as bootstrap from "bootstrap";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import { worker } from "@/mock/browser";

// エラー回避
console.log(bootstrap);

const app = createApp(App);

app.use(createPinia());
app.use(router);

setUp();

async function setUp() {
  // mountより先にworkerを起動させる
  if (import.meta.env.MODE === "development") {
    await worker.start();
  }

  app.mount("#app");
}
