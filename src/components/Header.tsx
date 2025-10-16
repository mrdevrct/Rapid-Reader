/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";

export default function Header() {
  const { setIsSidebarOpen } = useSidebar();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-30 flex items-center justify-between
      h-14 md:h-16 px-4 py-3 rounded-b-2xl transition-all duration-500 backdrop-blur-md
      ${
        isSticky
          ? "bg-white/90 shadow-lg translate-y-0"
          : "bg-white/100 shadow-none"
      }
      `}
    >
      {/* Hamburger Menu (فقط موبایل) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-brand-600 transition-all lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Title */}
      <div className="text-primary-deep text-xl font-black">تندخوان برتر</div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
        <Link href="/">خانه</Link>
        <Link href="/courses">دوره‌ها</Link>
        <Link href="/rules">قوانین و مقررات</Link>
        <Link href="/contact">ارتباط با ما</Link>
      </nav>

      {/* Icons Section */}
      <div className="flex items-center gap-3">
        {/* Search Icon */}
        <div className="w-8 h-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="11.5" cy="11.5" r="7.5"></circle>
            <path d="M16.893 16.42L19.973 19.5"></path>
          </svg>
        </div>

        {/* Cart Icon */}
        <div className="w-8 h-8 flex items-center justify-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
