import apiClient from "@/api/axios";

interface ToLikeRequest {
  post_id: number;
}

// いいねするapi
async function toLikePost(payload: ToLikeRequest) {
  const response = await apiClient.post("/like/create", payload);
  return response.data;
}

export default toLikePost;
