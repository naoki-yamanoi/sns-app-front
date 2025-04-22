<script setup lang="ts">
import registerUser from "@/api/user/userRegister";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const errors = ref<string>("");

// 新規登録処理
async function register() {
  const responseData = await registerUser({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  if (responseData.errors) {
    errors.value = responseData.message;
    setTimeout(() => {
      errors.value = "";
    }, 2000);
    return;
  }

  router.push("/login");
}
</script>

<template>
  <div class="container box_container">
    <div class="proflie_edit_container">
      <h3 class="profile_edit_title">新規登録</h3>
      <div v-if="errors" class="alert alert-danger" role="alert">
        {{ errors }}
      </div>
      <div class="profile_edit_item">
        <label for="user_name" class="form-label">ユーザー名</label>
        <input
          type="text"
          class="form-control"
          id="user_name"
          placeholder="ユーザー名"
          v-model="name"
        />
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
        <label for="user_password" class="form-label">パスワード</label>
        <input
          type="password"
          id="user_password"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          v-model="password"
        />
      </div>
      <div class="btn_container">
        <button type="button" class="btn btn-success login_page_btn" @click="register">
          新規登録
        </button>
        <router-link to="/login" class="btn btn-secondary login_page_btn">
          ログインに戻る
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
  width: 150px;
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
