import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ProfileEditPage from "@/views/ProfileEditPage.vue";
import AccountEditPage from "@/views/AccountEditPage.vue";
import PasswordResetPage from "@/views/PasswordResetPage.vue";

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
      path: "/password/reset",
      name: "passwordReset",
      component: PasswordResetPage,
    },
    {
      path: "/profile/edit",
      name: "profileEdit",
      component: ProfileEditPage,
    },
    {
      path: "/account/edit",
      name: "accountEdit",
      component: AccountEditPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  // ログイン画面以外に遷移時、APIトークンがなければログイン画面にリダイレクト
  if (to.name !== "login" && !token) {
    next({ name: "login" });
  }

  next();
});

export default router;
