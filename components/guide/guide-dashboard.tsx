import { CalendarClock, Palette, ScanLine, Stethoscope, Users } from "lucide-react";
import { SectionHeader } from "@/components/guide/section-header";
import { GuideCard } from "@/components/guide/guide-card";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";

export function GuideDashboard({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const base = `/${locale}/guide`;

  const cards = [
    {
      index: "01",
      href: `${base}/aging`,
      icon: CalendarClock,
      title: dictionary.cards.aging.title,
      description: dictionary.cards.aging.description,
      image: "/images/reference/aging/mouse/day-10.jpg",
    },
    {
      index: "02",
      href: `${base}/coat-colors`,
      icon: Palette,
      title: dictionary.cards.coatColors.title,
      description: dictionary.cards.coatColors.description,
      image: "/images/reference/coat-colors/coat-colors-collage.jpg",
    },
    {
      index: "03",
      href: `${base}/ear-identification`,
      icon: ScanLine,
      title: dictionary.cards.earId.title,
      description: dictionary.cards.earId.description,
      image: "/images/reference/ear-id/chart-1-16.jpg",
    },
    {
      index: "04",
      href: `${base}/health`,
      icon: Stethoscope,
      title: dictionary.cards.health.title,
      description: dictionary.cards.health.description,
      image: "/images/reference/health/health-issues-card.jpg",
    },
    {
      index: "05",
      href: `${base}/sexing`,
      icon: Users,
      title: dictionary.cards.sexing.title,
      description: dictionary.cards.sexing.description,
      image: "/images/reference/sexing/mouse-male-closeup.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <SectionHeader eyebrow={dictionary.guideDashboard.badge} title={dictionary.guideDashboard.title} description={dictionary.guideDashboard.description} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, i) => (
          <GuideCard key={card.href} {...card} cta={dictionary.guideDashboard.exploreCta} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}
