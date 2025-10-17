"use client";

import { LogOut } from "lucide-react";

export default function ProfileTopBar() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="flex items-center justify-between px-2">
      <div className="text-lg font-medium text-gray-800">پروفایل</div>
      <div className="relative">
        <button
          onClick={handleLogout}
          className="p-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
          title="خروج از حساب"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
