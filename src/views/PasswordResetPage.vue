<script setup lang="ts"></script>

<template>
  <div class="container box_container">
    <div class="proflie_edit_container">
      <h3 class="profile_edit_title">パスワードリセット</h3>
      <div class="profile_edit_item">
        <label for="exampleFormControlInput1" class="form-label">メールアドレス</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="test@example.com"
        />
      </div>
      <div class="profile_edit_item">
        <label for="inputPassword5" class="form-label">パスワード</label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
        />
      </div>
      <div class="profile_edit_item">
        <label for="inputPassword5" class="form-label">パスワード確認</label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
        />
      </div>
      <div class="btn_container">
        <button type="button" class="btn btn-primary password_reset_page_btn">
          パスワードリセット
        </button>
        <router-link to="/login" class="btn btn-info password_reset_page_btn">
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
  width: 35%;
  margin-bottom: 20px;
}

.form-control::placeholder {
  color: rgb(33 37 41 / 41%);
  opacity: 1;
}
</style>
