"use client";

import { useEffect, useState } from "react";
import { CreditCard, CheckCircle, Clock, XCircle } from "lucide-react";
import StatusView from "@/components/view/StatusView";
import EmptyView from "@/components/view/EmptyView";

// فرضی: چک‌های کاربر (در عمل باید از API یا سرور گرفته شود)
interface CheckItem {
  id: string;
  amount: number;
  date_issued: string;
  due_date: string;
  status: "paid" | "pending" | "bounced";
}

export default function CheckStatusPage() {
  const [checks, setChecks] = useState<CheckItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی دریافت داده از سرور
    setTimeout(() => {
      setChecks([
        {
          id: "CHK-20251001",
          amount: 1250000,
          date_issued: "2025-09-15",
          due_date: "2025-10-10",
          status: "paid",
        },
        {
          id: "CHK-20251002",
          amount: 830000,
          date_issued: "2025-09-25",
          due_date: "2025-11-01",
          status: "pending",
        },
        {
          id: "CHK-20251003",
          amount: 640000,
          date_issued: "2025-08-10",
          due_date: "2025-09-15",
          status: "bounced",
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const statusMap: Record<string, any> = {
    paid: {
      label: "پرداخت شده",
      color: "text-green-600",
      bg: "bg-green-50",
      icon: CheckCircle,
    },
    pending: {
      label: "در انتظار وصول",
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: Clock,
    },
    bounced: {
      label: "برگشتی",
      color: "text-red-600",
      bg: "bg-red-50",
      icon: XCircle,
    },
  };

  if (loading) {
    return <StatusView variant="loading" />;
  }

  if (checks.length === 0) {
    return (
      <EmptyView
        variant="orders"
        link={{
          href: "/",
          text: "بازگشت به فروشگاه",
        }}
      />
    );
  }

  return (
    <section className="px-2">
      {/* 🔹 عنوان صفحه */}
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-medium text-primary">وضعیت چک‌های من</h1>
      </div>

      {/* 📋 لیست چک‌ها */}
      <div className="grid gap-4">
        {checks.map((check) => {
          const statusInfo = statusMap[check.status];
          const Icon = statusInfo.icon;

          return (
            <div
              key={check.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* بالای کارت */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${statusInfo.bg} ${statusInfo.color} flex items-center justify-center rounded-full`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">شماره چک</p>
                    <p className="text-gray-800 font-medium text-sm">
                      {check.id}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 text-xs font-medium rounded-xl ${statusInfo.bg} ${statusInfo.color}`}
                >
                  {statusInfo.label}
                </span>
              </div>

              {/* جزئیات چک */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
                <div className="flex flex-col">
                  <span className="text-gray-500 mb-1">تاریخ صدور:</span>
                  <span className="font-medium">
                    {new Date(check.date_issued).toLocaleDateString("fa-IR")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 mb-1">تاریخ سررسید:</span>
                  <span className="font-medium">
                    {new Date(check.due_date).toLocaleDateString("fa-IR")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 mb-1">مبلغ:</span>
                  <span className="text-primary font-bold">
                    {check.amount.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
