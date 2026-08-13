import type { Bilingual, Species } from "@/types/common";

export interface AgingStage {
  id: string;
  species: Species;
  order: number;
  /** Numeric day when applicable; null for milestones like "3 weeks". */
  day: number | null;
  label: Bilingual;
  /** Omitted where the source chart provided no characteristic text for this row. */
  description?: Bilingual;
  /** Omitted for milestone rows that have no corresponding reference photograph. */
  image?: string;
}
