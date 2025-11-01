"use client";

import { useQuery } from "@tanstack/react-query";
import { CategoryListResponse } from "../types/category.type";
import { CategoryServiceClient } from "../api/categoryService";

export function useCategories() {
  const query = useQuery<CategoryListResponse>({
    queryKey: ["categories"],
    queryFn: () => CategoryServiceClient.getAllCategoryClient(),
    staleTime: 1000 * 60 * 10,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return {
    categories: query.data?.categories ?? [],
    loading: query.isLoading || query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
}
