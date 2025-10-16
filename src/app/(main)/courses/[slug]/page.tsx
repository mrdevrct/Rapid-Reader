// app/(main)/courses/[slug]/page.tsx
import { CourseCoverImage } from "@/features/courses/components/CourseCoverImage";
import { CourseDetailsSwiper } from "@/features/courses/components/CourseDetailsSwiper";
import { CoursePriceAndButton } from "@/features/courses/components/CoursePriceAndButton";
import { CourseSectionsAccordion } from "@/features/courses/components/CourseSectionsAccordion";
import { CourseShortDescription } from "@/features/courses/components/CourseShortDescription";
import { CourseTitleAndStars } from "@/features/courses/components/CourseTitleAndStars";
import { ReviewsAccordion } from "@/features/courses/components/ReviewsAccordion";

async function getCourseData(slug: string) {
  return {
    slug,
    title: "دوره جامع تندخوانی",
    coverImage: "/images/course1.jpg",
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
      <div className="relative w-full -mt-5 flex-1 bg-white rounded-t-3xl flex flex-col items-center px-3">
        {/* Course title and stars */}
        <CourseTitleAndStars title={course.title} />

        {/* Price and buy button */}
        <CoursePriceAndButton price={2_000_000} oldPrice={3_000_000}/>

        <CourseDetailsSwiper />

        <CourseShortDescription />

        <CourseSectionsAccordion />
        <ReviewsAccordion />
      </div>
    </div>
  );
}
