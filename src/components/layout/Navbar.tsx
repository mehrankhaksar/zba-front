"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Phone, Search } from "lucide-react";

const navItems = [
  { path: "/", label: "صفحه نخست" },
  { path: "/multimedia", label: "چند رسانه‌ای" },
  { path: "/campaigns", label: "پویش‌ها" },
  { path: "/news", label: "اخبار و اطلاعیه‌ها" },
  { path: "/simple-verses", label: "آیه به زبان ساده" },
  { path: "/tafsir", label: "تبیین آیات" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-6 z-50">
      <div className="container mx-auto h-24 bg-primary-gradient rounded-full p-0.5">
        <div className="relative h-full flex justify-between items-center bg-background rounded-full px-6">
          <div className="relative h-20 w-36 shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <nav className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <div
                  key={item.path}
                  className="relative flex flex-col justify-center items-center h-full"
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "inline-block transition-colors font-medium",
                      isActive && "text-primary-gradient",
                    )}
                  >
                    {item.label}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-divider"
                      transition={{
                        layout: {
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        },
                      }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8"
                    >
                      <Image
                        src="/divider-primary.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Button size="lg">دانلود اپلیکیشن</Button>
            <Button variant="secondary" size="icon-lg">
              <Phone />
            </Button>
            <Button variant="secondary" size="icon-lg">
              <Search />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
