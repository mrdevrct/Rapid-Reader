"use client";

import { validatePhone, persianToEnglishDigits } from "@/lib/validatePhone";
import Image from "next/image";
import { FormEvent, useState } from "react";

function LoginForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const englishValue = persianToEnglishDigits(value);

    if (validatePhone(englishValue)) {
      setError("");
      setPhoneNumber(englishValue);
      setShowOtpForm(true);
    } else {
      setError("شماره موبایل نامعتبر است ❌");
    }
  };

  const handleOtpSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("کد OTP بررسی می‌شود برای: " + phoneNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9۰-۹]/g, "");
    setValue(val);
    if (error) setError("");
  };

  // فرم OTP
  if (showOtpForm) {
    return (
      <div className="flex-center flex-col min-h-screen space-y-4 bg-gray-50 gap-14">
        <div>
          <Image src="/images/logo.png" width={159} height={159} alt="logo" />
        </div>

        <form
          onSubmit={handleOtpSubmit}
          className="border border-[#A6A6A6] rounded-2xl p-6 w-80 bg-white shadow-md"
        >
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              تأیید شماره موبایل
            </h2>
            <p className="text-sm text-gray-600">
              کد تأیید به شماره{" "}
              <span className="font-bold fa-num">{phoneNumber}</span> ارسال شد
            </p>
          </div>

          <div>
            <label
              htmlFor="otp"
              className="block font-bold text-base text-gray-700 mb-2"
            >
              کد تأیید
            </label>
            <input
              id="otp"
              type="tel"
              inputMode="numeric"
              maxLength={6}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-primary-deep text-center text-lg py-2 transition-all fa-num"
              placeholder="_ _ _ _ _ _"
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => setShowOtpForm(false)}
              className="flex-1 border border-primary-deep text-primary-deep font-bold py-2 rounded-full hover:bg-primary-deep/5 transition text-lg"
            >
              بازگشت
            </button>
            <button
              type="submit"
              className="flex-1 font-bold bg-primary-deep text-white py-2 rounded-full hover:bg-primary-main transition text-lg"
            >
              تأیید
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              className="text-primary-main text-sm hover:text-primary-deep transition"
            >
              ارسال مجدد کد
            </button>
          </div>
        </form>
      </div>
    );
  }

  // فرم اصلی ورود
  return (
    <div className="flex-center flex-col min-h-screen space-y-4 bg-gray-50 gap-14">
      <div>
        <Image src="/images/logo.png" width={159} height={159} alt="logo" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-[#A6A6A6] rounded-2xl p-6 w-80 bg-white shadow-md"
      >
        {/* 🆕 عنوان صفحه */}
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ورود / ثبت نام
          </h1>
          <p className="text-gray-600 text-sm">
            برای ادامه، شماره موبایل خود را وارد کنید
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 text-center text-sm font-semibold py-2 px-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        <div>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            maxLength={11}
            value={value}
            onChange={handleChange}
            className={`w-full border-b border-gray-400 focus:outline-none focus:border-primary-deep text-base py-2 transition-all fa-num ${
              value ? "text-left" : "text-right"
            }`}
            placeholder="شماره موبایل خود را وارد کنید"
          />
        </div>

        <button
          type="submit"
          className="w-full font-bold bg-primary-deep text-white py-2 rounded-full hover:bg-primary-main transition mt-6 text-lg"
        >
          دریافت کد تأیید
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
