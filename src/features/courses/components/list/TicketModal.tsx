"use client";

import { X, Send } from "lucide-react";
import { useState } from "react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-20">
      <div className="bg-white rounded-t-2xl p-4 w-full max-w-md h-[75vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">تیکت پشتیبانی</h2>
          <button onClick={onClose} aria-label="close modal">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Messages (Scrollable) */}
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="flex flex-col gap-2">
            {/* Example messages */}
            <div className="bg-gray-100 p-2 rounded-lg self-start max-w-[70%]">
              <p className="text-sm text-gray-800">سلام، مشکلی در دسترسی به درس‌ها دارم.</p>
              <span className="text-xs text-gray-500 fa-num">12:30</span>
            </div>
            <div className="bg-primary-deep text-white p-2 rounded-lg self-end max-w-[70%]">
              <p className="text-sm">لطفاً جزئیات بیشتری ارائه دهید.</p>
              <span className="text-xs text-gray-200 fa-num">12:32</span>
            </div>
          </div>
        </div>

        {/* Input and Send Button (Sticky) */}
        <div className="sticky bottom-0 bg-white pt-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 border border-gray-300 rounded-lg p-2 text-sm"
            />
            <button
              className="bg-primary-deep text-white p-2 rounded-full"
              aria-label="send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}