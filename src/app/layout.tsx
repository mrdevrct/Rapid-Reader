// app/layout.tsx
import { ReactNode } from "react";
import { iranYekan } from "@/styles/fonts";
import Providers from "./providers";
import "../styles/globals.css";

export const metadata = {
  title: "آکادمی آنلاین - دوره‌های آموزشی",
  description: "پلتفرم آموزش آنلاین برای یادگیری مهارت‌های جدید",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranYekan.className} antialiased overflow-x-hidden bg-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
