import { ref } from "vue";
import { defineStore } from "pinia";
import type { FollowPost, MyPost } from "@/types/post";

export const usePostStore = defineStore("post", () => {
  const myPosts = ref<MyPost[]>([]);
  const followPosts = ref<FollowPost[]>([]);

  return { myPosts, followPosts };
});
