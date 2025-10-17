// app/blog/page.tsx
"use client";
import { useState } from "react";
import BlogCard from "@/components/template/blog/BlogCard";

export default function BlogsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const blogs = [
    {
      id: 1,
      title: "نکات مهم در استفاده از محصولات زناشویی",
      desc: "در این مقاله به بررسی اصول بهداشتی و نکاتی برای استفاده ایمن از محصولات زناشویی می‌پردازیم.",
      img: "/img/banner.svg",
      slug: "nokat-mohm-estefade-az-mahsulat-zenashoyi",
      category: "بهداشت و سلامت",
      date: "۱۴۰۲/۱۰/۱۵",
    },
    {
      id: 2,
      title: "راهنمای انتخاب بهترین کاندوم",
      desc: "با شناخت انواع کاندوم و ویژگی‌های هرکدام، انتخاب بهتری برای سلامتی و لذت داشته باشید.",
      img: "/img/candom1.svg",
      slug: "rahnama-entekhab-behtarin-condom",
      category: "روابط زناشویی",
      date: "۱۴۰۲/۱۰/۱۲",
    },
    {
      id: 3,
      title: "محصولات بهداشتی مورد نیاز بانوان",
      desc: "در این مقاله با محصولات بهداشتی استاندارد ویژه بانوان آشنا می‌شویم.",
      img: "/img/condom2.svg",
      slug: "mahsoolat-behdashti-banoovan",
      category: "بهداشت و سلامت",
      date: "۱۴۰۲/۱۰/۱۰",
    },
    {
      id: 4,
      title: "اهمیت رعایت بهداشت شخصی",
      desc: "چگونه با رعایت نکات ساده، بهداشت فردی خود را حفظ کنیم و از بیماری‌ها پیشگیری کنیم.",
      img: "/img/banner.svg",
      slug: "ahmiyat-behdasht-shakhsi",
      category: "بهداشت و سلامت",
      date: "۱۴۰۲/۱۰/۰۸",
    },
    {
      id: 5,
      title: "آشنایی با محصولات مراقبت پوست و مو",
      desc: "با محصولات مراقبتی استاندارد و به‌روز آشنا شوید تا زیبایی طبیعی خود را حفظ کنید.",
      img: "/img/banner.svg",
      slug: "mahsoolat-moraghebat-poost-mo",
      category: "مراقبت پوست و مو",
      date: "۱۴۰۲/۱۰/۰۵",
    },
    {
      id: 6,
      title: "تغذیه سالم برای زندگی بهتر",
      desc: "راهنمای کامل تغذیه سالم و تأثیر آن بر سلامت جسمی و روحی.",
      img: "/img/banner.svg",
      slug: "taghziye-salamat",
      category: "تغذیه و ورزش",
      date: "۱۴۰۲/۱۰/۰۳",
    },
  ];

  return (
    <div className="py-6 px-2">
      {/* هدر صفحه */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          مقالات و بلاگ
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          در این بخش می‌توانید جدیدترین مقالات و مطالب آموزشی در زمینه بهداشت،
          سلامت و مراقبت شخصی را مطالعه کنید
        </p>
      </div>

      {/* محتوای اصلی */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* سایدبار فیلتر - در دسکتاپ */}

        {/* بخش مقالات */}
        <div className="flex-1">
          {/* نمایش مقالات */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            }
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* دکمه بارگذاری بیشتر */}
          <div className="text-center mt-8">
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition font-bold">
              بارگذاری مقالات بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
