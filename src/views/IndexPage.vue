<script setup lang="ts">
import PostsColumn from "@/components/PostsColumn.vue";
import ProfileColumn from "@/components/ProfileColumn.vue";
import SearchColumn from "@/components/SearchColumn.vue";
</script>

<template>
  <div class="index_container">
    <ProfileColumn />
    <PostsColumn />
    <SearchColumn />
  </div>
</template>

<style scoped lang="scss">
.index_container {
  display: flex;
  justify-content: space-around;
  height: 100vh;
}
</style>
