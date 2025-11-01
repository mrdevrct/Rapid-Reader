// src/utils/emptyViewHelper.ts
import {
  Package,
  Search,
  AlertCircle,
  ShoppingCart,
  User,
  LucideIcon,
} from "lucide-react";

export type EmptyViewVariant =
  | "orders"
  | "not-found"
  | "cart"
  | "products"
  | "users"
  | "default";

interface EmptyViewConfig {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function getEmptyViewConfig(variant: EmptyViewVariant): EmptyViewConfig {
  switch (variant) {
    case "orders":
      return {
        icon: Package,
        title: "هنوز سفارشی ثبت نکرده‌اید!",
        description: "پس از خرید، سفارش‌های شما در این بخش نمایش داده می‌شوند.",
      };
    case "not-found":
      return {
        icon: Search,
        title: "نتیجه‌ای یافت نشد!",
        description: "لطفاً جستجوی خود را تغییر دهید یا دوباره تلاش کنید.",
      };
    case "cart":
      return {
        icon: ShoppingCart,
        title: "سبد خرید شما خالی است!",
        description: "محصولات مورد نظر خود را اضافه کنید.",
      };
    case "products":
      return {
        icon: Package,
        title: "محصولی یافت نشد!",
        description: "لطفاً فیلترها را بررسی کنید یا دوباره جستجو کنید.",
      };
    case "users":
      return {
        icon: User,
        title: "کاربری یافت نشد!",
        description: "لطفاً اطلاعات ورودی را بررسی کنید.",
      };
    case "default":
    default:
      return {
        icon: AlertCircle,
        title: "اطلاعاتی موجود نیست!",
        description: "لطفاً دوباره تلاش کنید.",
      };
  }
}
