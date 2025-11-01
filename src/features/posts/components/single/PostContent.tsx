// components/post/PostContent.tsx
import parse from "html-react-parser";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PostContentProps {
  title: string;
  content: string;
}

export default function PostContent({ title, content }: PostContentProps) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-right leading-snug">
        {title}
      </h1>
      <div
        className={`text-gray-700 leading-relaxed text-justify transition-all duration-500 ${
          showFullText ? "max-h-full" : "max-h-[400px] overflow-hidden"
        }`}
      >
        {parse(content)}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="flex items-center gap-1 text-primary hover:text-[#5A8A70] font-medium mt-2"
        >
          {showFullText ? (
            <>
              <ChevronUp className="w-4 h-4" /> بستن متن
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> ادامه مطلب
            </>
          )}
        </button>
      </div>
    </div>
  );
}