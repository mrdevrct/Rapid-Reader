"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// ====== آیکون‌ها ======
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M8.9975 2.38811C9.56767 1.87584 10.4323 1.87584 11.0025 2.38811L16.5025 7.32965C16.8191 7.61414 17 8.01977 17 8.44544V15.4996C17 16.328 16.3284 16.9996 15.5 16.9996H13C12.1716 16.9996 11.5 16.328 11.5 15.4996V11.9996C11.5 11.7234 11.2761 11.4996 11 11.4996H9C8.72386 11.4996 8.5 11.7234 8.5 11.9996V15.4996C8.5 16.328 7.82843 16.9996 7 16.9996H4.5C3.67157 16.9996 3 16.328 3 15.4996V8.44544C3 8.01977 3.18086 7.61414 3.4975 7.32965L8.9975 2.38811Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CoursesIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M15 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V4C17 2.89543 16.1046 2 15 2ZM15 16H5V4H15V16ZM7 6H13V8H7V6ZM7 10H13V12H7V10ZM7 14H11V15H7V14Z" fill="currentColor" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M2 2H4.5L6.5 12H15.5L17.5 4H6.5M6.5 12C6.5 12.8284 5.82843 13.5 5 13.5C4.17157 13.5 3.5 12.8284 3.5 12C3.5 11.1716 4.17157 10.5 5 10.5C5.82843 10.5 6.5 11.1716 6.5 12ZM15.5 12C15.5 12.8284 14.8284 13.5 14 13.5C13.1716 13.5 12.5 12.8284 12.5 12C12.5 11.1716 13.1716 10.5 14 10.5C14.8284 10.5 15.5 11.1716 15.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ConsultingIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.6647 18 13.2192 17.5143 14.5319 16.6951L17.0711 18.0711C17.4616 18.3163 17.9777 18.1922 18.2426 17.7574C18.3159 17.6383 18.3537 17.4988 18.3537 17.3576V14.4183C17.2351 15.5369 15.7683 16 14.1 16C10.7508 16 8 13.2492 8 10C8 6.75078 10.7508 4 14.1 4C15.7683 4 17.2351 4.46308 18.3537 5.58172V2.64239C18.3537 2.50123 18.3159 2.36172 18.2426 2.24264C17.9777 1.80782 17.4616 1.68374 17.0711 1.92893L14.5319 3.30493C13.2192 2.48566 11.6647 2 10 2ZM10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M10 2C6.68629 2 4 4.68629 4 8C4 10.2386 5.21118 12.2305 7 13.4648V15.5C7 16.3284 7.67157 17 8.5 17H11.5C12.3284 17 13 16.3284 13 15.5V13.4648C14.7888 12.2305 16 10.2386 16 8C16 4.68629 13.3137 2 10 2ZM12 15.5V13.4648C12.5973 13.8041 13 14.364 13 15H7C7 14.364 7.40268 13.8041 8 13.4648V15.5H12ZM10 12C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8C14 10.2091 12.2091 12 10 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ====== لینک‌ها ======
const links = [
  { name: "خانه", icon: HomeIcon, path: "/" },
  { name: "دوره‌ها", icon: CoursesIcon, path: "/courses" },
  { name: "سبد خرید", icon: CartIcon, path: "/cart" },
  { name: "مشاوره", icon: ConsultingIcon, path: "/consult" },
  { name: "حساب کاربری", icon: ProfileIcon, path: "/profile" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [active, setActive] = useState("خانه");

  // وقتی مسیر تغییر کرد، آیتم فعال رو تنظیم کن
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
      <div className="flex justify-center items-center gap-2 w-[369px] h-[64px] px-[14px] py-[13px] bg-white border border-[#747474] rounded-[32px] shadow-sm">
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
                    className="absolute w-[105px] h-[37px] rounded-[24px] bg-[#B30003] shadow-[0_22px_6px_rgba(0,0,0,0.00),0_14px_6px_rgba(0,0,0,0.01),0_8px_5px_rgba(0,0,0,0.05),0_4px_4px_rgba(0,0,0,0.09),0_1px_2px_rgba(0,0,0,0.10)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  activeLink ? "w-[105px] text-white" : "w-[43px] text-[#000]"
                }`}
              >
                <Icon className={`w-[20px] h-[20px] ${activeLink ? "text-white" : "text-[#000]"}`} />
                {activeLink && (
                  <span className="text-[13px] font-[Yekan_Bakh] font-bold mr-[10px]">
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
