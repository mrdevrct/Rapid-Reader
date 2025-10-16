export function CourseCoverImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      className="w-full h-[250px] sm:h-[310px] lg:h-[460px] bg-cover bg-center shrink-0 relative -mt-6"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay کمی تیره */}
      <div className="absolute inset-0 bg-black/20 rounded-lg" />
    </div>
  );
}
