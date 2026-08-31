import type { Bilingual } from "@/types/common";
import type { AgingStage } from "@/types/aging";

// Source: Charles River "Laboratory Mouse Identification & Reference Guide",
// Aging Mouse/Rat Pups tabs (Mouse Pup Age Chart / Rat pup aging chart).

const mouseImg = (day: number) => `/images/reference/aging/mouse/day-${String(day).padStart(2, "0")}.jpg`;
const ratImg = (day: number) => `/images/reference/aging/rat/day-${String(day).padStart(2, "0")}.jpg`;

const dayLabel = (n: number): Bilingual => ({
  en: `Day ${n}`,
  es: `Día ${n}`,
  pt: `Dia ${n}`,
  fr: `Jour ${n}`,
  it: `Giorno ${n}`,
  zh: `第${n}天`,
});

// Shared description phrases (identical meaning across mouse/rat rows, worded
// consistently across languages even where the English source used a slightly
// different abbreviation, e.g. "approx." vs "approximately").
const DESC = {
  bloodRed: {
    en: "Blood-red skin color.",
    es: "Piel de color rojo intenso.",
    pt: "Cor da pele vermelho-sangue.",
    fr: "Peau rouge sang.",
    it: "Colore della pelle rosso sangue.",
    zh: "皮肤呈血红色。",
  } as Bilingual,
  lighterRedMilk: {
    en: "Lighter red skin color; milk visible in stomach.",
    es: "Piel rojo más claro; leche visible en el estómago.",
    pt: "Cor da pele vermelho mais claro; leite visível no estômago.",
    fr: "Couleur de peau rouge plus clair ; lait visible dans l'estomac.",
    it: "Colore della pelle rosso più chiaro; latte visibile nello stomaco.",
    zh: "皮肤呈较浅的红色；胃中可见乳汁。",
  } as Bilingual,
  lighterEarsFlat: {
    en: "Lighter skin color; ears flat against head.",
    es: "Piel más clara; orejas planas contra la cabeza.",
    pt: "Cor da pele mais clara; orelhas rentes à cabeça.",
    fr: "Couleur de peau plus claire ; oreilles plaquées contre la tête.",
    it: "Colore della pelle più chiaro; orecchie appiattite contro la testa.",
    zh: "皮肤颜色变浅；耳朵紧贴头部。",
  } as Bilingual,
  ears45: {
    en: "Ears elevated approximately 45° away from head.",
    es: "Orejas elevadas aproximadamente 45° separadas de la cabeza.",
    pt: "Orelhas elevadas a aproximadamente 45° da cabeça.",
    fr: "Oreilles surélevées à environ 45° de la tête.",
    it: "Orecchie sollevate a circa 45° dalla testa.",
    zh: "耳朵与头部约呈45°角竖起。",
  } as Bilingual,
  ears90: {
    en: "Ears elevated approximately 90° away from head.",
    es: "Orejas elevadas aproximadamente 90° separadas de la cabeza.",
    pt: "Orelhas elevadas a aproximadamente 90° da cabeça.",
    fr: "Oreilles surélevées à environ 90° de la tête.",
    it: "Orecchie sollevate a circa 90° dalla testa.",
    zh: "耳朵与头部约呈90°角竖起。",
  } as Bilingual,
  thickerNoMilk: {
    en: "Skin thicker; milk no longer visible in stomach.",
    es: "Piel más gruesa; la leche ya no es visible en el estómago.",
    pt: "Pele mais espessa; leite não é mais visível no estômago.",
    fr: "Peau plus épaisse ; le lait n'est plus visible dans l'estomac.",
    it: "Pelle più spessa; il latte non è più visibile nello stomaco.",
    zh: "皮肤变厚；胃中不再可见乳汁。",
  } as Bilingual,
  furStubble: {
    en: "Fur starts as fine stubble over back.",
    es: "El pelaje comienza como una fina capa sobre el lomo.",
    pt: "Pelagem começa como uma leve penugem sobre o dorso.",
    fr: "Le pelage commence à apparaître comme un fin duvet sur le dos.",
    it: "Il pelo inizia come una leggera peluria sul dorso.",
    zh: "背部开始出现细小绒毛。",
  } as Bilingual,
  fullFuzzyCoat: {
    en: "Complete coat of fine fuzzy fur visible.",
    es: "Capa completa de pelaje fino y suave visible.",
    pt: "Pelagem completa, fina e fofa, visível.",
    fr: "Pelage complet, fin et duveteux, visible.",
    it: "Mantello completo, fine e soffice, visibile.",
    zh: "全身可见细软绒毛被覆。",
  } as Bilingual,
  lowerIncisorsVisible: {
    en: "Lower incisors visible but not erupted.",
    es: "Incisivos inferiores visibles pero no erupcionados.",
    pt: "Incisivos inferiores visíveis, mas ainda não irrompidos.",
    fr: "Incisives inférieures visibles mais non sorties.",
    it: "Incisivi inferiori visibili ma non ancora erotti.",
    zh: "下门齿可见但尚未萌出。",
  } as Bilingual,
  inguinalNipples: {
    en: "Inguinal nipples visible in females.",
    es: "Pezones inguinales visibles en hembras.",
    pt: "Mamilos inguinais visíveis nas fêmeas.",
    fr: "Mamelons inguinaux visibles chez les femelles.",
    it: "Capezzoli inguinali visibili nelle femmine.",
    zh: "雌性可见腹股沟乳头。",
  } as Bilingual,
  lowerIncisorsErupted: {
    en: "Lower incisors erupted.",
    es: "Incisivos inferiores erupcionados.",
    pt: "Incisivos inferiores irrompidos.",
    fr: "Incisives inférieures sorties.",
    it: "Incisivi inferiori erotti.",
    zh: "下门齿已萌出。",
  } as Bilingual,
  upperIncisorsErupted: {
    en: "Upper incisors erupted.",
    es: "Incisivos superiores erupcionados.",
    pt: "Incisivos superiores irrompidos.",
    fr: "Incisives supérieures sorties.",
    it: "Incisivi superiori erotti.",
    zh: "上门齿已萌出。",
  } as Bilingual,
  eyesClosedFurred: {
    en: "Eyes still closed; body fully furred and increasingly mobile.",
    es: "Ojos aún cerrados; cuerpo completamente cubierto de pelaje y cada vez más móvil.",
    pt: "Olhos ainda fechados; corpo totalmente coberto de pelagem e cada vez mais móvel.",
    fr: "Yeux encore fermés ; corps entièrement recouvert de pelage et de plus en plus mobile.",
    it: "Occhi ancora chiusi; corpo completamente ricoperto di pelo e sempre più mobile.",
    zh: "眼睛仍闭合；身体被毛已长全，活动能力逐渐增强。",
  } as Bilingual,
  eyelidsOpenSlit: {
    en: "Eyelids open; slit-like palpebral opening.",
    es: "Párpados abiertos; abertura palpebral en forma de hendidura.",
    pt: "Pálpebras abertas; abertura palpebral em forma de fenda.",
    fr: "Paupières ouvertes ; ouverture palpébrale en forme de fente.",
    it: "Palpebre aperte; apertura palpebrale a fessura.",
    zh: "眼睑张开；呈裂隙状睑裂。",
  } as Bilingual,
  eyesFullyOpen: {
    en: "Eyes fully open; pups become active and begin exploring outside the nest.",
    es: "Ojos completamente abiertos; las crías se vuelven activas y comienzan a explorar fuera del nido.",
    pt: "Olhos completamente abertos; as crias ficam ativas e começam a explorar fora do ninho.",
    fr: "Yeux complètement ouverts ; les petits deviennent actifs et commencent à explorer hors du nid.",
    it: "Occhi completamente aperti; i cuccioli diventano attivi e iniziano a esplorare fuori dal nido.",
    zh: "眼睛完全睁开；幼崽变得活跃，开始在巢外探索。",
  } as Bilingual,
};

