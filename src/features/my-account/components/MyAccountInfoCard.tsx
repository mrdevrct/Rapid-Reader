"use client";

interface MyAccountInfoCard {
  name: string;
  email: string;
  phone: string;
  joined: string;
}

export default function MyAccountInfoCard({
  name,
  email,
  phone,
  joined,
}: MyAccountInfoCard) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
        اطلاعات حساب کاربری
      </h3>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-500 text-sm mb-1">نام و نام خانوادگی</p>
          <p className="font-semibold text-gray-800">{name}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-1">ایمیل</p>
          <p className="font-semibold text-gray-800">{email}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-1">شماره تماس</p>
          <p className="font-semibold text-gray-800">{phone}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-1">تاریخ عضویت</p>
          <p className="font-semibold text-gray-800">{joined}</p>
        </div>
      </div>
    </div>
  );
}
