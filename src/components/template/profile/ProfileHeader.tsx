"use client";

export default function ProfileHeader() {
  const user = {
    name: "رضا محمدی",
    phone: "09123456789",
  };

  return (
    <div className="bg-primary-deep text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          <div className="text-white font-bold text-2xl sm:text-3xl">ر</div>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold">
            خوش آمدی {user.name} 👋
          </h2>
          <p className="text-sm sm:text-base text-white/90">پروفایل شخصی شما</p>
          <p className="text-sm sm:text-xs text-white/80 fa-num">
            شماره تماس: {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}