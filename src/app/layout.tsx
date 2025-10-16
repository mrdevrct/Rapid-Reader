// app/layout.tsx
import { ReactNode } from "react";
import "../styles/globals.css";
import "../styles/fonts.css";
import Providers from "./providers";

export const metadata = {
  title: "آکادمی آنلاین - دوره‌های آموزشی",
  description: "پلتفرم آموزش آنلاین برای یادگیری مهارت‌های جدید",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        {/* 🟢 جلوگیری از زوم در موبایل */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* 🟢 Preload فونت‌های IRANYekanWeb */}
        <link
          rel="preload"
          href="/fonts/iranyekanwebregularfanum.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/iranyekanwebmediumfanum.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/iranyekanwebboldfanum.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/iranyekanwebextraboldfanum.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/iranyekanwebblackfanum.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>

      <body className="font-iran h-full overflow-x-hidden bg-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
