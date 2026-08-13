"use client";

import { useMemo } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";
import { clinicalSigns } from "@/data/health";
import { coatColors } from "@/data/coat-colors";
import { mouseAging, ratAging } from "@/data/aging";
import { primaryNav } from "@/data/navigation";

export interface SearchResult {
  id: string;
  group: "pages" | "signs" | "colors" | "stages";
  title: string;
  description?: string;
  href: string;
  image?: string;
}

export function useSearchIndex(locale: Locale, dictionary: Dictionary): SearchResult[] {
  return useMemo(() => {
    const results: SearchResult[] = [];

    for (const item of primaryNav) {
      results.push({
        id: `page-${item.href}`,
        group: "pages",
        title: dictionary.nav[item.labelKey],
        href: `/${locale}${item.href}`,
      });
    }

    for (const sign of clinicalSigns) {
      results.push({
        id: `sign-${sign.id}`,
        group: "signs",
        title: sign.name[locale],
        description: sign.subtitle?.[locale] ?? sign.description[locale],
        href: `/${locale}/guide/health/${sign.category}#${sign.id}`,
        image: sign.images[0],
      });
    }

    for (const color of coatColors) {
      results.push({
        id: `color-${color.id}`,
        group: "colors",
        title: color.name,
        description: color.note?.[locale],
        href: `/${locale}/guide/coat-colors#${color.id}`,
        image: color.image,
      });
    }

    for (const stage of [...mouseAging, ...ratAging]) {
      results.push({
        id: `stage-${stage.id}`,
        group: "stages",
        title: `${stage.species === "mouse" ? dictionary.species.mouse : dictionary.species.rat} — ${stage.label[locale]}`,
        description: stage.description?.[locale],
        href: `/${locale}/guide/aging?species=${stage.species}#${stage.id}`,
        image: stage.image,
      });
    }

    return results;
  }, [locale, dictionary]);
}
