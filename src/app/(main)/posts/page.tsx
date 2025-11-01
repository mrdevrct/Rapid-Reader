"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePosts } from "@/features/posts/hooks/usePosts";
import { PostQueryParams } from "@/features/posts/types/post.type";
import PostCard from "@/ui/post/PostCard";
import EmptyView from "@/components/view/EmptyView";
import StatusView from "@/components/view/StatusView";
import Pagination from "@/components/pagination/Pagination";

export default function ArticlesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // خواندن شماره صفحه از URL، اگر وجود نداشته باشد پیش‌فرض 1
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [viewMode] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(initialPage);

  const queryParams: PostQueryParams = {
    per_page: 6,
    page,
  };

  const {
    posts,
    totalPosts,
    totalPages,
    currentPage,
    loading,
    error,
    refetch,
  } = usePosts(queryParams);

  // به‌روزرسانی URL هنگام تغییر صفحه
  useEffect(() => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("page", page.toString());
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  }, [page, router]);

  // هندل کردن رفتن به صفحه بعدی
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // هندل کردن رفتن به صفحه قبلی
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // هندل کردن رفتن به یک صفحه خاص
  const handleGoToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="py-6 px-2">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          مقالات و بلاگ
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          در این بخش می‌توانید جدیدترین مقالات و مطالب آموزشی در زمینه بهداشت،
          سلامت و مراقبت شخصی را مطالعه کنید
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6">
        <div className="flex-1">
          {/* Loading State */}
          {loading && <StatusView variant="loading" />}

          {/* Error State */}
          {error && (
            <StatusView
              variant="error"
              link={{
                href: "#",
                text: "تلاش مجدد",
                className: "text-primary underline hover:text-primary/80 px-0",
                onClick: () => refetch(),
              }}
            />
          )}

          {/* Empty State */}
          {!loading && !error && posts.length === 0 && (
            <EmptyView
              variant="not-found"
              link={{ href: "/", text: "بازگشت به صفحه اصلی" }}
            />
          )}

          {/* Blog list */}
          {!loading && !error && posts.length > 0 && (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                  : "flex flex-col gap-4"
              }
            >
              {posts.map((post) => (
                <PostCard key={post.ID} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && !loading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrevPage}
              onNext={handleNextPage}
              onGoToPage={handleGoToPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
