// app/features/courses/components/ProgressBar.tsx
interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full mt-4 bg-gray-50 border-2 border-gray-200 p-4 rounded-2xl">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700 mb-2">وضعیت پیشرفت</h3>
        <p className="text-sm text-gray-600 mt-1 text-center fa-num">
          {progress}%
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="bg-primary-deep h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
