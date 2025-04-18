<script setup lang="ts">
import createPost from "@/api/post/postCreate";
import postsMineGet from "@/api/post/postsMineGet";
import { useMessageStore } from "@/stores/messageStore";
import { usePostStore } from "@/stores/postStore";
import { ref } from "vue";

const postStore = usePostStore();
const messageStore = useMessageStore();
const emit = defineEmits(["hideModal"]);
const postContent = ref<string>("");

async function doPost() {
  // 新規投稿作成
  const responseData = await createPost({
    post: postContent.value,
  });
  // モーダル閉じる
  emit("hideModal");
  // レスポンスメッセージ表示
  messageStore.setMessage(responseData.message);
  // 新規投稿追加後のmy posts再取得
  postStore.myPosts = await postsMineGet();
}
</script>

<template>
  <div
    class="modal fade"
    id="doPostModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">投稿モーダル</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <textarea
          class="modal-body post_message_container"
          v-model="postContent"
        ></textarea>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="doPost">投稿する</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            閉じる
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post_message_container {
  border-style: none;
  outline: none;
}

@media (max-width: 768px) {
  .modal-content {
    margin-top: 150px;
  }
}
</style>
