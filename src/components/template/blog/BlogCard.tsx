// components/template/blog/BlogCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  desc: string;
  img: string;
  slug: string;
  date?: string;
  category?: string;
}

interface BlogCardProps {
  blog: Blog;
  variant?: "default" | "compact";
}

export default function BlogCard({ blog, variant = "default" }: BlogCardProps) {
  // اگر variant برابر compact باشد، UI فشرده نشان داده می‌شود
  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${blog.slug}`}
        className="block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition h-[320px] sm:h-[340px] flex flex-col"
      >
        {/* 🖼 تصویر مقاله */}
        <div className="relative w-full h-[140px] sm:h-[160px] rounded-t-2xl overflow-hidden">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* 📝 محتوای کارت */}
        <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 text-right">
          <div className="flex flex-col justify-start flex-1">
            <h3 className="text-sm sm:text-[15px] font-bold text-gray-800 mb-1 leading-snug line-clamp-2 h-[42px]">
              {blog.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 h-[60px] leading-relaxed">
              {blog.desc}
            </p>
          </div>

          <span className="text-primary font-bold text-xs sm:text-sm hover:underline self-end mt-3">
            مطالعه بیشتر →
          </span>
        </div>
      </Link>
    );
  }

  // حالت پیش‌فرض (برای صفحه بلاگ‌ها)
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      {/* 🖼 تصویر مقاله */}
      <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Overlay برای تصویر */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* دسته‌بندی روی تصویر */}
        {blog.category && (
          <span className="absolute top-3 left-3 text-xs text-white bg-primary/90 px-3 py-1 rounded-full backdrop-blur-sm">
            {blog.category}
          </span>
        )}
      </div>

      {/* 📝 محتوای کارت */}
      <div className="p-5 text-right">
        {/* تاریخ */}
        {blog.date && (
          <div className="text-xs text-gray-500 mb-3 fa-num flex items-center gap-1">
            <span>📅</span>
            {blog.date}
          </div>
        )}

        {/* عنوان */}
        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-2">
          {blog.title}
        </h3>

        {/* توضیحات */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {blog.desc}
        </p>

        {/* دکمه مطالعه بیشتر */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-primary font-bold text-sm hover:underline">
            مطالعه مقاله
          </span>
          <span className="text-gray-400 text-xs">⏳ ۵ دقیقه مطالعه</span>
        </div>
      </div>
    </Link>
  );
}