export const mouseAging: AgingStage[] = [
  { id: "mouse-day-01", species: "mouse", order: 1, day: 1, label: dayLabel(1), description: DESC.lighterRedMilk, image: mouseImg(1) },
  { id: "mouse-day-02", species: "mouse", order: 2, day: 2, label: dayLabel(2), description: DESC.lighterEarsFlat, image: mouseImg(2) },
  { id: "mouse-day-03", species: "mouse", order: 3, day: 3, label: dayLabel(3), description: DESC.ears45, image: mouseImg(3) },
  { id: "mouse-day-04", species: "mouse", order: 4, day: 4, label: dayLabel(4), description: DESC.ears90, image: mouseImg(4) },
  { id: "mouse-day-05", species: "mouse", order: 5, day: 5, label: dayLabel(5), description: DESC.thickerNoMilk, image: mouseImg(5) },
  { id: "mouse-day-06", species: "mouse", order: 6, day: 6, label: dayLabel(6), description: DESC.furStubble, image: mouseImg(6) },
  { id: "mouse-day-07", species: "mouse", order: 7, day: 7, label: dayLabel(7), description: DESC.fullFuzzyCoat, image: mouseImg(7) },
  { id: "mouse-day-08", species: "mouse", order: 8, day: 8, label: dayLabel(8), description: DESC.lowerIncisorsVisible, image: mouseImg(8) },
  { id: "mouse-day-09", species: "mouse", order: 9, day: 9, label: dayLabel(9), description: DESC.inguinalNipples, image: mouseImg(9) },
  { id: "mouse-day-10", species: "mouse", order: 10, day: 10, label: dayLabel(10), description: DESC.lowerIncisorsErupted, image: mouseImg(10) },
  { id: "mouse-day-11", species: "mouse", order: 11, day: 11, label: dayLabel(11), description: DESC.upperIncisorsErupted, image: mouseImg(11) },
  { id: "mouse-day-12", species: "mouse", order: 12, day: 12, label: dayLabel(12), description: DESC.eyesClosedFurred, image: mouseImg(12) },
  { id: "mouse-day-13", species: "mouse", order: 13, day: 13, label: dayLabel(13), description: DESC.eyelidsOpenSlit, image: mouseImg(13) },
  { id: "mouse-day-14", species: "mouse", order: 14, day: 14, label: dayLabel(14), description: DESC.eyesFullyOpen, image: mouseImg(14) },
];

