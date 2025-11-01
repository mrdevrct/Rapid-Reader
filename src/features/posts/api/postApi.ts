// src/features/post/api/blogApi.ts
import { Endpoint } from "@/lib/api/endpoint.type";
import { PostListResponse, Post, PostQueryParams, PostReviewRequest, PostReviewResponse } from "../types/post.type";

export const postApi = {
  getAllPosts: {
    path: "/wp-json/custom/v1/posts",
    method: "GET",
    requiresAuth: false,
  } as Endpoint<PostQueryParams, PostListResponse>,

  getSinglePost: {
    path: (req: { id: number }) => `/wp-json/custom/v1/post/${req.id}`,
    method: "GET",
    requiresAuth: false,
  } as Endpoint<{ id: number }, Post>,

  addPostReview: {
    path: (req: { id: number }) =>
      `/wp-json/custom/v1/post/${req.id}/review`,
    method: "POST",
    requiresAuth: false,
  } as Endpoint<{ id: number } & PostReviewRequest, PostReviewResponse>,
};
