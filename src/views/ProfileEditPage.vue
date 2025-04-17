<script setup lang="ts">
import editUserProfile from "@/api/user/userProfileEdit";
import { useUserStore } from "@/stores/userStore";
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const selectedFile = ref<File | null>(null);

onMounted(async () => {
  await userStore.getProfile();
});

// ファイル選択処理
function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    selectedFile.value = file;
    // ローカルの画像パス生成
    userStore.imageUrl = URL.createObjectURL(file);
  }
}
// 編集保存処理
async function editProfile() {
  const formData = new FormData();
  formData.append("userName", userStore.userName);
  formData.append("comment", userStore.userComment);
  if (selectedFile.value) {
    formData.append("userImage", selectedFile.value);
  }
  // 編集保存api
  await editUserProfile(formData);
  // プロフィール情報取得api
  await userStore.getProfile();
}
</script>

<template>
  <div class="container box_container">
    <div class="proflie_edit_container">
      <h3 class="profile_edit_title">プロフィール編集</h3>
      <div class="profile_edit_item">
        <label for="formFile" class="form-label">プロフィール画像</label>
        <div class="image_group">
          <img
            :src="userStore.imageUrl"
            class="rounded-circle border image_select"
            alt="プロフィール画像"
          />
          <input class="form-control" type="file" id="formFile" @change="onFileChange" />
        </div>
      </div>
      <div class="profile_edit_item">
        <label for="exampleFormControlInput1" class="form-label">ユーザーネーム</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="user name"
          v-model="userStore.userName"
        />
      </div>
      <div class="profile_edit_item">
        <label for="exampleFormControlInput1" class="form-label">自己紹介</label>
        <textarea
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="comment"
          v-model="userStore.userComment"
        ></textarea>
      </div>
      <div class="btn_group">
        <button
          type="button"
          class="btn btn-primary profile_page_btn"
          @click="editProfile"
        >
          更新する
        </button>
        <router-link to="/" class="btn btn-secondary back_top_btn">
          トップに戻る
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
  margin-bottom: 45px;
  font-size: 1.1rem;
}

.btn_group {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
}

.profile_page_btn {
  width: 30%;
}

.back_top_btn {
  width: 35%;
}

.form-control::placeholder {
  color: rgb(33 37 41 / 41%);
  opacity: 1;
}

.image_group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image_select {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .box_container {
    width: 90%;
  }
}
</style>
