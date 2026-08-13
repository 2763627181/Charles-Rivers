"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { healthCategoryNav } from "@/data/navigation";
import { ClinicalSignCard } from "@/components/guide/clinical-sign-card";
import { EmptyState } from "@/components/guide/empty-state";
import { cn } from "@/lib/utils";
import type { ClinicalSign, HealthCategory } from "@/types/health";

export function HealthExplorer({
  signs,
  activeCategory,
}: {
  signs: ClinicalSign[];
  activeCategory: HealthCategory | "all";
}) {
  const locale = useLocale();
  const dictionary = useDictionary();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return signs;
    return signs.filter((sign) => {
      const haystack = `${sign.name[locale]} ${sign.subtitle?.[locale] ?? ""} ${sign.description[locale]}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [signs, query, locale]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dictionary.health.searchPlaceholder}
          className="bg-white pl-9 sm:max-w-sm"
          aria-label={dictionary.health.searchPlaceholder}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {healthCategoryNav
          .filter((c) => c.category !== "handbook")
          .map((item) => {
            const isActive = item.category === activeCategory;
            return (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-corporate-blue bg-corporate-blue text-white"
                    : "border-border bg-white text-muted-foreground hover:border-medium-blue/50 hover:text-navy"
                )}
              >
                {dictionary.health.categories[item.labelKey]}
              </Link>
            );
          })}
      </div>

      <p className="text-sm text-muted-foreground">
        {results.length} {dictionary.health.signsCount}
      </p>

      {results.length === 0 ? (
        <EmptyState title={dictionary.common.noResults} description={dictionary.common.tryAnother} />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {results.map((sign) => (
            <ClinicalSignCard key={sign.id} sign={sign} />
          ))}
        </div>
      )}
    </div>
  );
}
