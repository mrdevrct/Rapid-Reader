"use client";

export default function Terms() {
  return (
    <main className="container mx-auto max-w-5xl mt-6 md:mt-8 lg:mt-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          قوانین و مقررات
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          لطفاً قبل از استفاده از خدمات آکادمی آنلاین ما، قوانین و مقررات زیر را
          به دقت مطالعه کنید.
        </p>
      </div>

      {/* Usage Rules Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          قوانین استفاده
        </h2>
        <ul className="text-gray-600 text-sm sm:text-base leading-relaxed list-disc pr-5 space-y-2">
          <li>
            استفاده از خدمات آکادمی آنلاین به معنای پذیرش تمامی قوانین و مقررات
            ذکرشده در این صفحه است.
          </li>
          <li>
            کاربران موظف‌اند از محتوای آموزشی تنها برای مقاصد شخصی و غیرتجاری
            استفاده کنند.
          </li>
          <li>
            هرگونه کپی‌برداری، انتشار، یا توزیع محتوای دوره‌ها بدون اجازه کتبی
            ممنوع است.
          </li>
          <li>
            حساب کاربری شما شخصی است و نباید با دیگران به اشتراک گذاشته شود.
          </li>
        </ul>
      </section>

      {/* Registration Conditions Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
          شرایط ثبت‌نام
        </h2>
        <ul className="text-gray-600 text-sm sm:text-base leading-relaxed list-disc pr-5 space-y-2">
          <li>
            برای ثبت‌نام در دوره‌ها، ارائه اطلاعات دقیق و معتبر (مانند نام،
            ایمیل، و شماره تماس) الزامی است.
          </li>
          <li>
            کاربران باید حداقل ۱۶ سال سن داشته باشند یا رضایت والدین/سرپرست
            قانونی را ارائه دهند.
          </li>
          <li>
            پرداخت هزینه دوره‌ها باید از طریق روش‌های مجاز (پرداخت آنلاین، کیف
            پول، یا پرداخت در محل) انجام شود.
          </li>
          <li>دسترسی به دوره‌ها پس از تأیید پرداخت فعال خواهد شد.</li>
        </ul>
      </section>

      {/* Refund Policy Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
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
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            />
          </svg>
          سیاست‌های بازپرداخت
        </h2>
        <ul className="text-gray-600 text-sm sm:text-base leading-relaxed list-disc pr-5 space-y-2">
          <li>
            در صورت عدم رضایت از دوره، تا ۷ روز پس از خرید می‌توانید درخواست
            بازپرداخت کنید.
          </li>
          <li>
            بازپرداخت تنها در صورتی انجام می‌شود که کمتر از ۲۰٪ محتوای دوره
            مشاهده شده باشد.
          </li>
          <li>
            درخواست بازپرداخت باید از طریق فرم تماس یا ایمیل پشتیبانی ارسال شود.
          </li>
          <li>
            هزینه‌های مربوط به تراکنش‌های بانکی از مبلغ بازپرداخت کسر خواهد شد.
          </li>
        </ul>
      </section>

      {/* User Responsibilities Section */}
      <section className="bg-gray-50 border border-neutral-200 rounded-2xl p-4 mb-4">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          مسئولیت‌های کاربر
        </h2>
        <ul className="text-gray-600 text-sm sm:text-base leading-relaxed list-disc pr-5 space-y-2">
          <li>
            کاربران موظف‌اند اطلاعات دقیق و به‌روز در هنگام ثبت‌نام ارائه دهند.
          </li>
          <li>
            هرگونه سوءاستفاده از محتوای دوره‌ها ممکن است منجر به تعلیق حساب
            کاربری شود.
          </li>
          <li>
            کاربران باید از رفتار محترمانه در تعامل با پشتیبانی و دیگر کاربران
            اطمینان حاصل کنند.
          </li>
          <li>
            آکادمی آنلاین هیچ مسئولیتی در قبال خسارات ناشی از استفاده نادرست از
            خدمات ندارد.
          </li>
        </ul>
      </section>
    </main>
  );
}
