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
    toast.className = `fixed right-4 top-4 z-50 px-4 py-2 rounded-xl shadow-xl text-white font-bold`;
    if (type === "success") toast.className += " bg-green-600";
    else if (type === "error") toast.className += " bg-red-600";
    else toast.className += " bg-brand-600";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  return (
    <main className="py-6 sm:py-8 container mx-auto px-4 max-w-5xl mt-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          سبد خرید
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          دوره‌های انتخابی شما
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-lg font-extrabold">دوره‌ها</h2>
              <span className="text-sm text-neutral-600">{cartItems.length} دوره</span>
            </div>

            <div className="space-y-3">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-neutral-600 mb-1">مدرس: {item.instructor}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{fmtPrice(item.price)}</span>
                        <span className="text-xs text-neutral-500 line-through">{fmtPrice(item.originalPrice)}</span>
                        <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">{item.discountPercentage}% تخفیف</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-neutral-400 hover:text-red-600 p-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">سبد خرید خالی است</h3>
                  <p className="text-neutral-600 mb-4 text-sm">هنوز دوره‌ای انتخاب نکرده‌اید</p>
                  <button
                    onClick={continueShopping}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2 rounded-xl transition"
                  >
                    مشاهده دوره‌ها
                  </button>
                </div>
              )}
            </div>

            {/* Continue Shopping */}
            {cartItems.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <button
                  onClick={continueShopping}
                  className="text-brand-600 hover:text-brand-700 font-bold text-sm"
                >
                  ← ادامه خرید
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 sm:p-5 sticky top-24">
            <h3 className="text-base font-extrabold mb-4">خلاصه سفارش</h3>

            <div className="space-y-3 mb-4 text-sm">
              <div className="flex justify-between text-neutral-600">
                <span>قیمت کل:</span>
                <span>{fmtPrice(originalTotal)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>تخفیف:</span>
                <span>-{fmtPrice(itemDiscount)}</span>
              </div>
              <hr className="border-neutral-200" />
              <div className="flex justify-between text-base font-bold text-gray-900">
                <span>مبلغ نهایی:</span>
                <span className="text-brand-700">{fmtPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Discount Code */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1.5">کد تخفیف</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="کد تخفیف"
                  className="flex-1 rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
                />
                <button
                  onClick={applyDiscount}
                  className="bg-neutral-100 hover:bg-neutral-200 px-3 py-2 rounded-xl text-sm font-bold"
                >
                  اعمال
                </button>
              </div>
              {discountMessage.text && (
                <div className={`mt-2 text-sm ${discountMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {discountMessage.text}
                </div>
              )}
            </div>

            {/* Payment Button */}
            <button
              onClick={proceedToPayment}
              className="w-full bg-primary-deep hover:bg-primary-main text-white font-bold px-4 py-3 rounded-xl transition active:scale-[0.98]"
            >
              پرداخت و ثبت نام
            </button>

            {/* Features */}
            <div className="mt-4 pt-4 border-t">
              <ul className="space-y-2 text-xs text-neutral-600">
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
    </main>
  );
}