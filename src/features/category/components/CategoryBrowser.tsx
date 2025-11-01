"use client";

import { Category } from "@/features/category/types/category.type";
import BaseCategory from "./BaseCategory";
import SubCategory from "./SubCategory";

interface CategoryBrowserProps {
  categories: Category[];
}

export default function CategoryBrowser({ categories }: CategoryBrowserProps) {
  if (!categories || categories.length === 0) return null;

  // فقط دسته‌هایی که زیرمجموعه دارند
  const parentsWithChildren = categories.filter(
    (cat) => cat.children && cat.children.length > 0
  );

  return (
    <div className="flex flex-col gap-6 mt-6">
      {/* دسته‌های مادر */}
      <div>
        <BaseCategory categories={parentsWithChildren} />
      </div>

      {/* زیر‌دسته‌ها برای هر دسته مادر */}
      {parentsWithChildren.map((parent) => (
        <div key={parent.id}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {parent.name}
            </h3>
          </div>
          <SubCategory subCategories={parent.children || []} />
        </div>
      ))}
    </div>
  );
}
