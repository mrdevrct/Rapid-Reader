"use client";
import Image from "next/image";
import {
  CalendarDays,
  User,
  Tag,
  Share2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function BlogSingle() {
  const [showFullText, setShowFullText] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "مینا احمدی",
      date: "۱۴۰۴/۰۷/۰۸",
      text: "مقاله بسیار مفیدی بود، مخصوصاً توضیحات مربوط به مراقبت مو 👌",
    },
    {
      id: 2,
      name: "نازنین رفیعی",
      date: "۱۴۰۴/۰۷/۰۷",
      text: "خیلی کامل و روان نوشته شده بود، ممنون از تیم بارون 🌸",
    },
    {
      id: 3,
      name: "سعید مومنی",
      date: "۱۴۰۴/۰۷/۰۵",
      text: "من این روش‌ها رو امتحان کردم، نتیجه واقعاً خوب بود!",
    },
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    const newComment = {
      id: Date.now(),
      name: "کاربر جدید",
      date: new Date().toLocaleDateString("fa-IR"),
      text: comment,
    };
    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div className="main-container mt-5 rounded-4xl shadow-lg border-2 border-gray-200 bg-white overflow-hidden">
      {/* 🖼 Cover Image */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <Image
          src="/img/blog-sample.jpg"
          alt="blog cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 📝 Blog Content */}
      <div className="p-5 space-y-6">
        {/* 🧭 Breadcrumb / Meta */}
        <div className="flex flex-wrap justify-between items-center text-gray-600 text-sm border-b border-gray-100 pb-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary-deep" />
            <span>تاریخ انتشار: ۱۴۰۴/۰۷/۱۰</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary-deep" />
            <span>نویسنده: تیم بارون</span>
          </div>
        </div>

        {/* 🏷 Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-right leading-snug">
          مراقبت از موهای خشک و آسیب‌دیده؛ نکاتی برای داشتن موهای سالم و درخشان
        </h1>

        {/* 📖 Blog Text */}
        <div
          className={`text-gray-700 leading-relaxed text-justify transition-all duration-500 ${
            showFullText ? "max-h-full" : "max-h-[400px] overflow-hidden"
          }`}
        >
          <p>
            موهای خشک معمولاً درخشش خود را از دست می‌دهند و حالت شکننده‌ای پیدا
            می‌کنند. برای جلوگیری از آسیب بیشتر، باید با روش‌های صحیح مراقبتی از
            آن‌ها نگهداری کرد. استفاده از شامپوهای بدون سولفات، ماسک موهای
            آبرسان و روغن‌های طبیعی می‌تواند تأثیر چشمگیری بر سلامت مو داشته
            باشد.
          </p>
          <p className="mt-3">
            همچنین تغذیه‌ی مناسب شامل مصرف پروتئین، ویتامین E و امگا ۳ باعث
            بهبود رشد و درخشندگی مو می‌شود. سعی کنید از حرارت مستقیم مانند سشوار
            زیاد استفاده نکنید و در صورت لزوم از اسپری‌های محافظ حرارت استفاده
            کنید.
          </p>
          <p className="mt-3">
            ماساژ پوست سر با روغن نارگیل یا آرگان به مدت ۱۰ دقیقه در هفته
            می‌تواند گردش خون را افزایش داده و فولیکول‌های مو را تقویت کند. این
            کار در درازمدت باعث کاهش ریزش مو و افزایش نرمی آن می‌شود.
          </p>
          <p className="mt-3">
            نکته‌ی مهم دیگر، پرهیز از شانه زدن موهای خیس است، چرا که در این حالت
            موها بسیار آسیب‌پذیر هستند. بهتر است اجازه دهید موها کمی خشک شوند و
            سپس با شانه‌ی دندانه درشت به‌آرامی آن‌ها را مرتب کنید.
          </p>
        </div>

        {/* 🔘 Read More Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="flex items-center gap-1 text-primary-deep hover:text-[#5A8A70] font-medium mt-2"
          >
            {showFullText ? (
              <>
                <ChevronUp className="w-4 h-4" /> بستن متن
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> ادامه مطلب
              </>
            )}
          </button>
        </div>

        {/* 🏷 Tags */}
        <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
          <Tag className="w-4 h-4 text-primary-deep" />
          <span className="text-gray-700 font-medium">برچسب‌ها:</span>
          <div className="flex flex-wrap gap-2">
            {["مراقبت مو", "زیبایی", "سلامت"].map((tag, i) => (
              <span
                key={i}
                className="bg-primary-deep/10 text-primary-deep text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 🔗 Share Section */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <span className="text-gray-700 font-medium flex items-center gap-2">
            <Share2 className="w-4 h-4 text-primary-deep" /> اشتراک‌گذاری مقاله:
          </span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-primary-deep hover:bg-[#5A8A70] text-white flex items-center justify-center">
              <i className="fa-brands fa-telegram"></i>
            </button>
            <button className="w-8 h-8 rounded-full bg-primary-deep hover:bg-[#5A8A70] text-white flex items-center justify-center">
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            <button className="w-8 h-8 rounded-full bg-primary-deep hover:bg-[#5A8A70] text-white flex items-center justify-center">
              <i className="fa-brands fa-x-twitter"></i>
            </button>
          </div>
        </div>

        {/* 💬 Comments Section */}
        <div className="space-y-3 mt-4">
          <h3 className="text-xl font-bold text-gray-800 text-right">
            نظرات کاربران ({comments.length})
          </h3>

          {/* لیست نظرات */}
          <div className="space-y-3">
            {(showAllComments ? comments : comments.slice(0, 2)).map((c) => (
              <div
                key={c.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-3 text-right transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{c.name}</span>
                  <span className="text-gray-500 text-sm">{c.date}</span>
                </div>
                <p className="text-gray-700 mt-2 text-justify">{c.text}</p>
              </div>
            ))}
          </div>

          {/* دکمه مشاهده بیشتر */}
          {comments.length > 2 && (
            <button
              onClick={() => setShowAllComments(!showAllComments)}
              className="flex items-center justify-center gap-1 text-primary-deep hover:text-primary-main font-medium w-full mt-2"
            >
              {showAllComments ? (
                <>
                  <ChevronUp className="w-4 h-4" /> بستن نظرات
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> مشاهده همه نظرات
                </>
              )}
            </button>
          )}

          {/* فرم ارسال نظر */}
          <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-2xl">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="نظر خود را بنویسید..."
              className="w-full h-24 p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#6EAC8B] outline-none text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="mt-2 w-full bg-primary-deep text-white py-2 rounded-full hover:bg-[#5A8A70] transition-colors font-medium"
            >
              ارسال نظر
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
