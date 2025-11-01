"use client";
import banner from "../../../../public/images/banner.png";
import ArticleCard from "./ArticleCard";
import { ProductCarouselHeader } from "./ProductCarouselHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Post } from "@/features/posts/types/post.type";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function ArticleSection({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full mt-6 mb-4" dir="rtl">
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
        {posts.map((art, i) => (
          <SwiperSlide
            key={i}
            className="!w-[180px] flex justify-center transition-transform duration-300"
          >
            <div className="transform hover:scale-[1.03] transition-all duration-300">
              <ArticleCard
                id={art.ID}
                title={art.title}
                description={art.excerpt}
                image={art.thumbnail?.url || banner.src}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
