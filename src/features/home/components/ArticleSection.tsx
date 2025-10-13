import banner from "../../../../public/images/banner.png";
import ArticleCard from "./ArticleCard";
import { ProductCarouselHeader } from "./ProductCarouselHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function ArticleSection() {
  const articels = [
    {
      id: 1,
      title: "افزایش تمرکز ذهنی در کار",
      description:
        "در این مقاله به بررسی روش‌های تقویت تمرکز ذهنی و افزایش بازدهی در محیط کار می‌پردازیم...",
      image: banner,
    },
    {
      id: 2,
      title: "افزایش تمرکز ذهنی در کار",
      description:
        "در این مقاله به بررسی روش‌های تقویت تمرکز ذهنی و افزایش بازدهی در محیط کار می‌پردازیم...",
      image: banner,
    },
    {
      id: 3,
      title: "افزایش تمرکز ذهنی در کار",
      description:
        "در این مقاله به بررسی روش‌های تقویت تمرکز ذهنی و افزایش بازدهی در محیط کار می‌پردازیم...",
      image: banner,
    },
    {
      id: 4,
      title: "افزایش تمرکز ذهنی در کار",
      description:
        "در این مقاله به بررسی روش‌های تقویت تمرکز ذهنی و افزایش بازدهی در محیط کار می‌پردازیم...",
      image: banner,
    },
    {
      id: 5,
      title: "افزایش تمرکز ذهنی در کار",
      description:
        "در این مقاله به بررسی روش‌های تقویت تمرکز ذهنی و افزایش بازدهی در محیط کار می‌پردازیم...",
      image: banner,
    },
  ];
  return (
    <div className="w-full mt-6" dir="rtl">
      <ProductCarouselHeader title={"مقالات"} showTimer={false} />

      <Swiper
        dir="rtl"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        initialSlide={1}
        spaceBetween={-30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        // ⛔ حذف تنظیمات Pagination
        modules={[EffectCoverflow]}
        className="mySwiper mt-4 !overflow-visible"
      >
        {articels.map((art, i) => (
          <SwiperSlide
            key={i}
            className="!w-[180px] flex justify-center transition-transform duration-300"
          >
            <div className="transform hover:scale-[1.03] transition-all duration-300">
              <ArticleCard
                title={art.title}
                description={art.description}
                image={banner.src}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
