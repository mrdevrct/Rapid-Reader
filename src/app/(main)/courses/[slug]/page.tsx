// src/app/course/[slug]/page.tsx
import { ProductServiceServer } from "@/features/courses/api/productService";
import { CourseActionsAfterPurchase } from "@/features/courses/components/list/CourseActionsAfterPurchase";
import { CourseCoverImage } from "@/features/courses/components/list/CourseCoverImage";
import { CoursePriceAndButton } from "@/features/courses/components/list/CoursePriceAndButton";
import { CourseTitleAndStars } from "@/features/courses/components/list/CourseTitleAndStars";
import { ProgressBar } from "@/features/courses/components/list/ProgressBar";

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await ProductServiceServer.getSingleProductServer(params.slug);
  const { worksheets, max_allowed_submissions } = await ProductServiceServer.getWorksheetsServer(
    product.id
  );

  // ۳. دریافت تیکت (اختیاری)
  // const ticket = await ProductServiceServer.getTicketServer(product.id);

  // ۴. دریافت سکشن‌ها (اختیاری)
  // const sections = await ProductServiceServer.getSectionsServer(product.id);

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden -mt-3.5">
      <CourseCoverImage imageUrl={product.image || "/fallback.jpg"} />
      <div className="relative w-full -mt-5 flex-1 bg-white rounded-t-3xl flex flex-col items-center px-3 py-2.5">
        <CourseTitleAndStars title={product.name} />

        {product.has_purchased && <ProgressBar progress={75} /> /* بعداً از API */}

        {product.has_purchased ? (
          <CourseActionsAfterPurchase
            worksheets={worksheets}
            answers={{}} // بعداً از API کاربر
            maxAllowedSubmissions={max_allowed_submissions}
          />
        ) : (
          <CoursePriceAndButton
            price={parseInt(product.regular_price) || 0}
            oldPrice={product.sale_price ? parseInt(product.sale_price) : undefined}
          />
        )}

        {/* <CourseSectionsAccordion sections={sections.sections} /> */}
        {/* <ReviewsAccordion /> */}
      </div>
    </div>
  );
}