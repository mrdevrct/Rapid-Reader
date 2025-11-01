"use client";

type MyAccountHeaderProps = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  wallet?: number; // 👈 اضافه شد
};

export default function MyAccountHeader({
  firstName = "کاربر",
  lastName = "",
  phone = "-",
  wallet = 0, // 👈 مقدار پیش‌فرض
}: MyAccountHeaderProps) {
  const fullName = `${firstName} ${lastName}`.trim();
  const firstLetter = firstName?.charAt(0) || "ک";

  return (
    <div className="bg-gradient-to-r from-primary to-[#5a9472] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          <div className="text-white font-bold text-2xl sm:text-3xl">
            {firstLetter}
          </div>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold">
            خوش آمدی {fullName} 👋
          </h2>
          <p className="text-sm sm:text-base text-white/90">
            پروفایل شخصی شما
          </p>
          <p className="text-sm sm:text-xs text-white/80">
            شماره تماس: {phone || "ثبت نشده"}
          </p>
        </div>
      </div>

      {/* ✅ بخش موجودی کیف پول */}
      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center shadow-inner">
        <p className="text-sm text-white/80">موجودی کیف پول</p>
        <p className="text-lg sm:text-xl font-bold text-white">
          {wallet.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
}
