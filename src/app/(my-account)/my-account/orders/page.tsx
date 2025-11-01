"use client";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  X,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useUserOrders } from "@/features/auth/hooks/useUserOrders";
import EmptyView from "@/components/view/EmptyView";
import StatusView from "@/components/view/StatusView";
import { Order } from "@/features/auth/types/order.types";
import { useState } from "react";

export default function OrdersPage() {
  const { orders, loading, error } = useUserOrders();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // به‌روزرسانی statusMap با on-hold
  const statusMap: Record<string, any> = {
    delivered: {
      label: "تحویل داده شده",
      color: "text-green-600",
      bg: "bg-green-50",
      icon: CheckCircle,
    },
    shipping: {
      label: "در حال ارسال",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: Truck,
    },
    processing: {
      label: "در حال آماده‌سازی",
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: Clock,
    },
    "on-hold": {
      // اضافه شد
      label: "در انتظار پرداخت",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      icon: Clock,
    },
  };

  const openModal = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  // تبدیل items object به array
  const getOrderItems = (
    order: Order
  ): Array<{ id: string; name: string; quantity: number; total: string }> => {
    return Object.entries(order.items).map(([id, item]) => ({
      id,
      ...item,
    }));
  };

  if (loading) return <StatusView variant="loading" />;
  if (error)
    return (
      <StatusView
        variant="error"
        link={{ href: "/profile", text: "بازگشت به پروفایل" }}
      />
    );

  const isEmpty = orders.length === 0;

  return (
    <section className="px-2">
      <div className="flex items-center gap-2 mb-4">
        <Package className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-medium text-primary">آخرین خریدهای من</h1>
      </div>

      {isEmpty ? (
        <EmptyView
          variant="orders"
          link={{ href: "/", text: "رفتن به فروشگاه" }}
        />
      ) : (
        <div className="grid gap-4">
          {orders.map((order: Order) => {
            const statusInfo = statusMap[order.status] || statusMap["on-hold"];
            const Icon = statusInfo.icon;
            return (
              <div
                key={order.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 border-b-2 border-gray-200 pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 ${statusInfo.bg} ${statusInfo.color} flex items-center justify-center rounded-full`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">شماره سفارش</p>
                      <p className="text-sm font-medium text-gray-800">
                        {order.id}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(order)}
                    className="text-xs bg-primary py-1 px-2 text-white font-medium hover:bg-primary/90 rounded-lg transition-colors"
                  >
                    مشاهده جزئیات
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">تاریخ ثبت:</span>
                    <span className="font-medium">
                      {new Date(order.date_created).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">مبلغ کل:</span>
                    <span className="text-primary font-medium">
                      {Number(order.total).toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">وضعیت:</span>
                    <span
                      className={`font-medium ${statusInfo.color} flex items-center gap-2`}
                    >
                      <Icon size={16} className={statusInfo.color} />
                      {statusInfo.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* مودال کامل */}
      {isModalOpen && selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* هدر */}
            <div className="flex items-center justify-between p-4 border-b border-b-gray-200 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-800">
                جزئیات سفارش #{selectedOrder.id}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* اطلاعات کلی */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500 block mb-1">تاریخ:</span>
                  <p className="font-medium">
                    {new Date(selectedOrder.date_created).toLocaleDateString(
                      "fa-IR"
                    )}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">مبلغ کل:</span>
                  <p className="font-medium text-primary text-lg">
                    {Number(selectedOrder.total).toLocaleString("fa-IR")} تومان
                  </p>
                </div>
              </div>

              {/* وضعیت */}
              {(() => {
                const statusInfo =
                  statusMap[selectedOrder.status] || statusMap["on-hold"];
                const Icon = statusInfo.icon;
                return (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div
                      className={`w-10 h-10 ${statusInfo.bg} ${statusInfo.color} flex items-center justify-center rounded-full`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className={`font-medium ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* لیست محصولات */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Package size={18} />
                  محصولات سفارش ({getOrderItems(selectedOrder).length} مورد)
                </h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {getOrderItems(selectedOrder).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {Number(item.total).toLocaleString("fa-IR")} تومان ×{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-primary whitespace-nowrap ml-4">
                        {Number(item.total).toLocaleString("fa-IR")} تومان
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* اطلاعات فاکتور */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* صورتحساب */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <Mail size={16} /> اطلاعات صورتحساب
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-500">نام:</span>{" "}
                      {selectedOrder.billing.first_name}{" "}
                      {selectedOrder.billing.last_name}
                    </p>
                    <p>
                      <span className="text-gray-500">شرکت:</span>{" "}
                      {selectedOrder.billing.company}
                    </p>
                    <p>
                      <span className="text-gray-500">آدرس:</span>{" "}
                      {selectedOrder.billing.address_1}
                    </p>
                    <p>
                      <span className="text-gray-500">شهر:</span>{" "}
                      {selectedOrder.billing.city}
                    </p>
                    <p>
                      <span className="text-gray-500">تلفن:</span>{" "}
                      {selectedOrder.billing.phone}
                    </p>
                    <p>
                      <span className="text-gray-500">ایمیل:</span>{" "}
                      {selectedOrder.billing.email}
                    </p>
                  </div>
                </div>

                {/* ارسال */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin size={16} /> اطلاعات ارسال
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-500">نام:</span>{" "}
                      {selectedOrder.shipping.first_name}{" "}
                      {selectedOrder.shipping.last_name}
                    </p>
                    <p>
                      <span className="text-gray-500">آدرس:</span>{" "}
                      {selectedOrder.shipping.address_1}
                    </p>
                    <p>
                      <span className="text-gray-500">شهر:</span>{" "}
                      {selectedOrder.shipping.city}
                    </p>
                    <p>
                      <span className="text-gray-500">تلفن:</span>{" "}
                      {selectedOrder.shipping.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* جمع کل */}
              <div className="border-t border-t-gray-200 pt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">
                  جمع کل:
                </span>
                <span className="text-2xl font-bold text-primary">
                  {Number(selectedOrder.total).toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
