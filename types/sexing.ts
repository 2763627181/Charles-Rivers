import type { Bilingual, Species } from "@/types/common";

export interface SexingExample {
  id: string;
  species: Species;
  sex: "male" | "female" | "both";
  image: string;
  caption?: Bilingual;
}
