// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";

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

        {/* 🟢 Preload فونت‌های Yekan Bakh */}
        <link
          rel="preload"
          href="/fonts/YekanBakh04Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YekanBakh05Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YekanBakh06Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>

      <body className="font-yekan h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
