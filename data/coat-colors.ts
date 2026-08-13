import type { CoatColor } from "@/types/coat-colors";

// Source: Charles River "Laboratory Mouse Identification & Reference Guide", Coat Colors tab.
const img = (name: string) => `/images/reference/coat-colors/${name}.jpg`;

export const coatColors: CoatColor[] = [
  { id: "black", name: "Black", species: ["mouse", "rat"], image: img("black") },
  {
    id: "agouti",
    name: "Agouti",
    species: ["mouse", "rat"],
    note: { en: "Many colors", es: "Varios colores", fr: "Plusieurs couleurs", de: "Viele Farben", nl: "Veel kleuren", zh: "多种颜色" },
    image: img("agouti"),
  },
  { id: "nude", name: "Nude", species: ["mouse", "rat"], image: img("nude") },
  { id: "chimera", name: "Chimera", species: ["mouse", "rat"], image: img("chimera") },
  { id: "grey", name: "Grey", species: ["mouse", "rat"], image: img("grey") },
  {
    id: "albino",
    name: "Albino",
    species: ["mouse", "rat"],
    note: { en: "Red eyes", es: "Ojos rojos", fr: "Yeux rouges", de: "Rote Augen", nl: "Rode ogen", zh: "红眼" },
    image: img("albino"),
  },
  {
    id: "hooded",
    name: "Hooded",
    species: ["rat"],
    note: { en: "Rats only", es: "Solo ratas", fr: "Rats uniquement", de: "Nur Ratten", nl: "Alleen ratten", zh: "仅大鼠" },
    image: img("hooded"),
  },
  {
    id: "white",
    name: "White",
    species: ["mouse", "rat"],
    note: { en: "Black eyes", es: "Ojos negros", fr: "Yeux noirs", de: "Schwarze Augen", nl: "Zwarte ogen", zh: "黑眼" },
    image: img("white"),
  },
  {
    id: "fawn",
    name: "Fawn",
    species: ["mouse", "rat"],
    note: {
      en: "Blond; red eyes",
      es: "Rubio; ojos rojos",
      fr: "Blond ; yeux rouges",
      de: "Blond; rote Augen",
      nl: "Blond; rode ogen",
      zh: "浅黄色；红眼",
    },
    image: img("fawn"),
  },
  {
    id: "brown",
    name: "Brown",
    species: ["mouse", "rat"],
    note: { en: "Only brown", es: "Solo marrón", fr: "Marron uniquement", de: "Nur braun", nl: "Alleen bruin", zh: "仅棕色" },
    image: img("brown"),
  },
];
