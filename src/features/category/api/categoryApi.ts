// src/features/product/api/productApi.ts
import { Endpoint } from "@/lib/api/endpoint.type";
import { CategoryListResponse } from "../types/category.type";

export const categoryApi = {
  getAllCategory: {
    path: "/wp-json/custom/v1/product-categories",
    method: "GET",
    requiresAuth: false,
  } as Endpoint<void, CategoryListResponse>,
};
