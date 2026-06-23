import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mt-16">
      <div
        className="container mx-auto h-185 bg-no-repeat bg-contain text-primary-foreground grid grid-cols-2 place-items-center px-40"
        style={{
          backgroundImage: "url('/hero-cover.svg')",
        }}
      >
        <div className="space-y-5">
          <h2 className="font-black text-4xl">
            اپلیکیشن
            <span className="text-primary-gradient">زندگی با آیه‌ها</span>
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            اینجا میخوایم 30 آیه را بخوانیم، حفظ و زندگی کنیم. همراه با هدایای
            مادی و معنویی(حج عمره، عتبات، مشهد مقدس و هزاران هدیه دیگر)
          </p>
          <Button
            variant="secondary"
            className="h-20 px-10 text-xl font-extrabold mt-10"
          >
            دانلود اپلیکیشن
          </Button>
        </div>
        <div className="relative size-185 -bottom-10">
          <Image
            src="/mobile.svg"
            alt="Mobile"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
