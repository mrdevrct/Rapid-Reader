// src/features/product/api/productApi.ts
import { Endpoint } from "@/lib/api/endpoint.type";
import {
  ProductListResponse,
  Product,
  ProductReviewRequest,
  ProductReviewResponse,
  ProductQueryParams,
  WorksheetResponse,
  TicketResponse,
  SectionResponse,
} from "../types/product.type";

export const productApi = {
  // موجود
  getAllProducts: {
    path: "/wp-json/custom/v1/products",
    method: "GET",
  } as Endpoint<ProductQueryParams, ProductListResponse>,

  getSingleProduct: {
    path: (req: { slug: string }) => `/wp-json/custom/v1/product/${req.slug}`,
    method: "GET",
  } as Endpoint<{ slug: string }, Product>,

  addProductReview: {
    path: (req: { id: number }) =>
      `/wp-json/custom/v1/product/${req.id}/review`,
    method: "POST",
    requiresAuth: false,
  } as Endpoint<{ id: number } & ProductReviewRequest, ProductReviewResponse>,

  // جدید: کاربرگ‌ها
  getWorksheets: {
    path: (req: { product_id: number }) =>
      `/wp-json/custom/v1/product-worksheets?product_id=${req.product_id}`,
    method: "GET",
  } as Endpoint<{ product_id: number }, WorksheetResponse>,

  // جدید: تیکت
  getTicket: {
    path: (req: { product_id: number }) =>
      `/wp-json/custom/v1/product-tickets?product_id=${req.product_id}`,
    method: "GET",
  } as Endpoint<{ product_id: number }, TicketResponse>,

  // جدید: سکشن‌ها
  getSections: {
    path: (req: { product_id: number }) =>
      `/wp-json/custom/v1/product-sections?product_id=${req.product_id}`,
    method: "GET",
  } as Endpoint<{ product_id: number }, SectionResponse>,
};
