// components/post/PostTags.tsx
import { Tag } from "lucide-react";

interface PostTagsProps {
  categories: { name: string }[];
}

export default function PostTags({ categories }: PostTagsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
      <Tag className="w-4 h-4 text-primary" />
      <span className="text-gray-700 font-medium">دسته‌بندی‌ها:</span>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, i) => (
          <span
            key={i}
            className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
          >
            #{category.name}
          </span>
        ))}
      </div>
    </div>
  );
}