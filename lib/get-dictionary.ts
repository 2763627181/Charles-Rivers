import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";
import { en } from "@/messages/en";
import { es } from "@/messages/es";
import { pt } from "@/messages/pt";
import { fr } from "@/messages/fr";
import { it } from "@/messages/it";
import { zh } from "@/messages/zh";

const dictionaries: Record<Locale, Dictionary> = { en, es, pt, fr, it, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
