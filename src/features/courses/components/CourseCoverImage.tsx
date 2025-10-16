export function CourseCoverImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      className="w-full h-[200px] sm:h-[260px] lg:h-[360px] bg-cover bg-center shrink-0 relative -mt-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay کمی تیره */}
      <div className="absolute inset-0 bg-black/20 rounded-lg" />
    </div>
  );
}
