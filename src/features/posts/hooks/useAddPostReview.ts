// src/features/post/hooks/useAddPostReview.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import {
  PostReviewRequest,
  PostReviewResponse,
} from "../types/post.type";
import { PostServiceClient } from "../api/postService";

interface AddPostReviewArgs {
  id: number;
  data: PostReviewRequest;
}

export function useAddPostReview() {
  const mutation = useMutation<PostReviewResponse, Error, AddPostReviewArgs>({
    mutationFn: ({ id, data }) =>
      PostServiceClient.addPostReviewClient(id, data),
  });

  return {
    addReview: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}