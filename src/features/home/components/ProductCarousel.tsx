"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { ProductCarouselHeader } from "./ProductCarouselHeader";
import { ProductCard } from "./ProductCard";
import { Product } from "@/features/courses/types/product.type";
import "swiper/css/effect-coverflow";
import "swiper/css";

export function ProductCarousel({
  title,
  products,
  showTimer = true,
}: {
  title: string;
  products: Product[];
  showTimer?: boolean;
}) {
  return (
    <div className="w-full mt-6">
      <ProductCarouselHeader title={title} showTimer={showTimer} />

      {/* ✅ نسخه موبایل: Swiper با افکت Coverflow */}
      <div className="block lg:hidden mt-4">
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
          modules={[EffectCoverflow]}
          className="mySwiper !overflow-visible"
        >
          {products.map((product, i) => (
            <SwiperSlide
              key={i}
              className="!w-[180px] flex justify-center transition-transform duration-300"
            >
              <div className="transform hover:scale-[1.03] transition-all duration-300">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ نسخه دسکتاپ: Swiper با تنظیمات مناسب */}
      <div className="hidden lg:block mt-6">
        <Swiper
          dir="rtl"
          slidesPerView={5}
          spaceBetween={16}
          loop={true}
          centeredSlides={false}
          className="desktop-product-swiper"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i} className="!w-auto flex justify-center">
              <div className="transition-transform duration-300 hover:scale-[1.03]">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
