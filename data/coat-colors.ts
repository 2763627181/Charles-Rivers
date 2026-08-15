import type { CoatColor } from "@/types/coat-colors";

// Source: Charles River "Laboratory Mouse Identification & Reference Guide", Coat Colors tab.
const img = (name: string) => `/images/reference/coat-colors/${name}.jpg`;

export const coatColors: CoatColor[] = [
  { id: "black", name: "Black", species: ["mouse", "rat"], image: img("black") },
  {
    id: "agouti",
    name: "Agouti",
    species: ["mouse", "rat"],
    note: { en: "Many colors", es: "Varios colores", pt: "Várias cores", fr: "Plusieurs couleurs", it: "Molti colori", zh: "多种颜色" },
    image: img("agouti"),
  },
  { id: "nude", name: "Nude", species: ["mouse", "rat"], image: img("nude") },
  { id: "chimera", name: "Chimera", species: ["mouse", "rat"], image: img("chimera") },
  { id: "grey", name: "Grey", species: ["mouse", "rat"], image: img("grey") },
  {
    id: "albino",
    name: "Albino",
    species: ["mouse", "rat"],
    note: { en: "Red eyes", es: "Ojos rojos", pt: "Olhos vermelhos", fr: "Yeux rouges", it: "Occhi rossi", zh: "红眼" },
    image: img("albino"),
  },
  {
    id: "hooded",
    name: "Hooded",
    species: ["rat"],
    note: { en: "Rats only", es: "Solo ratas", pt: "Apenas ratos", fr: "Rats uniquement", it: "Solo ratti", zh: "仅大鼠" },
    image: img("hooded"),
  },
  {
    id: "white",
    name: "White",
    species: ["mouse", "rat"],
    note: { en: "Black eyes", es: "Ojos negros", pt: "Olhos pretos", fr: "Yeux noirs", it: "Occhi neri", zh: "黑眼" },
    image: img("white"),
  },
  {
    id: "fawn",
    name: "Fawn",
    species: ["mouse", "rat"],
    note: {
      en: "Blond; red eyes",
      es: "Rubio; ojos rojos",
      pt: "Loiro; olhos vermelhos",
      fr: "Blond ; yeux rouges",
      it: "Biondo; occhi rossi",
      zh: "浅黄色；红眼",
    },
    image: img("fawn"),
  },
  {
    id: "brown",
    name: "Brown",
    species: ["mouse", "rat"],
    note: { en: "Only brown", es: "Solo marrón", pt: "Apenas castanho", fr: "Marron uniquement", it: "Solo marrone", zh: "仅棕色" },
    image: img("brown"),
  },
];