export const ratAging: AgingStage[] = [
  { id: "rat-day-01", species: "rat", order: 1, day: 1, label: dayLabel(1), description: DESC.bloodRed, image: ratImg(1) },
  { id: "rat-day-02", species: "rat", order: 2, day: 2, label: dayLabel(2), description: DESC.lighterRedMilk, image: ratImg(2) },
  { id: "rat-day-03", species: "rat", order: 3, day: 3, label: dayLabel(3), description: DESC.lighterEarsFlat, image: ratImg(3) },
  { id: "rat-day-04", species: "rat", order: 4, day: 4, label: dayLabel(4), description: DESC.ears45, image: ratImg(4) },
  { id: "rat-day-05", species: "rat", order: 5, day: 5, label: dayLabel(5), description: DESC.ears90, image: ratImg(5) },
  { id: "rat-day-06", species: "rat", order: 6, day: 6, label: dayLabel(6), description: DESC.thickerNoMilk, image: ratImg(6) },
  { id: "rat-day-07", species: "rat", order: 7, day: 7, label: dayLabel(7), description: DESC.fullFuzzyCoat, image: ratImg(7) },
  { id: "rat-day-08", species: "rat", order: 8, day: 8, label: dayLabel(8), description: DESC.lowerIncisorsVisible, image: ratImg(8) },
  { id: "rat-day-09", species: "rat", order: 9, day: 9, label: dayLabel(9), description: DESC.inguinalNipples, image: ratImg(9) },
  { id: "rat-day-10", species: "rat", order: 10, day: 10, label: dayLabel(10), description: DESC.lowerIncisorsErupted, image: ratImg(10) },
  { id: "rat-day-11", species: "rat", order: 11, day: 11, label: dayLabel(11), description: DESC.upperIncisorsErupted, image: ratImg(11) },
  { id: "rat-day-12", species: "rat", order: 12, day: 12, label: dayLabel(12), description: DESC.eyesClosedFurred, image: ratImg(12) },
  { id: "rat-day-13", species: "rat", order: 13, day: 13, label: dayLabel(13), description: DESC.eyelidsOpenSlit, image: ratImg(13) },
  { id: "rat-day-14", species: "rat", order: 14, day: 14, label: dayLabel(14), description: DESC.eyesFullyOpen, image: ratImg(14) },
];

export function getAgingStages(species: "mouse" | "rat"): AgingStage[] {
  return species === "mouse" ? mouseAging : ratAging;
}
