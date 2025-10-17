"use client";

import { useState } from "react";
import { CertificateRequestModal } from "./CertificateRequestModal";
import { MessageCircle, Award, FileText } from "lucide-react";
import { TicketModal } from "./TicketModal";
import { WorksheetModal } from "./WorksheetModal";

// تعریف اینترفیس Worksheet
interface Worksheet {
  title: string;
  questions: { text: string; type: "number" | "checkbox" }[];
}

// تعریف پراپ‌ها
interface CourseActionsAfterPurchaseProps {
  worksheets: Worksheet[];
  answers: { [date: string]: { [worksheetIndex: string]: { [questionIndex: string]: string } } };
  maxAllowedSubmissions: number;
}

export function CourseActionsAfterPurchase({
  worksheets,
  answers,
  maxAllowedSubmissions,
}: CourseActionsAfterPurchaseProps) {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isWorksheetModalOpen, setIsWorksheetModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center gap-4 mt-4.5">
        {/* Ticket Box */}
        <button
          onClick={() => setIsTicketModalOpen(true)}
          className="flex flex-col items-center justify-center w-24 h-24 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <MessageCircle className="w-8 h-8 text-primary-deep" />
          <span className="mt-2 text-sm font-medium text-gray-800">تیکت</span>
        </button>

        {/* Certificate Request Box */}
        <button
          onClick={() => setIsCertificateModalOpen(true)}
          className="flex flex-col items-center justify-center w-24 h-24 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <Award className="w-8 h-8 text-primary-deep" />
          <span className="mt-2 text-sm font-medium text-gray-800">درخواست مدرک</span>
        </button>

        {/* Worksheet Box */}
        <button
          onClick={() => setIsWorksheetModalOpen(true)}
          className="flex flex-col items-center justify-center w-24 h-24 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <FileText className="w-8 h-8 text-primary-deep" />
          <span className="mt-2 text-sm font-medium text-gray-800">کاربرگ‌ها</span>
        </button>
      </div>

      {/* Modals */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />
      <CertificateRequestModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />
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