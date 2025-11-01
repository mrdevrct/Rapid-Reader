import Link from "next/link";

export default function ArticleCard({
  title,
  description,
  image,
  id,
}: {
  title: string;
  description: string;
  image: string;
  id: number;
}) {
  return (
    <div
      className="relative w-[170px] h-[190px] shrink-0 rounded-[16px] overflow-hidden bg-cover bg-center flex flex-col justify-end p-[10px] border border-[#D0D0D0] shadow-[0_2px_6px_rgba(0,0,0,0.05)] transition-transform duration-300"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%), url(${image})`,
      }}
    >
      <div className="text-white text-right font-[Yekan_Bakh]">
        <h3 className="text-[13px] font-bold leading-snug mb-[4px] truncate">
          {title}
        </h3>
        <p className="text-[12px] font-normal leading-snug opacity-90 line-clamp-1 text-justify">
          {description}
        </p>
      </div>
      <Link href={`/posts/${id}`}>
        <button className="absolute bottom-[8px] left-[8px] inline-flex py-1 px-2 justify-center items-center gap-[4px] bg-white/25 backdrop-blur-sm rounded-[8px] transition-all hover:bg-white/40">
          <span className="text-white text-[11px] font-bold font-[Yekan_Bakh]">
            مشاهده بیشتر
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M6.66665 4.25C6.73295 4.25 6.79654 4.22366 6.84342 4.17678C6.89031 4.12989 6.91665 4.0663 6.91665 4C6.91665 3.9337 6.89031 3.87011 6.84342 3.82322C6.79654 3.77634 6.73295 3.75 6.66665 3.75V4.25ZM6.66665 3.75H1.33331V4.25H6.66665V3.75Z"
              fill="#FFF"
            />
            <path
              d="M3.33331 2L1.33331 4L3.33331 6"
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
