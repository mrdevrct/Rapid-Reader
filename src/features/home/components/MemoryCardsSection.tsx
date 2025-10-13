import Image from "next/image";
import brainstorm from "../../../../public/images/brainstorm.png";

export function MemoryCardsSection() {
  return (
    <div className="w-full mt-6">
      <div className="flex gap-2.5 justify-center">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center w-[76px] h-[75px] p-[4px_25px] gap-[2px] rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={52}
            height={42}
            className="object-contain"
          />
          <span className="text-right text-[#1F1F1F] text-xs font-bold">
            تقویت حافظه
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center w-[76px] h-[75px] p-[4px_25px] gap-[2px] rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={52}
            height={42}
            className="object-contain"
          />
          <span className="text-right text-[#1F1F1F] text-xs font-bold">
            تقویت حافظه
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center w-[76px] h-[75px] p-[4px_25px] gap-[2px] rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={52}
            height={42}
            className="object-contain"
          />
          <span className="text-right text-[#1F1F1F] text-xs font-bold">
            تقویت حافظه
          </span>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col justify-center items-center w-[76px] h-[75px] p-[4px_25px] gap-[2px] rounded-[24px] bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]">
          <Image
            src={brainstorm}
            alt="brainstorm"
            width={52}
            height={42}
            className="object-contain"
          />
          <span className="text-right text-[#1F1F1F] text-xs font-bold">
            تقویت حافظه
          </span>
        </div>
      </div>
    </div>
  );
}
