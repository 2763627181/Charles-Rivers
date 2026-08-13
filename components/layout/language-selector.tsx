"use client";

import { usePathname, useRouter } from "next/navigation";
import { Check, Languages } from "lucide-react";
import { locales, localeCookieName, localeNames, localizePath, type Locale } from "@/lib/i18n";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function LanguageSelector({ variant = "default" }: { variant?: "default" | "compact" }) {
  const locale = useLocale();
  const dictionary = useDictionary();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    setLocaleCookie(next);
    router.push(localizePath(pathname, next));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-border bg-white text-sm font-medium text-foreground hover:border-medium-blue hover:text-corporate-blue"
          aria-label={dictionary.language.select}
        >
          <Languages className="size-4" aria-hidden="true" />
          <span className={cn(variant === "compact" && "sr-only")}>{localeNames[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
          {dictionary.language.chooseLanguage}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => switchTo(code)}
            className={cn("justify-between", locale === code && "font-semibold text-corporate-blue")}
          >
            {localeNames[code]}
            {locale === code && <Check className="size-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
