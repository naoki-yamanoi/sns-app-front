import { http, HttpResponse } from "msw";
import postsData from "@/mock/posts.json";

export const handlers = [
  http.get("/posts", () => {
    return HttpResponse.json(postsData);
  }),
];
