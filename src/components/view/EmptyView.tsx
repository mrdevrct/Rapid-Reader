// src/components/EmptyView.tsx
"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { getEmptyViewConfig, EmptyViewVariant } from "@/lib/emptyViewHelper";

interface EmptyViewProps {
  variant?: EmptyViewVariant;
  icon?: LucideIcon;
  title?: string;
  description?: string;
  link?: {
    href: string;
    text: string;
    className?: string; // برای سفارشی‌سازی استایل لینک
  };
  className?: string; // برای کلاس‌های اضافی روی کانتینر اصلی
}

export default function EmptyView({
  variant,
  icon: customIcon,
  title: customTitle,
  description: customDescription,
  link,
  className = "",
}: EmptyViewProps) {
  const config = variant ? getEmptyViewConfig(variant) : null;

  const Icon = customIcon || config?.icon;
  const title = customTitle || config?.title || "اطلاعاتی یافت نشد!";
  const description =
    customDescription ||
    config?.description ||
    "لطفاً دوباره تلاش کنید یا به صفحه اصلی بازگردید.";

  return (
    <div
      className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
    >
      {Icon && <Icon className="w-12 h-12 text-gray-300 mb-4" />}
      <h2 className="text-lg font-medium text-gray-700 mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-6">{description}</p>
      {link && (
        <Link
          href={link.href}
          className={`bg-primary text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition ${link.className || ""}`}
        >
          {link.text}
        </Link>
      )}
    </div>
  );
}