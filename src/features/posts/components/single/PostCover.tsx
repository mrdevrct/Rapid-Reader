// components/post/PostCover.tsx
import Image from "next/image";

interface PostCoverProps {
  thumbnail?: { url: string };
  title: string;
}

export default function PostCover({ thumbnail, title }: PostCoverProps) {
  const fallbackImage = "/img/blog-sample.jpg";

  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      <Image
        src={thumbnail?.url || fallbackImage}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}
