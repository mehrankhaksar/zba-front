import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { iransans } from "@/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "زندگی با آیه‌ها - پویش ملی حفظ آیه‌های قرآن کریم",
  description: "پویش ملی حفظ آیه‌های قرآن کریم",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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
      className={cn("h-full", "antialiased", iransans.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
