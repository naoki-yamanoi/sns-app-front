import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ProfileEditPage from "@/views/ProfileEditPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/profile/edit",
      name: "profileEdit",
      component: ProfileEditPage,
    },
  ],
});

export default router;
