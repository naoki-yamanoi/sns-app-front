import { ref } from "vue";
import { defineStore } from "pinia";
import type { FollowPost, KeywordPost, LikePost, MyPost } from "@/types/post";
import unLikePost from "@/api/like/likeUn";
import toLikePost from "@/api/like/likeTo";
import unFollowPost from "@/api/follow/followUn";
import toFollowPost from "@/api/follow/followTo";
import postsFollowGet from "@/api/post/postsFollowGet";
import postsLikeGet from "@/api/post/postsLikeGet";
import postsMineGet from "@/api/post/postsMineGet";
import getRecommendUsers from "@/api/user/usersReccomendGet";
import { useUserStore } from "@/stores/userStore";
import postsKeywordGet from "@/api/post/postsKeywordGet";

export const usePostStore = defineStore("post", () => {
  const myPosts = ref<MyPost[]>([]);
  const followPosts = ref<FollowPost[]>([]);
  const likePosts = ref<LikePost[]>([]);
  const keywordPosts = ref<KeywordPost[]>([]);
  const searchedKeyword = ref<string>("");
  const doSearchFlg = ref<boolean>(false);

  const userStore = useUserStore();

  // フォロー切り替え処理
  async function toggleFollowBtn(followFlg: boolean, userId: number) {
    if (followFlg) {
      // フォロー外すapi
      await unFollowPost({
        followed_id: userId,
      });
    } else {
      // フォローするapi
      await toFollowPost({
        followed_id: userId,
      });
    }
    // 画面データ更新
    followPosts.value = await postsFollowGet();
    likePosts.value = await postsLikeGet();
    userStore.recommendUsers = await getRecommendUsers();
    // 存在すれば同じ検索キーワードで再取得
    if (keywordPosts.value.length > 0) {
      keywordPosts.value = await postsKeywordGet({
        keyword: searchedKeyword.value,
      });
    }
  }

  // いいね切り替え処理
  async function toggleLikeBtn(likeFlg: boolean, postId: number) {
    if (likeFlg) {
      // いいね外すapi
      await unLikePost({
        post_id: postId,
      });
    } else {
      // いいねするapi
      await toLikePost({
        post_id: postId,
      });
    }
    // 画面データ更新
    followPosts.value = await postsFollowGet();
    likePosts.value = await postsLikeGet();
    myPosts.value = await postsMineGet();
    // 存在すれば同じ検索キーワードで再取得
    if (keywordPosts.value.length > 0) {
      keywordPosts.value = await postsKeywordGet({
        keyword: searchedKeyword.value,
      });
    }
  }

  return {
    myPosts,
    followPosts,
    likePosts,
    keywordPosts,
    searchedKeyword,
    doSearchFlg,
    toggleFollowBtn,
    toggleLikeBtn,
  };
});
