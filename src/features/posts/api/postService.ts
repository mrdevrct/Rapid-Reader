// src/features/article/api/articleService.ts
import { httpClient } from "@/lib/api/httpClient";
import { httpServer } from "@/lib/api/httpServer";
import { postApi } from "./postApi";
import {
  Post,
  PostListResponse,
  PostQueryParams,
  PostReviewRequest,
  PostReviewResponse,
} from "../types/post.type";

// 💻 --- کلاینت سرویس ---
export const PostServiceClient = {
  async getAllPostsClient(params?: PostQueryParams): Promise<PostListResponse> {
    return httpClient.request<PostQueryParams, PostListResponse>(
      postApi.getAllPosts,
      params
    );
  },

  async getSinglePostClient(id: number): Promise<Post> {
    return httpClient.request<{ id: number }, Post>(postApi.getSinglePost, {
      id,
    });
  },

  async addPostReviewClient(
    id: number,
    data: PostReviewRequest
  ): Promise<PostReviewResponse> {
    return httpClient.request<
      { id: number } & PostReviewRequest,
      PostReviewResponse
    >(postApi.addPostReview, { id, ...data });
  },
};

// 🖥 --- سرور سرویس ---
export const PostServiceServer = {
  async getAllPostsServer(
    params?: PostQueryParams,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<PostListResponse> {
    return httpServer.request<PostQueryParams, PostListResponse>(
      postApi.getAllPosts,
      params,
      { revalidate: options.revalidate ?? 120, tags: options.tags ?? ["posts"] }
    );
  },

  async getSinglePostServer(
    id: number,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<Post> {
    return httpServer.request<{ id: number }, Post>(
      postApi.getSinglePost,
      { id },
      {
        revalidate: options.revalidate ?? 120,
        tags: options.tags ?? [`post:${id}`],
      }
    );
  },
};
