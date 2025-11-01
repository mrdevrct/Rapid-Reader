// components/ArticleSingle.tsx
"use client";

import { Post } from "../../types/post.type";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostCover from "./PostCover";
import PostMeta from "./PostMeta";
import PostShare from "./PostShare";
import PostTags from "./PostTags";

interface PostSingleProps {
  post: Post;
}

export default function PostSingle({ post }: PostSingleProps) {
  // نظرات اولیه (برای مثال، می‌توانید از API دریافت کنید)
  const initialComments = [
    {
      id: 1,
      name: "مینا احمدی",
      date: "۱۴۰۴/۰۷/۰۸",
      text: "مقاله بسیار مفیدی بود، مخصوصاً توضیحات مربوط به مراقبت مو 👌",
      rating: 5,
    },
    {
      id: 2,
      name: "نازنین رفیعی",
      date: "۱۴۰۴/۰۷/۰۷",
      text: "خیلی کامل و روان نوشته شده بود، ممنون از تیم بارون 🌸",
      rating: 4,
    },
    {
      id: 3,
      name: "سعید مومنی",
      date: "۱۴۰۴/۰۷/۰۵",
      text: "من این روش‌ها رو امتحان کردم، نتیجه واقعاً خوب بود!",
      rating: 5,
    },
  ];

  return (
    <div className="main-container mt-5 rounded-4xl shadow-lg border-2 border-gray-200 bg-white overflow-hidden">
      <PostCover thumbnail={post.thumbnail} title={post.title} />
      <div className="p-5 space-y-6">
        <PostMeta date={post.date} author={post.author} />
        <PostContent title={post.title} content={post.content} />
        <PostTags categories={post.categories} />
        <PostShare />
        <PostComments postId={post.ID} initialComments={post.comments || []} />
      </div>
    </div>
  );
}