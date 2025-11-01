"use client";

import { Category } from "@/features/category/types/category.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

interface BaseCategoryProps {
  categories: Category[];
}

function BaseCategory({ categories }: BaseCategoryProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="mt-4 w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView="auto"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="!overflow-visible w-full"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            className="flex justify-center !w-auto"
          >
            <Link
              href={`/shop?category=${category.slug}`}
              className="flex flex-col items-center justify-center text-center transition-all duration-300 rounded-2xl p-3 h-[150px] w-[120px] sm:h-[180px] sm:w-[150px] md:h-[200px] md:w-[170px] bg-[#FCFAF8] border border-[#6EAC8B33] hover:shadow-md hover:scale-105"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                <Image
                  src={category.image || "/img/dahan.png"}
                  alt={category.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <h4 className="mt-2 text-sm md:text-base font-semibold text-gray-800 text-center w-full line-clamp-2 break-words">
                {category.name}
              </h4>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BaseCategory;
