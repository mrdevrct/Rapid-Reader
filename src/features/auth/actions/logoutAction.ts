/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidatePath } from "next/cache";
import { removeServerToken } from "@/lib/api/auth-server";

export async function logoutAction() {
  try {
    await removeServerToken();

    revalidatePath("/auth/login");
    revalidatePath("/");
    revalidatePath("/dashboard");
    revalidatePath("/profile");

    return {
      success: true,
      message: "✅ با موفقیت از سیستم خارج شدید",
    };
  } catch (error: any) {
    console.error("❌ Logout Error:", error);
    return {
      success: false,
      message: error.message || "خطا در خروج از سیستم",
    };
  }
}
