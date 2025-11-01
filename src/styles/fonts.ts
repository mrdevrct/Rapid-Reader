// src/styles/fonts.ts
import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    { path: "../../public/fonts/IRANYekanWebFn.woff2", weight: "400" },
    { path: "../../public/fonts/IRANYekanWebFn-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/IRANYekanWebFn-Bold.woff2", weight: "700" },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
});
