import { ref } from "vue";
import { defineStore } from "pinia";
import type { FollowPost, LikePost, MyPost } from "@/types/post";
import unLikePost from "@/api/like/likeUn";
import toLikePost from "@/api/like/likeTo";
import unFollowPost from "@/api/follow/followUn";
import toFollowPost from "@/api/follow/followTo";
import postsFollowGet from "@/api/post/postsFollowGet";
import postsLikeGet from "@/api/post/postsLikeGet";
import postsMineGet from "@/api/post/postsMineGet";
import getRecommendUsers from "@/api/user/usersReccomendGet";
import { useUserStore } from "@/stores/userStore";

export const usePostStore = defineStore("post", () => {
  const myPosts = ref<MyPost[]>([]);
  const followPosts = ref<FollowPost[]>([]);
  const likePosts = ref<LikePost[]>([]);

  const userStore = useUserStore();

  async function toggleFollowBtn(followFlg: boolean, userId: number) {
    if (followFlg) {
      await unFollowPost({
        followed_id: userId,
      });
    } else {
      await toFollowPost({
        followed_id: userId,
      });
    }
    // 画面データ更新
    followPosts.value = await postsFollowGet();
    likePosts.value = await postsLikeGet();
    userStore.recommendUsers = await getRecommendUsers();
  }

  async function toggleLikeBtn(likeFlg: boolean, postId: number) {
    if (likeFlg) {
      await unLikePost({
        post_id: postId,
      });
    } else {
      await toLikePost({
        post_id: postId,
      });
    }
    // 画面データ更新
    followPosts.value = await postsFollowGet();
    likePosts.value = await postsLikeGet();
    myPosts.value = await postsMineGet();
  }

  return {
    myPosts,
    followPosts,
    likePosts,
    toggleFollowBtn,
    toggleLikeBtn,
  };
});
