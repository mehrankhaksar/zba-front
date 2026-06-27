import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants/service";
import { Button } from "./ui/button";

export default function ServicesSection() {
  return (
    <section className="my-32  h-screen">
      <div className="absolute w-screen h-full bg-secondary rotate-2 scale-110" />
      <div className="container mx-auto relative py-10 grid sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-5 px-2.5">
        <div className="flex flex-col gap-5 col-span-full xl:col-span-2">
          <span className="text-xl font-semibold text-muted-foreground">
            خدمات زندگی با آیه‌ها
          </span>
          <h2 className="text-3xl font-extrabold text-primary">
            زندگی با آیه‌ها چه کاری انجام می‌دهد
          </h2>
          <p className="text-lg text-muted-foreground">
            شما می توانید با شرکت در مسابقات متنوع طراحی شده در اپلیکیشن زندگی
            با آیه ها امتیاز خود را افزایش دهید و از جوایز نفیس کلوپ جایزه بهره
            مند شوید.
          </p>
        </div>
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card className="gap-2.5 h-full" key={service.id}>
              <CardHeader>
                <CardAction>
                  <Button>ورود به مسابقه</Button>
                </CardAction>
                <Icon className="size-20" />
                <CardTitle className="text-lg font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-justify">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
