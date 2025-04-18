<script setup lang="ts">
import { ref } from "vue";
import { usePostStore } from "@/stores/postStore";
import postsKeywordGet from "@/api/post/postsKeywordGet";

const postStore = usePostStore();
const emit = defineEmits(["hide-modal"]);
const keyword = ref<string>("");

// キーワード検索処理
async function doSearch() {
  postStore.keywordPosts = await postsKeywordGet({
    keyword: keyword.value,
  });
  // モーダル閉じる
  emit("hide-modal");
  // searchタブをactiveにする
  postStore.doSearchFlg = true;
  // 検索キーワードはストアに保存する（データ再取得に使うため）
  postStore.searchedKeyword = keyword.value;
}
</script>

<template>
  <div
    class="modal fade"
    id="searchPostModal"
    tabindex="-1"
    aria-labelledby="searchModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="searchModalLabel">検索モーダル</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <textarea class="modal-body post_message_container" v-model="keyword"></textarea>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="doSearch">
            検索する
          </button>
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
