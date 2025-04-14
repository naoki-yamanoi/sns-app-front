import apiClient from "@/api/axios";

async function postsLikeGet() {
  try {
    const response = await apiClient.get("/posts/like");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default postsLikeGet;
