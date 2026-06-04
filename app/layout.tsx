import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToHash from "@/components/ScrollToHash";
import { Analytics } from "@vercel/analytics/react";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const niloofar = localFont({
  src: "../public/fonts/XB-Niloofar.ttf",
  variable: "--font-niloofar",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magicfx.pro/"),
  title: "مجیک اف ایکس پرو | کپی‌تریدینگ فوق‌العاده طلا (XAU/USD)",
  description: "کپی‌تریدینگ الگوریتمی پیشرفته به صورت انحصاری روی طلا (XAU/USD). عنصر ثروت، به تسخیر درآمده با مجیک اف ایکس پرو.",
  keywords: "معامله طلا, XAU/USD, کپی تریدینگ, معاملات الگوریتمی, فارکس, معاملات خودکار, مجیک اف ایکس پرو",
  openGraph: {
    title: "مجیک اف ایکس پرو | کپی‌تریدینگ فوق‌العاده طلا (XAU/USD)",
    description: "کپی‌تریدینگ الگوریتمی پیشرفته به صورت انحصاری روی طلا (XAU/USD).",
    url: "https://magicfx.pro/",
    images: [{ url: "/hero-bg.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مجیک اف ایکس پرو | کپی‌تریدینگ فوق‌العاده طلا (XAU/USD)",
    description: "کپی‌تریدینگ الگوریتمی پیشرفته به صورت انحصاری روی طلا (XAU/USD).",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${niloofar.variable} h-full antialiased scroll-smooth scroll-pt-32`}
    >
      <body className="min-h-full flex flex-col bg-bg-color text-text-color font-sans overflow-x-hidden selection:bg-accent-color selection:text-bg-color">
        <ScrollToHash />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
