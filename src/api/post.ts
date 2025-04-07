import axios from "axios";
import type { Post } from "./types/post";

export async function getPosts(): Promise<Post[]> {
  const response = await axios.get("/posts");
  return response.data;
}
