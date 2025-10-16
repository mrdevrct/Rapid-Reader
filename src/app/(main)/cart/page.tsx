// app/(main)/cart/CartMain.tsx
"use client";

import { useState } from "react";

// Define types for course item
interface CourseItem {
  id: number;
  title: string;
  instructor: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  emoji: string;
  color: string;
}

export default function CartMain() {
  const [cartItems, setCartItems] = useState<CourseItem[]>([
    {
      id: 1,
      title: "دوره جامع React.js",
      instructor: "احمد محمدی",
      price: 299000,
      originalPrice: 429000,
      discountPercentage: 30,
      emoji: "💻",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "طراحی UI/UX حرفه‌ای",
      instructor: "سارا احمدی",
      price: 199000,
      originalPrice: 249000,
      discountPercentage: 20,
      emoji: "🎨",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "Node.js و Backend",
      instructor: "علی رضایی",
      price: 349000,
      originalPrice: 465000,
      discountPercentage: 25,
      emoji: "🚀",
      color: "bg-orange-100 text-orange-600",
    },
  ]);

  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState({ text: "", type: "" });

  // Format price to Persian format
  const fmtPrice = (n: number): string => n.toLocaleString("fa-IR") + " تومان";

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice, 0);
    const itemDiscount = originalTotal - subtotal;
    const finalTotal = subtotal * (1 - appliedDiscount / 100);
    return { subtotal, originalTotal, itemDiscount, finalTotal };
  };

  const { originalTotal, itemDiscount, finalTotal } = calculateTotals();

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast("دوره حذف شد", "success");
  };

  const applyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage({ text: "کد تخفیف را وارد کنید", type: "error" });
      return;
    }

    const validCodes: { [key: string]: number } = {
      WELCOME20: 20,
      STUDENT15: 15,
      NEWUSER10: 10,
    };

    const upperCode = discountCode.toUpperCase();
    if (validCodes[upperCode]) {
      setAppliedDiscount(validCodes[upperCode]);
      setDiscountMessage({ text: `تخفیف ${validCodes[upperCode]}% اعمال شد`, type: "success" });
      setDiscountCode("");
    } else {
      setDiscountMessage({ text: "کد تخفیف نامعتبر", type: "error" });
    }

    setTimeout(() => setDiscountMessage({ text: "", type: "" }), 3000);
  };

  const proceedToPayment = () => {
    if (cartItems.length === 0) {
      showToast("سبد خرید خالی است", "error");
      return;
    }

    // Simulate payment modal or redirect
    alert("در حال هدایت به صفحه پرداخت...");
  };

  const continueShopping = () => {
    showToast("در حال انتقال...", "info");
    // Simulate navigation
  };

  // Show toast notification
  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const toast = document.createElement("div");
    toast.className = `fixed left-3 top-3 z-50 px-4 py-2 rounded-lg shadow-lg text-white font-yekan text-sm font-bold`;
    if (type === "success") toast.className += " bg-green-600";
    else if (type === "error") toast.className += " bg-red-600";
    else toast.className += " bg-primary-deep";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  return (
    <div className="mt-4 max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold font-yekan text-gray-900 mb-2">
          سبد خرید
        </h1>
        <p className="text-sm font-normal font-yekan text-gray-600 max-w-2xl mx-auto">
          دوره‌های انتخابی شما
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-extrabold font-yekan">دوره‌ها</h2>
              <span className="text-sm font-yekan text-gray-600">{cartItems.length} دوره</span>
            </div>

            <div className="space-y-3">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                  >
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold font-yekan text-sm mb-1">{item.title}</h3>
                      <p className="text-xs font-yekan text-gray-600 mb-1">مدرس: {item.instructor}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold font-yekan text-sm">{fmtPrice(item.price)}</span>
                        <span className="text-xs font-yekan text-gray-500 line-through">{fmtPrice(item.originalPrice)}</span>
                        <span className="text-xs font-yekan bg-green-100 text-green-600 px-1.5 py-0.5 rounded">{item.discountPercentage}% تخفیف</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-600 p-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-base font-extrabold font-yekan text-gray-900 mb-2">سبد خرید خالی است</h3>
                  <p className="text-sm font-yekan text-gray-600 mb-4">هنوز دوره‌ای انتخاب نکرده‌اید</p>
                  <button
                    onClick={continueShopping}
                    className="bg-primary-deep hover:bg-primary-main text-white font-yekan font-bold px-4 py-2 rounded-lg transition"
                  >
                    مشاهده دوره‌ها
                  </button>
                </div>
              )}
            </div>

            {/* Continue Shopping */}
            {cartItems.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={continueShopping}
                  className="text-primary-deep hover:text-primary-main font-yekan font-bold text-sm"
                >
                  ← ادامه خرید
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white shadow-lg rounded-lg p-4 sticky top-24">
            <h3 className="text-lg font-extrabold font-yekan mb-4">خلاصه سفارش</h3>

            <div className="space-y-3 mb-4 text-sm font-yekan">
              <div className="flex justify-between text-gray-600">
                <span>قیمت کل:</span>
                <span>{fmtPrice(originalTotal)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>تخفیف:</span>
                <span>-{fmtPrice(itemDiscount)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base font-extrabold font-yekan text-gray-900">
                <span>مبلغ نهایی:</span>
                <span className="text-primary-deep">{fmtPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Discount Code */}
            <div className="mb-4">
              <label className="block text-sm font-bold font-yekan mb-1.5">کد تخفیف</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="کد تخفیف"
                  className="flex-1 rounded-lg bg-gray-100 focus:bg-white border border-gray-200 focus:ring-2 focus:ring-primary-deep outline-none px-3 py-2 text-sm font-yekan"
                />
                <button
                  onClick={applyDiscount}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-bold font-yekan"
                >
                  اعمال
                </button>
              </div>
              {discountMessage.text && (
                <div className={`mt-2 text-sm font-yekan ${discountMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {discountMessage.text}
                </div>
              )}
            </div>

            {/* Payment Button */}
            <button
              onClick={proceedToPayment}
              className="w-full h-[38px] bg-primary-deep hover:bg-primary-main text-white font-yekan font-bold px-4 py-2 rounded-lg transition active:scale-[0.98]"
            >
              پرداخت و ثبت نام
            </button>

            {/* Features */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <ul className="space-y-2 text-xs font-yekan text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  دسترسی مادام‌العمر
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  گواهی پایان دوره
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  پشتیبانی آنلاین
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}