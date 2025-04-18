import apiClient from "@/api/axios";

interface UnLikeRequest {
  post_id: number;
}

// いいね外すapi
async function unLikePost(payload: UnLikeRequest) {
  const response = await apiClient.post("/like/delete", payload);
  return response.data;
}

export default unLikePost;
