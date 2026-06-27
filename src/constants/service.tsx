import TVCompetition from "@/assets/images/tv-competition.svg";
import GroupCompetition from "@/assets/images/group-competition.svg";
import CertificateCompetition from "@/assets/images/certificate-competition.svg";
import InstantCompetition from "@/assets/images/instant-competition.svg";
import WheelOfFortune from "@/assets/images/wheel-of-fortune.svg";
import HolyQuran from "@/assets/images/holy-quran.svg";

export const services = [
  {
    id: "tv-competition",
    title: "مسابقه تلویزیونی",
    description:
      "با پخش برنامه «زندگی با آیه‌ها» از شبکه‌های سیما، هم‌زمان از طریق اپلیکیشن وارد مسابقه شوید و به سوالات پاسخ دهید.",
    icon: TVCompetition,
  },
  {
    id: "group-competition",
    title: "مسابقه گروهی",
    description:
      "این مسابقات در طول شبانه‌روز هر یک ساعت برگزار می‌شود. از طریق اپلیکیشن وارد مسابقه گروهی شوید و همراه دیگران به سوالات پاسخ دهید.",
    icon: GroupCompetition,
    badge: "هر ساعت",
  },
  {
    id: "certificate-competition",
    title: "مسابقه گواهی",
    description:
      "شما می‌توانید با شرکت در آزمون‌های نهایی پویش ملی زندگی با آیه‌ها، از سازمان دارالقرآن گواهی معتبر دریافت کنید.",
    icon: CertificateCompetition,
  },
  {
    id: "instant-competition",
    title: "مسابقه لحظه‌ای",
    description:
      "در هر ساعت از شبانه‌روز می‌توانید در مسابقه شرکت کنید. پس از هر بازی، ۱۵ دقیقه فرصت مطالعه دارید تا برای مسابقه بعدی آماده شوید.",
    icon: InstantCompetition,
    badge: "۲۴ ساعته",
  },
  {
    id: "wheel-of-fortune",
    title: "گردونه شانس",
    description:
      "با پاسخ به سوالات و چرخاندن گردونه شانس، شانس خودتان را امتحان کنید.",
    icon: WheelOfFortune,
  },
  {
    id: "holy-quran",
    title: "قرآن کریم",
    description:
      "قرآن صوتی همراه با ترجمه گویا و تفسیر با تلاوت قاریان ممتاز کشوری و جهان اسلام.",
    icon: HolyQuran,
  },
] as const;
