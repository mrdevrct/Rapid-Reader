'use client'
import Image from "next/image";
import Link from "next/link";
import ProductImage from "../../../../public/images/Frame 264 copy.webp";
import { Product } from "@/features/courses/types/product.type";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/courses/${product.slug}`}>
      <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-3 flex flex-col snap-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* تصویر محصول */}
        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-2">
          <Image
            src={ProductImage}
            alt={product.name}
            width={300}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* عنوان و امتیاز */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-MorabbaBold text-sm md:text-lg text-zinc-800 truncate">
            {product.name}
          </h3>
          <div className="flex items-center text-orange-400 text-xs md:text-sm">
            <span>{1}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-3 h-3 ml-1 md:w-4 md:h-4"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* قیمت و دکمه */}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-DanaBold text-primary-deep text-xs md:text-base">
            {product.price}
          </span>
          <button className="bg-primary-deep hover:bg-primary-main text-white text-xs md:text-sm px-2 py-1 rounded-lg transition-colors">
            ثبت نام
          </button>
        </div>
      </div>
    </Link>
  );
}
