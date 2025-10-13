import Image from "next/image";
import unnamedImage from "../../../../public/images/unnamed.png";

export function LogoSection() {
  return (
    <div className="-translate-y-[65%] flex justify-center">
      <div className="w-[252px] h-[252px] flex justify-center items-center">
        <Image
          src={unnamedImage}
          alt="لوگوی آکادمی"
          width={250}
          height={250}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
