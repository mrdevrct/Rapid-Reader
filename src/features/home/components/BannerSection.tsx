import banner from "../../../../public/images/banner.png";

export function BannerSection() {
  return (
    <div className="w-full mt-6">
      <div
        className="w-full h-[156px] flex-shrink-0 rounded-[24px]"
        style={{
          background: `linear-gradient(0deg, #911A1A 0%, #911A1A 100%), url(${banner.src}) lightgray 0px -128.717px / 100% 236.538% no-repeat`,
        }}
      />
    </div>
  );
}
