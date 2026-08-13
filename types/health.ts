import type { Bilingual } from "@/types/common";

export type HealthCategory =
  | "head-body"
  | "eyes"
  | "repro-digest"
  | "neurological"
  | "emergency";

export interface ClinicalSign {
  id: string;
  category: HealthCategory;
  name: Bilingual;
  subtitle?: Bilingual;
  description: Bilingual;
  images: string[];
}
