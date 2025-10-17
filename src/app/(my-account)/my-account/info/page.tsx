"use client";

import { User, Edit } from "lucide-react";
import Link from "next/link";

export default function InfoPage() {
  // 🔹 در حالت واقعی، از سرور یا context گرفته می‌شود
  const userInfo = {
    name: "رضا محمدی",
    email: "reza.mohammadi@example.com",
    phone: "09123456789",
    joined: "۱۴۰۲/۰۵/۲۱",
  };

  return (
    <section className="px-2">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-6 h-6 text-primary-light" />
        <h1 className="text-2xl font-medium text-primary">اطلاعات شخصی</h1>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="grid gap-4 text-sm text-gray-700">
          <div className="flex flex-col">
            <span className="text-gray-500 mb-1">نام:</span>
            <span className="font-medium">{userInfo.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 mb-1">ایمیل:</span>
            <span className="font-medium">{userInfo.email}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 mb-1">شماره تماس:</span>
            <span className="font-medium fa-num">{userInfo.phone}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 mb-1">تاریخ عضویت:</span>
            <span className="font-medium fa-num">{userInfo.joined}</span>
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/my-account/info/edit"
            className="flex items-center justify-center gap-2 bg-primary-deep text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition"
          >
            <Edit className="w-4 h-4" />
            ویرایش اطلاعات
          </Link>
        </div>
      </div>
    </section>
  );
}
