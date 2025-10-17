"use client";

import Link from "next/link";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

export default function OrdersPage() {
  // ⚙️ در حالت واقعی از API می‌آید
  const orders = [
    {
      id: "ORD-45213",
      date: "۱۴۰۳/۰۶/۱۰",
      total: 385000,
      status: "تحویل داده شده",
      color: "text-green-600",
      bg: "bg-green-50",
      icon: CheckCircle,
    },
    {
      id: "ORD-45144",
      date: "۱۴۰۳/۰۵/۲۹",
      total: 260000,
      status: "در حال ارسال",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: Truck,
    },
    {
      id: "ORD-45077",
      date: "۱۴۰۳/۰۵/۱۵",
      total: 175000,
      status: "در حال آماده‌سازی",
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: Clock,
    },
  ];

  const isEmpty = orders.length === 0;

  return (
      <section className="px-2">
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-6 h-6 text-[#6EAC8B]" />
          <h1 className="text-2xl font-medium text-primary">
            آخرین خریدهای من
          </h1>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          سفارش‌های اخیر شما در فروشگاه بارون 🌿
        </p>

        {/* 📦 درصورت خالی بودن */}
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Package className="w-12 h-12 text-gray-300 mb-4" />
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              هنوز سفارشی ثبت نکرده‌اید!
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              پس از خرید، سفارش‌های شما در این بخش نمایش داده می‌شوند.
            </p>
            <Link
              href="/"
              className="bg-[#6EAC8B] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition"
            >
              رفتن به فروشگاه
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {orders.map((order) => {
              const Icon = order.icon;
              return (
                <div
                  key={order.id}
                  className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300"
                >
                  {/* 🔹 بالای کارت */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 ${order.bg} ${order.color} flex items-center justify-center rounded-full`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">شماره سفارش</p>
                        <p className="text-sm font-medium text-gray-800">
                          {order.id}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/profile/orders/${order.id}`}
                      className="text-sm text-[#6EAC8B] font-medium hover:underline"
                    >
                      مشاهده جزئیات
                    </Link>
                  </div>

                  {/* 🔸 جزئیات سفارش */}
                  <div className="grid grid-cols-3 gap-3 text-sm text-gray-700">
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">تاریخ ثبت:</span>
                      <span className="font-medium">{order.date}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">مبلغ کل:</span>
                      <span className="text-[#6EAC8B] font-medium fa-num">
                        {Number(order.total).toLocaleString("fa-IR")} تومان
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">وضعیت:</span>
                      <span
                        className={`font-medium ${order.color} flex items-center gap-2`}
                      >
                        <Icon size={16} className={order.color} />
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
  );
}
