import { CalendarClock, Palette, ScanLine, Stethoscope, Users, BookImage, ArrowRight } from "lucide-react";
import Link from "next/link";
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
      image: "/images/reference/coat-colors/chimera.jpg",
    },
    {
      index: "03",
      href: `${base}/ear-identification`,
      icon: ScanLine,
      title: dictionary.cards.earId.title,
      description: dictionary.cards.earId.description,
      image: "/images/reference/ear-id/mark-correct.jpg",
    },
    {
      index: "04",
      href: `${base}/health`,
      icon: Stethoscope,
      title: dictionary.cards.health.title,
      description: dictionary.cards.health.description,
      image: "/images/reference/health/eyes/cataract.jpg",
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

      <Link
        href={`${base}/reference`}
        className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-border bg-white p-6 transition-colors hover:border-medium-blue/50 sm:flex-row sm:items-center"
      >
        <div className="flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
            <BookImage className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold text-navy">{dictionary.guideDashboard.referenceTitle}</p>
            <p className="text-sm text-muted-foreground">{dictionary.guideDashboard.referenceDescription}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-corporate-blue">
          {dictionary.guideDashboard.referenceCta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  );
}
