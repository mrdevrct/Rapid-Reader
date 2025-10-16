import { CourseActionsAfterPurchase } from "@/features/courses/components/CourseActionsAfterPurchase";
import { CourseCoverImage } from "@/features/courses/components/CourseCoverImage";
import { CourseDetailsSwiper } from "@/features/courses/components/CourseDetailsSwiper";
import { CoursePriceAndButton } from "@/features/courses/components/CoursePriceAndButton";
import { CourseSectionsAccordion } from "@/features/courses/components/CourseSectionsAccordion";
import { CourseShortDescription } from "@/features/courses/components/CourseShortDescription";
import { CourseTitleAndStars } from "@/features/courses/components/CourseTitleAndStars";
import { ProgressBar } from "@/features/courses/components/ProgressBar";
import { ReviewsAccordion } from "@/features/courses/components/ReviewsAccordion";

// تعریف اینترفیس برای Worksheet
interface Worksheet {
  title: string;
  questions: { text: string; type: "number" | "checkbox" }[];
}

// تعریف اینترفیس برای نوع داده بازگشتی getCourseData
interface CourseData {
  slug: string;
  title: string;
  coverImage: string;
  isPurchased: boolean;
  progress: number;
  worksheets: Worksheet[];
  answers: { [date: string]: { [worksheetIndex: string]: { [questionIndex: string]: string } } };
  maxAllowedSubmissions: number;
}

// تابع برای دریافت داده‌های دوره
async function getCourseData(slug: string): Promise<CourseData> {
  return {
    slug,
    title: "دوره جامع تندخوانی",
    coverImage: "/images/course1.jpg",
    isPurchased: true, // شبیه‌سازی حالت خریداری‌شده
    progress: 75, // شبیه‌سازی درصد پیشرفت
    worksheets: [
      {
        title: "کاربرگ ۱: تمرین سرعت خواندن",
        questions: [
          { text: "تعداد کلمات خوانده‌شده در دقیقه؟", type: "number" as const },
          { text: "آیا تمرین را کامل کردید؟", type: "checkbox" as const },
        ],
      },
      {
        title: "کاربرگ ۲: درک مطلب",
        questions: [
          { text: "امتیاز درک مطلب شما؟", type: "number" as const },
          { text: "متن را به‌خوبی درک کردید؟", type: "checkbox" as const },
        ],
      },
    ],
    answers: {
      "2025-10-16": {
        "0": { "0": "200", "1": "true" }, // پاسخ‌های کاربرگ ۱
        "1": { "0": "85", "1": "true" }, // پاسخ‌های کاربرگ ۲
      },
    },
    maxAllowedSubmissions: 3, // حداکثر تعداد ارسال‌های مجاز
  };
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const course = await getCourseData(params.slug);

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden -mt-3.5">
      <CourseCoverImage imageUrl={course.coverImage} />
      <div className="relative w-full -mt-5 flex-1 bg-white rounded-t-3xl flex flex-col items-center px-3 py-2.5">
        {/* عنوان دوره و امتیازات */}
        <CourseTitleAndStars title={course.title} />

        {/* نوار پیشرفت (فقط در صورت خریداری‌شده نمایش داده می‌شود) */}
        {course.isPurchased && <ProgressBar progress={course.progress} />}

        {/* دکمه‌های خرید یا اقدامات پس از خرید */}
        {course.isPurchased ? (
          <CourseActionsAfterPurchase
            worksheets={course.worksheets}
            answers={course.answers}
            maxAllowedSubmissions={course.maxAllowedSubmissions}
          />
        ) : (
          <CoursePriceAndButton price={2_000_000} oldPrice={3_000_000} />
        )}

        <CourseDetailsSwiper />
        <CourseShortDescription />
        <CourseSectionsAccordion />
        <ReviewsAccordion />
      </div>
    </div>
  );
}