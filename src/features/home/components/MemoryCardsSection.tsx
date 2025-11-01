import Image from "next/image";
import brainstorm from "../../../../public/images/brainstorm.png";
import { Category } from "@/features/category/types/category.type";

export function MemoryCardsSection({ categories }: { categories: Category[] }) {
  return (
    <div className="w-full mt-6">
      <div className="flex gap-2.5 justify-center">
        {categories.map((category) => (
          <div
            className="flex flex-col justify-center items-center w-[76px] h-[75px] p-[4px_25px] gap-1 rounded-3xl bg-white shadow-[0_2px_4.4px_0_rgba(0,0,0,0.10)]"
            key={category.id}
          >
            <Image
              src={category.image || brainstorm}
              alt="brainstorm"
              width={52}
              height={42}
              className="object-contain"
            />
            <span className="text-right text-[#1F1F1F] text-xs font-bold">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
