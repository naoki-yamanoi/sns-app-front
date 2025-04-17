<script setup lang="ts"></script>

<template>
  <nav class="navbar fixed-bottom bg-body-tertiary d-block d-md-none">
    <div class="container-fluid">
      <a class="navbar-brand">編集</a>
      <a class="navbar-brand">投稿</a>
      <a class="navbar-brand">検索</a>
      <a class="navbar-brand">ログアウト</a>
    </div>
  </nav>
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
</style>
