"use client";

import { X } from "lucide-react";

interface CertificateRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateRequestModal({ isOpen, onClose }: CertificateRequestModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-20">
      <div className="bg-white rounded-t-2xl p-4 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">درخواست مدرک</h2>
          <button onClick={onClose} aria-label="close modal">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-4">
            برای درخواست مدرک، لطفاً روی دکمه ارسال درخواست کلیک کنید تا درخواست شما ثبت شود.
          </p>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-primary-deep text-white py-2 rounded-full hover:bg-primary-dark transition text-sm font-medium"
          onClick={() => {
            // Handle certificate request submission
            console.log("Certificate request submitted");
            onClose();
          }}
        >
          ارسال درخواست
        </button>
      </div>
    </div>
  );
}