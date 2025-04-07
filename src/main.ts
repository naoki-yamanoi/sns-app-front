import "@/assets/main.css";
import "@/assets/styles.scss";

import * as bootstrap from "bootstrap";
// エラー回避
console.log(bootstrap);

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
