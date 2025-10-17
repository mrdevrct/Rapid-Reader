"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  // 🔹 در حالت واقعی، از سرور یا context گرفته می‌شود
  const wishlist = [
    {
      id: 1,
      name: "کرم آبرسان پوست خشک نیوآ",
      price: 185000,
      image: "/img/creame.svg",
    },
    {
      id: 2,
      name: "کاندوم تاخیری مدل Ultra Feel",
      price: 89000,
      image: "/img/candom.png",
    },
    {
      id: 3,
      name: "شامپو ضد ریزش مو",
      price: 145000,
      image: "/img/zibayi.png",
    },
  ];

  const isEmpty = wishlist.length === 0;

  return (
    <section className="px-2">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-6 h-6 text-[#6EAC8B]" />
        <h1 className="text-2xl font-medium text-primary">علاقه‌مندی‌ها</h1>
      </div>

      {/* 📦 محتوا */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Heart className="w-12 h-12 text-gray-300 mb-4" />
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            لیست علاقه‌مندی‌ها خالی است!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            محصولی را به علاقه‌مندی‌های خود اضافه نکرده‌اید.
          </p>
          <Link
            href="/"
            className="bg-[#6EAC8B] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              <Link href={`/product/${item.id}`}>
                <div className="relative w-full h-[140px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-3 text-right flex flex-col gap-2">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-5 h-[2.6em]">
                  {item.name}
                </h3>
                <p className="text-[#6EAC8B] font-medium text-sm fa-num">
                  {Number(item.price).toLocaleString("fa-IR")} تومان
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <button className="bg-[#6EAC8B] hover:bg-[#5A9472] text-white p-1.5 rounded-full transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 p-1"
                    title="حذف از علاقه‌مندی‌ها"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
