"use client";

import { useState } from "react";
import { WorksheetModal } from "./WorksheetModal";
import { FileText } from "lucide-react";

interface Worksheet {
  title: string;
  questions: { text: string; type: "number" | "checkbox" }[];
}

interface CourseWorksheetsAccordionProps {
  worksheets: Worksheet[];
  answers: { [date: string]: { [worksheetIndex: string]: { [questionIndex: string]: string } } };
  maxAllowedSubmissions: number;
}

export function CourseWorksheetsAccordion({
  worksheets,
  answers,
  maxAllowedSubmissions,
}: CourseWorksheetsAccordionProps) {
  const [isWorksheetModalOpen, setIsWorksheetModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center gap-4 mt-4.5">
        <button
          onClick={() => setIsWorksheetModalOpen(true)}
          className="flex flex-col items-center justify-center w-24 h-24 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <FileText className="w-8 h-8 text-primary-deep" />
          <span className="mt-2 text-sm font-medium text-gray-800">کاربرگ‌ها</span>
        </button>
      </div>

      <WorksheetModal
        isOpen={isWorksheetModalOpen}
        onClose={() => setIsWorksheetModalOpen(false)}
        worksheets={worksheets}
        answers={answers}
        maxAllowedSubmissions={maxAllowedSubmissions}
      />
    </>
  );
}