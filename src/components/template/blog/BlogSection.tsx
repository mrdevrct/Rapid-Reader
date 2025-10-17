"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "نکات مهم در استفاده از محصولات زناشویی",
      desc: "در این مقاله به بررسی اصول بهداشتی و نکاتی برای استفاده ایمن از محصولات زناشویی می‌پردازیم.",
      img: "/img/banner.svg",
      slug: "nokat-mohm-estefade-az-mahsulat-zenashoyi",
    },
    {
      id: 2,
      title: "راهنمای انتخاب بهترین کاندوم",
      desc: "با شناخت انواع کاندوم و ویژگی‌های هرکدام، انتخاب بهتری برای سلامتی و لذت داشته باشید.",
      img: "/img/candom1.svg",
      slug: "rahnama-entekhab-behtarin-condom",
    },
    {
      id: 3,
      title: "محصولات بهداشتی مورد نیاز بانوان",
      desc: "در این مقاله با محصولات بهداشتی استاندارد ویژه بانوان آشنا می‌شویم.",
      img: "/img/condom2.svg",
      slug: "mahsoolat-behdashti-banoovan",
    },
    {
      id: 4,
      title: "اهمیت رعایت بهداشت شخصی",
      desc: "چگونه با رعایت نکات ساده، بهداشت فردی خود را حفظ کنیم و از بیماری‌ها پیشگیری کنیم.",
      img: "/img/banner.svg",
      slug: "ahmiyat-behdasht-shakhsi",
    },
    {
      id: 5,
      title: "آشنایی با محصولات مراقبت پوست و مو",
      desc: "با محصولات مراقبتی استاندارد و به‌روز آشنا شوید تا زیبایی طبیعی خود را حفظ کنید.",
      img: "/img/banner.svg",
      slug: "mahsoolat-moraghebat-poost-mo",
    },
  ];

  return (
    <section className="w-full mt-10">
      {/* 🔹 عنوان بخش */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
        مقالات و آموزش‌ها
      </h2>

      {/* 🔹 اسلایدر */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2.5, spaceBetween: 12},
          768: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 18 },
        }}
        className="w-full"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCard blog={blog} variant="compact"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
