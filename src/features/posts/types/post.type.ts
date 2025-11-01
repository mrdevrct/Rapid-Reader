// features/post/types/post.type.ts

// تایپ برای دسته‌بندی‌ها
export interface PostCategory {
  id: number;
  name: string;
  slug: string;
}

// تایپ برای نویسنده
export interface PostAuthor {
  id: string;
  name: string;
}

// تایپ برای تگ‌ها
export interface PostTag {
  id: number;
  name: string;
  slug: string;
}

// تایپ برای نظرات
export interface PostComment {
  id: number;
  name: string;
  date: string;
  text: string;
}

// تایپ برای پست
export interface Post {
  ID: number;
  title: string;
  excerpt: string;
  content: string; // تغییر از any به string
  date: string;
  modified: string; // اضافه کردن فیلد modified
  categories: PostCategory[]; // اضافه کردن فیلد categories
  tags: PostTag[]; // اضافه کردن فیلد tags
  author: PostAuthor; // اصلاح از string به PostAuthor
  status: string; // اضافه کردن فیلد status
  type: string; // اضافه کردن فیلد type
  permalink: string;
  thumbnail?: { id: number; url: string }; // بدون تغییر
  comments: PostComment[]; // اضافه کردن فیلد comments
}

// تایپ برای پاسخ لیست پست‌ها
export interface PostListResponse {
  page: number;
  per_page: number;
  total_posts: number;
  total_pages: number;
  posts: Post[];
}

// تایپ برای پارامترهای کوئری
export interface PostQueryParams {
  per_page?: number;
  page?: number;
  category?: string;
  tag?: string;
}


export interface PostReviewRequest {
  rating: number; // امتیاز (مثلاً 1 تا 5)
  comment: string; // متن نظر
  user_name?: string; // نام کاربر (اختیاری)
  user_email?: string; // ایمیل کاربر (اختیاری)
}

export interface PostReviewResponse {
  success: boolean;
  message: string;
  review_id?: number; // شناسه نظر ثبت‌شده
}
