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
      pt: "Sexagem de camundongos aos 21 dias de idade — macho (esquerda) e fêmea (direita), vista perineal. (Constantinescu, G. Medical Illustrations. AALAS.)",
      fr: "Détermination du sexe chez la souris, 21 jours — mâle (gauche) et femelle (droite), vue périnéale. (Constantinescu, G. Medical Illustrations. AALAS.)",
      it: "Sessaggio dei topi a 21 giorni di età — maschio (sinistra) e femmina (destra), vista perineale. (Constantinescu, G. Medical Illustrations. AALAS.)",
      zh: "小鼠性别鉴定，21日龄——雄性（左）和雌性（右），会阴视图。（Constantinescu, G. Medical Illustrations. AALAS.）",
    },
  },
  {
    id: "mouse-pair-photo",
    species: "mouse",
    sex: "both",
    image: img("mouse-pair-photo"),
    caption: {
      en: "Male and female mice, side by side.",
      es: "Ratones macho y hembra, lado a lado.",
      pt: "Camundongos macho e fêmea, lado a lado.",
      fr: "Souris mâle et femelle, côte à côte.",
      it: "Topi maschio e femmina, fianco a fianco.",
      zh: "雄性和雌性小鼠并排对比。",
    },
  },
  {
    id: "mouse-male-closeup",
    species: "mouse",
    sex: "male",
    image: img("mouse-male-closeup"),
    caption: { en: "Male", es: "Macho", pt: "Macho", fr: "Mâle", it: "Maschio", zh: "雄性" },
  },
  {
    id: "mouse-female-closeup",
    species: "mouse",
    sex: "female",
    image: img("mouse-female-closeup"),
    caption: { en: "Female", es: "Hembra", pt: "Fêmea", fr: "Femelle", it: "Femmina", zh: "雌性" },
  },
];
