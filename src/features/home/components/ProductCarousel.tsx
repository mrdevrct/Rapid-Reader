import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { ProductCarouselHeader } from "./ProductCarouselHeader";
import productImage from "../../../../public/images/productImage.png";
import { ProductCard } from "./ProductCard";
import "swiper/css";
import "swiper/css/effect-coverflow";

export function ProductCarousel({
  title,
  showTimer = true,
}: {
  title: string;
  showTimer?: boolean;
}) {
  const products = [
    { image: productImage, title: "Happy Feathers", price: "۳۰۰,۰۰۰ تومان" },
    { image: productImage, title: "Strong Steeds", price: "۵۰۰,۰۰۰ تومان" },
    { image: productImage, title: "Golden Care", price: "۴۰۰,۰۰۰ تومان" },
    { image: productImage, title: "Golden Care", price: "۴۰۰,۰۰۰ تومان" },
    { image: productImage, title: "Golden Care", price: "۴۰۰,۰۰۰ تومان" },
  ];

  return (
    <div className="w-full mt-6" dir="rtl">
      <ProductCarouselHeader title={title} showTimer={showTimer} />

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
        {products.map((p, i) => (
          <SwiperSlide
            key={i}
            className="!w-[180px] flex justify-center transition-transform duration-300"
          >
            <div className="transform hover:scale-[1.03] transition-all duration-300">
              <ProductCard {...p} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
