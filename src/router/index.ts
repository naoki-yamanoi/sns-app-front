import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ProfileEditPage from "@/views/ProfileEditPage.vue";
import PasswordResetPage from "@/views/PasswordResetPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";

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
      path: "/register",
      name: "register",
      component: RegisterPage,
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
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  // ログイン、新規登録、パスワードリセット画面以外に遷移時、APIトークンがなければログイン画面にリダイレクト
  if (
    to.name !== "login" &&
    to.name !== "register" &&
    to.name !== "passwordReset" &&
    (token === "undefined" || !token)
  ) {
    next({ name: "login" });
  }

  next();
});

export default router;
