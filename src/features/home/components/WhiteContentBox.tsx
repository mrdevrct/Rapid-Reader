/* eslint-disable @typescript-eslint/no-explicit-any */
export function WhiteContentBox({ children }: any) {
  return (
    <div className="relative w-full -mt-5 flex-1 bg-[#F7F7F7] rounded-t-3xl flex flex-col items-center px-3">
      {children}
    </div>
  );
}