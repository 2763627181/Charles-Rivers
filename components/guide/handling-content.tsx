import Image from "next/image";
import { AlertTriangle, Hand } from "lucide-react";
import { ImageLightbox } from "@/components/guide/image-lightbox";
import { handlingBasicsImages, handlingRules, handlingTechniques } from "@/data/handling";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function HandlingContent({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const distressRule = handlingRules.find((rule) => rule.subItems);
  const basicRules = handlingRules.filter((rule) => !rule.subItems);

  return (
    <div className="flex flex-col gap-10">
      <Reveal className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-white p-5 shadow-sm lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <h2 className="text-base font-semibold text-navy">{dictionary.handling.basicsTitle}</h2>
          <ol className="mt-4 flex flex-col gap-3">
            {basicRules.map((rule, i) => (
              <li key={rule.id} className="flex items-start gap-2.5 rounded-xl bg-muted/60 p-3.5 text-sm text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-corporate-blue text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                {rule.text[locale]}
              </li>
            ))}
          </ol>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {handlingBasicsImages.map((src) => (
            <ImageLightbox key={src} src={src} alt={dictionary.handling.basicsTitle}>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border bg-muted">
                <ParallaxImage className="absolute inset-0">
                  <Image src={src} alt={dictionary.handling.basicsTitle} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                </ParallaxImage>
              </div>
            </ImageLightbox>
          ))}
        </div>
      </Reveal>

      {distressRule && (
        <Reveal className="rounded-2xl border border-danger/30 bg-red-50 p-6">
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-danger/10 text-danger">
              <AlertTriangle className="size-4.5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base font-semibold text-navy">{dictionary.handling.distressTitle}</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {distressRule.subItems?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-danger" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      )}

      <div className="flex flex-col gap-6">
        {handlingTechniques.map((technique, i) => (
          <Reveal key={technique.id} delay={Math.min(i * 0.05, 0.3)}>
            <div id={technique.id} className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-light-blue text-corporate-blue">
                      <Hand className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">{technique.title[locale]}</h3>
                      {technique.subtitle && (
                        <p className="text-xs font-medium text-muted-foreground">{technique.subtitle[locale]}</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground">{technique.summary[locale]}</p>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {dictionary.handling.stepsLabel}
                  </p>
                  <ol className="mt-2 flex flex-col gap-2">
                    {technique.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-light-blue text-[11px] font-semibold text-corporate-blue">
                          {stepIndex + 1}
                        </span>
                        {step[locale]}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className={`grid gap-3 ${technique.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {technique.images.map((src) => (
                    <ImageLightbox key={src} src={src} alt={technique.title[locale]}>
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border bg-muted">
                        <ParallaxImage className="absolute inset-0">
                          <Image src={src} alt={technique.title[locale]} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                        </ParallaxImage>
                      </div>
                    </ImageLightbox>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
