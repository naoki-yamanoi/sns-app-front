<script setup lang="ts">
import postLogin from "@/api/auth/loginPost";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref<string>("");
const password = ref<string>("");
const success = ref<string>("");
const error = ref<string>("");

const successMessage = computed(() => {
  return success.value;
});

const errorMessage = computed(() => {
  return error.value;
});

// ログイン処理
async function login() {
  try {
    const responseData = await postLogin({
      email: email.value,
      password: password.value,
    });
    success.value = responseData.message;
    // ローカルストレージに帰ってきたAPIトークン保存
    localStorage.setItem("token", responseData.token);
    router.push("/");
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = "想定外のエラーが発生しました。";
    }
  }
}
</script>

<template>
  <div class="container box_container">
    <div class="proflie_edit_container">
      <h3 class="profile_edit_title">ログイン</h3>
      <div v-if="success" class="alert alert-success" role="alert">
        {{ successMessage }}
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
      <div class="profile_edit_item">
        <label for="e_mail" class="form-label">メールアドレス</label>
        <input
          type="email"
          class="form-control"
          id="e_mail"
          placeholder="test@example.com"
          v-model="email"
        />
      </div>
      <div class="profile_edit_item">
        <label for="password" class="form-label">パスワード</label>
        <input
          type="password"
          id="password"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          v-model="password"
        />
      </div>
      <div class="btn_container">
        <button type="button" class="btn btn-primary login_page_btn" @click="login">
          ログイン
        </button>
        <router-link to="/register" class="btn btn-info login_page_btn">
          新規登録へ
        </router-link>
        <router-link to="/password/reset" class="btn btn-info login_page_btn">
          パスワードリセットへ
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box_container {
  width: 35%;
  padding: 40px 0;
}

.proflie_edit_container {
  display: flex;
  flex-direction: column;
}

.profile_edit_title {
  text-align: center;
  margin-bottom: 40px;
}

.profile_edit_item {
  margin-bottom: 25px;
}

.btn_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.login_page_btn {
  width: 190px;
  margin-bottom: 20px;
}

.form-control::placeholder {
  color: rgb(33 37 41 / 41%);
  opacity: 1;
}

@media (max-width: 768px) {
  .box_container {
    width: 90%;
  }
}
</style>
