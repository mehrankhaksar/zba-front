import { socialMedia } from "@/constants/social-media";
import { MessageCircleMore, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const navItems = [
  { path: "/campaigns", label: "پویش‌ها" },
  { path: "/multimedia", label: "چند رسانه‌ای" },
  { path: "/winners", label: "برندگان مسابقات" },
  { path: "/about", label: "درباره پویش ملی «زندگی با آیه‌ها»" },
  { path: "/contact", label: "تماس با ما" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32">
      <div className="absolute py-5 p-2.5 inset-x-80 -top-12 shadow-2xl rounded-xl bg-secondary text-secondary-foreground flex justify-around items-center">
        <div className="flex items-center gap-3 font-medium">
          <span className="bg-primary text-primary-foreground p-3 rounded-lg">
            <Phone />
          </span>
          <div>
            <a
              dir="ltr"
              href="tel:+982192003978"
              className="ml-3 font-semibold hover:underline"
            >
              +982192003978
            </a>
            (زمان پاسخگویی شنبه تا پنج شنبه ساعت 9 تا 18)
          </div>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <span className="bg-primary text-primary-foreground p-3 rounded-lg">
            <MessageCircleMore />
          </span>
          <a href="mailto:info@zendegibaayeha.ir" className="hover:underline">
            info@zendegibaayeha.ir
          </a>
        </div>
      </div>
      <div className="bg-[#04062B] text-[#ffffff] py-20 px-2.5">
        <div className="container mx-auto grid grid-cols-3 gap-20">
          <div>
            <h6 className="font-bold border-b border-[#3d4455] pb-3 mb-3">
              درباره زندگی با آیه‌ها
            </h6>
            <p className="text-[#d6daef] text-sm leading-7">
              پویش ملی تبیین و حفظ 30فراز زندگی ساز قرآن کریم مسابقات روزانه
              برای نوجوانان و بزرگسالان همراه با جوایز متنوع از جمله سفر حج
              عمره، کربلای معلی، مشهد مقدس و ...
            </p>
            <div className="relative w-64 h-32 mt-3">
              <Image
                src="/logo-2.svg"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h6 className="font-bold border-b border-[#3d4455] pb-3 mb-3">
              صفحات مهم
            </h6>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="opacity-80 hover:opacity-100 transition-opacity font-semibold text-sm text-[#d6daef]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h6 className="font-bold border-b border-[#3d4455] pb-3 mb-3">
              شبکه های‌اجتماعی
            </h6>
            <ul className="w-fit grid grid-cols-3 gap-5">
              {socialMedia.map((socialMediaItem, idx) => (
                <Link
                  key={idx}
                  href={socialMediaItem.pathname}
                  className="border-2 p-3 rounded-full"
                  target="_blank"
                >
                  <li className="relative size-6">
                    <Image
                      src={socialMediaItem.value}
                      alt={socialMediaItem.label}
                      fill
                      priority
                      className="object-contain"
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-secondary-foreground py-6 px-2.5 flex items-center justify-around font-medium">
        <Link href="https://avinmedia.ir/" target="_blank">
          طراحی و توسعه گروه فنی و هنری آوین.
        </Link>
        <span>2022-{CURRENT_YEAR} © All Rights Reserved</span>
      </div>
    </footer>
  );
}
