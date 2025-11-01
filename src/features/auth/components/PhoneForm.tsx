"use client";

import { validatePhone, persianToEnglishDigits } from "@/lib/validatePhone";
import Image from "next/image";
import { FormEvent, ChangeEvent, useState } from "react";
import { sendOtpAction } from "../actions/otpActions";
import Link from "next/link";

interface PhoneFormProps {
  value: string;
  error: string;
  setValue: (value: string) => void;
  setError: (error: string) => void;
  setPhoneNumber: (phone: string) => void;
  setShowOtpForm: (show: boolean) => void;
}

export default function PhoneForm({
  value,
  error,
  setValue,
  setError,
  setPhoneNumber,
  setShowOtpForm,
}: PhoneFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const englishValue = persianToEnglishDigits(value);

    if (!validatePhone(englishValue)) {
      setError("شماره موبایل نامعتبر است ❌");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("mobile", englishValue);

    const response = await sendOtpAction(formData);

    setLoading(false);
    if (response.success) {
      setError("");
      setPhoneNumber(englishValue);
      setShowOtpForm(true);
    } else {
      setError(response.message || "خطا در ارسال کد تأیید ❌");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9۰-۹]/g, "");
    setValue(val);
    if (error) setError("");
  };

  return (
    <div className="flex-center min-h-screen flex-col space-y-4 bg-gray-50 gap-4 py-6">
      <Link href="/">
        <Image src="/images/logo.png" width={159} height={159} alt="logo" />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-100 rounded-2xl p-6 w-80 bg-white shadow-md"
      >
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ورود / ثبت نام
          </h1>
          <p className="text-sm text-gray-600">
            برای ادامه، شماره موبایل خود را وارد کنید
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 text-center text-sm font-medium py-2 px-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="phone"
            className="block font-medium text-sm text-gray-700 mb-2"
          >
            موبایل
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            maxLength={11}
            value={value}
            onChange={handleChange}
            className={`w-full border-b border-gray-400 focus:outline-none focus:border-primary text-sm py-2 transition-all ${
              value ? "text-left" : "text-right"
            }`}
            placeholder="شماره موبایل خود را وارد کنید"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-medium bg-primary-deep text-white py-2 rounded-xl transition mt-6 text-sm ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-main"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            "دریافت کد تأیید"
          )}
        </button>
      </form>
    </div>
  );
}
