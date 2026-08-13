import type { Bilingual, Species } from "@/types/common";

export interface CoatColor {
  id: string;
  name: string;
  species: Species[];
  note?: Bilingual;
  image: string;
}
