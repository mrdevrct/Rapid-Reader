// src/utils/statusViewHelper.ts
import { Loader2, AlertCircle, LucideIcon } from "lucide-react";

export type StatusViewVariant = "loading" | "error" | "default";

interface StatusViewConfig {
  icon: LucideIcon;
  title: string;
  description?: string;
  color: string;
}

export function getStatusViewConfig(
  variant: StatusViewVariant
): StatusViewConfig {
  switch (variant) {
    case "loading":
      return {
        icon: Loader2,
        title: "در حال بارگذاری...",
        description: "لطفاً کمی صبر کنید.",
        color: "text-gray-600",
      };
    case "error":
      return {
        icon: AlertCircle,
        title: "خطایی رخ داده است!",
        description: "لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.",
        color: "text-red-500",
      };
    case "default":
    default:
      return {
        icon: AlertCircle,
        title: "وضعیت نامشخص",
        description: "لطفاً دوباره تلاش کنید.",
        color: "text-gray-600",
      };
  }
}
