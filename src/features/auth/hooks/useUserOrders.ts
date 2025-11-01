"use client";

import { useQuery } from "@tanstack/react-query";
import { AuthServiceServer } from "../api/authService";
import { OrdersResponse } from "../types/order.types";

export function useUserOrders() {
  const { data, error, isLoading, isFetching, refetch } =
    useQuery<OrdersResponse>({
      queryKey: ["userOrders"],
      queryFn: AuthServiceServer.getUserOrdersServer,
      staleTime: 1000 * 60 * 2, // ۲ دقیقه کش
      retry: false,
    });

  console.log(data);

  return {
    orders: data ?? [],
    loading: isLoading || isFetching,
    error,
    refetch,
  };
}
