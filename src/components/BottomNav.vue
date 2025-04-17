<script setup lang="ts">
import * as bootstrap from "bootstrap";
import DoPostModal from "@/components/DoPostModal.vue";
import SearchPostModal from "@/components/SearchPostModal.vue";

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
// 検索モーダル開く
function showSearchPostModal() {
  new bootstrap.Modal("#searchPostModal").show();
}
// 検索モーダル閉じる
function hideSearchPostModal() {
  const modal = bootstrap.Modal.getInstance("#searchPostModal");
  if (modal) {
    modal.hide();
  }
}
</script>

<template>
  <nav class="navbar fixed-bottom bg-body-tertiary d-block d-md-none">
    <div class="container-fluid">
      <router-link to="/profile/edit" class="navbar-brand">編集</router-link>
      <a class="navbar-brand" @click="showDoPostModal">投稿</a>
      <a class="navbar-brand" @click="showSearchPostModal">検索</a>
      <a class="navbar-brand logout_tab">ログアウト</a>
    </div>
  </nav>

  <!-- 投稿Modal -->
  <DoPostModal @hide-modal="hideDoPostModal" />
  <!-- 検索Modal -->
  <SearchPostModal @hide-modal="hideSearchPostModal" />
</template>

<style scoped lang="scss">
.navbar {
  padding: 0;
  height: 55px;
}

.bg-body-tertiary {
  background-color: #0f6efd !important;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
  height: 100%;
}

.navbar-brand {
  margin-right: 0;
  width: 25%;
  height: 100%;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  color: #efefef;

  &:hover {
    background-color: #498ff6;
  }
}

.logout_tab {
  padding: 12px 0;
}
</style>
