"use client";

import { useState } from "react";
import { SpeciesSelector } from "@/components/guide/species-selector";
import { AgingGrid } from "@/components/guide/aging-grid";
import { useDictionary } from "@/lib/context/locale-context";
import { getAgingStages } from "@/data/aging";
import type { Species } from "@/types/common";

export function AgingExplorer({ initialSpecies = "mouse" }: { initialSpecies?: Species }) {
  const [species, setSpecies] = useState<Species>(initialSpecies);
  const dictionary = useDictionary();

  return (
    <div className="flex flex-col gap-6">
      <SpeciesSelector
        value={species}
        onChange={setSpecies}
        labels={{ mouse: dictionary.species.mouse, rat: dictionary.species.rat }}
      />
      <AgingGrid stages={getAgingStages(species)} />
    </div>
  );
}
