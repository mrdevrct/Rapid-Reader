export function CourseDetailsSwiper() {
  return (
    <div className="flex gap-2.5 w-full mt-6 overflow-x-auto scrollbar-hide">
      {/* Box: 12 hours */}
      <div className="flex items-center h-10 min-w-max bg-gray-100 border-2 border-gray-200 rounded-lg px-3 gap-1">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-base font-bold">۱۲ ساعت</span>
      </div>

      {/* Box: Persian */}
      <div className="flex items-center h-10 min-w-max bg-gray-100 border-2 border-gray-200 rounded-lg px-3 gap-1">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h12M9 3v2m1.5 14a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM21 12h-6m-3 7V7m-4 12h8"
          />
        </svg>
        <span className="text-base font-bold">فارسی</span>
      </div>

      {/* Box: Offline */}
      <div className="flex items-center h-10 min-w-max bg-gray-100 border-2 border-gray-200 rounded-lg px-3 gap-1">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728M9 3v3M15 21v-3M3 9h3m15 6h-3"
          />
        </svg>
        <span className="text-base font-bold">آفلاین</span>
      </div>

      {/* Box: 1400 minutes */}
      <div className="flex items-center h-10 min-w-max bg-gray-100 border-2 border-gray-200 rounded-lg px-3 gap-1">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-base font-bold">۱۴۰۰ دقیقه</span>
      </div>
    </div>
  );
}
