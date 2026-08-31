"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutGrid, GanttChartSquare, ImageOff } from "lucide-react";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { AgingCard } from "@/components/guide/aging-card";
import type { AgingStage } from "@/types/aging";
import { cn } from "@/lib/utils";

type View = "grid" | "timeline";

export function AgingGrid({ stages }: { stages: AgingStage[] }) {
  const [view, setView] = useState<View>("grid");
  const dictionary = useDictionary();
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <div className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-pressed={view === "grid"}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              view === "grid" ? "bg-light-blue text-corporate-blue" : "text-muted-foreground hover:text-navy"
            )}
          >
            <LayoutGrid className="size-4" /> {dictionary.aging.viewGrid}
          </button>
          <button
            type="button"
            onClick={() => setView("timeline")}
            aria-pressed={view === "timeline"}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              view === "timeline" ? "bg-light-blue text-corporate-blue" : "text-muted-foreground hover:text-navy"
            )}
          >
            <GanttChartSquare className="size-4" /> {dictionary.aging.viewTimeline}
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
          {stages.map((stage, i) => (
            <AgingCard key={stage.id} stage={stage} delay={Math.min(i * 0.03, 0.4)} />
          ))}
        </div>
      ) : (
        <ol className="relative flex flex-col gap-6 border-l-2 border-light-blue pl-6 sm:pl-8">
          {stages.map((stage) => (
            <li key={stage.id} className="relative">
              <span className="absolute top-1 -left-[31px] size-3 rounded-full border-2 border-white bg-corporate-blue sm:-left-[39px]" />
              <div className="flex flex-col gap-3 rounded-xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-muted">
                  {stage.image ? (
                    <Image src={stage.image} alt={stage.label[locale]} fill sizes="80px" className="object-cover" />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-light-blue text-corporate-blue">
                      <ImageOff className="size-4" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{stage.label[locale]}</p>
                  {stage.description && (
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {stage.description[locale]}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
