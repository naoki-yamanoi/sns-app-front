<script setup lang="ts">
import { ref } from "vue";

const followPosts = ref([
  {
    id: 1,
    content: "投稿１投稿１投稿１投稿１投稿１投稿１",
  },
  {
    id: 2,
    content: "投稿2投稿2投稿2投稿2投稿2投稿2投稿2",
  },
]);
const myPosts = ref([
  {
    id: 1,
    content: "投稿１投稿１投稿１投稿１投稿１投稿１",
  },
  {
    id: 2,
    content: "投稿2投稿2投稿2投稿2投稿2投稿2投稿2",
  },
]);
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
      <div
        class="tab-pane fade"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <p v-for="post in myPosts" :key="post.id">{{ post.content }}</p>
      </div>
      <div
        class="tab-pane fade show active"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <p v-for="post in followPosts" :key="post.id">{{ post.content }}</p>
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        ...
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.center_container {
  width: 44%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
}
</style>
