import Image from "next/image";
import unnamedImage from "../../../../public/images/unnamed.png";

export function LogoSection() {
  return (
    <div className="-translate-y-[65%] flex justify-center">
      <div className="w-[252px] h-[252px] lg:w-[360px] lg:h-[360px] flex justify-center items-center">
        <Image
          src={unnamedImage}
          alt="لوگوی آکادمی"
          width={220}
          height={220}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
