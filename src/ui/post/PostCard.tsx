"use client";
import { Post } from "@/features/posts/types/post.type";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  variant?: "default" | "compact";
}

export default function PostCard({
  post,
  variant = "default",
}: PostCardProps) {
  // حالت فشرده
  if (variant === "compact") {
    return (
      <Link
        href={`/posts/${post.ID}`}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition h-[320px] sm:h-[340px] flex flex-col"
      >
        {/* 🖼 تصویر مقاله */}
        {post.thumbnail?.url && (
          <div className="relative w-full h-[140px] sm:h-[160px] rounded-t-2xl overflow-hidden">
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* 📝 محتوای کارت */}
        <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 text-right">
          <div className="flex flex-col justify-start flex-1">
            <h3 className="text-sm sm:text-[15px] font-bold text-gray-800 mb-1 leading-snug line-clamp-2 h-[42px]">
              {post.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 h-[60px] leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <span className="text-primary font-bold text-xs sm:text-sm hover:underline self-end mt-3">
            مطالعه بیشتر →
          </span>
        </div>
      </Link>
    );
  }

  // حالت پیش‌فرض (نمایش کامل‌تر)
  return (
    <Link
      href={`/posts/${post.ID}`}
      className="block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      {/* 🖼 تصویر مقاله */}
      {post.thumbnail?.url && (
        <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}

      {/* 📝 محتوای کارت */}
      <div className="p-5 text-right">
        {post.date && (
          <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <span>📅</span>
            {post.date}
          </div>
        )}

        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

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
