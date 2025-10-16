"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "خانه", icon: HomeIcon },
  { name: "دوره‌ها", icon: HomeIcon },
  { name: "سبد خرید", icon: HomeIcon },
  { name: "مشاوره", icon: HomeIcon },
  { name: "حساب کاربری", icon: HomeIcon },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState("خانه");

  return (
    <nav className="fixed bottom-2 left-0 right-0 flex justify-center z-10 md:hidden">
      <div className="flex justify-center items-center gap-2 w-[369px] h-[64px] px-[14px] py-[13px] bg-white border border-[#747474] rounded-[32px] shadow-sm">
        {links.map((link) => {
          const activeLink = active === link.name;
          const Icon = link.icon;
          return (
            <button
              key={link.name}
              onClick={() => setActive(link.name)}
              className="relative flex justify-center items-center"
            >
              {/* باکس قرمز انیمیشنی برای آیتم فعال */}
              <AnimatePresence>
                {activeLink && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute w-[105px] h-[37px] rounded-[24px] bg-[#B30003] shadow-[0_22px_6px_rgba(0,0,0,0.00),0_14px_6px_rgba(0,0,0,0.01),0_8px_5px_rgba(0,0,0,0.05),0_4px_4px_rgba(0,0,0,0.09),0_1px_2px_rgba(0,0,0,0.10)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              {/* آیکون و متن */}
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  activeLink ? "w-[105px] text-white" : "w-[43px] text-[#000]"
                }`}
              >
                <Icon
                  className={`w-[20px] h-[20px] flex-shrink-0 ${
                    activeLink ? "text-white" : "text-[#000]"
                  }`}
                />
                {activeLink && (
                  <span className="text-[13px] font-[Yekan_Bakh] font-bold mr-[10px]">
                    {link.name}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// آیکون خانه (فعلاً برای همه یکی)
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M8.9975 2.38811C9.56767 1.87584 10.4323 1.87584 11.0025 2.38811L16.5025 7.32965C16.8191 7.61414 17 8.01977 17 8.44544V15.4996C17 16.328 16.3284 16.9996 15.5 16.9996H13C12.1716 16.9996 11.5 16.328 11.5 15.4996V11.9996C11.5 11.7234 11.2761 11.4996 11 11.4996H9C8.72386 11.4996 8.5 11.7234 8.5 11.9996V15.4996C8.5 16.328 7.82843 16.9996 7 16.9996H4.5C3.67157 16.9996 3 16.328 3 15.4996V8.44544C3 8.01977 3.18086 7.61414 3.4975 7.32965L8.9975 2.38811ZM10.3342 3.13197C10.1441 2.96122 9.85589 2.96122 9.66583 3.13197L4.16583 8.07351C4.06029 8.16834 4 8.30355 4 8.44544V15.4996C4 15.7757 4.22386 15.9996 4.5 15.9996H7C7.27614 15.9996 7.5 15.7757 7.5 15.4996V11.9996C7.5 11.1711 8.17157 10.4996 9 10.4996H11C11.8284 10.4996 12.5 11.1711 12.5 11.9996V15.4996C12.5 15.7757 12.7239 15.9996 13 15.9996H15.5C15.7761 15.9996 16 15.7757 16 15.4996V8.44544C16 8.30355 15.9397 8.16834 15.8342 8.07351L10.3342 3.13197Z"
        fill="currentColor"
      />
    </svg>
  );
}
