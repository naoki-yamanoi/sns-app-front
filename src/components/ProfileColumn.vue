<script setup lang="ts">
import * as bootstrap from "bootstrap";
import DoPostModal from "@/components/DoPostModal.vue";
import postLogout from "@/api/auth/logoutPost";
import { useRouter } from "vue-router";
import { useMessageStore } from "@/stores/messageStore";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";

const router = useRouter();
const messageStore = useMessageStore();
const userStore = useUserStore();

onMounted(async () => {
  await userStore.getProfile();
});

// 投稿モーダル開く
function showDoPostModal() {
  new bootstrap.Modal("#doPostModal").show();
}
// 投稿モーダル閉じる
function hideDoPostModal() {
  const modal = bootstrap.Modal.getInstance("#doPostModal");
  if (modal) {
    modal.hide();
  }
}
// ログアウト実行
async function logout() {
  await postLogout();
  // ローカルストレージのAPIトークン削除
  localStorage.removeItem("token");
  router.push("/login");
}
</script>

<template>
  <div class="left_container">
    <div>
      <h2>SNS App</h2>
      <div class="top_container">
        <img
          class="profile_user_image"
          :src="userStore.imageUrl"
          alt="プロフィール画像"
        />
        <p class="profile_user_name">{{ userStore.userName }}</p>
        <p>{{ userStore.userComment }}</p>
        <button
          type="button"
          class="btn btn-primary post_btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="showDoPostModal"
        >
          投稿する
        </button>
        <p>{{ messageStore.message }}</p>
        <router-link to="/profile/edit" class="btn btn-secondary edit_profile_btn">
          プロフィール編集
        </router-link>
      </div>
    </div>
    <div>
      <button class="btn btn-danger" @click="logout">ログアウト</button>
    </div>
  </div>

  <!-- Modal -->
  <DoPostModal @hide-modal="hideDoPostModal" />
</template>

<style scoped lang="scss">
.left_container {
  width: 23%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: $bg_color;
}

.top_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.profile_user_image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.profile_user_name {
  margin-top: 20px;
  font-size: 1.5rem;
}

.edit_profile_btn {
  width: 80%;
  padding: 4px 0;
  margin-bottom: 10px;
}

.post_btn {
  width: 80%;
  padding: 12px 0;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .left_container {
    display: none;
  }
}
</style>
