/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/product/types/product.type.ts

// --- Worksheet Types ---
export interface WorksheetQuestion {
  id: number;
  text: string;
  type: "number" | "checkbox";
}

export interface Worksheet {
  id: number;
  title: string;
  questions: WorksheetQuestion[];
}

export interface WorksheetResponse {
  product_id: number;
  max_allowed_submissions: number;
  worksheets: Worksheet[];
  submissions: any[]; // بعداً می‌تونیم تایپ دقیقش کنیم
}

// --- Ticket Types ---
export interface TicketMessage {
  id: number;
  message: string;
  support: boolean; // true = پشتیبانی، false = کاربر
}

export interface TicketResponse {
  ticket_id: number;
  product_id: number;
  can_send: boolean;
  messages: TicketMessage[];
}

// --- Section Types ---
export interface CourseSection {
  title: string;
  content: string;
  url: string;
  free: boolean;
}

export interface SectionResponse {
  product_id: number;
  user_logged_in: boolean;
  has_purchased: boolean;
  can_view_free: boolean;
  sections: CourseSection[];
  total_sections: number;
}

// --- Product Types ---
export interface Product {
  id: number;
  slug: string;
  name: string;
  title?: string; // alias
  type: string;
  status: string;
  permalink: string | false;
  description: string;
  short_description: string;
  sku: string;
  price: number | null;
  regular_price: string;
  sale_price: string;
  stock_status: string;
  stock_quantity: number | null;
  image: string | false;
  gallery_images: string[];
  categories: any[];
  tags: any[];
  attributes: any[];
  variations: any[];
  reviews: any[];
  tiered_discounts: any[];
  last_category_hierarchy: any[];
  has_purchased: boolean;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

export interface ProductReviewRequest {
  rating: number;
  comment: string;
}

export interface ProductReviewResponse {
  id: number;
  rating: number;
  comment: string;
  userId: number;
  createdAt: string;
}