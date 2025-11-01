// src/features/post/hooks/usePosts.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { PostListResponse, PostQueryParams } from "../types/post.type";
import { PostServiceClient } from "../api/postService";

export function usePosts(params?: PostQueryParams) {
  const query = useQuery<PostListResponse>({
    queryKey: ["posts", params],
    queryFn: () => PostServiceClient.getAllPostsClient(params),
    staleTime: 1000 * 60 * 5, // کش ۵ دقیقه‌ای
    retry: 1,
  });

  return {
    posts: query.data?.posts ?? [],
    totalPosts: query.data?.total_posts ?? 0,
    totalPages: query.data?.total_pages ?? 1,
    currentPage: query.data?.page ?? 1,
    loading: query.isLoading || query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
}
