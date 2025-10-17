// components/ui/BlogSearchArea.tsx
"use client";
import { Funnel, Search } from "lucide-react";
import { useState } from "react";
import BlogFilter from "../filter/BlogFilter";


export default function BlogSearchArea() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="flex flex-row gap-2 relative">
      {/* دکمه فیلتر فقط در موبایل */}
      <button
        onClick={toggleFilter}
        className="flex md:hidden bg-white rounded-full p-3 items-center gap-2 border border-gray-200"
        aria-label="فیلتر مقالات"
      >
        <Funnel className="w-4 h-4" />
        <span className="text-sm text-gray-600">فیلتر</span>
      </button>

      {/* باکس جستجو */}
      <div className="flex w-full items-center gap-3">
        <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 border-2 border-gray-200 focus-within:border-primary transition-colors">
          <input
            className="flex-1 outline-none text-lg placeholder-gray-400 bg-transparent text-right"
            placeholder="جست‌وجو در مقالات..."
            aria-label="جستجو در مقالات"
          />
          <Search className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* فیلتر در موبایل */}
      <div
        className={`sm:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleFilter}
      >
        {/* اورلی */}
        <div className="absolute inset-0 bg-black/50" />

        {/* پنل فیلتر مقالات */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 transform ${
            isFilterOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <BlogFilter onClose={toggleFilter} isMobile />
        </div>
      </div>
    </div>
  );
}