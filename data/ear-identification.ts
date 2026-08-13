import type { Bilingual } from "@/types/common";
import type { EarMarkExample } from "@/types/ear-identification";

// Source: Charles River "Laboratory Mouse Identification & Reference Guide", Ear ID System tab.
const img = (name: string) => `/images/reference/ear-id/${name}.jpg`;

export const earChartImage = img("chart-1-16");

const LABEL_CORRECT: Bilingual = { en: "Correct", es: "Correcto", fr: "Correct", de: "Korrekt", nl: "Correct", zh: "正确" };
const LABEL_INCORRECT_ANGLE: Bilingual = {
  en: "Incorrect Angle",
  es: "Ángulo incorrecto",
  fr: "Angle incorrect",
  de: "Falscher Winkel",
  nl: "Onjuiste hoek",
  zh: "角度错误",
};
const LABEL_INCORRECT_AMOUNT: Bilingual = {
  en: "Incorrect Amount",
  es: "Cantidad incorrecta",
  fr: "Quantité incorrecte",
  de: "Falsche Menge",
  nl: "Onjuiste hoeveelheid",
  zh: "剪切量错误",
};
const LABEL_INCORRECT_DEPTH: Bilingual = {
  en: "Incorrect Depth",
  es: "Profundidad incorrecta",
  fr: "Profondeur incorrecte",
  de: "Falsche Tiefe",
  nl: "Onjuiste diepte",
  zh: "深度错误",
};

export const earMarkExamples: EarMarkExample[] = [
  { id: "mark-correct", type: "mark", status: "correct", label: LABEL_CORRECT, image: img("mark-correct") },
  { id: "mark-angle-1", type: "mark", status: "incorrect-angle", label: LABEL_INCORRECT_ANGLE, image: img("mark-incorrect-angle-1") },
  { id: "mark-angle-2", type: "mark", status: "incorrect-angle", label: LABEL_INCORRECT_ANGLE, image: img("mark-incorrect-angle-2") },
  { id: "mark-amount-1", type: "mark", status: "incorrect-amount", label: LABEL_INCORRECT_AMOUNT, image: img("mark-incorrect-amount-1") },
  { id: "mark-amount-2", type: "mark", status: "incorrect-amount", label: LABEL_INCORRECT_AMOUNT, image: img("mark-incorrect-amount-2") },
];

export const earSliceExamples: EarMarkExample[] = [
  { id: "slice-correct", type: "slice", status: "correct", label: LABEL_CORRECT, image: img("slice-correct") },
  { id: "slice-angle-1", type: "slice", status: "incorrect-angle", label: LABEL_INCORRECT_ANGLE, image: img("slice-incorrect-angle-1") },
  { id: "slice-angle-2", type: "slice", status: "incorrect-angle", label: LABEL_INCORRECT_ANGLE, image: img("slice-incorrect-angle-2") },
  { id: "slice-depth-1", type: "slice", status: "incorrect-depth", label: LABEL_INCORRECT_DEPTH, image: img("slice-incorrect-depth-1") },
  { id: "slice-depth-2", type: "slice", status: "incorrect-depth", label: LABEL_INCORRECT_DEPTH, image: img("slice-incorrect-depth-2") },
];
