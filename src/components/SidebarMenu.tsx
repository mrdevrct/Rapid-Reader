"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function SidebarMenu() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const menuItems = [
    { href: "/", label: "خانه", icon: HomeIcon },
    { href: "/courses", label: "دوره‌ها", icon: CategoryIcon },
    { href: "/cart", label: "سبد خرید", icon: CartIcon },
    { href: "/terms", label: "قوانین و مقررات", icon: DocumentIcon },
    { href: "/blog", label: "مقالات", icon: DocumentIcon },
    { href: "/about", label: "تماس با ما", icon: PhoneIcon },
  ];

  // Close sidebar with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setIsSidebarOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-500 ${
        isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => setIsSidebarOpen(false)}
    >
      {/* Sidebar */}
      <div
        className={`absolute right-0 top-0 w-80 h-full bg-gray-50 shadow-2xl transition-transform duration-500 border-l border-neutral-200 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">آ</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">منوی اصلی</h2>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-4 p-2 rounded-xl hover:bg-brand-100/50 hover:shadow-md transition-all duration-300 text-gray-700 hover:text-brand-600"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Icon className="text-primary-main" />
              </div>
              <span className="font-medium text-base">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-4 p-2 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-1">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <UserIcon className="text-primary-main" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">کاربر عزیز</p>
              <p className="text-sm text-gray-600">خوش آمدید به آکادمی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Icons --- */
function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9,22 9,12 15,12 15,22"></polyline>
    </svg>
  );
}

function CategoryIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <polyline points="2,8 12,14 22,8"></polyline>
    </svg>
  );
}

function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );
}

function DocumentIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}
