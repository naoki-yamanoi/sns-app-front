import apiClient from "@/api/axios";

async function getRecommendUsers() {
  try {
    const response = await apiClient.get("/users/recommend");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default getRecommendUsers;
