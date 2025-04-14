import { ref } from "vue";
import { defineStore } from "pinia";
import type { FollowPost, LikePost, MyPost } from "@/types/post";
import unLikePost from "@/api/like/likeUn";
import toLikePost from "@/api/like/likeTo";
import unFollowPost from "@/api/follow/followUn";
import toFollowPost from "@/api/follow/followTo";
import type { RecommendUser } from "@/types/user";

export const usePostStore = defineStore("post", () => {
  const myPosts = ref<MyPost[]>([]);
  const followPosts = ref<FollowPost[]>([]);
  const likePosts = ref<LikePost[]>([]);
  const recommendUsers = ref<RecommendUser[]>([]);

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
  }

  return {
    myPosts,
    followPosts,
    likePosts,
    recommendUsers,
    toggleFollowBtn,
    toggleLikeBtn,
  };
});
