import apiClient from "@/api/axios";

interface createPostRequest {
  post: string;
}

// 投稿作成api
async function createPost(payload: createPostRequest) {
  const response = await apiClient.post("/post/create", payload);
  return response.data;
}

export default createPost;
