import apiClient from "@/api/axios";

async function getUserProfile() {
  try {
    const response = await apiClient.get("/user/profile");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default getUserProfile;
