/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export function ProductCard({ image, title, price }: any) {
  return (
    <div className="relative p-1.5 w-[170px] h-[190px] shrink-0 rounded-[16px] border border-[#D0D0D0] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)] transition-transform duration-300 overflow-hidden">
      {/* تصویر محصول */}
      <div className="w-full h-[110px]">
        <Image
          src={image}
          alt={title}
          width={170}
          height={110}
          quality={100}
          className="w-full h-[110px] object-cover rounded-[12px]"
        />
      </div>

      {/* جزئیات محصول */}
      <div className="w-full flex-col px-2 pt-2 pb-1 flex justify-between text-right h-[calc(100%-110px)]">
        <div>
          <span className="text-[#000] font-['Yekan_Bakh'] text-[13px] font-bold leading-tight block truncate">
            {title}
          </span>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[#000] font-['Yekan_Bakh'] text-sm font-bold mt-[2px] block">
              {price}
            </span>
            {/* دکمه مشاهده بیشتر */}
            <button className="flex items-center p-1 justify-center bg-[#B30003] rounded-[8px] transition-all hover:bg-[#cc0003]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
  );
}
