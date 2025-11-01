"use client";
import { useQuery } from "@tanstack/react-query";
import { MeResponse } from "../types/user.types";
import { AuthServiceClient } from "../api/authService";

export function useCurrentUser() {
  const query = useQuery<MeResponse>({
    queryKey: ["currentUser"],
    queryFn: () => AuthServiceClient.getCurrentUserClient(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  console.log("query =>", query.data?.user);

  return {
    user: query.data?.user ?? null,
    success: query.data?.success ?? false,
    loading: query.isLoading || query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
}
