"use client";

import { CalendarClock, Palette, ScanLine, Stethoscope, Users } from "lucide-react";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { GuideCard } from "@/components/guide/guide-card";
import { SectionHeader } from "@/components/guide/section-header";

export function QuickAccess() {
  const locale = useLocale();
  const dictionary = useDictionary();
  const base = `/${locale}/guide`;

  const items = [
    {
      href: `${base}/aging`,
      icon: CalendarClock,
      title: dictionary.cards.aging.title,
      description: dictionary.cards.aging.description,
      image: "/images/reference/aging/mouse/day-07.jpg",
    },
    {
      href: `${base}/coat-colors`,
      icon: Palette,
      title: dictionary.cards.coatColors.title,
      description: dictionary.cards.coatColors.description,
      image: "/images/reference/coat-colors/coat-colors-collage.jpg",
    },
    {
      href: `${base}/ear-identification`,
      icon: ScanLine,
      title: dictionary.cards.earId.title,
      description: dictionary.cards.earId.description,
      image: "/images/reference/ear-id/chart-1-16.jpg",
    },
    {
      href: `${base}/health`,
      icon: Stethoscope,
      title: dictionary.cards.health.title,
      description: dictionary.cards.health.description,
      image: "/images/reference/health/health-issues-card.jpg",
    },
    {
      href: `${base}/sexing`,
      icon: Users,
      title: dictionary.cards.sexing.title,
      description: dictionary.cards.sexing.description,
      image: "/images/reference/sexing/mouse-pair-photo.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader title={dictionary.home.quickAccess} description={dictionary.home.quickAccessSubtitle} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((item, i) => (
          <GuideCard key={item.href} {...item} cta={dictionary.common.explore} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
