"use client";

import { X } from "lucide-react";

interface CourseSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string; // فعلاً فقط برای نمایش استفاده نمی‌شود
  description?: string;
}

export function CourseSectionModal({
  isOpen,
  onClose,
  title,
  description,
}: CourseSectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-20">
      <div className="bg-white rounded-t-2xl p-4 w-full max-w-md h-[70vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800 text-right">{title}</h2>
          <button onClick={onClose} aria-label="close modal">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* پخش ویدیو از API سرور */}
        <div className="mb-4 flex-1">
          <video
            src={`/api/video/1`}
            controls
            className="w-full h-full rounded-lg bg-black"
          />
        </div>

        {/* توضیحات */}
        <div className="overflow-y-auto px-1">
          <p className="text-sm text-gray-700 text-right leading-relaxed">
            {description ||
              "توضیحات این قسمت در اینجا قرار می‌گیرد. این متن نمونه است."}
          </p>
        </div>
      </div>
    </div>
  );
}
