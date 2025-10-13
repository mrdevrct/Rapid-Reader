import Image from "next/image";
import brainstorm from "../../../../public/images/brainstorm.png";

export function ResearchBoxesSection() {
  return (
    <div className="w-full mt-6">
      <div className="flex gap-1 sm:gap-1.5 md:gap-2.5">
        {/* Box 1 */}
        <div className="flex justify-center items-center gap-2.5 h-12 px-4 py-2 flex-1 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
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
        <div className="flex justify-center items-center gap-2.5 h-12 px-4 py-2 flex-1 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
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

        {/* Box 3 */}
        <div className="flex justify-center items-center gap-2.5 h-12 px-4 py-2 flex-1 rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
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
      </div>
    </div>
  );
}
