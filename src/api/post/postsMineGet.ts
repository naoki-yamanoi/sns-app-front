import apiClient from "@/api/axios";

async function postsMineGet() {
  try {
    const response = await apiClient.get("/posts/mine");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default postsMineGet;
