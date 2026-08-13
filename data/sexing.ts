import type { SexingExample } from "@/types/sexing";

// Source: Charles River "Laboratory Mouse Identification & Reference Guide", Sexing tab.
const img = (name: string) => `/images/reference/sexing/${name}.jpg`;

export const mouseSexingExamples: SexingExample[] = [
  {
    id: "mouse-diagram",
    species: "mouse",
    sex: "both",
    image: img("mouse-diagram"),
    caption: {
      en: "Sexing Mice, 21 days of age — male (left) and female (right), perineal view. (Constantinescu, G. Medical Illustrations. AALAS.)",
      es: "Determinación del sexo en ratones de 21 días de edad — macho (izquierda) y hembra (derecha), vista perineal. (Constantinescu, G. Medical Illustrations. AALAS.)",
      fr: "Détermination du sexe chez la souris, 21 jours — mâle (gauche) et femelle (droite), vue périnéale. (Constantinescu, G. Medical Illustrations. AALAS.)",
      de: "Geschlechtsbestimmung bei Mäusen im Alter von 21 Tagen — Männchen (links) und Weibchen (rechts), perineale Ansicht. (Constantinescu, G. Medical Illustrations. AALAS.)",
      nl: "Geslachtsbepaling bij muizen van 21 dagen oud — mannetje (links) en vrouwtje (rechts), perineaal aanzicht. (Constantinescu, G. Medical Illustrations. AALAS.)",
      zh: "小鼠性别鉴定，21日龄——雄性（左）和雌性（右），会阴视图。（Constantinescu, G. Medical Illustrations. AALAS.）",
    },
  },
  {
    id: "mouse-pair-photo",
    species: "mouse",
    sex: "both",
    image: img("mouse-pair-photo"),
    caption: {
      en: "Male and female pups, side by side.",
      es: "Crías macho y hembra, lado a lado.",
      fr: "Petits mâle et femelle, côte à côte.",
      de: "Männliche und weibliche Jungtiere, nebeneinander.",
      nl: "Mannelijke en vrouwelijke jongen, naast elkaar.",
      zh: "雄性和雌性幼崽并排对比。",
    },
  },
  {
    id: "mouse-male-closeup",
    species: "mouse",
    sex: "male",
    image: img("mouse-male-closeup"),
    caption: { en: "Male", es: "Macho", fr: "Mâle", de: "Männlich", nl: "Mannelijk", zh: "雄性" },
  },
  {
    id: "mouse-female-closeup",
    species: "mouse",
    sex: "female",
    image: img("mouse-female-closeup"),
    caption: { en: "Female", es: "Hembra", fr: "Femelle", de: "Weiblich", nl: "Vrouwelijk", zh: "雌性" },
  },
];

// No rat sexing photographs were included in the original reference material.
export const ratSexingExamples: SexingExample[] = [];

export function getSexingExamples(species: "mouse" | "rat"): SexingExample[] {
  return species === "mouse" ? mouseSexingExamples : ratSexingExamples;
}
