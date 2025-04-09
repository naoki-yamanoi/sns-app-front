<script setup lang="ts">
import postsGet from "@/api/postsGet";
import type { FollowPost } from "@/types/post";
import { onMounted, ref } from "vue";

const followPosts = ref<FollowPost[]>([]);

onMounted(async () => {
  followPosts.value = await postsGet();
});

function heartAnimate(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  target.classList.toggle("heart_input_on");
}
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
          <div class="card-header card_title_container">
            <div class="card_user_container">
              <img :src="followPost.userImage" class="post_user_image" />
              <p>{{ followPost.userName }}</p>
            </div>
            <div class="card_right_container">
              <label
                for="like"
                class="heart_input"
                :class="{ heart_input_on: followPost.likeFlag }"
                @click="heartAnimate"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </label>
              <p class="none_select">{{ followPost.createdAt }}</p>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">{{ followPost.content }}</p>
          </div>
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

  .card_right_container {
    display: flex;
    align-items: center;

    .heart {
      margin-right: 10px;

      &:hover {
        background-color: red;
      }
    }
  }
}

.heart_input {
  position: relative;
  cursor: pointer;
  fill: #fae2e2;
  transition: all 0.1s;
}

.heart_input svg {
  width: 25px;
}

.heart_input_on {
  fill: #fa9797;
  animation: like 0.2s ease-out;
}

@keyframes like {
  0% {
    transform: scale(0.5);
  }
  10% {
    transform: scale(0.7);
  }
  30% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.none_select {
  user-select: none;
}
</style>
