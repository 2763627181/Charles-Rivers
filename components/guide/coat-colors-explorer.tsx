"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDictionary } from "@/lib/context/locale-context";
import { coatColors } from "@/data/coat-colors";
import { CoatColorCard } from "@/components/guide/coat-color-card";
import { EmptyState } from "@/components/guide/empty-state";
import { cn } from "@/lib/utils";
import type { Species } from "@/types/common";

type Filter = "all" | Species;

export function CoatColorsExplorer() {
  const dictionary = useDictionary();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: dictionary.coatColors.filterAll },
    { key: "mouse", label: dictionary.coatColors.filterMouse },
    { key: "rat", label: dictionary.coatColors.filterRat },
  ];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return coatColors.filter((color) => {
      const matchesFilter = filter === "all" || color.species.includes(filter);
      const matchesQuery = q.length === 0 || color.name.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dictionary.coatColors.searchPlaceholder}
            className="bg-white pl-9"
            aria-label={dictionary.coatColors.searchPlaceholder}
          />
        </div>
        <div className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                filter === f.key ? "bg-light-blue text-corporate-blue" : "text-muted-foreground hover:text-navy"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <EmptyState title={dictionary.common.noResults} description={dictionary.common.tryAnother} />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {results.map((color) => (
              <CoatColorCard key={color.id} color={color} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
