import { useMemo } from "react";

export const usePagination = ({
  currentPage,
  totalPages,
  maxPagesToShow = 4,
}: {
  currentPage: number;
  totalPages: number;
  maxPagesToShow?: number;
}) => {
  const pageRange = useMemo(() => {
    const range: (number | "...")[] = [];
    if (totalPages <= 1) return range;

    const half = Math.floor(maxPagesToShow / 2);
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxPagesToShow - 1, totalPages);

    if (end - start < maxPagesToShow - 1) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }

    if (start > 1) {
      range.push("...");
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages) {
      range.push("...");
    }

    return range;
  }, [currentPage, totalPages, maxPagesToShow]);

  return { pageRange };
};
