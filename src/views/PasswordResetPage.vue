<script setup lang="ts">
import resetPassword from "@/api/auth/passwordReset";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref<string>("");
const old_password = ref<string>("");
const new_password = ref<string>("");
const new_password_confirmation = ref<string>("");
const errors = ref<string>("");

async function reset() {
  const responseData = await resetPassword({
    email: email.value,
    old_password: old_password.value,
    new_password: new_password.value,
    new_password_confirmation: new_password_confirmation.value,
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
      <h3 class="profile_edit_title">パスワードリセット</h3>
      <div v-if="errors" class="alert alert-danger" role="alert">
        {{ errors }}
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
        <label for="old_password" class="form-label">旧パスワード</label>
        <input
          type="password"
          id="old_password"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          v-model="old_password"
        />
      </div>
      <div class="profile_edit_item">
        <label for="new_password" class="form-label">新パスワード</label>
        <input
          type="password"
          id="new_password"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          v-model="new_password"
        />
      </div>
      <div class="profile_edit_item">
        <label for="confirm_password" class="form-label">新パスワード確認</label>
        <input
          type="password"
          id="confirm_password"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          v-model="new_password_confirmation"
        />
      </div>
      <div class="btn_container">
        <button type="button" class="btn btn-info password_reset_page_btn" @click="reset">
          パスワードリセット
        </button>
        <router-link to="/login" class="btn btn-secondary password_reset_page_btn">
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

.password_reset_page_btn {
  width: 180px;
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
