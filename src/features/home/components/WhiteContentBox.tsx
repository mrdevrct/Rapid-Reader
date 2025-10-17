/* eslint-disable @typescript-eslint/no-explicit-any */
export function WhiteContentBox({ children }: any) {
  return (
    <div className="relative w-full -mt-5 flex-1 bg-white rounded-3xl flex flex-col items-center px-3">
      {children}
    </div>
  );
}