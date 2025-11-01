// components/post/PostMeta.tsx
import { CalendarDays, User } from "lucide-react";

interface PostMetaProps {
  date: string;
  author: { name: string };
}

export default function PostMeta({ date, author }: PostMetaProps) {
  return (
    <div className="flex flex-wrap justify-between items-center text-gray-600 text-sm border-b border-gray-100 pb-2">
      <div className="flex items-center gap-2">
        <CalendarDays className="w-4 h-4 text-primary" />
        <span>تاریخ انتشار: {date}</span>
      </div>
      <div className="flex items-center gap-2">
        <User className="w-4 h-4 text-primary" />
        <span>نویسنده: {author.name}</span>
      </div>
    </div>
  );
}