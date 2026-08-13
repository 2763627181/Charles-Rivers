"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { ImageLightbox } from "@/components/guide/image-lightbox";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { referenceScreens } from "@/data/reference";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function ReferenceGallery() {
  const locale = useLocale();
  const dictionary = useDictionary();
  const [lang, setLang] = useState<"all" | "en" | "es">("all");

  const items = referenceScreens.filter((s) => lang === "all" || s.lang === lang);

  return (
    <div className="flex flex-col gap-6">
      <div className="inline-flex w-fit rounded-full border border-border bg-white p-1 shadow-sm">
        {(["all", "en", "es"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setLang(key)}
            aria-pressed={lang === key}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium capitalize transition-colors",
              lang === key ? "bg-light-blue text-corporate-blue" : "text-muted-foreground hover:text-navy"
            )}
          >
            {key === "all" ? dictionary.coatColors.filterAll : key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {items.map((screen, i) => (
          <Reveal key={screen.id} delay={(i % 6) * 0.05}>
            <ImageLightbox src={screen.image} alt={screen.title[locale]} caption={screen.title[locale]}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-medium-blue/50 hover:shadow-md">
                <ParallaxImage className="relative w-full">
                  <Image
                    src={screen.image}
                    alt={screen.title[locale]}
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </ParallaxImage>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-linear-to-t from-navy/85 to-transparent px-3 py-2.5 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="truncate text-xs font-medium text-white">{screen.title[locale]}</span>
                  <Maximize2 className="size-3.5 shrink-0 text-white" />
                </div>
              </div>
            </ImageLightbox>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
