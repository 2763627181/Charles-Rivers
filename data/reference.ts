import type { Bilingual } from "@/types/common";
import type { ReferenceScreen } from "@/types/reference";

// Full screenshots of the original Charles River guide, split from the source
// images into individual screens. Kept for cross-checking against the redesign.
const img = (name: string) => `/images/reference/legacy/${name}.jpg`;

const TITLES: Record<string, Bilingual> = {
  home: { en: "Home screen", es: "Pantalla de inicio", pt: "Tela inicial", fr: "Écran d'accueil", it: "Schermata iniziale", zh: "主页" },
  guideOverview: {
    en: "Guide overview",
    es: "Resumen de la guía",
    pt: "Visão geral do guia",
    fr: "Aperçu du guide",
    it: "Panoramica della guida",
    zh: "指南概览",
  },
  agingMouse: {
    en: "Mouse pup age chart",
    es: "Tabla de edad de crías de ratón",
    pt: "Tabela de idade de crias de camundongo",
    fr: "Tableau d'âge des souriceaux",
    it: "Tabella dell'età dei topolini",
    zh: "小鼠幼崽日龄表",
  },
  agingRat: {
    en: "Rat pup age chart",
    es: "Tabla de edad de crías de rata",
    pt: "Tabela de idade de crias de rato",
    fr: "Tableau d'âge des ratons",
    it: "Tabella dell'età dei rattini",
    zh: "大鼠幼崽日龄表",
  },
  coatColors: { en: "Coat colors", es: "Colores de pelaje", pt: "Cores de pelagem", fr: "Couleurs de pelage", it: "Colori del mantello", zh: "毛色" },
  earId: {
    en: "Ear ID system",
    es: "Sistema de identificación por oreja",
    pt: "Sistema de identificação por orelha",
    fr: "Système d'identification par oreille",
    it: "Sistema di identificazione per orecchio",
    zh: "耳标识别系统",
  },
  healthHeadBody: {
    en: "Health — Head/Body",
    es: "Salud — Cabeza/Cuerpo",
    pt: "Saúde — Cabeça/Corpo",
    fr: "Santé — Tête/Corps",
    it: "Salute — Testa/Corpo",
    zh: "健康——头部/躯体",
  },
  healthEyes: { en: "Health — Eyes", es: "Salud — Ojos", pt: "Saúde — Olhos", fr: "Santé — Yeux", it: "Salute — Occhi", zh: "健康——眼部" },
  healthRepro: {
    en: "Health — Repro/Digest",
    es: "Salud — Repro/Digestivo",
    pt: "Saúde — Reprodutivo/Digestivo",
    fr: "Santé — Repro/Digestif",
    it: "Salute — Riproduttivo/Digestivo",
    zh: "健康——生殖/消化",
  },
  healthNeuro: {
    en: "Health — Neurological",
    es: "Salud — Neurológico",
    pt: "Saúde — Neurológico",
    fr: "Santé — Neurologique",
    it: "Salute — Neurologico",
    zh: "健康——神经系统",
  },
  healthEmergency: {
    en: "Health — Emergency",
    es: "Salud — Emergencia",
    pt: "Saúde — Emergência",
    fr: "Santé — Urgence",
    it: "Salute — Emergenza",
    zh: "健康——紧急情况",
  },
  handbookCover: {
    en: "Handbook cover",
    es: "Portada del manual",
    pt: "Capa do manual",
    fr: "Couverture du manuel",
    it: "Copertina del manuale",
    zh: "手册封面",
  },
  sexingSelector: {
    en: "Sexing — species selector",
    es: "Sexado — selector de especie",
    pt: "Sexagem — seletor de espécie",
    fr: "Sexage — sélecteur d'espèce",
    it: "Sessaggio — selettore specie",
    zh: "性别鉴定——物种选择",
  },
  sexingDetail: {
    en: "Sexing — mouse detail",
    es: "Sexado — detalle de ratón",
    pt: "Sexagem — detalhe do camundongo",
    fr: "Sexage — détail souris",
    it: "Sessaggio — dettaglio topo",
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
