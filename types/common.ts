/**
 * Localized string across every supported language. Named `Bilingual` for
 * historical reasons (the app started English/Spanish only); it now covers
 * every locale in lib/i18n.ts.
 */
export interface Bilingual {
  en: string;
  es: string;
  pt: string;
  fr: string;
  it: string;
  zh: string;
}

export type Species = "mouse" | "rat";
