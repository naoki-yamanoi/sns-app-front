<script setup lang="ts">
import { onMounted } from "vue";
import postsFollowGet from "@/api/post/postsFollowGet";
import postsLikeGet from "@/api/post/postsLikeGet";
import postsMineGet from "@/api/post/postsMineGet";
import FollowPostItem from "@/components/FollowPostItem.vue";
import LikePostItem from "@/components/LikePostItem.vue";
import MyPostItem from "@/components/MyPostItem.vue";
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

onMounted(async () => {
  // my posts取得
  postStore.myPosts = await postsMineGet();
  // follows取得
  postStore.followPosts = await postsFollowGet();
  // favorites取得
  postStore.likePosts = await postsLikeGet();
});
</script>

<template>
  <div class="center_container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link"
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
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link active"
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
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link"
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
        <div class="card" v-for="myPost in postStore.myPosts" :key="myPost.id">
          <MyPostItem :my-post="myPost" />
        </div>
      </div>
      <!-- follows -->
      <div
        class="tab-pane fade show active"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div
          class="card"
          v-for="followPost in postStore.followPosts"
          :key="followPost.id"
        >
          <FollowPostItem :follow-post="followPost" />
        </div>
      </div>
      <!-- favorites -->
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div class="card" v-for="likePost in postStore.likePosts" :key="likePost.id">
          <LikePostItem :like-post="likePost" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.center_container {
  width: 45%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
  overflow-y: auto;
}

.nav_item_tab {
  flex-basis: 33.3333%;
}

.nav_item_link {
  width: 100%;
  padding: 16px 16px;
}
</style>
