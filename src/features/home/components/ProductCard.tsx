/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: StaticImageData;
  title: string;
  price: string;
  slug: string;
}

export function ProductCard({ image, title, price, slug }: ProductCardProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="relative shrink-0 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:scale-[1.02] w-[150px] h-[180px] sm:w-[160px] sm:h-[190px] md:w-[170px] md:h-[200px] lg:w-[180px] lg:h-[210px] xl:w-[190px] xl:h-[220px] px-1">
        {/* تصویر محصول */}
        <div className="w-full h-[60%]">
          <Image
            src={image}
            alt={title}
            width={180}
            height={120}
            quality={100}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>

        {/* جزئیات محصول */}
        <div className="flex flex-col justify-between h-[40%] px-2 pt-2 pb-1 text-right">
          <div>
            <span className="block text-xs sm:text-sm font-bold leading-tight truncate">
              {title}
            </span>

            <div className="flex items-center justify-between mt-2">
              <span className="block text-[11px] sm:text-sm font-bold">
                {price}
              </span>

              {/* دکمه مشاهده بیشتر */}
              <button className="flex items-center justify-center p-1 bg-primary-main rounded-lg transition-all hover:bg-primary-deep">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    d="M6.66665 4.25C6.73295 4.25 6.79654 4.22366 6.84342 4.17678C6.89031 4.12989 6.91665 4.0663 6.91665 4C6.91665 3.9337 6.89031 3.87011 6.84342 3.82322C6.79654 3.77634 6.73295 3.75 6.66665 3.75V4.25ZM6.66665 3.75H1.33331V4.25H6.66665V3.75Z"
                    fill="#FFF"
                  />
                  <path
                    d="M3.33331 2L1.33331 4L3.33331 6"
                    stroke="#FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
