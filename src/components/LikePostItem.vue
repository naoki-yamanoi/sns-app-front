<script setup lang="ts">
import getUserId from "@/api/user/userGet";
import { usePostStore } from "@/stores/postStore";
import type { LikePost } from "@/types/post";
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  likePost: LikePost;
}>();
const postStore = usePostStore();
const loginUserId = ref();

const userName = computed(() => {
  if (window.innerWidth <= 500) {
    return props.likePost.userName.length > 7
      ? props.likePost.userName.slice(0, 6) + "..."
      : props.likePost.userName;
  }
  return props.likePost.userName;
});

onMounted(async () => {
  loginUserId.value = await getUserId();
});

// フォロー切り替え処理
async function toggleFollow() {
  await postStore.toggleFollowBtn(props.likePost.followFlg, props.likePost.userId);
}
// いいね切り替え処理
async function toggleHeart() {
  await postStore.toggleLikeBtn(props.likePost.likeFlg, props.likePost.id);
}
</script>

<template>
  <div>
    <div class="card-header card_title_container">
      <div class="card_user_container">
        <img :src="likePost.userImage" class="post_user_image" />
        <p>{{ userName }}</p>
      </div>
      <div class="card_right_container">
        <button
          v-if="loginUserId !== likePost.userId"
          type="button"
          class="btn btn-primary follow_btn"
          @click="toggleFollow"
        >
          {{ props.likePost.followFlg ? "フォロー中" : "フォロー" }}
        </button>
        <label
          for="like"
          class="heart_input"
          :class="{ heart_input_on: likePost.likeFlg }"
          @click="toggleHeart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </label>
        <p class="none_select">{{ likePost.createdAt }}</p>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">{{ likePost.content }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  }
}

.follow_btn {
  font-size: 13px;
  padding: 5px 10px;
  margin-right: 22px;
}

.heart_input {
  position: relative;
  cursor: pointer;
  fill: #fae2e2;
  transition: all 0.1s;
  margin-right: 10px;
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

@media (max-width: 500px) {
  .card_title_container {
    padding-right: 10px;
    padding-left: 10px;

    p {
      margin-left: 5px;
    }
  }

  .follow_btn {
    margin-right: 10px;
  }
}
</style>
