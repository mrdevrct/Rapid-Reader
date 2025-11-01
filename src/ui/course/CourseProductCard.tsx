import { Product } from "@/features/courses/types/product.type";
import Image from "next/image";
import Link from "next/link";

interface CourseProductCardProps {
  course: Product;
}

export function CourseProductCard({ course }: CourseProductCardProps) {
  // پردازش تصویر
  const imageSrc = course.image ? course.image : "/images/productImage.png";

  // پردازش قیمت
  const currentPrice =
    course.sale_price && course.sale_price !== ""
      ? Number(course.sale_price)
      : Number(course.price || course.regular_price);

  const oldPrice =
    course.sale_price && course.sale_price !== ""
      ? Number(course.regular_price)
      : null;

  // پردازش دسته‌بندی
  const categoryLabel =
    course.categories && course.categories.length > 0
      ? course.categories[0]
      : "بدون دسته‌بندی";

  return (
    <Link href={`/courses/${course.slug}`} className="block group">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 p-3 group-hover:border-primary/20">
        {/* تصویر دوره */}
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image
            src={imageSrc}
            alt={course.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* برچسب تخفیف (اگر وجود داشت) */}
          {oldPrice && oldPrice > currentPrice && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              تخفیف
            </div>
          )}
        </div>

        <div className="px-1">
          {/* عنوان دوره */}
          <h3 className="text-base font-bold text-gray-800 mb-2 text-right leading-tight line-clamp-2 group-hover:text-primary-deep transition">
            {course.name}
          </h3>

          {/* دسته‌بندی */}
          <div className="flex justify-end mb-3">
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {categoryLabel}
            </span>
          </div>

          {/* قیمت */}
          <div className="flex justify-between items-center">
            <p className="text-primary-deep text-sm font-bold fa-num">
              {currentPrice.toLocaleString()} تومان
            </p>
            {oldPrice && oldPrice > currentPrice && (
              <p className="text-xs text-gray-400 line-through fa-num">
                {oldPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
