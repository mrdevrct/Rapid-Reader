"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/features/category/types/category.type";
import "swiper/css";

interface SubCategoryProps {
  subCategories: Category[];
}

function SubCategory({ subCategories }: SubCategoryProps) {
  if (!subCategories || subCategories.length === 0) return null;

  return (
    <section className="mt-4 w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={2.2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 3.2 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="!overflow-visible w-full"
      >
        {subCategories.map((cat) => (
          <SwiperSlide key={cat.id} className="flex justify-center !w-auto">
            <Link
              href={`/shop?category=${cat.slug}`}
              className="flex flex-col items-center justify-center text-center transition-all duration-300 rounded-2xl p-2 min-h-[130px] sm:min-h-[150px] w-[120px] sm:w-[150px] md:w-[170px] bg-[#FCFAF8] border border-[#6EAC8B33] hover:shadow-md hover:scale-105"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <Image
                  src={cat.image || "/img/jensi.png"}
                  alt={cat.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              {/* ارتفاع فقط برای متن تنظیم شده */}
              <h4
                className="
                  mt-2 
                  text-xs sm:text-sm md:text-base 
                  font-semibold text-gray-800 text-center 
                  leading-snug break-words 
                  h-[38px] sm:h-[42px] md:h-[46px]
                  flex items-center justify-center
                "
              >
                {cat.name}
              </h4>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SubCategory;
