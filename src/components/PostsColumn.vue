<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import postsFollowGet from "@/api/post/postsFollowGet";
import postsLikeGet from "@/api/post/postsLikeGet";
import postsMineGet from "@/api/post/postsMineGet";
import FollowPostItem from "@/components/FollowPostItem.vue";
import LikePostItem from "@/components/LikePostItem.vue";
import MyPostItem from "@/components/MyPostItem.vue";
import KeywordPostItem from "@/components/KeywordPostItem.vue";
import BottomNav from "@/components/BottomNav.vue";
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();
const searchTab = ref<HTMLButtonElement | null>(null);

onMounted(async () => {
  // my posts取得
  postStore.myPosts = await postsMineGet();
  // follows取得
  postStore.followPosts = await postsFollowGet();
  // favorites取得
  postStore.likePosts = await postsLikeGet();
});
// キーワード検索されたらsearchタブをactiveにする
watch(
  () => postStore.doSearchFlg,
  (newVal) => {
    if (newVal) {
      searchTab.value?.click();
      postStore.doSearchFlg = false;
    }
  }
);
</script>

<template>
  <div class="center_container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link"
          id="my-posts-tab"
          data-bs-toggle="tab"
          data-bs-target="#my_posts"
          type="button"
          role="tab"
          aria-controls="my_posts"
          aria-selected="false"
        >
          my posts
        </button>
      </li>
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link active"
          id="follows-tab"
          data-bs-toggle="tab"
          data-bs-target="#follows"
          type="button"
          role="tab"
          aria-controls="follows"
          aria-selected="true"
        >
          follows
        </button>
      </li>
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link"
          id="favorites-tab"
          data-bs-toggle="tab"
          data-bs-target="#favorites"
          type="button"
          role="tab"
          aria-controls="favorites"
          aria-selected="false"
        >
          favorites
        </button>
      </li>
      <li class="nav-item nav_item_tab" role="presentation">
        <button
          class="nav-link nav_item_link"
          id="search-tab"
          data-bs-toggle="tab"
          data-bs-target="#search"
          type="button"
          role="tab"
          aria-controls="search"
          aria-selected="false"
          ref="searchTab"
        >
          search
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <!-- my posts -->
      <div
        class="tab-pane fade"
        id="my_posts"
        role="tabpanel"
        aria-labelledby="my-posts-tab"
      >
        <div class="card" v-for="myPost in postStore.myPosts" :key="myPost.id">
          <MyPostItem :my-post="myPost" />
        </div>
      </div>
      <!-- follows -->
      <div
        class="tab-pane fade show active"
        id="follows"
        role="tabpanel"
        aria-labelledby="follows-tab"
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
        id="favorites"
        role="tabpanel"
        aria-labelledby="favorites-tab"
      >
        <div class="card" v-for="likePost in postStore.likePosts" :key="likePost.id">
          <LikePostItem :like-post="likePost" />
        </div>
      </div>
      <!-- search -->
      <div class="tab-pane fade" id="search" role="tabpanel" aria-labelledby="search-tab">
        <div
          class="card"
          v-for="keywordPost in postStore.keywordPosts"
          :key="keywordPost.id"
        >
          <KeywordPostItem :keyword-post="keywordPost" />
        </div>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<style scoped lang="scss">
.center_container {
  width: 45%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
  overflow-y: auto;
  background-color: $bg_color;
}

.nav-link {
  color: #1e66d0;
}

.nav_item_tab {
  flex-basis: 25%;
}

.nav_item_link {
  width: 100%;
  padding: 16px 16px;
}

@media (max-width: 768px) {
  .center_container {
    width: 100%;
    margin-bottom: 55px;
  }
}
</style>
