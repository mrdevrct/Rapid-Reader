/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSidebar } from "@/context/SidebarContext";

export default function Header() {
  const { setIsSidebarOpen } = useSidebar();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-white h-14 py-3 px-4 shadow-md rounded-b-2xl">
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-brand-600 transition-all"
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
    </header>
  );
}
