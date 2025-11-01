// src/components/StatusView.tsx
"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { getStatusViewConfig, StatusViewVariant } from "@/lib/statusViewHelper";

interface StatusViewProps {
  variant: StatusViewVariant;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  link?: {
    href: string;
    text: string;
    className?: string;
    onClick?: () => void; // اضافه کردن پراپ onClick
  };
  className?: string;
}

export default function StatusView({
  variant,
  title: customTitle,
  description: customDescription,
  icon: customIcon,
  link,
  className = "",
}: StatusViewProps) {
  const config = getStatusViewConfig(variant);

  const Icon = customIcon || config.icon;
  const title = customTitle || config.title;
  const description = customDescription || config.description;

  return (
    <div
      className={`flex flex-col items-center justify-center py-16 text-center ${className}`}
    >
      {Icon && (
        <Icon
          className={`w-12 h-12 mb-4 ${config.color} ${
            variant === "loading" ? "animate-spin" : ""
          }`}
        />
      )}
      <h2 className={`text-lg font-medium mb-2 ${config.color}`}>{title}</h2>
      {description && (
        <p className="text-gray-500 text-sm mb-6">{description}</p>
      )}
      {link && (
        <Link
          href={link.href}
          onClick={link.onClick} // اضافه کردن onClick
          className={`bg-primary text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition ${
            link.className || ""
          }`}
        >
          {link.text}
        </Link>
      )}
    </div>
  );
}