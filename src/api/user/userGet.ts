import apiClient from "@/api/axios";

async function getUserId() {
  try {
    const response = await apiClient.get("/user");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default getUserId;
