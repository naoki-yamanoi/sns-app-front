import apiClient from "@/api/axios";

async function editUserProfile(formData: FormData) {
  try {
    const response = await apiClient.post("/user/profile/edit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default editUserProfile;
