/**
 * Localized string across every supported language. Named `Bilingual` for
 * historical reasons (the app started English/Spanish only); it now covers
 * every locale in lib/i18n.ts.
 */
export interface Bilingual {
  en: string;
  es: string;
  fr: string;
  de: string;
  nl: string;
  zh: string;
}

export type Species = "mouse" | "rat";
