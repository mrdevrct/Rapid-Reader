// src/features/auth/actions/userActions.ts
"use server";

import { AuthServiceServer } from "../api/authService";

export async function getCurrentUserAction() {
  try {
    const response = await AuthServiceServer.getCurrentUserServer();

    if (!response.success || !response.user) {
      return { success: false, message: "کاربر یافت نشد", user: null };
    }

    return { success: true, user: response.user };
  } catch (error: any) {
    console.error("Get Current User Error:", error);
    return {
      success: false,
      message: "خطا در دریافت اطلاعات کاربر",
      user: null,
    };
  }
}

