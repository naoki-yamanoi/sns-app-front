<script setup lang="ts">
import toFollowPost from "@/api/follow/followTo";
import unFollowPost from "@/api/follow/followUn";
import postsFollowGet from "@/api/post/postsFollowGet";
import { usePostStore } from "@/stores/postStore";
import type { RecommendUser } from "@/types/user";

const props = defineProps<{
  recommendUser: RecommendUser;
}>();
const emit = defineEmits(["to-follow", "un-follow"]);
const postStore = usePostStore();

// フォローする処理
async function toFollow() {
  await toFollowPost({
    followed_id: props.recommendUser.id,
  });
  emit("to-follow", true);
  postStore.followPosts = await postsFollowGet();
}
// フォロー外す処理
async function unFollow() {
  await unFollowPost({
    followed_id: props.recommendUser.id,
  });
  emit("un-follow", false);
  postStore.followPosts = await postsFollowGet();
}
</script>

<template>
  <div class="card">
    <div class="card-header card_title_container">
      <div class="card_user_container">
        <img :src="props.recommendUser.image" class="post_user_image" />
        <p>{{ props.recommendUser.name }}</p>
      </div>
      <div class="card_right_container">
        <button
          v-if="props.recommendUser.followFlg"
          type="button"
          class="btn btn-primary follow_btn"
          @click="unFollow"
        >
          フォロー中
        </button>
        <button
          v-if="!props.recommendUser.followFlg"
          type="button"
          class="btn btn-primary follow_btn"
          @click="toFollow"
        >
          フォロー
        </button>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">{{ props.recommendUser.comment }}</p>
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
</style>
