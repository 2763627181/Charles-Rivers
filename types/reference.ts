import type { Bilingual } from "@/types/common";

export interface ReferenceScreen {
  id: string;
  image: string;
  title: Bilingual;
  lang: "en" | "es";
}
