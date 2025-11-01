"use client";

import { useState } from "react";

export default function AboutUs() {
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: "success" | "error" }>({
    visible: false,
    message: "",
    type: "success",
  });

  // Show toast notification
  const showToast = (message: string, type: "success" | "error" = "success"): void => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type: "success" }), 3000);
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    showToast("پیام شما با موفقیت ارسال شد!", "success");
    e.currentTarget.reset();
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl mt-6 md:mt-8 lg:mt-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">درباره ما</h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          آکادمی آنلاین ما با هدف ارائه آموزش‌های باکیفیت و کاربردی در حوزه فناوری و طراحی تأسیس شده است.
        </p>
      </div>

      {/* About Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
        <h2 className="text-base sm:text-lg font-extrabold mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-brand-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M12 4v16m8-8H4"
            />
          </svg>
          درباره آکادمی
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          آکادمی آنلاین ما در سال ۱۴۰۰ با هدف ارتقای سطح دانش و مهارت‌های حرفه‌ای در حوزه‌های فناوری اطلاعات، برنامه‌نویسی، و طراحی رابط کاربری تأسیس شد. ما دوره‌هایی با کیفیت بالا ارائه می‌دهیم که توسط اساتید برجسته و با تجربه تدریس می‌شوند. هدف ما این است که یادگیری را برای همه در دسترس و لذت‌بخش کنیم.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
        <h2 className="text-base sm:text-lg font-extrabold mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-brand-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          ماموریت ما
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          ما در آکادمی آنلاین به دنبال ایجاد بستری هستیم که هر فرد بتواند با یادگیری مهارت‌های روز دنیا، آینده شغلی خود را تضمین کند. از آموزش‌های کاربردی گرفته تا پشتیبانی مداوم، ما همراه شما هستیم تا به اهداف خود برسید.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
        <h2 className="text-base sm:text-lg font-extrabold mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-brand-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          تیم ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
              <span className="text-brand-600 text-lg">اح</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">احمد محمدی</h3>
              <p className="text-sm text-gray-600">مدرس برنامه‌نویسی</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-lg">سا</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">سارا احمدی</h3>
              <p className="text-sm text-gray-600">مدرس طراحی UI/UX</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-lg">عر</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">علی رضایی</h3>
              <p className="text-sm text-gray-600">مدرس بک‌اند</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4">
        <h2 className="text-base sm:text-lg font-extrabold mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-brand-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          تماس با ما
        </h2>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-1.5">
                نام و نام خانوادگی
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-1.5">
                ایمیل
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
                placeholder="example@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-1.5">
              پیام شما
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
              placeholder="پیام خود را اینجا بنویسید..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-deep hover:bg-primary-main text-white font-bold px-4 py-3 rounded-xl transition active:scale-[0.98]"
          >
            ارسال پیام
          </button>
        </form>
      </section>

      {/* Toast */}
      <div
        className={`fixed right-4 top-4 sm:right-6 sm:top-6 z-50 ${toast.visible ? "" : "hidden"}`}
      >
        <div
          className={
            toast.type === "success"
              ? "bg-white border border-green-200 text-green-700 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2"
              : "bg-white border border-red-200 text-red-700 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{toast.message}</span>
        </div>
      </div>
    </div>
  );
}