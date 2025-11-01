// src/features/product/api/productService.ts
import { httpClient } from "@/lib/api/httpClient";
import { httpServer } from "@/lib/api/httpServer";
import { productApi } from "./productApi";
import {
  Product,
  ProductListResponse,
  ProductQueryParams,
  ProductReviewRequest,
  ProductReviewResponse,
  WorksheetResponse,
  TicketResponse,
  SectionResponse,
} from "../types/product.type";

// 💻 --- Client Service ---
export const ProductServiceClient = {
  // موجود
  async getAllProductsClient(
    params?: ProductQueryParams
  ): Promise<ProductListResponse> {
    return httpClient.request(productApi.getAllProducts, params);
  },

  async getSingleProductClient(slug: string): Promise<Product> {
    return httpClient.request(productApi.getSingleProduct, { slug });
  },

  async addProductReviewClient(
    id: number,
    data: ProductReviewRequest
  ): Promise<ProductReviewResponse> {
    return httpClient.request(productApi.addProductReview, { id, ...data });
  },

  // جدید
  async getWorksheetsClient(product_id: number): Promise<WorksheetResponse> {
    return httpClient.request(productApi.getWorksheets, { product_id });
  },

  async getTicketClient(product_id: number): Promise<TicketResponse> {
    return httpClient.request(productApi.getTicket, { product_id });
  },

  async getSectionsClient(product_id: number): Promise<SectionResponse> {
    return httpClient.request(productApi.getSections, { product_id });
  },
};

// --- Server Service ---
export const ProductServiceServer = {
  // موجود
  async getAllProductsServer(
    params?: ProductQueryParams,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<ProductListResponse> {
    return httpServer.request(productApi.getAllProducts, params, {
      revalidate: options.revalidate ?? 180,
      tags: options.tags ?? ["products"],
    });
  },

  async getSingleProductServer(
    slug: string,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<Product> {
    return httpServer.request(
      productApi.getSingleProduct,
      { slug },
      {
        revalidate: options.revalidate ?? 180,
        tags: options.tags ?? [`product:${slug}`],
      }
    );
  },

  // جدید: با کش مناسب
  async getWorksheetsServer(
    product_id: number,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<WorksheetResponse> {
    return httpServer.request(
      productApi.getWorksheets,
      { product_id },
      {
        revalidate: options.revalidate ?? 300,
        tags: options.tags ?? [`worksheets:${product_id}`],
      }
    );
  },

  async getTicketServer(
    product_id: number,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<TicketResponse> {
    return httpServer.request(
      productApi.getTicket,
      { product_id },
      {
        revalidate: options.revalidate ?? 60, // تیکت‌ها سریع‌تر آپدیت میشن
        tags: options.tags ?? [`ticket:${product_id}`],
      }
    );
  },

  async getSectionsServer(
    product_id: number,
    options: { revalidate?: number; tags?: string[] } = {}
  ): Promise<SectionResponse> {
    return httpServer.request(
      productApi.getSections,
      { product_id },
      {
        revalidate: options.revalidate ?? 3600,
        tags: options.tags ?? [`sections:${product_id}`],
      }
    );
  },
};
