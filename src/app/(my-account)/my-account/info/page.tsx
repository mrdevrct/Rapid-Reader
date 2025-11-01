"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { User, Edit, Check, X } from "lucide-react";

export default function InfoPage() {
  const { user, loading } = useCurrentUser();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    first_name: user?.first_name || "",
    user_email: user?.user_email || "",
    display_name: user?.display_name || "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        first_name: user.first_name || "",
        user_email: user.user_email || "",
        display_name: user.display_name || "",
      });
    }
  }, [user]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    console.log("Saved user info:", form);
    setEditMode(false);
  }

  if (loading) {
    return (
      <section className="px-2">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-medium text-primary">اطلاعات شخصی</h1>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm animate-pulse">
          <div className="grid gap-4 text-sm">
            <div className="h-4 bg-gray-300 rounded w-32"></div>
            <div className="h-4 bg-gray-300 rounded w-48"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>
          <div className="mt-4 h-10 bg-gray-300 rounded-xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-2">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-medium text-primary">اطلاعات شخصی</h1>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm transition-all duration-300">
        <div className="grid gap-4 text-sm text-gray-700">
          {/* فیلدها */}
          {["first_name", "user_email", "display_name"].map((key) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-500 mb-1">
                {key === "first_name"
                  ? "نام:"
                  : key === "user_email"
                  ? "ایمیل:"
                  : "شماره تماس:"}
              </span>

              {editMode ? (
                <input
                  type="text"
                  name={key}
                  value={(form as any)[key]}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary"
                />
              ) : (
                <span className="font-medium">
                  {(user as any)?.[key] || "-"}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* دکمه‌ها */}
        <div className="mt-4 flex justify-center">
          {editMode ? (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition"
              >
                <Check className="w-4 h-4" />
                ذخیره
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-2 rounded-xl font-medium hover:bg-gray-300 transition"
              >
                <X className="w-4 h-4" />
                انصراف
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-xl font-medium hover:bg-[#5A9472] transition"
            >
              <Edit className="w-4 h-4" />
              ویرایش اطلاعات
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
