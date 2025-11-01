// app/(main)/courses/[slug]/components/ReviewsAccordion.tsx
"use client";

import { useState } from "react";

export function ReviewsAccordion() {
  const [isOpen, setIsOpen] = useState(true);

  const reviews = [
    { id: 1, user: "علی احمدی", text: "عالی بود، خیلی مفید!", rating: 5 },
    { id: 2, user: "سارا محمدی", text: "تکنیک‌ها کاربردی هستن.", rating: 4 },
    { id: 3, user: "رضا کریمی", text: "پیشنهاد می‌کنم به همه.", rating: 5 },
  ];

  return (
    <div className="w-full mt-4 shadow-md rounded-xl bg-gray-50 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold text-right">نظرات</h2>
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
          {reviews.map((review) => (
            <div key={review.id} className="p-3 bg-white border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{review.user}</span>
                <span className="text-xs text-yellow-400">★ {review.rating}</span>
              </div>
              <p className="text-sm text-right">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}