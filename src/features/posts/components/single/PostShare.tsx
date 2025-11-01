// components/post/PostShare.tsx
import { Share2 } from "lucide-react";

export default function PostShare() {
  return (
    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
      <span className="text-gray-700 font-medium flex items-center gap-2">
        <Share2 className="w-4 h-4 text-primary" /> اشتراک‌گذاری مقاله:
      </span>
      <div className="flex gap-2">
        <button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center">
          <i className="fa-brands fa-telegram"></i>
        </button>
        <button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center">
          <i className="fa-brands fa-whatsapp"></i>
        </button>
        <button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center">
          <i className="fa-brands fa-x-twitter"></i>
        </button>
      </div>
    </div>
  );
}