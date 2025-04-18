import { ref } from "vue";
import { defineStore } from "pinia";
import type { RecommendUser } from "@/types/user";
import getUserProfile from "@/api/user/userProfileGet";

export const useUserStore = defineStore("user", () => {
  const recommendUsers = ref<RecommendUser[]>([]);
  const userName = ref<string>("");
  const userComment = ref<string>("");
  const imageUrl = ref<string>("/src/assets/images/no_image.png");

  async function getProfile() {
    const data = await getUserProfile();
    userName.value = data.name;
    userComment.value = data.comment;
    imageUrl.value = data.url;
  }

  return { recommendUsers, userName, userComment, imageUrl, getProfile };
});
