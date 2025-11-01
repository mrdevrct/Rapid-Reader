// src/features/product/api/categoryService.ts
import { httpClient } from "@/lib/api/httpClient";
import { httpServer } from "@/lib/api/httpServer";
import { categoryApi } from "./categoryApi";
import { CategoryListResponse } from "../types/category.type";

export const CategoryServiceClient = {
  async getAllCategoryClient(): Promise<CategoryListResponse> {
    return httpClient.request<void, CategoryListResponse>(
      categoryApi.getAllCategory
    );
  },
};

export const CategoryServiceServer = {
  async getAllCategoryServer(
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<CategoryListResponse> {
    return httpServer.request<void, CategoryListResponse>(
      categoryApi.getAllCategory,
      undefined,
      {
        revalidate: options.revalidate ?? 300,
        tags: options.tags ?? ["categories"],
      }
    );
  },
};
