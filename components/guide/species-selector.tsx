"use client";

import { cn } from "@/lib/utils";
import type { Species } from "@/types/common";

export function SpeciesSelector({
  value,
  onChange,
  labels,
}: {
  value: Species;
  onChange: (species: Species) => void;
  labels: { mouse: string; rat: string };
}) {
  const options: Species[] = ["mouse", "rat"];
  const activeIndex = options.indexOf(value);

  return (
    <div
      role="tablist"
      aria-label="Species"
      className="relative inline-flex rounded-full border border-border bg-white p-1 shadow-sm"
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-br from-corporate-blue to-navy transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {options.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option)}
            className={cn(
              "relative z-10 min-w-24 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue",
              active ? "text-white" : "text-muted-foreground hover:text-navy"
            )}
          >
            {labels[option]}
          </button>
        );
      })}
    </div>
  );
}
