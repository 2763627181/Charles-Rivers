import type { Bilingual } from "@/types/common";
import type { ReferenceScreen } from "@/types/reference";

// Full screenshots of the original Charles River guide, split from the source
// images into individual screens. Kept for cross-checking against the redesign.
const img = (name: string) => `/images/reference/legacy/${name}.jpg`;

const TITLES: Record<string, Bilingual> = {
  home: { en: "Home screen", es: "Pantalla de inicio", fr: "Écran d'accueil", de: "Startbildschirm", nl: "Startscherm", zh: "主页" },
  guideOverview: { en: "Guide overview", es: "Resumen de la guía", fr: "Aperçu du guide", de: "Leitfadenübersicht", nl: "Gidsoverzicht", zh: "指南概览" },
  agingMouse: {
    en: "Mouse pup age chart",
    es: "Tabla de edad de crías de ratón",
    fr: "Tableau d'âge des souriceaux",
    de: "Alterstabelle für Mäusejunge",
    nl: "Leeftijdstabel muizenjongen",
    zh: "小鼠幼崽日龄表",
  },
  agingRat: {
    en: "Rat pup age chart",
    es: "Tabla de edad de crías de rata",
    fr: "Tableau d'âge des ratons",
    de: "Alterstabelle für Rattenjunge",
    nl: "Leeftijdstabel rattenjongen",
    zh: "大鼠幼崽日龄表",
  },
  coatColors: { en: "Coat colors", es: "Colores de pelaje", fr: "Couleurs de pelage", de: "Fellfarben", nl: "Vachtkleuren", zh: "毛色" },
  earId: {
    en: "Ear ID system",
    es: "Sistema de identificación por oreja",
    fr: "Système d'identification par oreille",
    de: "Ohr-Identifikationssystem",
    nl: "Oor-identificatiesysteem",
    zh: "耳标识别系统",
  },
  healthHeadBody: {
    en: "Health — Head/Body",
    es: "Salud — Cabeza/Cuerpo",
    fr: "Santé — Tête/Corps",
    de: "Gesundheit — Kopf/Körper",
    nl: "Gezondheid — Hoofd/Lichaam",
    zh: "健康——头部/躯体",
  },
  healthEyes: { en: "Health — Eyes", es: "Salud — Ojos", fr: "Santé — Yeux", de: "Gesundheit — Augen", nl: "Gezondheid — Ogen", zh: "健康——眼部" },
  healthRepro: {
    en: "Health — Repro/Digest",
    es: "Salud — Repro/Digestivo",
    fr: "Santé — Repro/Digestif",
    de: "Gesundheit — Fortpflanzung/Verdauung",
    nl: "Gezondheid — Voortplanting/Vertering",
    zh: "健康——生殖/消化",
  },
  healthNeuro: {
    en: "Health — Neurological",
    es: "Salud — Neurológico",
    fr: "Santé — Neurologique",
    de: "Gesundheit — Neurologisch",
    nl: "Gezondheid — Neurologisch",
    zh: "健康——神经系统",
  },
  healthEmergency: {
    en: "Health — Emergency",
    es: "Salud — Emergencia",
    fr: "Santé — Urgence",
    de: "Gesundheit — Notfall",
    nl: "Gezondheid — Noodgeval",
    zh: "健康——紧急情况",
  },
  handbookCover: {
    en: "Handbook cover",
    es: "Portada del manual",
    fr: "Couverture du manuel",
    de: "Handbuch-Titelseite",
    nl: "Handboekomslag",
    zh: "手册封面",
  },
  sexingSelector: {
    en: "Sexing — species selector",
    es: "Sexado — selector de especie",
    fr: "Sexage — sélecteur d'espèce",
    de: "Geschlechtsbestimmung — Artenauswahl",
    nl: "Geslachtsbepaling — soortselector",
    zh: "性别鉴定——物种选择",
  },
  sexingDetail: {
    en: "Sexing — mouse detail",
    es: "Sexado — detalle de ratón",
    fr: "Sexage — détail souris",
    de: "Geschlechtsbestimmung — Mausdetail",
    nl: "Geslachtsbepaling — muisdetail",
    zh: "性别鉴定——小鼠详情",
  },
};

function screen(id: string, lang: "en" | "es", image: string, titleKey: string): ReferenceScreen {
  return { id, lang, image: img(image), title: TITLES[titleKey] };
}

export const referenceScreens: ReferenceScreen[] = [
  screen("home-hero-en", "en", "home-hero-en", "home"),
  screen("guide-overview-en", "en", "guide-overview-en", "guideOverview"),
  screen("aging-mouse-chart-en", "en", "aging-mouse-chart-en", "agingMouse"),
  screen("aging-rat-chart-en", "en", "aging-rat-chart-en", "agingRat"),
  screen("coat-colors-grid-en", "en", "coat-colors-grid-en", "coatColors"),
  screen("ear-id-system-en", "en", "ear-id-system-en", "earId"),
  screen("health-head-body-en", "en", "health-head-body-en", "healthHeadBody"),
  screen("health-eyes-en", "en", "health-eyes-en", "healthEyes"),
  screen("health-repro-digest-en", "en", "health-repro-digest-en", "healthRepro"),
  screen("health-neurological-en", "en", "health-neurological-en", "healthNeuro"),
  screen("health-emergency-en", "en", "health-emergency-en", "healthEmergency"),
  screen("handbook-cover-en", "en", "handbook-cover-en", "handbookCover"),
  screen("sexing-selector-en", "en", "sexing-selector-en", "sexingSelector"),
  screen("sexing-mouse-detail-en", "en", "sexing-mouse-detail-en", "sexingDetail"),

  screen("guide-overview-es", "es", "guide-overview-es", "guideOverview"),
  screen("aging-mouse-chart-es", "es", "aging-mouse-chart-es", "agingMouse"),
  screen("aging-rat-chart-es", "es", "aging-rat-chart-es", "agingRat"),
  screen("coat-colors-grid-es", "es", "coat-colors-grid-es", "coatColors"),
  screen("ear-id-system-es", "es", "ear-id-system-es", "earId"),
  screen("health-head-body-es", "es", "health-head-body-es", "healthHeadBody"),
  screen("health-eyes-es", "es", "health-eyes-es", "healthEyes"),
  screen("health-repro-digest-es", "es", "health-repro-digest-es", "healthRepro"),
  screen("health-neurological-es", "es", "health-neurological-es", "healthNeuro"),
  screen("health-emergency-es", "es", "health-emergency-es", "healthEmergency"),
  screen("handbook-cover-es", "es", "handbook-cover-es", "handbookCover"),
  screen("sexing-selector-es", "es", "sexing-selector-es", "sexingSelector"),
  screen("sexing-mouse-detail-es", "es", "sexing-mouse-detail-es", "sexingDetail"),
];
