import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";
import { en } from "@/messages/en";
import { es } from "@/messages/es";
import { fr } from "@/messages/fr";
import { de } from "@/messages/de";
import { nl } from "@/messages/nl";
import { zh } from "@/messages/zh";

const dictionaries: Record<Locale, Dictionary> = { en, es, fr, de, nl, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
