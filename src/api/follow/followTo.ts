import apiClient from "@/api/axios";

interface ToFollowRequest {
  followed_id: number;
}

// フォローするapi
async function toFollowPost(payload: ToFollowRequest) {
  const response = await apiClient.post("/follow/create", payload);
  return response.data;
}

export default toFollowPost;
