import Image from "next/image";
import brainstorm from "../../../../public/images/brainstorm.png";

export function ResearchBoxesSection() {
  return (
    <div className="w-full mt-4">
      {/* اسکرول افقی در موبایل */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-1">
        {/* Box 1 */}
        <div className="flex-shrink-0 flex justify-center items-center gap-2.5 h-12 px-4 py-2 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)] min-w-fit">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-[#000] text-xs sm:text-sm font-bold">
            ۴۲ هزار پژوه
          </span>
        </div>

        {/* Box 2 */}
        <div className="flex-shrink-0 flex justify-center items-center gap-2.5 h-12 px-4 py-2 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)] min-w-fit">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-[#000] text-xs sm:text-sm font-bold">
            ۴۸ هزار مقاله
          </span>
        </div>

        {/* Box 3 */}
        <div className="flex-shrink-0 flex justify-center items-center gap-2.5 h-12 px-4 py-2 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)] min-w-fit">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-[#000] text-xs sm:text-sm font-bold">
            ۲۱ هزار پایان‌نامه
          </span>
        </div>

        {/* Box 4 */}
        <div className="flex-shrink-0 flex justify-center items-center gap-2.5 h-12 px-4 py-2 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)] min-w-fit">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-[#000] text-xs sm:text-sm font-bold">
            منابع آموزشی
          </span>
        </div>
      </div>
    </div>
  );
}
