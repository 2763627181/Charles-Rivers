"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import type { CoatColor } from "@/types/coat-colors";
import { Badge } from "@/components/ui/badge";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function CoatColorCard({ color }: { color: CoatColor }) {
  const locale = useLocale();
  const dictionary = useDictionary();

  const speciesLabel =
    color.species.length === 2
      ? dictionary.coatColors.bothSpecies
      : color.species[0] === "rat"
        ? dictionary.coatColors.ratOnly
        : dictionary.coatColors.mouseOnly;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      id={color.id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-medium-blue/50 hover:shadow-md"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <ParallaxImage className="absolute inset-0">
          <Image
            src={color.image}
            alt={color.name}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 640px) 30vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </ParallaxImage>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-navy">{color.name}</h3>
          <Badge variant="outline" className="shrink-0 border-border text-[11px] font-medium text-muted-foreground">
            {speciesLabel}
          </Badge>
        </div>
        {color.note && <p className="text-sm text-muted-foreground">{color.note[locale]}</p>}
      </div>
    </motion.div>
  );
}
