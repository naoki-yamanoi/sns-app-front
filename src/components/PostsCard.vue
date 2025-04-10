<script setup lang="ts">
import postsGet from "@/api/postsGet";
import type { FollowPost } from "@/types/post";
import { onMounted, ref } from "vue";
import FollowPostItem from "@/components/FollowPostItem.vue";

const followPosts = ref<FollowPost[]>([]);

onMounted(async () => {
  followPosts.value = await postsGet();
});
</script>

<template>
  <div class="center_container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="false"
        >
          my posts
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="true"
        >
          follows
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          favorites
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <!-- my posts -->
      <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
        <p>あああ</p>
      </div>
      <!-- follows -->
      <div
        class="tab-pane fade show active"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="card" v-for="followPost in followPosts" :key="followPost.id">
          <FollowPostItem
            :follow-post="followPost"
            @toggle-follow="followPost.followFlag = $event"
            @toggle-like="followPost.likeFlag = $event"
          />
        </div>
      </div>
      <!-- favorites -->
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <p>いいい</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.center_container {
  width: 45%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
}
</style>
