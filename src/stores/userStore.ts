import { ref } from "vue";
import { defineStore } from "pinia";
import type { RecommendUser } from "@/types/user";

export const useUserStore = defineStore("user", () => {
  const recommendUsers = ref<RecommendUser[]>([]);

  return { recommendUsers };
});
