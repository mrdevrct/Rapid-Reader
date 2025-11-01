"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { verifyOtpAction, sendOtpAction } from "../actions/otpActions";
import Link from "next/link";

interface OtpFormProps {
  phoneNumber: string;
  setShowOtpForm: (show: boolean) => void;
}

export default function OtpForm({ phoneNumber, setShowOtpForm }: OtpFormProps) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleOtpSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("mobile", phoneNumber);
    formData.append("otp", otp);

    const response = await verifyOtpAction(formData);

    setLoading(false);
    if (response.success) {
      setError("");
      window.location.href = "/"; // Example redirect
    } else {
      setError(response.message || "کد تأیید نامعتبر است ❌");
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    const formData = new FormData();
    formData.append("mobile", phoneNumber);

    const response = await sendOtpAction(formData);

    setResendLoading(false);
    if (response.success) {
      setError("");
      alert("کد تأیید مجدداً ارسال شد");
    } else {
      setError(response.message || "خطا در ارسال مجدد کد ❌");
    }
  };

  return (
    <div className="flex-center min-h-screen flex-col space-y-4 bg-gray-50 gap-4 py-6">
      <Link href="/">
        <Image src="/images/logo.png" width={159} height={159} alt="logo" />
      </Link>

      <form
        onSubmit={handleOtpSubmit}
        className="border border-gray-100 rounded-2xl p-6 w-80 bg-white shadow-md"
      >
        <div className="text-center mb-4">
          <h2 className="font-bold text-lg text-gray-800 mb-2">
            تأیید شماره موبایل
          </h2>
          <p className="text-sm text-gray-600">
            کد تأیید به شماره <span className="font-medium">{phoneNumber}</span>{" "}
            ارسال شد
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 text-center text-sm font-medium py-2 px-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="otp"
            className="block font-medium text-sm text-gray-700 mb-2"
          >
            کد تأیید
          </label>
          <input
            id="otp"
            type="tel"
            inputMode="numeric"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
            className="w-full border-b border-gray-400 focus:outline-none focus:border-primary text-center text-sm py-2 transition-all"
            placeholder="_ _ _ _ _ _"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={() => setShowOtpForm(false)}
            className="flex-1 border border-primary text-primaryfont-medium py-2 rounded-xl hover:bg-primary/10 transition text-sm"
          >
            بازگشت
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 font-medium bg-primary-deep text-white py-2 rounded-xl transition text-sm ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary-main"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              "تأیید"
            )}
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={resendLoading}
            className={`text-primarytext-sm transition ${
              resendLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-[#5A9472]"
            }`}
          >
            {resendLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin inline-block"></div>
              </div>
            ) : (
              "ارسال مجدد کد"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
