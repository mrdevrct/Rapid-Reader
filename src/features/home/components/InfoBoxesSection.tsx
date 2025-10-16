export function InfoBoxesSection() {
  return (
    <div className="w-full mx-auto -mt-[150px] flex items-center justify-center">
      <div className="flex flex-row justify-center items-center gap-1 sm:gap-3 w-full max-w-[900px]">
        {/* Box 1 */}
        <div className="flex items-center justify-center h-10 flex-1 px-2  gap-1.5 rounded-lg bg-[#5D5D5D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.49998 6.66671C9.97274 6.66671 11.1666 5.4728 11.1666 4.00004C11.1666 2.52728 9.97274 1.33337 8.49998 1.33337C7.02722 1.33337 5.83331 2.52728 5.83331 4.00004C5.83331 5.47280 7.02722 6.66671 8.49998 6.66671Z"
              fill="white"
            />
            <path
              d="M13.8334 11.6666C13.8334 13.3233 13.8334 14.6666 8.50002 14.6666C3.16669 14.6666 3.16669 13.3233 3.16669 11.6666C3.16669 10.01 5.55469 8.66663 8.50002 8.66663C11.4454 8.66663 13.8334 10.01 13.8334 11.6666Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-[10px] sm:text-sm font-bold">
            382 دوره‌ سازنده
          </span>
        </div>

        {/* Box 2 */}
        <div className="flex items-center justify-center h-10 flex-1 px-2  gap-1.5 rounded-lg bg-[#5D5D5D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.49998 6.66671C9.97274 6.66671 11.1666 5.4728 11.1666 4.00004C11.1666 2.52728 9.97274 1.33337 8.49998 1.33337C7.02722 1.33337 5.83331 2.52728 5.83331 4.00004C5.83331 5.47280 7.02722 6.66671 8.49998 6.66671Z"
              fill="white"
            />
            <path
              d="M13.8334 11.6666C13.8334 13.3233 13.8334 14.6666 8.50002 14.6666C3.16669 14.6666 3.16669 13.3233 3.16669 11.6666C3.16669 10.01 5.55469 8.66663 8.50002 8.66663C11.4454 8.66663 13.8334 10.01 13.8334 11.6666Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-[10px] sm:text-sm  font-bold">
            156 مدرس فعال
          </span>
        </div>

        {/* Box 3 */}
        <div className="flex items-center justify-center h-10 flex-1 px-2  gap-1.5 rounded-lg bg-[#5D5D5D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.49998 6.66671C9.97274 6.66671 11.1666 5.4728 11.1666 4.00004C11.1666 2.52728 9.97274 1.33337 8.49998 1.33337C7.02722 1.33337 5.83331 2.52728 5.83331 4.00004C5.83331 5.47280 7.02722 6.66671 8.49998 6.66671Z"
              fill="white"
            />
            <path
              d="M13.8334 11.6666C13.8334 13.3233 13.8334 14.6666 8.50002 14.6666C3.16669 14.6666 3.16669 13.3233 3.16669 11.6666C3.16669 10.01 5.55469 8.66663 8.50002 8.66663C11.4454 8.66663 13.8334 10.01 13.8334 11.6666Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-[10px] sm:text-sm font-bold">
            4,820 هنرجو
          </span>
        </div>
      </div>
    </div>
  );
}
