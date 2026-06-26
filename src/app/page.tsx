import { Button } from "@/components/ui/button";
import Icon1 from "@/assets/images/icon-1.svg";
import Mobile from "@/assets/images/mobile.svg";
import HeroCover from "@/assets/images/hero-cover.svg";

export default function Home() {
  return (
    <section className="mt-16">
      <div className="relative h-screen text-primary-foreground">
        <HeroCover className="absolute top-0 object-cover -z-10" />
        {/* <div className="grid h-full grid-cols-2 place-items-center">
          <a className="absolute bottom-0" href="#">
            <Button size="icon-lg" className="animate-bounce" variant="ghost">
              <Icon1 className="size-10" />
            </Button>
          </a>
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
          <div className="relative size-185 -bottom-5">
            <Mobile />
          </div>
        </div> */}
      </div>
    </section>
  );
}
