// app/(main)/courses/[slug]/components/CourseSectionsAccordion.tsx
"use client";

import { useState } from "react";
import { CourseSectionModal } from "./CourseSectionModal"; // ایمپورت مودال جدید

interface Section {
  id: number;
  title: string;
  duration: string;
  videoUrl?: string; // اختیاری: URL ویدیو
  description?: string; // اختیاری: توضیحات
}

export function CourseSectionsAccordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const sections: Section[] = [
    {
      id: 1,
      title: "قسمت ۱: مقدمه",
      duration: "۱۵ دقیقه",
      videoUrl: "https://www.youtube.com/embed/example1", // نمونه URL ویدیو
      description: "در این قسمت با مفاهیم پایه‌ای آشنا می‌شوید.",
    },
    {
      id: 2,
      title: "قسمت ۲: تکنیک‌های پایه",
      duration: "۳۰ دقیقه",
      videoUrl: "https://www.youtube.com/embed/example2",
      description: "تکنیک‌های اولیه تندخوانی را یاد بگیرید.",
    },
    {
      id: 3,
      title: "قسمت ۳: تمرینات پیشرفته",
      duration: "۴۵ دقیقه",
      description: "تمرینات پیشرفته برای بهبود سرعت.",
    },
    {
      id: 4,
      title: "قسمت ۴: جمع‌بندی",
      duration: "۱۰ دقیقه",
      description: "جمع‌بندی مطالب دوره.",
    },
  ];

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full mt-4 shadow-md rounded-xl bg-gray-50 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          <h2 className="text-lg font-bold text-right">قسمت‌های دوره</h2>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isAccordionOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isAccordionOpen && (
          <div className="mt-3 flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section)}
                className="p-3 bg-white border border-gray-200 rounded-lg text-right hover:bg-gray-50 transition"
              >
                <p className="text-sm font-medium">{section.title}</p>
                <p className="text-xs text-gray-500">{section.duration}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* مودال برای بخش انتخاب‌شده */}
      {selectedSection && (
        <CourseSectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedSection.title}
          videoUrl={selectedSection.videoUrl}
          description={selectedSection.description}
        />
      )}
    </>
  );
}