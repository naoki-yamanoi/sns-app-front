<script setup lang="ts">
import { ref } from "vue";

const followPosts = ref([
  {
    id: 1,
    userName: "ユーザー1",
    userImage: "public/44631706_p0_master1200.jpg",
    content: "投稿１投稿１投稿１投稿１投稿１投稿１",
    createdAt: "2025/04/02 12:30:20",
  },
  {
    id: 2,
    userName: "ユーザー2",
    userImage: "public/55e25798c9c8e6b02e5d01ec21e03065_t.jpeg",
    content: "投稿2投稿2投稿2投稿2投稿2投稿2投稿2",
    createdAt: "2025/04/02 10:20:10",
  },
]);

// onMounted(async () => {
//   const response = await fetch("src/api/mock/posts.json");
//   console.log(response.json());
//   followPosts.value = response.json();
// });
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
      <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
        <p>あああ</p>
      </div>
      <div
        class="tab-pane fade show active"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="card" v-for="post in followPosts" :key="post.id">
          <div class="card-header card_title_container">
            <div class="card_user_container">
              <img :src="post.userImage" class="post_user_image" />
              <p>{{ post.userName }}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
              />
            </svg>
            <p>{{ post.createdAt }}</p>
          </div>
          <div class="card-body">
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
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

.post_user_image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.card_title_container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-bottom: 0px;
    margin-left: 12px;
  }

  .card_user_container {
    display: flex;
    align-items: center;
  }
}
</style>
