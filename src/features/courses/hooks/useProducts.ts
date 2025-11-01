// src/features/product/hooks/useProducts.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductListResponse, ProductQueryParams } from "../types/product.type";
import { ProductServiceClient } from "../api/productService";

export function useProducts(params?: ProductQueryParams) {
  const query = useQuery<ProductListResponse>({
    queryKey: ["products", params],
    queryFn: () => ProductServiceClient.getAllProductsClient(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  console.log("query =>", query.data);

  return {
    products: query.data?.products ?? [],
    totalProducts: query.data?.pagination?.total_products ?? 0,
    totalPages: query.data?.pagination?.total_pages ?? 1,
    currentPage: query.data?.pagination?.current_page ?? 1,
    loading: query.isLoading || query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
}