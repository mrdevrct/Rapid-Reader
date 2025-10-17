"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// ====== آیکون‌های Lucide ======
import { Home, BookOpen, ShoppingCart, MessageSquare, User } from "lucide-react";

const links = [
  { name: "خانه", icon: Home, path: "/" },
  { name: "دوره‌ها", icon: BookOpen, path: "/courses" },
  { name: "سبد خرید", icon: ShoppingCart, path: "/cart" },
  { name: "مشاوره", icon: MessageSquare, path: "/consult" },
  { name: "حساب کاربری", icon: User, path: "/my-account" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [active, setActive] = useState("خانه");

  useEffect(() => {
    const currentLink = links.find(
      (link) => link.path === pathname || (link.path !== "/" && pathname.startsWith(link.path))
    );
    if (currentLink) {
      setActive(currentLink.name);
    }
  }, [pathname]);

  return (
    <nav className="fixed bottom-2 left-0 right-0 flex justify-center z-10 md:hidden">
      <div className="flex justify-center items-center gap-2 w-[369px] h-[64px] px-[14px] py-[13px] bg-white border border-gray-400 rounded-[32px] shadow-sm">
        {links.map((link) => {
          const activeLink = active === link.name;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.path}
              className="relative flex justify-center items-center"
              onClick={() => setActive(link.name)}
            >
              <AnimatePresence>
                {activeLink && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute w-[105px] h-[37px] rounded-[24px] bg-red-600 shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  activeLink ? "w-[105px] text-white" : "w-[43px] text-gray-800"
                }`}
              >
                <Icon
                  className={`w-[22px] h-[22px] ${
                    activeLink ? "text-white" : "text-gray-700"
                  } transition-colors`}
                  strokeWidth={2}
                />
                {activeLink && (
                  <span className="text-[13px] font-[Yekan_Bakh] font-bold mr-[8px]">
                    {link.name}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
