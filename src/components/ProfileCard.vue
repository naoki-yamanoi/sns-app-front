<script setup lang="ts">
import * as bootstrap from "bootstrap";
import DoPostModal from "./DoPostModal.vue";

function doPost() {
  // 投稿モーダル表示
  new bootstrap.Modal("#doPostModal").show();
}
</script>

<template>
  <div class="left_container">
    <div>
      <h2>プロフィール</h2>
      <div class="top_container">
        <img
          class="profile_user_image"
          src="/public/44631706_p0_master1200.jpg"
          alt=""
        />
        <p class="profile_user_name">ユーザー１</p>
        <p>
          自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介
        </p>
        <button
          type="button"
          class="btn btn-primary post_btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="doPost"
        >
          投稿する
        </button>
      </div>
    </div>
    <div>
      <button class="btn btn-danger">ログアウト</button>
    </div>
  </div>

  <!-- Modal -->
  <DoPostModal />
</template>

<style scoped lang="scss">
.left_container {
  width: 25%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.top_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.profile_user_image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.profile_user_name {
  margin-top: 20px;
  font-size: 1.5rem;
}

.post_btn {
  width: 80%;
  padding: 12px 0;
}
</style>
