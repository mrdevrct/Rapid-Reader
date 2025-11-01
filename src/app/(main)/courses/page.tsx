// app/courses/page.tsx
import React from "react";
import Link from "next/link";
import { CourseProductCard } from "@/ui/course/CourseProductCard";
import { ProductServiceServer } from "@/features/courses/api/productService";

export default async function CoursesPage() {
  const { products } = await ProductServiceServer.getAllProductsServer();

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12">
      {/* عنوان صفحه */}
      <h1 className="text-center text-3xl font-bold mb-2">دوره‌ها</h1>

      {/* مسیر ناوبری (Breadcrumb) */}
      <div className="flex justify-center items-center gap-1 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          خانه
        </Link>{" "}
        / <span className="text-gray-800">دوره‌ها</span>
      </div>

      {/* لیست دوره‌ها */}
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* نمونه استفاده از CourseProduct */}
        {products.map((course) => (
          <CourseProductCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
