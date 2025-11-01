"use client";

import Link from "next/link";

interface LoginRequiredProps {
  title?: string;
}

function LoginRequired({ title = "حساب کاربری" }: LoginRequiredProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="bg-gradient-to-r from-primary to-[#5a9472] text-white rounded-2xl p-6 sm:p-8 shadow-md w-full max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 leading-relaxed">
          <span className="block">برای مشاهده {title}،</span>
          <span className="block">وارد شوید</span>
        </h1>

        <p className="text-white/90 text-sm sm:text-base mb-6">
          لطفاً ابتدا وارد حساب خود شوید یا ثبت‌نام کنید تا به بخش {title} دسترسی داشته باشید.
        </p>

        <Link
          href="/auth/login"
          className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-xl hover:bg-gray-100 transition shadow-sm"
        >
          ورود / ثبت‌نام
        </Link>
      </div>
    </div>
  );
}

export default LoginRequired;
