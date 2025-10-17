"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import productImage from "../../../../../public/images/course1.jpg"
import { ProductCard } from "@/features/home/components/ProductCard";


export default function WishlistPage() {
  // 🔹 در حالت واقعی، از سرور یا context گرفته می‌شود
  const wishlist = [
    {
      image: productImage,
      title: "Happy Feathers",
      price: "۳۰۰,۰۰۰ تومان",
      slug: "happy-feathers",
    },
    {
      image: productImage,
      title: "Strong Steeds",
      price: "۵۰۰,۰۰۰ تومان",
      slug: "strong-steeds",
    },
    {
      image: productImage,
      title: "Golden Care",
      price: "۴۰۰,۰۰۰ تومان",
      slug: "golden-care",
    },
    {
      image: productImage,
      title: "Silver Shine",
      price: "۳۵۰,۰۰۰ تومان",
      slug: "silver-shine",
    },
    {
      image: productImage,
      title: "Bright Minds",
      price: "۴۲۰,۰۰۰ تومان",
      slug: "bright-minds",
    },
    {
      image: productImage,
      title: "Premium Plus",
      price: "۴۸۰,۰۰۰ تومان",
      slug: "premium-plus",
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
        <div className="grid grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <ProductCard {...product} key={product.slug}/>
          ))}
        </div>
      )}
    </section>
  );
}
