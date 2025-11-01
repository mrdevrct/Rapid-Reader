// src/features/product/hooks/useProductQuery.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductQueryParams } from "../types/product.type";

export const useProductQuery = (
  initialParams: ProductQueryParams = { per_page: 10, page: 1 }
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get initial parameters from URL or initialParams
  const getInitialParams = (): ProductQueryParams => {
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");

    return {
      per_page: parseInt(
        searchParams.get("per_page") || String(initialParams.per_page || 10),
        10
      ),
      page: parseInt(
        searchParams.get("page") || String(initialParams.page || 1),
        10
      ),
      category:
        searchParams.get("category")?.split(",") || initialParams.category,
      type: searchParams.get("type")?.split(",") || initialParams.type,
      tag: searchParams.get("tag")?.split(",") || initialParams.tag,
      min_price: minPrice ? parseInt(minPrice, 10) : initialParams.min_price,
      max_price: maxPrice ? parseInt(maxPrice, 10) : initialParams.max_price,
      search: searchParams.get("search") || initialParams.search,
    };
  };

  const [queryParams, setQueryParams] = useState<ProductQueryParams>(
    getInitialParams()
  );

  // Update URL when queryParams change
  useEffect(() => {
    const currentParams = new URLSearchParams();

    // Set URL parameters
    if (queryParams.per_page) {
      currentParams.set("per_page", queryParams.per_page.toString());
    }
    if (queryParams.page) {
      currentParams.set("page", queryParams.page.toString());
    }
    if (queryParams.category) {
      const categoryValue = Array.isArray(queryParams.category)
        ? queryParams.category.join(",")
        : queryParams.category;
      if (categoryValue) currentParams.set("category", categoryValue);
    }
    if (queryParams.type) {
      const typeValue = Array.isArray(queryParams.type)
        ? queryParams.type.join(",")
        : queryParams.type;
      if (typeValue) currentParams.set("type", typeValue);
    }
    if (queryParams.tag) {
      const tagValue = Array.isArray(queryParams.tag)
        ? queryParams.tag.join(",")
        : queryParams.tag;
      if (tagValue) currentParams.set("tag", tagValue);
    }
    if (queryParams.min_price) {
      currentParams.set("min_price", queryParams.min_price.toString());
    }
    if (queryParams.max_price) {
      currentParams.set("max_price", queryParams.max_price.toString());
    }
    if (queryParams.search) {
      currentParams.set("search", queryParams.search);
    }

    router.replace(`${pathname}?${currentParams.toString()}`, {
      scroll: false,
    });
  }, [queryParams, router, pathname]);

  // Function to update filters
  const updateQueryParams = useCallback(
    (newParams: Partial<ProductQueryParams>) => {
      setQueryParams((prev) => ({
        ...prev,
        ...newParams,
        page: newParams.page !== undefined ? newParams.page : 1, // Reset to page 1 when filters change
      }));
    },
    []
  );

  // Functions for pagination
  const handlePrev = useCallback(() => {
    setQueryParams((prev) => ({
      ...prev,
      page: Math.max(1, (prev.page || 1) - 1),
    }));
  }, []);

  const handleNext = useCallback((totalPages: number) => {
    setQueryParams((prev) => ({
      ...prev,
      page: Math.min(totalPages, (prev.page || 1) + 1),
    }));
  }, []);

  const handleGoToPage = useCallback((page: number) => {
    setQueryParams((prev) => ({
      ...prev,
      page,
    }));
  }, []);

  // Function to reset filters
  const resetQueryParams = useCallback(() => {
    setQueryParams({
      per_page: initialParams.per_page || 10,
      page: 1,
    });
  }, [initialParams]);

  return {
    queryParams,
    updateQueryParams,
    handlePrev,
    handleNext,
    handleGoToPage,
    resetQueryParams,
  };
};