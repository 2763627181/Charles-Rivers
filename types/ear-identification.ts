import type { Bilingual } from "@/types/common";

export type EarExampleStatus = "correct" | "incorrect-angle" | "incorrect-amount" | "incorrect-depth";

export interface EarMarkExample {
  id: string;
  type: "mark" | "slice";
  status: EarExampleStatus;
  label: Bilingual;
  image: string;
}
