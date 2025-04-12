import apiClient from "@/api/axios";

async function postsFollowGet() {
  try {
    const response = await apiClient.get("/posts/follow");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default postsFollowGet;
