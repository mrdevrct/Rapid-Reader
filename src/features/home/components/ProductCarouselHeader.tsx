export function ProductCarouselHeader({
  title,
  showTimer = true,
}: {
  title: string;
  showTimer?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#1F1F1F] text-xl font-extrabold">{title}</span>
      {showTimer ? (
        <div className="flex items-center gap-2">
          <div className="flex w-[28px] h-[28px] p-[1px_8px] flex-col justify-center items-center rounded-[4px] bg-[#B30003]">
            <span className="text-[#FFF] text-right text-lg font-bold">23</span>
          </div>
          <span className="text-[#1F1F1F] text-[16px] font-medium">:</span>
          <div className="flex w-[28px] h-[28px] p-[1px_8px] flex-col justify-center items-center rounded-[4px] bg-[#B30003]">
            <span className="text-[#FFF] text-right text-lg font-bold">59</span>
          </div>
          <span className="text-[#1F1F1F] text-[16px] font-medium">:</span>
          <div className="flex w-[28px] h-[28px] p-[1px_8px] flex-col justify-center items-center rounded-[4px] bg-[#B30003]">
            <span className="text-[#FFF] text-right text-lg font-bold">45</span>
          </div>
        </div>
      ) : (
        <div className="inline-flex items-center gap-[4px]">
          <span className="text-[#B30003] text-xs font-bold">مشاهده همه</span>
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
              fill="#B30003"
            />
            <path
              d="M3.33331 2L1.33331 4L3.33331 6"
              stroke="#B30003"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
