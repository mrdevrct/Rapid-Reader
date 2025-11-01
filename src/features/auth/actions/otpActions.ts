// src/features/auth/actions/otpActions.ts
"use server";

import { revalidatePath } from "next/cache";
import { AuthServiceServer } from "../api/authService";
import { setServerToken } from "@/lib/api/auth-server";

export async function sendOtpAction(formData: FormData) {
  const mobile = formData.get("mobile") as string;

  if (!mobile) {
    return { success: false, message: "شماره موبایل الزامی است" };
  }

  try {
    const response = await AuthServiceServer.sendOtpServer({ mobile });
    revalidatePath("/auth/login");
    return response;
  } catch (error: any) {
    console.error("Send OTP Error:", error);
    return {
      success: false,
      message: error.message || "خطا در ارسال کد تأیید",
    };
  }
}

export async function verifyOtpAction(formData: FormData) {
  const mobile = formData.get("mobile") as string;
  const otp = formData.get("otp") as string;

  if (!mobile || !otp) {
    return { success: false, message: "شماره یا کد وارد نشده است" };
  }

  try {
    const response = await AuthServiceServer.verifyOtpServer({ mobile, otp });

    if (response.success && response.token) {
      await setServerToken(response.token, true);
    }

    return response;
  } catch (error: any) {
    console.error("Verify OTP Error:", error);
    return {
      success: false,
      message: error.message || "کد تأیید نامعتبر است",
    };
  }
}
