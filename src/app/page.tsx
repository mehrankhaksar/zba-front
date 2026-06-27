import { Button } from "@/components/ui/button";
import Icon1 from "@/assets/images/icon-1.svg";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mt-16 mx-2.5 mb-2.5">
      <div
        className="container mx-auto relative text-primary-foreground bg-no-repeat bg-cover bg-center rounded-4xl pt-20 px-10 pb-5 lg:h-[calc(100vh-184px)]"
        style={{
          backgroundImage: "url('/hero-cover.svg')",
        }}
      >
        <div className="grid lg:grid-cols-2">
          <a
            className="absolute bottom-0 animate-bounce left-1/2 -translate-x-1/2"
            href="#"
          >
            <Icon1 className="size-10" />
          </a>
          <div className="max-w-md mx-auto flex flex-col gap-5 items-center text-center lg:text-start lg:items-start lg:relative lg:top-32 xl:right-20">
            <h2 className="font-black text-3xl sm:text-4xl">
              اپلیکیشن
              <span className="text-primary-gradient mr-2.5">
                زندگی با آیه‌ها
              </span>
            </h2>
            <p className="sm:text-lg font-medium text-muted-foreground">
              اینجا میخوایم 30 آیه را بخوانیم، حفظ و زندگی کنیم. همراه با هدایای
              مادی و معنویی(حج عمره، عتبات، مشهد مقدس و هزاران هدیه دیگر)
            </p>
            <Button
              variant="secondary"
              className="w-full md:w-fit h-14 md:h-20 md:px-10 md:text-xl font-extrabold mt-5"
            >
              دانلود اپلیکیشن
            </Button>
          </div>
          <div className="relative h-120 md:h-160 lg:h-210 lg:-top-20">
            <Image
              src="/mobile.svg"
              alt="Mobile App"
              priority
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
