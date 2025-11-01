"use client";

import { useState, FormEvent, ChangeEvent } from "react";

// Define types for form data and toast
interface FormData {
  province: string;
  city: string;
  payment: "online" | "wallet";
}

interface Toast {
  visible: boolean;
  message: string;
  type: "success" | "error";
}

// List of Iranian provinces
const provinces = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

export default function CheckoutMain() {
  const [formData, setFormData] = useState<FormData>({
    province: "",
    city: "",
    payment: "online",
  });

  const [finalTotal] = useState<number>(8990000);
  const [toast, setToast] = useState<Toast>({
    visible: false,
    message: "",
    type: "success",
  });

  const subtotalAmount: number = 8990000;

  // Format price to Persian format
  const fmtPrice = (n: number): string => n.toLocaleString("fa-IR") + " تومان";

  // Show toast notification
  const showToast = (
    message: string,
    type: "success" | "error" = "success"
  ): void => {
    setToast({ visible: true, message, type });
    setTimeout(
      () => setToast({ visible: false, message: "", type: "success" }),
      3000
    );
  };

  // Handle form input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { province, city, payment } = formData;

    // Basic validation
    if (!province || !city) {
      showToast("لطفاً تمام فیلدهای ضروری را پر کنید", "error");
      return;
    }

    // Simulate order processing
    const orderData = {
      ...formData,
      subtotal: subtotalAmount,
      finalAmount: subtotalAmount,
      orderNumber: `SH-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`,
    };

    console.log("Order submitted:", orderData);

    showToast("سفارش با موفقیت ثبت شد! به صفحه پرداخت هدایت می‌شوید...");

    // Simulate redirect to payment
    setTimeout(() => {
      alert(
        `سفارش شما ثبت شد!\n\nشماره سفارش: ${
          orderData.orderNumber
        }\nمبلغ نهایی: ${fmtPrice(
          subtotalAmount
        )}\nروش پرداخت: ${getPaymentMethodName(
          payment
        )}\n\nبه درگاه پرداخت هدایت می‌شوید...`
      );
    }, 1500);
  };

  // Get payment method name
  const getPaymentMethodName = (method: FormData["payment"]): string => {
    switch (method) {
      case "online":
        return "پرداخت آنلاین";
      case "wallet":
        return "کیف پول";
      default:
        return method;
    }
  };

  return (
    <main className="py-6 sm:py-8 container mx-auto px-4 mt-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          نهایی کردن خرید
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          اطلاعات تماس و محل سکونت خود را وارد کنید تا ثبت‌نام دوره شما تکمیل و
          به درگاه پرداخت هدایت شود
        </p>
      </div>
      <form
        id="checkoutForm"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        onSubmit={handleSubmit}
      >
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact and Location */}
          <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-extrabold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-brand-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              اطلاعات تماس و محل سکونت
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-bold mb-1.5"
                >
                  استان
                </label>
                <select
                  id="province"
                  name="province"
                  required
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
                >
                  <option value="" disabled>
                    انتخاب استان
                  </option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-bold mb-1.5"
                >
                  شهر
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
                  placeholder="مثال: تهران"
                />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-extrabold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-brand-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              روش پرداخت
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 cursor-pointer transition">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={formData.payment === "online"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-brand-600 focus:ring-brand-600"
                />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-brand-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">پرداخت آنلاین</div>
                    <div className="text-xs text-neutral-600">
                      کارت بانکی، اینترنت بانک
                    </div>
                  </div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 cursor-pointer transition">
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={formData.payment === "wallet"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-brand-600 focus:ring-brand-600"
                />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">کیف پول</div>
                    <div className="text-xs text-neutral-600">
                      موجودی: ۱,۲۵۰,۰۰۰ تومان
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div>
          <div className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 sm:p-5 sticky top-24">
            <h3 className="text-base font-extrabold mb-4">خلاصه سفارش</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100"></div>
                  <div>
                    <div className="font-bold">دوره آموزش بازاریابی</div>
                    <div className="text-xs text-neutral-600">تعداد: ۱</div>
                  </div>
                </div>
                <span className="font-bold">۳,۲۹۰,۰۰۰</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100"></div>
                  <div>
                    <div className="font-bold">دوره مدیریت فروش</div>
                    <div className="text-xs text-neutral-600">تعداد: ۱</div>
                  </div>
                </div>
                <span className="font-bold">۵,۷۰۰,۰۰۰</span>
              </div>
            </div>
            <hr className="border-neutral-200 mb-4" />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>جمع کل (۲ دوره)</span>
                <span className="font-bold">{fmtPrice(subtotalAmount)}</span>
              </div>
              <hr className="border-neutral-200" />
              <div className="flex justify-between text-base font-bold">
                <span>مبلغ نهایی</span>
                <span className="text-brand-700">{fmtPrice(finalTotal)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-3 rounded-xl transition active:scale-[0.98]"
            >
              تأیید و پرداخت
            </button>
            <button
              type="submit"
              className="w-full mt-3 bg-primary-deep hover:bg-primary-deep/90 text-white font-bold px-4 py-3 rounded-xl transition active:scale-[0.98]"
            >
              تکمیل خرید
            </button>
            <p className="text-xs text-neutral-600 mt-3 text-center">
              با تأیید سفارش،{" "}
              <a href="#terms" className="text-brand-600 hover:text-brand-700">
                قوانین و مقررات
              </a>{" "}
              را می‌پذیرید
            </p>
          </div>
        </div>
      </form>

      {/* Toast */}
      <div
        className={`fixed right-4 top-4 sm:right-6 sm:top-6 z-50 ${
          toast.visible ? "" : "hidden"
        }`}
      >
        <div
          className={
            toast.type === "success"
              ? "bg-white border border-green-200 text-green-700 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2"
              : "bg-white border border-red-200 text-red-700 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{toast.message}</span>
        </div>
      </div>
    </main>
  );
}
