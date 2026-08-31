"use client";

import { useState } from "react";
import Image from "next/image";
import { Accordion as AccordionPrimitive, VisuallyHidden } from "radix-ui";
import { ChevronDown, Maximize2 } from "lucide-react";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import type { ClinicalSign } from "@/types/health";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "@/components/motion/parallax-image";

const CATEGORY_ACCENT: Record<ClinicalSign["category"], string> = {
  "head-body": "bg-light-blue text-corporate-blue",
  eyes: "bg-amber-50 text-amber-700",
  "repro-digest": "bg-emerald-50 text-emerald-700",
  neurological: "bg-light-blue text-corporate-blue",
  emergency: "bg-red-50 text-danger",
};

export function ClinicalSignCard({ sign }: { sign: ClinicalSign }) {
  const locale = useLocale();
  const dictionary = useDictionary();
  const image = sign.images[0];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const categoryLabel =
    sign.category === "head-body"
      ? dictionary.health.categories.headBody
      : sign.category === "eyes"
        ? dictionary.health.categories.eyes
        : sign.category === "repro-digest"
          ? dictionary.health.categories.reproDigest
          : sign.category === "neurological"
            ? dictionary.health.categories.neurological
            : dictionary.health.categories.emergency;

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      id={sign.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-colors hover:border-medium-blue/40"
    >
      <AccordionPrimitive.Item value={sign.id}>
        <AccordionPrimitive.Header className="flex items-start gap-4 p-4">
          {image && (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group/zoom relative size-20 shrink-0 cursor-zoom-in overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue sm:size-24"
              aria-label={sign.name[locale]}
            >
              <ParallaxImage className="absolute inset-0">
                <Image src={image} alt={sign.name[locale]} fill sizes="96px" className="object-cover" />
              </ParallaxImage>
              <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors group-hover/zoom:bg-navy/30">
                <Maximize2 className="size-4 scale-75 text-white opacity-0 shadow-sm transition-all duration-200 group-hover/zoom:scale-100 group-hover/zoom:opacity-100" aria-hidden="true" />
              </div>
            </button>
          )}

          <AccordionPrimitive.Trigger
            className={cn(
              "group/trigger min-w-0 flex-1 text-left",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue focus-visible:ring-inset"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-navy">{sign.name[locale]}</h3>
                {sign.subtitle && (
                  <p className="text-xs font-medium text-muted-foreground">{sign.subtitle[locale]}</p>
                )}
              </div>
              <ChevronDown className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/trigger:rotate-180" />
            </div>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground group-aria-expanded/trigger:hidden">
              {sign.description[locale]}
            </p>
            <Badge className={cn("mt-2 border-transparent text-[11px] font-medium", CATEGORY_ACCENT[sign.category])}>
              {categoryLabel}
            </Badge>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
          <p className={cn("px-4 pb-4 text-sm leading-relaxed text-foreground", image && "sm:pl-[7.5rem]")}>
            {sign.description[locale]}
          </p>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>

      {image && (
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-2xl border-none bg-transparent p-0 shadow-none sm:rounded-2xl">
            <VisuallyHidden.Root>
              <DialogTitle>{sign.name[locale]}</DialogTitle>
            </VisuallyHidden.Root>
            <div className="max-h-[85vh] overflow-y-auto rounded-2xl bg-white">
              <div className="relative aspect-4/3 w-full bg-navy sm:aspect-video">
                <Image src={image} alt={sign.name[locale]} fill sizes="90vw" className="object-contain" quality={90} />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{sign.name[locale]}</h3>
                    {sign.subtitle && <p className="mt-0.5 text-sm font-medium text-muted-foreground">{sign.subtitle[locale]}</p>}
                  </div>
                  <Badge className={cn("border-transparent text-xs font-medium", CATEGORY_ACCENT[sign.category])}>
                    {categoryLabel}
                  </Badge>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-foreground">{sign.description[locale]}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AccordionPrimitive.Root>
  );
}
