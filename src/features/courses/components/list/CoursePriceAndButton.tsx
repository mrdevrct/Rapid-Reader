interface CoursePriceAndButtonProps {
  price: number;
  oldPrice?: number;
}

export function CoursePriceAndButton({
  price,
  oldPrice,
}: CoursePriceAndButtonProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-4.5 gap-3">
      {/* Price */}
      <div className="flex justify-end sm:justify-start gap-2 w-full sm:w-1/2">
        <p className="text-base font-normal leading-none fa-num">{price} تومان</p>
        {oldPrice && (
          <p className="text-xs text-primary-deep line-through fa-num mt-1">
            {oldPrice} تومان
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 w-full sm:w-1/2">
        {/* شرکت در دوره */}
        <button className="flex-1 h-[38px] border border-primary-deep text-primary-deep rounded-lg text-sm font-medium">
          شرکت در دوره
        </button>

        {/* خرید */}
        <button className="flex-1 h-[38px] bg-primary-deep text-white rounded-lg text-sm font-medium">
          خرید
        </button>
      </div>
    </div>
  );
}
