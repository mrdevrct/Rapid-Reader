import { usePagination } from "@/hooks/usePagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onGoToPage,
}) => {
  const { pageRange } = usePagination({ currentPage, totalPages });

  return (
    <div className="text-center mt-8 flex justify-center items-center gap-2 flex-wrap">
      {/* دکمه صفحه قبلی */}
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-md font-bold transition ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-primary-deep text-white hover:bg-primary-deep/90"
        }`}
      >
        {"<"}
      </button>

      {/* شماره صفحات */}
      <div className="flex gap-1">
        {pageRange.map((item, index) => (
          <button
            key={`${item}-${index}`}
            onClick={() => typeof item === "number" && onGoToPage(item)}
            disabled={typeof item !== "number"}
            className={`w-10 h-10 flex items-center justify-center rounded-md transition ${
              typeof item !== "number"
                ? "bg-gray-100 text-gray-600 cursor-default"
                : item === currentPage
                ? "bg-primary-deep text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* دکمه صفحه بعدی */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-md font-bold transition ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-primary-deep text-white hover:bg-primary-deep/90"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;