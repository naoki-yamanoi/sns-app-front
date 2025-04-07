<script setup lang="ts">
import PostsCard from "@/components/PostsCard.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import TrendCard from "@/components/TrendCard.vue";
</script>

<template>
  <div class="index_container">
    <ProfileCard />
    <PostsCard />
    <TrendCard />
  </div>
</template>

<style scoped lang="scss">
.index_container {
  display: flex;
  justify-content: space-around;
  height: 100vh;
}
</style>
