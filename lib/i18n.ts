// Locales reflect countries where Charles River operates significant sites/communities:
// en - US, UK, Canada · es - Spain · fr - France, Quebec (Canada), Belgium
// de - Germany · nl - Netherlands, Belgium · zh - China
export const locales = ["en", "es", "fr", "de", "nl", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookieName = "cr_locale";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  zh: "中文",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Swap the leading /en|/es segment of a path, preserving the rest of the path. */
export function localizePath(path: string, locale: Locale): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return "/" + segments.join("/");
}
