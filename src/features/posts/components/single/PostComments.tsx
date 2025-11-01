"use client";

import { FormEvent, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useAddPostReview } from "../../hooks/useAddPostReview";
import { useAuth } from "@/context/AuthContext";

interface Comment {
  id: number;
  name: string;
  date: string;
  text: string;
}

interface PostCommentsProps {
  postId: number;
  initialComments: Comment[];
}

export default function PostComments({
  postId,
  initialComments,
}: PostCommentsProps) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const { addReview, isLoading, isSuccess, isError, error } =
    useAddPostReview();
  const { user, isLoggedIn } = useAuth();

  // اگر کاربر لاگین کرده باشد، مقادیر پیش‌فرض name و email را پر می‌کنیم
  const defaultName = isLoggedIn
    ? user?.first_name || "کاربر ناشناس"
    : userName;
  const defaultEmail = isLoggedIn ? user?.user_email || "" : userEmail;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("لطفاً نظر خود را وارد کنید");
      return;
    }

    if (!isLoggedIn && (!userName.trim() || !userEmail.trim())) {
      alert("لطفاً نام و ایمیل خود را وارد کنید");
      return;
    }

    try {
      const reviewData = {
        rating: 0, // چون مقاله امتیاز ندارد، می‌فرستیم صفر
        comment,
        user_name: defaultName,
        user_email: defaultEmail,
      };

      const response = await addReview({
        id: postId,
        data: reviewData,
      });

      if (response.success) {
        const newComment: Comment = {
          id: Date.now(),
          name: defaultName,
          date: new Date().toLocaleDateString("fa-IR"),
          text: comment,
        };
        setComments([newComment, ...comments]);
        setComment("");
        setUserName("");
        setUserEmail("");
      }
    } catch (err) {
      console.error("خطا در ارسال نظر:", err);
    }
  };

  return (
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
          className="flex items-center justify-center gap-1 text-primary hover:text-[#5A8A70] font-medium w-full mt-2"
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
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-2xl space-y-3"
      >
        <div>
          <label htmlFor="userName" className="block text-gray-800 mb-1">
            نام:
          </label>
          <input
            type="text"
            id="userName"
            value={defaultName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="نام خود را وارد کنید"
            disabled={isLoggedIn}
            className="w-full p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-200"
          />
        </div>

        <div>
          <label htmlFor="userEmail" className="block text-gray-800 mb-1">
            ایمیل:
          </label>
          <input
            type="email"
            id="userEmail"
            value={defaultEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="ایمیل خود را وارد کنید"
            disabled={isLoggedIn}
            className="w-full p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-200"
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-gray-800 mb-1">
            نظر شما:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="نظر خود را بنویسید..."
            className="w-full h-24 p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none text-gray-800"
          ></textarea>
        </div>

        {isError && <p className="text-red-500">{error?.message}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary-dark transition-colors font-medium"
        >
          {isLoading ? "در حال ارسال..." : "ارسال نظر"}
        </button>
        {isSuccess && <p className="text-green-500">نظر با موفقیت ثبت شد!</p>}
      </form>
    </div>
  );
}
