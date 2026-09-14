import type { Bilingual } from "@/types/common";

export interface HandlingRule {
  id: string;
  text: Bilingual;
  subItems?: Bilingual[];
}

export interface HandlingTechnique {
  id: string;
  title: Bilingual;
  subtitle?: Bilingual;
  summary: Bilingual;
  steps: Bilingual[];
  images: string[];
}
