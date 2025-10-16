// app/(main)/courses/[slug]/components/CourseSectionsAccordion.tsx
"use client";

import { useState } from "react";

export function CourseSectionsAccordion() {
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    { id: 1, title: "قسمت ۱: مقدمه", duration: "۱۵ دقیقه" },
    { id: 2, title: "قسمت ۲: تکنیک‌های پایه", duration: "۳۰ دقیقه" },
    { id: 3, title: "قسمت ۳: تمرینات پیشرفته", duration: "۴۵ دقیقه" },
    { id: 4, title: "قسمت ۴: جمع‌بندی", duration: "۱۰ دقیقه" },
  ];

  return (
    <div className="w-full mt-4 shadow-md rounded-xl bg-gray-50 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold text-right">قسمت‌های دوره</h2>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="mt-3 flex flex-col gap-2">
          {sections.map((section) => (
            <div key={section.id} className="p-3 bg-white border border-gray-200 rounded-lg">
              <p className="text-sm font-medium text-right">{section.title}</p>
              <p className="text-xs text-gray-500 text-right">{section.duration}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}