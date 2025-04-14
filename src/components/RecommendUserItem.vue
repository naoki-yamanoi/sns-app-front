<script setup lang="ts">
import getRecommendUsers from "@/api/user/usersReccomendGet";
import { usePostStore } from "@/stores/postStore";
import { useUserStore } from "@/stores/userStore";
import type { RecommendUser } from "@/types/user";

const props = defineProps<{
  recommendUser: RecommendUser;
}>();
const postStore = usePostStore();
const userStore = useUserStore();

// フォロー切り替え処理
async function toggleFollow() {
  await postStore.toggleFollowBtn(props.recommendUser.followFlg, props.recommendUser.id);
  userStore.recommendUsers = await getRecommendUsers();
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
        <button type="button" class="btn btn-primary follow_btn" @click="toggleFollow">
          {{ props.recommendUser.followFlg ? "フォロー中" : "フォロー" }}
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
