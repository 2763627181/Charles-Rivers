"use client";

import { useState } from "react";
import Image from "next/image";
import { Ruler, CircleDot, Dot } from "lucide-react";
import { SpeciesSelector } from "@/components/guide/species-selector";
import { ImageLightbox } from "@/components/guide/image-lightbox";
import { EmptyState } from "@/components/guide/empty-state";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { getSexingExamples } from "@/data/sexing";
import type { Species } from "@/types/common";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function SexingExplorer() {
  const [species, setSpecies] = useState<Species>("mouse");
  const locale = useLocale();
  const dictionary = useDictionary();
  const examples = getSexingExamples(species);

  const male = examples.find((e) => e.sex === "male");
  const female = examples.find((e) => e.sex === "female");
  const references = examples.filter((e) => e.sex === "both");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-3">
        <span className="text-sm font-medium text-muted-foreground">{dictionary.species.chooseSpecies}</span>
        <SpeciesSelector
          value={species}
          onChange={setSpecies}
          labels={{ mouse: dictionary.species.mouse, rat: dictionary.species.rat }}
        />
      </div>

      {examples.length === 0 ? (
        <EmptyState title={dictionary.common.noResults} description={dictionary.common.tryAnother} />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { example: male, label: dictionary.sexing.male, accent: "corporate-blue" },
              { example: female, label: dictionary.sexing.female, accent: "danger" },
            ].map(({ example, label }) =>
              example ? (
                <Reveal key={example.id}>
                  <ImageLightbox src={example.image} alt={label} caption={example.caption?.[locale] ?? label}>
                    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                      <div className="relative aspect-4/3 w-full bg-muted">
                        <ParallaxImage className="absolute inset-0">
                          <Image src={example.image} alt={label} fill sizes="(min-width: 640px) 45vw, 90vw" className="object-cover" />
                        </ParallaxImage>
                      </div>
                      <div className="p-4">
                        <span className="text-base font-semibold text-navy">{label}</span>
                      </div>
                    </div>
                  </ImageLightbox>
                </Reveal>
              ) : null
            )}
          </div>

          {references.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {references.map((ref) => (
                <Reveal key={ref.id}>
                  <ImageLightbox src={ref.image} alt={ref.caption?.[locale] ?? ""} caption={ref.caption?.[locale]}>
                    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                      <div className="relative aspect-16/10 w-full bg-muted">
                        <ParallaxImage className="absolute inset-0">
                          <Image src={ref.image} alt={ref.caption?.[locale] ?? ""} fill sizes="(min-width: 640px) 45vw, 90vw" className="object-contain" />
                        </ParallaxImage>
                      </div>
                      {ref.caption && (
                        <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">{ref.caption[locale]}</p>
                      )}
                    </div>
                  </ImageLightbox>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal className="rounded-2xl border border-border bg-light-blue/40 p-6">
            <h2 className="text-base font-semibold text-navy">{dictionary.sexing.keyDifferences}</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Ruler, title: dictionary.sexing.anogenitalDistance, desc: dictionary.sexing.anogenitalDistanceDesc },
                { icon: CircleDot, title: dictionary.sexing.testes, desc: dictionary.sexing.testesDesc },
                { icon: Dot, title: dictionary.sexing.nipples, desc: dictionary.sexing.nipplesDesc },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-light-blue text-corporate-blue">
                    <item.icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-navy">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </>
      )}
    </div>
  );
}
