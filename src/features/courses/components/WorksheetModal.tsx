"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface Worksheet {
  title: string;
  questions: { text: string; type: "number" | "checkbox" }[];
}

interface WorksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  worksheets: Worksheet[];
  answers: {
    [date: string]: {
      [worksheetIndex: string]: { [questionIndex: string]: string };
    };
  };
  maxAllowedSubmissions: number;
}

export function WorksheetModal({
  isOpen,
  onClose,
  worksheets,
  answers,
  maxAllowedSubmissions,
}: WorksheetModalProps) {
  const [formAnswers, setFormAnswers] = useState<{
    [worksheetIndex: number]: { [questionIndex: number]: string };
  }>({});

  if (!isOpen) return null;

  const submissionCount = Object.keys(answers).length;

  const handleAnswerChange = (
    worksheetIndex: number,
    questionIndex: number,
    value: string
  ) => {
    setFormAnswers((prev) => ({
      ...prev,
      [worksheetIndex]: {
        ...prev[worksheetIndex],
        [questionIndex]: value,
      },
    }));
  };

  const handleSubmit = (worksheetIndex: number) => {
    if (submissionCount >= maxAllowedSubmissions) {
      alert("شما به حداکثر تعداد ارسال‌های مجاز رسیده‌اید.");
      return;
    }
    console.log(
      `Worksheet ${worksheetIndex} submitted:`,
      formAnswers[worksheetIndex]
    );
    setFormAnswers((prev) => ({ ...prev, [worksheetIndex]: {} }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-20">
      <div className="bg-white rounded-t-2xl p-4 w-full max-w-2xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">کاربرگ‌ها</h2>
          <button onClick={onClose} aria-label="close modal">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto space-y-8">
          {worksheets.map((worksheet, worksheetIndex) => (
            <div key={worksheetIndex} className="border rounded-lg p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {worksheet.title}
              </h3>

              <table className="w-full border-collapse border border-gray-200 text-sm text-gray-700">
                <thead>
                  <tr className="bg-gray-100 text-center">
                    <th className="border border-gray-200 p-2 w-3/4">سوال</th>
                    <th className="border border-gray-200 p-2">پاسخ</th>
                  </tr>
                </thead>
                <tbody>
                  {worksheet.questions.map((question, questionIndex) => {
                    const savedAnswer =
                      answers?.["2025-10-16"]?.[worksheetIndex]?.[
                        questionIndex
                      ] || "";
                    const currentAnswer =
                      formAnswers[worksheetIndex]?.[questionIndex] ||
                      savedAnswer;

                    return (
                      <tr key={questionIndex} className="text-center">
                        <td className="border border-gray-200 p-2 text-right">
                          {question.text}
                        </td>
                        <td className="border border-gray-200 p-2">
                          {question.type === "number" ? (
                            <input
                              type="number"
                              value={currentAnswer}
                              onChange={(e) =>
                                handleAnswerChange(
                                  worksheetIndex,
                                  questionIndex,
                                  e.target.value
                                )
                              }
                              className="border border-gray-300 rounded-lg p-1 w-20 text-center fa-num"
                              min="0"
                              max="10"
                            />
                          ) : (
                            <input
                              type="checkbox"
                              checked={currentAnswer === "1"}
                              onChange={(e) =>
                                handleAnswerChange(
                                  worksheetIndex,
                                  questionIndex,
                                  e.target.checked ? "1" : "0"
                                )
                              }
                              className="w-5 h-5 accent-primary-deep"
                            />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <button
                className="w-full bg-primary-deep text-white py-2 rounded-full mt-4 hover:bg-primary-dark transition text-sm font-medium"
                onClick={() => handleSubmit(worksheetIndex)}
                disabled={submissionCount >= maxAllowedSubmissions}
              >
                ارسال پاسخ‌های این کاربرگ
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
