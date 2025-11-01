import Image from "next/image";

export function BannerSection({
  banner,
}: {
  banner: { id: number; src: string };
}) {
  return (
    <div className="w-full mt-6">
      <Image
        key={banner.id}
        src={banner.src}
        alt="بنر تبلیغاتی"
        width={1200}
        height={156} // ارتفاع واقعی تصویر اصلی (مثلاً 156px)
        className="w-full h-[156px] rounded-3xl object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        quality={95}
        priority
        style={{
          aspectRatio: "1200 / 156", // دقیقاً با height هماهنگ
        }}
      />
    </div>
  );
}
