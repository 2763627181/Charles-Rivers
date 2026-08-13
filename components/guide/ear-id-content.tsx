import Image from "next/image";
import { Check, X } from "lucide-react";
import { ImageLightbox } from "@/components/guide/image-lightbox";
import { earChartImage, earMarkExamples, earSliceExamples } from "@/data/ear-identification";
import type { EarMarkExample } from "@/types/ear-identification";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

function ExampleGroup({
  title,
  examples,
  locale,
}: {
  title: string;
  examples: EarMarkExample[];
  locale: Locale;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-navy">{title}</h3>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
        {examples.map((example) => {
          const isCorrect = example.status === "correct";
          return (
            <ImageLightbox key={example.id} src={example.image} alt={example.label[locale]} caption={example.label[locale]}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "relative aspect-square w-full overflow-hidden rounded-full ring-2",
                    isCorrect ? "ring-success" : "ring-border"
                  )}
                >
                  <ParallaxImage className="absolute inset-0">
                    <Image src={example.image} alt={example.label[locale]} fill sizes="120px" className="object-cover" />
                  </ParallaxImage>
                  <span
                    className={cn(
                      "absolute right-0.5 bottom-0.5 flex size-5 items-center justify-center rounded-full text-white",
                      isCorrect ? "bg-success" : "bg-danger"
                    )}
                  >
                    {isCorrect ? <Check className="size-3" /> : <X className="size-3" />}
                  </span>
                </div>
                <span className="text-center text-[11px] leading-tight font-medium text-muted-foreground">
                  {example.label[locale]}
                </span>
              </div>
            </ImageLightbox>
          );
        })}
      </div>
    </div>
  );
}

export function EarIdContent({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
        <Reveal direction="left" className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-navy">{dictionary.earId.chartTitle}</h2>
          <ImageLightbox
            src={earChartImage}
            alt="Ear identification numeric reference chart, marks 1 through 16"
            caption={dictionary.earId.chartTitle}
          >
            <div className="relative mt-4 aspect-16/10 w-full overflow-hidden rounded-xl border border-border bg-muted">
              <ParallaxImage mode="parallax" strength={14} className="absolute inset-0">
                <Image
                  src={earChartImage}
                  alt="Ear identification numeric reference chart, marks 1 through 16"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain p-2"
                />
              </ParallaxImage>
            </div>
          </ImageLightbox>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="flex flex-col gap-6">
          <ExampleGroup title={dictionary.earId.identificationMark} examples={earMarkExamples} locale={locale} />
          <ExampleGroup title={dictionary.earId.identificationSlice} examples={earSliceExamples} locale={locale} />
        </Reveal>
      </div>

      <Reveal className="rounded-2xl border border-border bg-light-blue/40 p-6">
        <h2 className="text-base font-semibold text-navy">{dictionary.earId.bestPractices}</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dictionary.earId.bestPracticesItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 text-sm text-foreground shadow-sm">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-corporate-blue text-[11px] font-semibold text-white">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
