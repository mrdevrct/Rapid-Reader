"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-8 pb-2 sm:py-8 bg-white max-w-3xl mx-auto">
      <div className="">
        {/* 🟢 عنوان بخش */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            درخواست مشاوره تخصصی
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            لطفاً فرم زیر را با دقت تکمیل کنید تا کارشناسان ما در سریع‌ترین زمان
            ممکن با شما تماس بگیرند.
          </p>
        </div>

        {/* 🧾 فرم مشاوره */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-4 sm:p-6 rounded-3xl shadow-xl border border-gray-100"
        >
          {/* اطلاعات کاربر */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div>
              <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-2">
                نام و نام خانوادگی <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                className="form-input w-full px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-[#6EAC8B] focus:ring-2 focus:ring-[#6EAC8B]/20 transition-all"
                placeholder="نام کامل خود را وارد کنید"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-2">
                شماره تماس <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="tel"
                className="form-input w-full px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-[#6EAC8B] focus:ring-2 focus:ring-[#6EAC8B]/20 transition-all"
                placeholder="09123456789"
              />
            </div>
          </div>

          {/* ایمیل و نوع مشاوره */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div>
              <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-2">
                ایمیل
              </label>
              <input
                type="email"
                className="form-input w-full px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-[#6EAC8B] focus:ring-2 focus:ring-[#6EAC8B]/20 transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-2">
                نوع مشاوره <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="form-input w-full px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-[#6EAC8B] focus:ring-2 focus:ring-[#6EAC8B]/20 transition-all"
              >
                <option value="">انتخاب کنید</option>
                <option value="phone">مشاوره تلفنی</option>
                <option value="online">مشاوره آنلاین</option>
                <option value="in-person">مشاوره حضوری</option>
              </select>
            </div>
          </div>

          {/* موضوع */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-2">
              موضوع مشاوره <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              className="form-input w-full px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-[#6EAC8B] focus:ring-2 focus:ring-[#6EAC8B]/20 transition-all resize-none"
              placeholder="لطفاً موضوع مشاوره و سوالات خود را بنویسید..."
            ></textarea>
          </div>

          {/* دکمه ارسال */}
          <button
            type="submit"
            className="w-full bg-primary-deep text-white py-3 sm:py-4 px-5 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            ارسال درخواست مشاوره
          </button>
        </form>

        {/* پیام موفقیت */}
        {submitted && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#6EAC8B] text-white px-6 py-3 rounded-xl shadow-xl text-base sm:text-lg font-medium z-50 animate-in fade-in slide-in-from-top-2">
            درخواست شما با موفقیت ارسال شد!
          </div>
        )}
      </div>
    </div>
  );
}
